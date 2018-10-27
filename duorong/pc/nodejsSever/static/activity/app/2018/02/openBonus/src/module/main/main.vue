<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home.jpg');
    position: relative;
    .rule-link,
    .chance,
    .draw-link,
    .draw-ten,
    .how-get,
    .gift-link,
    .my-link,
    {
      position: absolute;
    }
    .chance{
      width: 100%;
      text-align: center;
      color: #FFF;
      span{
        color: #ffea00;
        vertical-align: top;
      }
    }
    .how-get{
      color: #dd4539;
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="1334">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="rule-link img-size" data-top="0" data-right="0" data-width="138" data-height="60" @click="onRule"></div>
    <div class="chance img-size" data-top="800" data-fontSize="36" data-lineHeight="36">剩余次数：<span class="img-size" data-fontSize="44">{{isLogin ? chanceNum : '--'}}</span></div>
    <div class="how-get img-size" data-top="1080" data-left="250" data-width="248" data-height="40" @click="onHowGet"></div>
    <template v-if="isLogin">
      <div class="draw-link img-size" data-top="963" data-left="50" data-width="310" data-height="97" @click="onGoDraw"></div>
      <div class="draw-ten img-size" data-top="963" data-left="387" data-width="310" data-height="97" @click="onDrawTen"></div>
      <div class="my-link img-size" data-top="1165" data-left="225" data-width="300" data-height="80" @click="onGoMy"></div>
      <!--<div class="gift-link img-size" data-top="1260" data-left="250" data-width="248" data-height="40" @click="onRule"></div>-->
    </template>
    <template v-if="!isLogin">
      <div class="draw-link img-size" data-top="963" data-left="50" data-width="310" data-height="97" @click="login"></div>
      <div class="draw-ten img-size" data-top="963" data-left="387" data-width="310" data-height="97" @click="login"></div>
      <div class="my-link img-size" data-top="1165" data-left="225" data-width="300" data-height="80" @click="login"></div>
      <!--<div class="gift-link img-size" data-top="1260" data-left="250" data-width="248" data-height="40" @click="login"></div>-->
    </template>
    <div class="gift-link img-size" data-top="1260" data-left="250" data-width="248" data-height="40" @click="onRule"></div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    import {requestService, httpStatus, httpParticipate, httpChance, httpDraw} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                isAjaxing: false,
                chanceNum: 0
            };
        },
        components : {
            'lockScreen' : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
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
                    if (_data.success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
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
                    if (!_data.flag) {
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
                        if (_data.success == false) {
                            this.isAjaxing = false;
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
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
                    if (_data.success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.chanceNum = _data.map.totalchance;
                    setTimeout(() => {T.setImgSize();}, 20);
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
            onGoDraw: function () {
                if (this.chanceNum <= 0) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }
                window.location.replace(window.location.pathname + "#/draw/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onDrawTen: function () {
                if (!T.isLogin) return false;
                if (this.chanceNum < 10) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : this.chanceNum > 1 ? 2 : 1
                        }
                    });
                    return;
                }
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                let params = {
                    uid: T.uid,
                    isMany: true
                };
                requestService(httpDraw, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn == false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            if (_data.success == false) {
                                let stCode = {'10000' : 1, '10001' : 2}[_data.errorCode + ''];
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
                                            detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                            btnBackHome : true
                                        }
                                    });
                                }
                                return false;
                            }
                            requirePop("notify", {
                                props : {
                                    transition : "fadeIn",
                                    popState : 6
                                }
                            });
                            this.chanceNum = _data.map.totalchance;
                        }
                    }, 1);
                });
            },
            onGoMy() {
                let pathUrl = window.location.pathname + "#/record/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=home";
                window.location.replace(pathUrl);
            }
        }
    }
</script>