<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home.jpg');
    position: relative;
    .rule-link,
    .chance,
    .how-get,
    .invest-btn,
    .play-link,
    .my-link,
    .rank-link,
    .cash-prize-rule
    {
      position: absolute;
    }
    .chance{
      width: 100%;
      text-align: center;
      color: #FFF;
      span{
        color: #ffde00;
      }
    }
    .how-get{
      color: #dd4539;
    }
    .cash-prize-rule{
      color: blue;
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="2200">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="rule-link img-size" data-top="30" data-left="588" data-width="142" data-height="40" @click="onRule(false)"></div>
    <div class="chance img-size" data-top="805" data-fontSize="36" data-lineHeight="36">剩余 <span>{{isLogin ? chanceNum : '--'}}</span> 次许愿机会</div>
    <div class="how-get img-size" data-top="1034" data-left="240" data-width="270" data-height="40" @click="onHowGet"></div>
    <div class="cash-prize-rule img-size" data-top="1770" data-left="535" data-width="140" data-height="35" @click="onAboutCash"></div>
    <template v-if="isLogin">
      <div class="play-link img-size" data-top="880" data-left="80" data-width="585" data-height="125" @click="onGoPlay"></div>
      <div class="my-link img-size" data-top="20" data-left="27" data-width="134" data-height="100" @click="onGoMy"></div>
    </template>
    <template v-if="!isLogin">
      <div class="play-link img-size" data-top="880" data-left="80" data-width="585" data-height="125" @click="login"></div>
      <!--<div class="my-link img-size" data-top="1400" data-left="95" data-width="215" data-height="30" @click="login"></div>-->
      <div class="my-link img-size" data-top="20" data-left="27" data-width="134" data-height="100" @click="login"></div>
    </template>
    <!--<div class="invest-btn img-size" data-top="995" data-left="305" data-width="140" data-height="30" @click="onInvest"></div>-->
    <div v-show="isLogin == false" class="rank-link img-size" data-top="2070" data-left="165" data-width="415" data-height="75" @click="login"></div>
    <div v-show="isLogin == true" class="rank-link img-size" data-top="2070" data-left="165" data-width="415" data-height="75" @click="onGoRank"></div>
  </div>
</template>
<script>
    import {requestService, httpStatus, httpParticipate, httpChance} from '../../common/URL';
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
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            this.getActivityStatus();
        },
        methods: {
            onRule : function (scroll) {
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
                if (scroll) {
                    goUrl += goUrl.indexOf('?') == -1 ? "?scroll=true" : "&scroll=true";
                }
                window.location.replace(goUrl);
            },
            onHowGet : function () {
                requirePop("howGetChance", {
                    props : {
                        transition : 'rotate3d'
                    }
                });
            },
            getActivityStatus: function () {
                this.isAjaxing = true;
                requestService(httpStatus, {}, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg,
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
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg,
                                btnBackHome: false
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
            onInvest: function () {
                T.callApp.investment();
            },
            onGoPlay: function () {
                if (this.chanceNum <= 0) {
                    requirePop("chanceError", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }
                window.location.replace(window.location.pathname + "#/play/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onGoMy: function () {
                this.onGoRank();
            },
            onGoRank() {
                let pathUrl = window.location.pathname + "#/rank/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=home";
                window.location.replace(pathUrl);
            },
            onAboutCash() {
                requirePop('aboutCash', {
                    props : {
                        transition : 'rotate3d'
                    },
                    on : {
                        'on-rule-detail' : this.onRule
                    }
                });
            }
        }
    }
</script>