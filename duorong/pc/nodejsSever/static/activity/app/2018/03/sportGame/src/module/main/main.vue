<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .bottom-bar{
    position: fixed;
    z-index: 80;
    .tab{
      display: inline-block;
      width: 25%;
      height: 82.5%;
      position: relative;
      top: 17.5%;
    }
  }
  .bottom-bar.home{
    @include contain("../../images/bar-home.png");
  }
  .bottom-bar.rank{
    @include contain("../../images/bar-rank.png");
  }
  .bottom-bar.xchg{
    @include contain("../../images/bar-xchg.png");
  }
  .bottom-bar.my{
    @include contain("../../images/bar-my.png");
  }
</style>
<template>
  <div>
    <home v-show="tabIndex == 0" @bubble-goMy-event="tabIndex = 3"></home>
    <template v-if="isLogin">
      <rank v-if="tabIndex == 1"></rank>
      <xchg v-if="tabIndex == 2" @xchg-init-failed="tabIndex = 0"></xchg>
      <my v-if="tabIndex == 3" @record-error="tabIndex = 0"></my>
    </template>
    <div class="bottom-bar img-size" :class="['home', 'rank', 'xchg', 'my'][tabIndex]" data-width="750" data-height="151" data-bottom="0">
      <div class="tab" @click="tabIndex = 0"></div><div class="tab" @click="tabIndex = 1"></div><div class="tab" @click="tabIndex = 2"></div><div class="tab" @click="tabIndex = 3"></div>
    </div>
  </div>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                tabIndex: 0
            };
        },
        components : {
            'home' : function (resolve) {
                require(['./home'], resolve);
            },
            'rank' : function (resolve) {
                require(['./rank'], resolve);
            },
            'xchg' : function (resolve) {
                require(['./xchg'], resolve);
            },
            'my' : function (resolve) {
                require(['./record'], resolve);
            }
        },
        mounted(){
            this.isLogin = T.isLogin;
            if (!this.isLogin) {
                requirePop("notify", {
                    props : {
                        transition : "bounceIn",
                        popState : 0,
                    },
                    on : {
                        "go-login-event" : this.login,
                        "close-only-event" : () => {T.callApp.home()}
                    }
                });
            }
        },
        methods: {
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
//                        T.callApp.home();
                    }else if (navigator.userAgent.match(/android/i)) {
                        try {
                            window.location.href = androidSchema;
                            setTimeout(function(){
                                window.location.href = androidDownUrl; //android下载地址
                            },500);
//                            T.callApp.home();
                        } catch(e) {
                            window.location.href = androidDownUrl;
                        }
                    }
                }
            }
        }
    }
</script>