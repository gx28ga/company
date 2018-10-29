<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/play-bg.jpg');
      .back-btn, .balloon-area, .balloon, .dart, .bombing-mark, .chance, .super-btn{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .balloon-area{
        @include contain('../../images/anm.gif');
      }
      .dart{
        @include contain('../../images/dart.png');
      }
      .bombing-mark{
        @include contain('../../images/bm.png');
      }
      .chance{
        color: #FFF;
        span{
          color: #FFF600;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2000">
      <div class="back-btn img-size" data-top="-10" data-left="20" @click="onBack">&laquo;</div>
      <div class="balloon-area img-size" data-top="177" data-left="0" data-width="750" data-height="557"></div>
      <div class="balloon img-size" data-top="240" data-left="19" data-width="152" data-height="144" @click="onPierce(1)"></div>
      <div class="balloon img-size" data-top="360" data-left="168" data-width="102" data-height="147" @click="onPierce(2)"></div>
      <div class="balloon img-size" data-top="230" data-left="274" data-width="115" data-height="164" @click="onPierce(3)"></div>
      <div class="balloon img-size" data-top="360" data-left="388" data-width="126" data-height="178" @click="onPierce(4)"></div>
      <div class="balloon img-size" data-top="187" data-left="417" data-width="115" data-height="164" @click="onPierce(5)"></div>
      <div class="balloon img-size" data-top="264" data-left="532" data-width="150" data-height="184" @click="onPierce(6)"></div>
      <div v-show="target == 1 || target == 10" class="bombing-mark img-size" data-top="178" data-left="-88" data-width="446" data-height="282"></div>
      <div v-show="target == 2 || target == 10" class="bombing-mark img-size" data-top="300" data-left="20" data-width="446" data-height="282"></div>
      <div v-show="target == 3 || target == 10" class="bombing-mark img-size" data-top="190" data-left="133" data-width="446" data-height="282"></div>
      <div v-show="target == 4 || target == 10" class="bombing-mark img-size" data-top="309" data-left="240" data-width="446" data-height="282"></div>
      <div v-show="target == 5 || target == 10" class="bombing-mark img-size" data-top="129" data-left="270" data-width="446" data-height="282"></div>
      <div v-show="target == 6 || target == 10" class="bombing-mark img-size" data-top="215" data-left="400" data-width="446" data-height="282"></div>
      <div v-show="target == 0" class="dart img-size pulse-slow" data-top="511" data-left="445" data-width="221" data-height="94"></div>
      <div v-show="isOnBusy" class="cube-rotating img-size" data-top="375" data-left="249" data-width="252" data-height="252"></div>
      <div class="chance img-size" data-top="910" data-left="32" data-fontSize="36" data-lineHeight="36">剩余机会：<span>{{chanceNum}}次</span></div>
      <div class="super-btn img-size" data-top="888" data-left="340" data-width="180" data-height="85" @click="onPierce(0)"></div>
      <div class="super-btn img-size" data-top="888" data-left="540" data-width="180" data-height="85" @click="onPowerPlay"></div>
      <!--<div class="super-btn img-size" data-top="800" data-left="405" data-width="314" data-height="85" @click="onPowerPlay"></div>-->
    </div>
  </div>
</template>
<script>
    import {httpChance, httpPierce} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                chanceNum : 0,
                target : 0,
                isOnBusy : false
            };
        },
        computed: {
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.getMyChance();
            }
        },
        methods: {
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
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
                });
            },
            getPlayResult: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpPierce + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 7001){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 2,
                                    parent : this
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : "系统提示",
                                    detail : _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    btnBackHome : false
                                }
                            });
                            bus.$once('closePopEvent', () => {
                                this.isOnBusy = false;
                                this.target = 0;
                            });
                        }
                        return false;
                    }
                    requirePop('playResult', {
                        props: {
                            transition : 'bounceIn',
                            popState : 0,
                            giftType : _data.map.prizeType,
                            parent : this
                        }
                    });
                    this.chanceNum = _data.map.totalchance;
                });
            },
            getPowerPlayResult: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid, isMany: true};
                this.__requestService(httpPierce + '?uid=' + T.uid + '&isMany=true', params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 7001){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 2,
                                    parent : this
                                }
                            });
                        } else if (_data.errorCode == 7005){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 3,
                                    parent : this
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    btnBackHome: false
                                }
                            });
                            bus.$once('closePopEvent', () => {
                                this.isOnBusy = false;
                                this.target = 0;
                            });
                        }
                        return false;
                    }
                    requirePop('playResult', {
                        props: {
                            transition : 'bounceIn',
                            popState : 1,
                            parent : this
                        }
                    });
                    this.chanceNum = _data.map.totalchance;
                });
            },
            onPierce : function (target) {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum == 0) {
                    requirePop('playResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : 2
                        }
                    });
                    return false;
                }
                if (target == 0) {target = Math.floor((Math.random() * 6) + 1);}
                this.isOnBusy = true;
                this.target = target;
                setTimeout(() => {
                    this.getPlayResult();
                }, 1200);
            },
            onPowerPlay : function () {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum < 10) {
                    requirePop('playResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : this.chanceNum > 0 ? 3 : 2
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                this.target = 10;
                setTimeout(() => {
                    this.getPowerPlayResult();
                }, 1200);
            },
            onBack : function () {
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid);
                }
            }
        }
    }
</script>