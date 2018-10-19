<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .xchg-wrapper {
      position: relative;
      @include contain("../../images/xchg.jpg");
      .my-engy,
      .xchg-btn{
        position: absolute;
      }
      .my-engy{
        color: #FFF;
        span{
          color: #ff6400;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size xchg-wrapper" data-width="750" data-height="1770">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="img-size my-engy" data-top="202" data-left="40" data-fontSize="36" data-lineHeight="36">我的能量：<span>{{myEngy}}</span></div>
      <div class="xchg-btn img-size" data-top="532" data-left="226" data-width="120" data-height="56" @click="onXchg(2)"></div>
      <div class="xchg-btn img-size" data-top="532" data-left="574" data-width="120" data-height="56" @click="onXchg(3)"></div>
      <div class="xchg-btn img-size" data-top="850" data-left="226" data-width="120" data-height="56" @click="onXchg(4)"></div>
      <div class="xchg-btn img-size" data-top="850" data-left="574" data-width="120" data-height="56" @click="onXchg(5)"></div>
      <div class="xchg-btn img-size" data-top="1167" data-left="226" data-width="120" data-height="56" @click="onXchg(6)"></div>
      <div class="xchg-btn img-size" data-top="1167" data-left="574" data-width="120" data-height="56" @click="onXchg(7)"></div>
      <div class="xchg-btn img-size" data-top="1485" data-left="226" data-width="120" data-height="56" @click="onXchg(8)"></div>
      <!--<div class="xchg-btn img-size" data-top="1485" data-left="574" data-width="120" data-height="56" @click="onXchg(8)"></div>-->
    </div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    const cCostMap = [7500, 15000, 27500, 50000, 135000, 165000, 265000];
    import {requestService, httpChance, httpXchg} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                myEngy : 0
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.__getMyEngy();
            }
        },
        methods: {
            __getMyEngy : function () {
                this.isAjaxing = true;
                const params = {
                    uid : T.uid
                };
                requestService(httpChance, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        requirePop("warning", {
                            props : {
                                transition : "bounceIn",
                                title: "系统提示",
                                detail: errorMsg ? errorMsg : "系统错误，请联系客服。",
                                btnBackHome: false
                            }
                        });
                        bus.$once("closePopEvent", () => {
                            this.$emit("xchg-init-failed");
                        })
                        return false;
                    }
                    const myEngy = Number(_data.map.myDescription);
                    this.myEngy = myEngy > 0 ? myEngy : 0;
                });
            },
            onXchg: function (giftId) {
                if (!T.isLogin) return false;
                if (this.myEngy < cCostMap[giftId - 2]) {
                    requirePop("notify", {
                        props : {
                            transition : 'bounceIn',
                            popState : 4
                        }
                    });
                } else {
                    let self = this;
                    requirePop("notify", {
                        props : {
                            transition : 'fadeIn',
                            popState : 5,
                            cost: cCostMap[giftId - 2]
                        },
                        on : {
                            "confirm-ok-event" : function(){
                                self.__submit(giftId);
                            }
                        }
                    });
                }
            },
            __submit : function (giftId) {
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                let params = {
                    uid: T.uid,
                    convertType: giftId
                };
                requestService(httpXchg, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn === false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            const {success, errorCode, errorMsg} = _data;
                            if (success == false) {
                                if (errorCode == 10010) {
                                    requirePop("notify", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : 4
                                        }
                                    });
                                } else {
                                    requirePop('warning', {
                                        props : {
                                            transition : 'bounceIn',
                                            title : '系统提示',
                                            detail: errorMsg ? errorMsg : "系统错误，请联系客服。",
                                            btnBackHome: false
                                        }
                                    });
                                }
                                return false;
                            }
                            requirePop("notify", {
                                props : {
                                    transition : "rotate3d",
                                    popState : 6
                                }
                            });
                            this.myEngy = _data.map.myDescription;
                        }
                    }, 1);
                });
            },
            onBack : function () {
                let from = T.getQueryString("from");
                let sub = !from || from == 'home' ? '' : ("#/" + from);
                let hrefUrl = window.location.pathname;
                if (T.wap) {
                    hrefUrl  += sub + "?wap=true&uid=" + T.uid;
                } else {
                    hrefUrl += sub + "?uid=" + T.uid;
                }
                window.location.replace(hrefUrl);
            }
        }
    }
</script>