<style lang='sass'>
  @import '../../css/global.scss';

  .home-box {
    @include contain('../../images/home.jpg');
    position: relative;
    color: #FFF;
    .rule-link,
    .chance,
    .mode-lable,
    .mode-name,
    .mode-icon,
    .game-link,
    .how-get
    {
      position: absolute;
    }
    .chance{
      width: 100%;
      text-align: center;
      span{
        color: #FD0;
        font-weight: bold;
        vertical-align: top;
      }
    }
    .mode-icon.small{
      @include contain("../../images/small.png");
    }
    .mode-icon.mid{
      @include contain("../../images/mid.png");
    }
    .mode-icon.big{
      @include contain("../../images/big.png");
    }
    .mode-icon.storm{
      @include contain("../../images/storm.png");
    }
  }
</style>
<template>
  <div class="home-box img-size" data-width="750" data-height="1334">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="rule-link img-size" data-top="590" data-left="290" data-width="150" data-height="50" @click="onRule"></div>
    <div class="chance img-size" data-top="828" data-left="0" data-fontSize="30" data-lineHeight="30">当前模式剩余：<span>{{isLogin ? chanceNum : '--'}}</span> 次机会</div>
    <div class="img-size mode-icon" :class="['small', 'mid', 'big', 'storm'][rainMode]" data-top="888" data-left="365" data-width="60" data-height="69"></div>
    <div class="img-size mode-lable" data-top="910" data-left="225" data-fontSize="30" data-lineHeight="30">当前模式：</div>
    <div class="img-size mode-name" data-top="910" data-left="431" data-fontSize="30" data-lineHeight="30">{{modeName}}</div>
    <div class="how-get img-size" data-top="1076" data-left="536" data-width="196" data-height="48" @click="onHowGet"></div>
    <div class="game-link img-size" data-top="990" data-left="110" data-width="310" data-height="70" @click="isLogin ? onGoPlay() : login()"></div>
    <div class="game-link img-size" data-top="990" data-left="436" data-width="194" data-height="70" @click="isLogin ? onPlayTen() : login()"></div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    import {requestService, httpStatus, httpParticipate, httpChance, httpGetSign, httpPlay} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                isAjaxing: false,
                chanceNum: 0,
                rainMode: 0,
                sign: undefined
            };
        },
        components : {
            'lockScreen' : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        computed : {
            modeName(){
                return ['小', '中', '大', '暴'][this.rainMode] + '雨模式';
            }
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            this.isAjaxing = true;
            this.getActivityStatus();
        },
        methods: {
            onRule : function () {
                requirePop("rule", {
                    props : {
                        transition : 'mask',
                        startTime : this.startTime,
                        endTime : this.endTime
                    }
                });
            },
            onHowGet : function () {
                requirePop("howGetChance", {
                    props : {
                        transition : 'fadeIn'
                    }
                });
            },
            getActivityStatus: function () {
                requestService(httpStatus, {}, _data => {
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.status = _data.map.status;
                    this.startTime = _data.map.startTime;
                    this.endTime = _data.map.endTime;
                    let sts = this.status;
                    if (sts != 0) {  //活动未开始
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : sts < 0 ? '敬请期待' : '温馨提示',
                                detail: sts < 0 ? '活动即将开始, 期待您的热情参与!' : '此活动已结束，您可以参加其他活动',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    if (this.isLogin){  //活动进行中或结束
                        this.checkParticipatable();
                    } else {
                        this.isAjaxing = false;
                    }
                });
            },
            checkParticipatable: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpParticipate, params, _data => {
                    const {flag, success, errorMsg} = _data;
                    if (!flag) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '感谢关注！',
                                detail: 'VIP渠道用户不能参加，敬请期待后续活动……',
                                btnBackHome: true
                            }
                        });
                    } else {
                        if (success == false) {
                            this.isAjaxing = false;
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                    btnBackHome: true
                                }
                            });
                            return false;
                        }
                        this.getMyChance();
                    }
                });
            },
            getMyChance: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpChance, params, _data => {
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    const {chance, pattern} = _data.map;
                    this.chanceNum = chance;
                    this.rainMode = pattern - 1;
                    if (this.chanceNum >= 10) {this.getGameSign();}
                    else{this.isAjaxing = false;}
                    this.$nextTick(() => {T.setImgSize();});
                });
            },
            getGameSign : function () {
                const params = {uid : T.uid};
                requestService(httpGetSign, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        requirePop("warning", {
                            props : {
                                transition : "bounceIn",
                                title : "系统提示",
                                detail : errorMsg ? errorMsg : "系统错误，请联系客服。",
                                btnBackHome : true
                            }
                        });
                        return false;
                    }
                    this.sign = _data.map.uuid;
                });
            },
            login: function () {
                if (!T.getQueryString('wap') || T.getQueryString('force') === 'force') {
                    T.login();
                } else {
                    this.__launchApp();
                }
            },
            __launchApp : function () {
                let iphoneSchema = 'duorongcf://';
                let iphoneDownUrl = 'itms-apps://itunes.apple.com/cn/app/duo-rong-li-cai/id1095192150?mt=8';
                let androidSchema = 'duorongcf://';
                let androidDownUrl = 'http://app.duorongcf.com/dr_app.apk';
                if (T.weixin) {
                    requirePop("warning", {
                        props: {
                            transition: 'bounceIn',
                            title: '温馨提示',
                            detail: '请点击右上角选择"在浏览器打开"',
                            btnBackHome: false
                        }
                    });
                } else {
                    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                        var loadDateTime = new Date();
                        window.setTimeout(function() {
                            var timeOutDateTime = new Date();
                            if (timeOutDateTime - loadDateTime < 2200) {
                                window.location.href = iphoneDownUrl;//ios下载地址
                            } else {
                                window.close();
                            }
                        },2000);
                        window.location.href = iphoneSchema;
                    }else if (navigator.userAgent.match(/android/i)) {
                        try {
                            window.location.href = androidSchema;
                            setTimeout(function(){
                                window.location.href = androidDownUrl; //android下载地址
                            },500);
                        } catch(e) {
                            window.location.href = androidDownUrl;
                        }
                    }
                }
            },
            onGoPlay: function () {
                if (this.chanceNum <= 0) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }
