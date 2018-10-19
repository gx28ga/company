<style lang='sass'>
  @import '../../css/global.scss';

  .home-box {
    @include contain('../../images/home.jpg');
    position: relative;
    .rule-link,
    .chance,
    .weeding-link,
    .watering-link,
    .feeding-link,
    .cleaning-link,
    .how-get
    {
      position: absolute;
    }
    .chance{
      /*text-align: center;*/
      color: #FFC;
      .var{
        color: #FF2;
        vertical-align: top;
      }
    }
  }
</style>
<template>
  <div class="home-box img-size" data-width="750" data-height="1450">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="rule-link img-size" data-top="18" data-right="10" data-width="140" data-height="40" @click="onRule"></div>
    <div class="how-get jianzi img-size" data-top="940" data-left="268" data-width="215" data-height="41" @click="onHowGet"></div>
    <div class="jiazi-game-link img-size" data-top="814" data-left="67" data-width="295" data-height="100" @click="isLogin ? onGoPlay(0) : login()"></div>
    <div class="jiazi-game-link img-size" data-top="814" data-left="385" data-width="297" data-height="100" @click="isLogin ? onPlayTen(0) : login()"></div>
    <div class="chance weeding img-size" data-top="776" data-left="79" data-width="360"><span class="img-size" data-marginLeft="34" data-fontSize="30" data-lineHeight="36">锄草</span><span class="img-size var" data-fontSize="24" data-lineHeight="60">（{{isLogin ? weedingChance : '--'}}次机会）</span> </div>
    <div class="chance watering img-size" data-top="776" data-left="409" data-width="360"><span class="img-size" data-marginLeft="34" data-fontSize="30" data-lineHeight="36">浇水</span><span class="img-size var" data-fontSize="24" data-lineHeight="60">（{{isLogin ? wateringChance : '--'}}次机会）</span> </div>
    <div class="chance feeding img-size" data-top="1066" data-left="79" data-width="360"><span class="img-size" data-marginLeft="34" data-fontSize="30" data-lineHeight="36">喂食</span><span class="img-size var" data-fontSize="24" data-lineHeight="60">（{{isLogin ? feedingChance : '--'}}次机会）</span> </div>
    <div class="chance cleaning img-size" data-top="1066" data-left="409" data-width="360"><span class="img-size" data-marginLeft="34" data-fontSize="30" data-lineHeight="36">打扫</span><span class="img-size var" data-fontSize="24" data-lineHeight="60">（{{isLogin ? cleaningChance : '--'}}次机会）</span> </div>
    <div class="weeding-link img-size" data-top="776" data-left="79" data-width="260" data-height="55" @click="isLogin ? onGoPlay(0) : login()"></div>
    <div class="watering-link img-size" data-top="776" data-left="409" data-width="260" data-height="55" @click="isLogin ? onGoPlay(1) : login()"></div>
    <div class="feeding-link img-size" data-top="1066" data-left="79" data-width="260" data-height="55" @click="isLogin ? onGoPlay(2) : login()"></div>
    <div class="cleaning-link img-size" data-top="1066" data-left="409" data-width="260" data-height="55" @click="isLogin ? onGoPlay(3) : login()"></div>
    <div class="how-get soccer img-size" data-top="1207" data-left="244" data-width="267" data-height="43" @click="onHowGet"></div>
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
                weedingChance: 0,
                wateringChance: 0,
                feedingChance: 0,
                cleaningChance: 0,
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
                    this.isAjaxing = false;
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
                    const {ccChance, jsChance, tsChance, qsChance} = _data.map;
                    this.weedingChance = ccChance;
                    this.wateringChance = jsChance;
                    this.feedingChance = tsChance;
                    this.cleaningChance = qsChance;
                    bus.chanceData = {..._data.map};
                    this.$nextTick(() => {T.setImgSize();});
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
                /*const chance = [this.weedingChance, this.wateringChance, this.feedingChance, this.cleaningChance][cat];
                if (chance <= 0) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }*/
                const  sub = cat <= 1 ? 'playCultivate' : 'playRaise';
                window.location.replace(window.location.pathname + "#/" + sub + "/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + `&cat=${cat}`);
            }
        }
    }
</script>