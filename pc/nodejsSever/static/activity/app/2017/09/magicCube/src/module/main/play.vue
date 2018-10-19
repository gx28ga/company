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
      .back-btn, .cube-static, .cube-rotating, .chance, .play-btn{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .cube-static{
        @include contain('../../images/cube-0.jpg');
        background-position: center;
      }
      .cube-rotating{
        @include contain('../../images/cube-1.gif');
        background-position: center;
      }
      .chance{
        color: #2E4E9B;
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2000">
      <div class="back-btn img-size" data-top="-10" data-left="20" @click="onBack">&laquo;</div>
      <div v-show="!isOnBusy" class="cube-static img-size pulse" data-top="330" data-left="250" data-width="252" data-height="252" @click="onPlay"></div>
      <div v-show="isOnBusy" class="cube-rotating img-size" data-top="330" data-left="250" data-width="252" data-height="252"></div>
      <div class="chance img-size" data-top="598" data-left="286" data-fontSize="24" data-lineHeight="24">剩余机会：{{chanceNum}}次</div>
      <div class="play-btn img-size" data-top="675" data-left="210" data-width="150" data-height="55" @click="onPlay"></div>
      <div class="play-btn img-size" data-top="675" data-left="407" data-width="150" data-height="55" @click="onPowerPlay"></div>
    </div>
  </div>
</template>
<script>
    import {httpChance, httpPlay} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                chanceNum : 0,
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
                this.__requestService(httpPlay + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 6002){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 2,
                                    parent : this
                                }
                            });
                        } else {
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 9,
                                    error: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    parent : this
                                }
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
                this.__requestService(httpPlay + '?uid=' + T.uid + '&isMany=true', params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 6002){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 2,
                                    parent : this
                                }
                            });
                        } else if (_data.errorCode == 6003){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 3,
                                    parent : this
                                }
                            });
                        } else {
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 9,
                                    error: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    parent : this
                                }
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
            onPlay : function () {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum == 0) {
                    requirePop('playResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : 2,
                            parent : this
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                setTimeout(() => {
                    this.getPlayResult();
//                    this.isOnBusy = false;
                }, 3000);
            },
            onPowerPlay : function () {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum < 10) {
                    requirePop('playResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : this.chanceNum > 0 ? 3 : 2,
                            parent : this
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                setTimeout(() => {
                    this.getPowerPlayResult();
//                    this.isOnBusy = false;
                }, 3000);
            },
            onBack : function () {
                if (this.isOnBusy) return;
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid);
                }
            }
        }
    }
</script>