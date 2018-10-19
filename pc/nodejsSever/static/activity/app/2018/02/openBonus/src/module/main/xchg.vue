<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .xchg-wrapper {
      position: relative;
      @include contain("../../images/xchg.jpg");
      .back-btn,
      .xchg-btn{
        position: absolute;
      }
      .back-btn{
        color: #0F0;
        text-align: center;
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size xchg-wrapper" data-width="750" data-height="1334">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="80" data-height="100" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      <div class="xchg-btn img-size" data-top="320" data-left="227" data-width="110" data-height="63" @click="onXchg(1)"></div>
      <div class="xchg-btn img-size" data-top="320" data-left="614" data-width="110" data-height="63" @click="onXchg(2)"></div>
      <div class="xchg-btn img-size" data-top="612" data-left="227" data-width="110" data-height="63" @click="onXchg(3)"></div>
      <div class="xchg-btn img-size" data-top="612" data-left="614" data-width="110" data-height="63" @click="onXchg(4)"></div>
      <div class="xchg-btn img-size" data-top="904" data-left="227" data-width="110" data-height="63" @click="onXchg(5)"></div>
      <div class="xchg-btn img-size" data-top="904" data-left="614" data-width="110" data-height="63" @click="onXchg(6)"></div>
      <div class="xchg-btn img-size" data-top="1195" data-left="227" data-width="110" data-height="63" @click="onXchg(7)"></div>
    </div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    const cCostMap = [15000, 50000, 120000, 220000, 300000, 450000, 600000];
    import {requestService, httpXchg} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                myBills : 0
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
                this.myBills = Number(T.getQueryString('opt'));
            }
        },
        methods: {
            onXchg: function (giftId) {
                if (!T.isLogin) return false;
                if (this.myBills < cCostMap[giftId - 1]) {
                    requirePop("notify", {
                        props : {
                            transition : 'bounceIn',
                            popState : 5
                        }
                    });
                } else {
                    let self = this;
                    requirePop("notify", {
                        props : {
                            transition : 'fadeIn',
                            popState : 9,
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
                    exchange: giftId
                };
                requestService(httpXchg, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn === false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            if (_data.success == false) {
                                if (_data.errorCode == 10007) {
                                    requirePop("notify", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : 5
                                        }
                                    });
                                } else {
                                    requirePop('warning', {
                                        props : {
                                            transition : 'bounceIn',
                                            title : '系统提示',
                                            detail: _data.errorMsg ? _data.errorMsg : "系统错误，请联系客服。",
                                            btnBackHome: false
                                        }
                                    });
                                }
                                return false;
                            }
                            requirePop("notify", {
                                props : {
                                    transition : "rotate3d",
                                    popState : 10
                                }
                            });
                            this.myBills -= cCostMap[giftId - 1];
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