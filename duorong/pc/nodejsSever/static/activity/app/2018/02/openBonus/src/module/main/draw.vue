<style lang='sass' scoped>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/game-drawing.jpg');
      .chance, .hongbao, .back-link{position: absolute;}
      .chance{
        width: 100%;
        text-align: center;
        color: #3c245e;
        span{
          color: #ff5800;
          vertical-align: bottom;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size content-wrapper" data-width="750" data-height="1334">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="chance img-size" data-top="285" data-fontSize="30" data-lineHeight="56">剩余次数：<span class="img-size" data-fontSize="36">{{chanceNum}}</span></div>
      <div class="hongbao img-size" data-top="393" data-left="85" data-width="253" data-height="337" @click="onDraw"></div>
      <div class="hongbao img-size" data-top="393" data-left="410" data-width="253" data-height="337" @click="onDraw"></div>
      <div class="hongbao img-size" data-top="804" data-left="85" data-width="253" data-height="337" @click="onDraw"></div>
      <div class="hongbao img-size" data-top="804" data-left="410" data-width="253" data-height="337" @click="onDraw"></div>
      <div class="back-link img-size" data-top="1191" data-left="594" data-width="156" data-height="50" @click="onBack"></div>
    </div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    import {requestService, httpChance, httpDraw} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                chanceNum : 0,
                isAjaxing: false
            };
        },
        components : {
            "lockScreen" : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        computed: {
        },
        watch : {
            chanceNum : function (newOne, oldOne) {
                setTimeout(() => {T.setImgSize();}, 0);
            }
        },
        mounted(){
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.getInitData();
            }
        },
        methods: {
            getInitData: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpChance, params, _data => {
                    this.isAjaxing = false;
                    if (_data.success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.chanceNum = _data.map.totalchance;
                });
            },
            onDraw: function () {
                if (!T.isLogin) return false;
                if (this.chanceNum < 1) {
                    requirePop("notify", {
                        props : {
                            transition : "bounceIn",
                            popState : 1
                        },
                        on : {
                            "close-only-event" : this.onBack
                        }
                    });
                    return false;
                }
                let params = {
                    uid: T.uid,
                    isMany: false
                };
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                requestService(httpDraw, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn == false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            if (_data.success == false) {
                                if (_data.errorCode == 10000) {
                                    requirePop("notify", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : 1
                                        },
                                        on : {
                                            "close-only-event" : this.onBack
                                        }
                                    });
                                } else {
                                    requirePop('warning', {
                                        props : {
                                            transition : 'bounceIn',
                                            title : "系统提示",
                                            detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                            btnBackHome : false
                                        }
                                    });
                                }
                                return false;
                            }
                            let tp = _data.map.prizeType;
                            let [st, amt] = {
                                "1" : [11, 1],
                                "2" : [11, 3],
                                "3" : [11, 5],
                                "4" : [12, 1],
                                "5" : [13, 1],
                                "6" : [14, 1],
                                "7" : [15, 1],
                                "8" : [16, 500],
                                "9" : [17, 1]
                            }[tp + ''];
                            requirePop("showGift", {
                                props : {
                                    transition : "rotate3d",
                                    popState : st,
                                    amount: amt
                                },
                                on : {
                                    'go-count-event' : this.onGoCount,
                                    'go-xchg-event' : this.onGoXchg
                                }
                            });
                            this.chanceNum = _data.map.totalchance;
                        }
                    }, 1);
                });
            },
            __goPage : function (name) {
                let goUrl = window.location.pathname + "#/" + name + "?";
                if (T.wap) {
                    goUrl += "wap=true&uid=" + T.uid;
                } else {
                    goUrl += "uid=" + T.uid;
                }
                goUrl += "&from=draw";
                window.location.replace(goUrl);
            },
            onGoCount : function () {
                this.__goPage('count');
            },
            onGoXchg : function () {
                this.__goPage('xchg');
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