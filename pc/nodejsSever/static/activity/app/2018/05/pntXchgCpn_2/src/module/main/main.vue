<style lang='sass'>
  @import '../../css/global.scss';

  .bg{
    @include contain("../../images/bg.jpg");
    position: relative;
    .btn{
      position: absolute;
    }
  }
</style>
<template>
  <div class="bg img-size" data-width="750" data-height="1780">
    <div v-show="!isLogin" class="btn img-size" data-top="546" data-left="128" data-width="520" data-height="130" @click="login"></div>
    <div v-show="isLogin" class="btn img-size" data-top="546" data-left="128" data-width="520" data-height="130" @click="onGoPointMall"></div>
  </div>
</template>
<script>
    import {} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin : false
            };
        },
        computed: {
        },
        mounted(){
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            T.setImgSize();
        },
        methods: {
            login: function () {
                if (!T.getQueryString("wap")) {
                    T.login();
                } else {
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
                }
            },
            onGoPointMall: function () {
                window.location.href='jump://page=34?';
            }
        }
    }
</script>