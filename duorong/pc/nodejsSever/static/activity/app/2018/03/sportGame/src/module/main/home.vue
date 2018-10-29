<style lang='sass'>
  @import '../../css/global.scss';

  .home-box {
    @include contain('../../images/home.jpg');
    position: relative;
    .rule-link,
    .chance,
    .jiazi-game-link,
    .soccer-game-link,
    .how-get
    {
      position: absolute;
    }
    .chance{
      text-align: center;
      color: #050505;
      span{
        color: #ff6400;
        vertical-align: top;
      }
    }
  }
</style>
<template>
  <div class="home-box img-size" data-width="750" data-height="1900">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="rule-link img-size" data-top="20" data-right="10" data-width="168" data-height="50" @click="onRule"></div>
    <div class="chance jianzi img-size" data-top="874" data-left="67" data-width="295" data-fontSize="24" data-lineHeight="24">（<span>{{isLogin ? jianziChance : '--'}}</span> 次机会）</div>
    <div class="how-get jianzi img-size" data-top="940" data-left="268" data-width="215" data-height="41" @click="onHowGet"></div>
    <div class="jiazi-game-link img-size" data-top="814" data-left="67" data-width="295" data-height="100" @click="isLogin ? onGoPlay(0) : login()"></div>
    <div class="jiazi-game-link img-size" data-top="814" data-left="385" data-width="297" data-height="100" @click="isLogin ? onPlayTen(0) : login()"></div>
    <div class="chance soccer img-size" data-top="1566" data-left="67" data-width="295" data-fontSize="24" data-lineHeight="24">（<span>{{isLogin ? soccerChance : '--'}}</span> 次机会）</div>
    <div class="soccer-game-link img-size" data-top="1505" data-left="67" data-width="295" data-height="100" @click="isLogin ? onGoPlay(1) : login()"></div>
    <div class="soccer-game-link img-size" data-top="1505" data-left="385" data-width="297" data-height="100" @click="isLogin ? onPlayTen(1) : login()"></div>
    <div class="how-get soccer img-size" data-top="1633" data-left="268" data-width="215" data-height="41" @click="onHowGet"></div>
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
                jianziChance: 0,
                soccerChance: 0,
                sign: undefined
            };
        },
        components : {
            'lockScreen' : function (resolve) {
                require(['./lockScreen'], resolve);
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
                let goUrl = window.location.pathname + "#/rule";
                if (T.wap) {
                    goUrl += "?wap=true";
                    if (T.isLogin){
                        goUrl += "&uid=" + T.uid;
                    }
                } else {
                    if (T.isLogin) {
                        goUrl += "?uid=" + T.uid;
                    }
                }
                window.location.replace(goUrl);
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
                    this.jianziChance = _data.map.jzChance;
                    this.soccerChance = _data.map.zqChance;
                    if (this.jianziChance > 0 || this.soccerChance > 0) {this.getGameSign();}
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
            onGoPlay: function (cat) {
                if (cat === 0 && this.jianziChance <= 0 || cat === 1 && this.soccerChance <= 0) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }
                const sub = ['playJianzi', 'playSoccer'][cat];
//                window.location.replace(window.location.pathname + "#/draw/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                window.location.replace(window.location.pathname + "#/" + sub + "/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + (this.isFirst ? '&isFirst=true' : ''));
            },
            onPlayTen: function (cat) {
                if (!T.isLogin) return false;
                const curChance = cat === 0 ? this.jianziChance : this.soccerChance;
                if (curChance < 10) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : curChance > 1 ? 2 : 1
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
                    energyType: cat + 1,
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
                            const {energyNum : engyQty, prizeType} = _data.map;
                            requirePop("showGift", {
                                props : {
                                    transition : "fadeIn",
                                    popState : prizeType,
                                    amount : engyQty
                                },
                                on : {
                                    "go-my-event" : () => {this.$emit("bubble-goMy-event");}
                                }
                            });
                            if (cat === 0) {this.jianziChance -= 10;}
                            else if (cat === 1) {this.soccerChance -= 10;}
                        }
                    }, 1);
                });
            }
        }
    }
</script>