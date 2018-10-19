<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home.png');
    position: relative;
    .rule-link,
    .chance,
    .how-get,
    .invest-btn,
    .play-link,
    .my-link,
    .rank-link
    {
      position: absolute;
    }
    .chance{
      color: #2123b7;
      span{
        color: #FF0016;
      }
    }
    .how-get{
      color: #dd4539;
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="1851">
    <div class="rule-link img-size" data-top="80" data-left="579" data-width="151" data-height="46" @click="onRule"></div>
    <div class="chance img-size" data-top="865" data-left="300" data-fontSize="24" data-lineHeight="24">您有 <span>{{isLogin ? chanceNum : '--'}}</span> 次机会</div>
    <div class="how-get img-size" data-top="865" data-left="480" data-fontSize="20" data-lineHeight="30" @click="onHowGet">如何获取？</div>
    <div class="my-link img-size" data-top="1370" data-left="95" data-width="215" data-height="30" @click="onDrEvent"></div>
    <template v-if="isLogin">
      <div class="play-link img-size" data-top="903" data-left="163" data-width="425" data-height="62" @click="onGoPlay"></div>
      <div class="my-link img-size" data-top="1670" data-left="262" data-width="228" data-height="74" @click="onGoMy"></div>
    </template>
    <template v-if="!isLogin">
      <div class="play-link img-size" data-top="903" data-left="163" data-width="425" data-height="62" @click="login"></div>
      <!--<div class="my-link img-size" data-top="1400" data-left="95" data-width="215" data-height="30" @click="login"></div>-->
      <div class="my-link img-size" data-top="1670" data-left="262" data-width="228" data-height="74" @click="login"></div>
    </template>
    <div class="invest-btn img-size" data-top="995" data-left="305" data-width="140" data-height="30" @click="onInvest"></div>
    <div v-show="isLogin == false" class="rank-link img-size" data-top="1563" data-left="95" data-width="165" data-height="30" @click="login"></div>
    <div v-show="isLogin == true" class="rank-link img-size" data-top="1563" data-left="95" data-width="165" data-height="30" @click="onGoRank"></div>
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
                chanceNum: 0
            };
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
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
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
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
                    if (sts == 0){  //活动进行中或结束
                        this.checkParticipatable();
                    }
                });
            },
            checkParticipatable: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpParticipate, params, _data => {
                    if (!_data.flag) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '感谢关注！',
                                detail: 'VIP渠道用户不能参加，敬请期待后续活动……',
                                btnBackHome: true
                            }
                        });
                    } else {
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
                        this.getMyChance();
                    }
                });
            },
            getMyChance: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpChance, params, _data => {
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
                    requirePop("playResult", {
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
            onDrEvent() {
                requirePop('drEvents', {
                    props : {
                        transition : 'mask'
                    }
                });
            }
        }
    }
</script>