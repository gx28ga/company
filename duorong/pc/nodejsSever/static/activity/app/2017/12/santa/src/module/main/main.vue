<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home-bg.jpg');
    position: relative;
    .rule-link,
    .chance,
    .invest-btn,
    .play-link,
    .my-link,
    .rank-link
    {
      position: absolute;
    }
    .chance{
      color: #01492D;
      span{
        color: #FF0016;
      }
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="2800">
    <div class="rule-link img-size" data-top="44" data-left="640" data-width="80" data-height="80" @click="onRule"></div>
    <div class="chance img-size" data-top="735" data-left="110" data-fontSize="36" data-lineHeight="70">您有 <span>{{isLogin ? chanceNum : '--'}}</span> 次机会</div>
    <template v-if="isLogin">
      <div class="play-link img-size" data-top="820" data-left="90" data-width="560" data-height="110" @click="onGoPlay"></div>
      <div class="my-link img-size" data-top="40" data-left="20" data-width="140" data-height="100" @click="onGoMy"></div>
      <div class="my-link img-size" data-top="1225" data-left="600" data-width="136" data-height="168" @click="onGoMy"></div>
    </template>
    <template v-if="!isLogin">
      <div class="play-link img-size" data-top="820" data-left="90" data-width="560" data-height="110" @click="login"></div>
      <div class="my-link img-size" data-top="40" data-left="20" data-width="140" data-height="100" @click="login"></div>
      <div class="my-link img-size" data-top="1225" data-left="600" data-width="136" data-height="168" @click="login"></div>
    </template>
    <div class="invest-btn img-size" data-top="1125" data-left="310" data-width="180" data-height="40" @click="onInvest"></div>
    <div v-show="isLogin == false" class="rank-link img-size" data-top="2650" data-left="155" data-width="440" data-height="85" @click="login"></div>
    <div v-show="isLogin == true" class="rank-link img-size" data-top="2650" data-left="155" data-width="440" data-height="85" @click="onGoRank"></div>
  </div>
</template>
<script>
    import {httpStatus, httpParticipate, httpChance} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                chanceNum: 0,
                isFirst: false
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
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.success && !_data.errorMsg) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title: '&nbsp;',
                                content: "操作失败，请联系客服！",
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定',
                            });
                            return false;
                        }
                        callAfter(_data);
                    }
                });
            },
            getActivityStatus: function () {
                this.__requestService(httpStatus, {}, _data => {
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
                this.__requestService(httpParticipate + '?uid=' + T.uid, params, _data => {
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
                this.__requestService(httpChance + '?uid=' + T.uid, params, _data => {
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
                    this.isFirst = _data.map.isFirst;
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
                if (this.isFirst) {
                    this.onGoStrategy(true);
                    return;
                }
                window.location.replace(window.location.pathname + "#/play/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onGoStrategy(isFirst = false) {
                let pathUrl = window.location.pathname + "#/strategy/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid;
                if (isFirst === true) {
                    pathUrl += "&isFirst=true";
                }
                window.location.replace(pathUrl);
            },
            onGoMy: function () {
                let pathUrl = window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid;
                window.location.replace(pathUrl);
            },
            onGoRank() {
                let pathUrl = window.location.pathname + "#/rank/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=home";
                window.location.replace(pathUrl);
            }
        }
    }
</script>