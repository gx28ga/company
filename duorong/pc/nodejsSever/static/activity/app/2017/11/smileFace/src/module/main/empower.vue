<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .empower-wrapper {
      position: relative;
      @include contain('../../images/invite.jpg');
      .desc, .main-btn{
        position: absolute;
      }
      .desc{
        color: #FFF;
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size empower-wrapper" data-width="750" data-height="1540">
      <div class="desc img-size" data-top="120" data-left="100" data-width="575" data-fontSize="24" data-lineHeight="36">你的好友 {{friendName}}（{{friendMobile}}）正在参加多融理财活动，挑战【iPhoneX 64G】超级大奖，需要你的帮助，一起加入该活动吧~~~</div>
      <div class="main-btn img-size" data-top="783" data-left="223" data-width="304" data-height="65" @click="onMainBtn"></div>
    </div>
  </div>
</template>
<script>
    import {httpUserInfo, httpCheckRegister, httpRegisterBase} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                recommCode: '',
                friendName: '',
                friendMobile: '',
                shareLinkWrong: true,
                isOnBusy : false
            };
        },
        computed: {
        },
        mounted(){
            T.setImgSize();
            let part = window.location.href;
            let key = 'recommCode=';
            if (part.indexOf(key) == -1) return;
            part = part.substr(part.indexOf(key));
            let rmcd = part.replace(key, '');
            let pos = rmcd.indexOf('&');
            if (pos != -1) {
                rmcd = rmcd.substr(0, pos);
            }
            this.recommCode = rmcd;
            this.shareLinkWrong = !rmcd;
            if (!this.shareLinkWrong) {
                this.getUserInfo();
            }
        },
        methods: {
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.hasOwnProperty("success")) {
                            callAfter(_data);
                            return;
                        }
                        if (!_data.success && !_data.hasOwnProperty('errorMsg')) {
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
            getUserInfo: function() {
                let params = {
                    recommCode: this.recommCode
                };
                this.__requestService(httpUserInfo, params, _data => {
                    this.friendMobile = this.__markMobileNum(_data.mobilePhone);
                    this.friendName = this.__markUserName(_data.userName);
                });
            },
            __markUserName : function(input) {
                if (typeof  input != 'string') return input;
                let arr = input.split('');
                arr = arr.map((chr, i) => {
                    return i === 0 ? chr : '*';
                });
                return arr.join('');
            },
            __markMobileNum: function(input) {
                input += '';
                if (input.length < 7) return input;
                let arr = input.split('');
                arr = arr.map((chr, i) => {
                    return i > 2 && i < 7 ? '*' : chr;
                });
                return arr.join('');
            },
            onMainBtn : function () {
                if (this.shareLinkWrong == true) {
                    requirePop("warning", {
                        props : {
                            transition : 'bounceIn',
                            title : '温馨提示',
                            detail : '地址链接的信息不完整',
                            btnBackHome : false
                        }
                    });
                } else {
                    requirePop("askinform", {
                        props : {
                            transition: 'rotate3d',
                            popState: 0,
                            recommCode : this.recommCode
                        }
                    });
                    bus.$on('confirm-mobile-unregistered', mobile => {
                        this.checkRegisteredMobile(mobile);
                    });
                }
            },
            checkRegisteredMobile: function (mobile) {
                let params = {
                    mobilePhone: mobile
                };
                this.__requestService(httpCheckRegister, params, _data => {
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
                    if (_data.map.exists === false) {
                        this.transferToRegister(mobile);
                    } else if (_data.map.exists === true) {
                        this.informRegistedMobile();
                    }
                });
            },
            transferToRegister : function (mobile) {
                window.location.href = httpRegisterBase + '/enroll?recommCode=' + this.recommCode + '&mobilePhone=' + mobile;
            },
            informRegistedMobile : function () {
                requirePop("askinform", {
                    props : {
                        popState: 1
                    }
                });
                bus.$on("launch-duorongcf-event", () => {
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
                                },1500);
                            } catch(e) {
                                window.location.href = androidDownUrl;
                            }
                        }
                    }
                });
            }
        }
    }
</script>