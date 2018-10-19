<style lang='sass'>
  @import '../../css/global.scss';
  /*@import "../../vendor/all-animation.min.css";*/

  .bottom-bar{
    position: fixed;
    overflow: hidden;
    text-align: center;
    z-index: 80;
    .tab{
      display: inline-block;
      margin-right: 1px;
      /*width: 25%;*/
      height: 100%;
      text-align: center;
      font-weight: bold;
    }
    .tab:last-child{
      margin-right: 0!important;
    }
    .tab.focus{
      background: #FFF;
      color: #e8320d;
    }
    .tab.blur{
      background: rgba(180, 180, 180, .7);
      color: #FFF;
    }
  }
</style>
<template>
  <div>
    <home v-show="tabIndex == 0" @bubble-goMy-event="tabIndex = 3"></home>
    <template v-if="isLogin">
      <game-list v-if="tabIndex == 1" @exception-thrown-event="tabIndex = 0"></game-list>
      <card v-if="tabIndex == 2" @exception-thrown-event="tabIndex = 0"></card>
      <rank v-if="tabIndex == 3" @exception-thrown-event="tabIndex = 0"></rank>
    </template>
    <div class="bottom-bar img-size" data-left="-125" data-width="1000" data-height="104" data-bottom="0" data-fontSize="30" data-lineHeight="104">
      <div class="img-size tab" data-width="187" :class="tabIndex == 0 ? 'focus' : 'blur'" @click="tabIndex = 0">抽奖</div><!--
   --><div class="img-size tab" data-width="187" :class="tabIndex == 1 ? 'focus' : 'blur'" @click="tabIndex = 1">竞猜</div><!--
   --><div class="img-size tab" data-width="187" :class="tabIndex == 2 ? 'focus' : 'blur'" @click="tabIndex = 2">球队卡片</div><!--
   --><div class="img-size tab" data-width="187" :class="tabIndex == 3 ? 'focus' : 'blur'" @click="tabIndex = 3">排行榜</div>
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
            'gameList' : function (resolve) {
                require(['./gameList'], resolve);
            },
            'card' : function (resolve) {
                require(['./card'], resolve);
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
                return;
            }
            if (T.getQueryString('init') == 'my') {this.tabIndex = 3;}
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