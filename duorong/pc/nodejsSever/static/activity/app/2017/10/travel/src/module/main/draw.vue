<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .draw-outer {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/play-bg.jpg');
      .back-btn, .travelling, .stop-flag, .chance, .draw-btn, .power-btn{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .travelling{
        z-index: 2;
        background-color: rgb(253, 224, 6);
      }
      .stop-flag{
        @include contain("../../images/stop-flag.png");
      }
      .chance{
        width: 100%;
        text-align: center;
        color: #151640;
      }
    }
  }
</style>
<template>
  <div class="draw-outer flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="3100">
      <div class="back-btn img-size" data-top="-10" data-left="20" @click="onBack">&laquo;</div>
      <div v-show="!isOnBusy" class="draw-btn img-size" data-top="527" data-left="100" data-width="240" data-height="107" @click="onDraw"></div>
      <div class="power-btn img-size" data-top="527" data-left="413" data-width="240" data-height="107" @click="onClickPower"></div>
      <div v-show="isOnBusy && stopCity == 0" class="travelling img-size" data-top="26" data-left="88" data-width="550" data-height="498">
        <img src="../../images/travel.gif" width="100%">
      </div>
      <div v-show="isOnBusy && stopCity == 1" class="stop-flag img-size" data-top="240" data-left="535" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 2" class="stop-flag img-size" data-top="255" data-left="340" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 3" class="stop-flag img-size" data-top="105" data-left="535" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 4" class="stop-flag img-size" data-top="210" data-left="490" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 5" class="stop-flag img-size" data-top="175" data-left="515" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 6" class="stop-flag img-size" data-top="340" data-left="380" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 7" class="stop-flag img-size" data-top="345" data-left="450" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 8" class="stop-flag img-size" data-top="130" data-left="470" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 9" class="stop-flag img-size" data-top="263" data-left="215" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 10" class="stop-flag img-size" data-top="405" data-left="420" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 11" class="stop-flag img-size" data-top="210" data-left="400" data-width="60" data-height="75"></div>
      <div v-show="isOnBusy && stopCity == 12" class="stop-flag img-size" data-top="350" data-left="485" data-width="60" data-height="75"></div>
      <div class="chance img-size" data-top="657" data-left="0" data-fontSize="30" data-lineHeight="30">剩余机会： {{chanceNum}}次</div>
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
                isOnBusy : false,
                stopCity: 0
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
                this.getChance();
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
            getChance: function () {
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
            getDrawResult: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpPlay + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 8002){
                            requirePop('otherResult', {
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
                                    title : '系统提示',
                                    detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    btnBackHome : false
                                }
                            });
                        }
                        bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                        return false;
                    }
                    this.stopCity = _data.map.prizeType;
                    setTimeout(() => {
                        this.stopCity = 0;
                        requirePop('cityPrize', {
                            props: {
                                transition : 'fadeIn',
                                city : _data.map.prizeType/*,
                               gift: _data.map.prizeName*/
                            }
                        });
                    }, 1750);
                    bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                    this.chanceNum = _data.map.totalchance;
                });
            },
            getPlayTenResult: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid, isMany: true};
                this.__requestService(httpPlay + '?uid=' + T.uid + '&isMany=true', params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 8002){
                            requirePop('otherResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 2
                                }
                            });
                        } else if (_data.errorCode == 7005){
                            requirePop('otherResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 3
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    btnBackHome : false
                                }
                            });
                        }
                        bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                        return false;
                    }
                    requirePop('otherResult', {
                        props: {
                            transition : 'fadeIn',
                            popState : 1
                        }
                    });
                    bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                    this.chanceNum = _data.map.totalchance;
                });
            },
            onDraw : function () {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum == 0) {
                    requirePop('otherResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : 2
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                setTimeout(() => {
                    this.getDrawResult();
                }, 4000);
            },
            onClickPower : function () {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum < 10) {
                    requirePop('otherResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : this.chanceNum > 0 ? 3 : 2
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                setTimeout(() => {
                    this.getPlayTenResult();
                }, 4000);
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