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
          color: #fffc00;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size xchg-wrapper" data-width="750" data-height="1400">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="img-size my-engy" data-top="180" data-left="200" data-fontSize="36" data-lineHeight="70">我的劳动勋章：<span class="img-size" data-fontSize="40">{{myMedal}}</span></div>
      <div class="xchg-btn img-size" data-top="534" data-left="228" data-width="115" data-height="50" @click="onXchg(1)"></div>
      <div class="xchg-btn img-size" data-top="534" data-left="595" data-width="115" data-height="50" @click="onXchg(2)"></div>
      <div class="xchg-btn img-size" data-top="856" data-left="228" data-width="115" data-height="50" @click="onXchg(3)"></div>
      <div class="xchg-btn img-size" data-top="856" data-left="595" data-width="115" data-height="50" @click="onXchg(4)"></div>
      <div class="xchg-btn img-size" data-top="1178" data-left="228" data-width="115" data-height="50" @click="onXchg(5)"></div>
      <div class="xchg-btn img-size" data-top="1178" data-left="595" data-width="115" data-height="50" @click="onXchg(6)"></div>
      <!--<div class="xchg-btn img-size" data-top="1485" data-left="226" data-width="120" data-height="56" @click="onXchg(8)"></div>-->
      <!--<div class="xchg-btn img-size" data-top="1485" data-left="574" data-width="120" data-height="56" @click="onXchg(8)"></div>-->
    </div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    const cCostMap = [62, 84, 115, 140, 175, 350];
    import {requestService, httpChance, httpXchg} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                myMedal : 0
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
                this.__getMyMedal();
            }
        },
        methods: {
            __getMyMedal : function () {
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
                    const qty = Number(_data.map.medal);
                    this.myMedal = qty ? qty : 0;
                });
            },
            onXchg: function (giftId) {
                if (!T.isLogin) return false;
                if (this.myMedal < cCostMap[giftId - 1]) {
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
                            cost: cCostMap[giftId - 1]
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
                                if (errorCode == 10013) {
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
                                },
                                on : {
                                    "go-to-my" : () => {this.$emit("consult-records");}
                                }
                            });
                            this.myMedal = _data.map.myDescription;
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