//                window.location.replace(window.location.pathname + "#/draw/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                window.location.replace(window.location.pathname + "#/play/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + (this.isFirst ? '&isFirst=true' : ''));
            },
            onPlayTen: function () {
                if (this.chanceNum < 10) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : this.chanceNum > 0 ? 2 : 1
                        }
                    });
                    return;
                }
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                let params = {
                    uid: T.uid,
                    uuid: this.sign,
                    pattern: this.rainMode + 1,
                    isMany: true
                };
                requestService(httpPlay, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn == false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            const {success, errorCode, errorMsg} = _data;
                            if (success == false) {
                                let stCode = {'10009' : 1, '10011' : 2}[errorCode + ''];
                                if (stCode) {
                                    requirePop("notify", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : stCode
                                        },
                                        on : {
                                            "close-only-event" : this.onBack
                                        }
                                    });
                                } else {
                                    requirePop('warning', {
                                        props : {
                                            transition : 'bounceIn',
                                            title : "系统提示",
                                            detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                            btnBackHome : false
                                        }
                                    });
                                }
                                return false;
                            }
                            const {packageNum, prizeName1, prizeName2, pattern, totalchance, uuid} = _data.map;
                            this.chanceNum = totalchance;
                            this.sign = uuid;
                            this.rainMode = pattern - 1;
                            const others = {openQty:packageNum, gift1: prizeName1, gift2: prizeName2};
                            requirePop("showGift", {
                                props : {
                                    transition : "rotate3d",
                                    popState : 1,
                                    ...others
                                },
                                on : {
                                    "go-my-event" : () => {this.$emit("bubble-goMy-event");},
                                    "replay-event" : this.onPlayTen
                                }
                            });
                        }
                    }, 1);
                });
            }
        }
    }
</script>