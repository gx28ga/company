<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/soccer-bg.jpg');
      color: #003333;
      .strategy,
      .timer,
      .counter,
      .init-player,
      .anm-player,
      .play-box,
      .fly-wrapper{
        position: absolute;
      }
      .strategy{
        @include contain("../../images/strategy.png");
        z-index: 10;
      }
      .timer, .counter{
        width: 100%;
        text-align: center;
      }
      .hlt{color: #ff6400;}
      .init-player{
        @include contain("../../images/soccer-player.png");
      }
      .anm-player{
        @include contain("../../images/anm-2.gif");
      }
      .play-box{
        z-index: 9;
        width: 100%;
        height: 100%;
      }
      .fly-wrapper{
        -webkit-animation: clockwise .5s linear forwards;
        animation: clockwise .5s linear forwards;
        transform-origin: 90px -30px;
        .fly-box{
          transform: rotate(-90deg);
          display: block;
          color:red;
          -webkit-animation: counter-clockwise .5s linear forwards;
          animation: counter-clockwise .5s linear forwards;
          div{
            display: inline-block;
            vertical-align: middle;
          }
          .score{
            transform: rotate(-90deg);
          }
        }
      }
    }
  }
  .begin-mask{
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    .counter{
      color: #FFF;
      text-align: center;
      width: 100%;
      position: relative;
      top: 40%;
      font-weight: bold;
    }
  }
  @-webkit-keyframes clockwise{
    0%  { -webkit-transform: rotate(0deg);  }
    100%{ -webkit-transform: rotate(90deg); }
  }
  @keyframes clockwise {
    0%  { transform: rotate(0deg); }
    100%{ transform: rotate(90deg); }
  }
  @-webkit-keyframes counter-clockwise {
    0%  { -webkit-transform: rotate(90deg);  }
    100%{ -webkit-transform: rotate(0deg); }
  }
  @keyframes counter-clockwise {
    0%  { transform: rotate(90deg);  }
    100%{ transform: rotate(0deg); }
  }
</style>
<template>
  <div>
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div v-show="beginCounter > 0" class="begin-mask img-size" data-fontSize="150"><div class="counter">{{beginCounter}}</div></div>
    <div v-show="beginCounter <= 0" class="main-section">
      <div class="img-size content-wrapper" data-width="750" data-height="1334">
        <div v-show="showStrategy" class="img-size strategy" data-top="0" data-left="0" data-width="750" data-height="1334"></div>
        <div class="timer img-size" data-top="123" data-left="0" data-fontSize="30" data-lineHeight="64">倒计时： {{seconds}} 秒</div>
        <div class="counter img-size" data-top="205" data-left="0" data-fontSize="30" data-lineHeight="64">成绩： <span class="hlt">{{roundScore}}</span></div>
        <div v-show="!isPushing || miliseconds >= roundTime || miliseconds <= 0" class="img-size init-player" data-top="400" data-left="268" data-width="470" data-height="576"></div>
        <!--<div v-show="isPushing && miliseconds < roundTime && miliseconds > 0" class="img-size anm-player" data-top="336" data-left="0" data-width="750" data-height="680"></div>-->
        <div v-show="miliseconds < roundTime && miliseconds > 0" class="play-box img-size" data-top="0" data-left="0" @click="this.isPushing || onPush()">
        </div>
        <!--<div v-if="adding[0] == true" class="fly-wrapper img-size" data-top="450" data-left="350">-->
          <!--<div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>-->
        <!--</div>-->
        <!--<div v-if="adding[1] == true" class="fly-wrapper img-size" data-top="450" data-left="350">-->
          <!--<div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>-->
        <!--</div>-->
        <!--<div v-if="adding[2] == true" class="fly-wrapper img-size" data-top="450" data-left="350">-->
          <!--<div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>-->
        <!--</div>-->
        <!--<div v-if="adding[3] == true" class="fly-wrapper img-size" data-top="450" data-left="350">-->
          <!--<div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>-->
        <!--</div>-->
        <!--<div v-if="adding[4] == true" class="fly-wrapper img-size" data-top="450" data-left="350">-->
          <!--<div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>-->
        <!--</div>-->
        <template v-if="adding[0] == true">
          <div class="fly-wrapper img-size" data-top="450" data-left="350">
            <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
          </div>
          <div class="img-size anm-player" data-top="336" data-left="0" data-width="750" data-height="680"></div>
        </template>
        <template v-if="adding[1] == true">
          <div class="fly-wrapper img-size" data-top="450" data-left="350">
            <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
          </div>
          <div class="img-size anm-player" data-top="336" data-left="0" data-width="750" data-height="680"></div>
        </template>
        <template v-if="adding[2] == true">
          <div class="fly-wrapper img-size" data-top="450" data-left="350">
            <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
          </div>
          <div class="img-size anm-player" data-top="336" data-left="0" data-width="750" data-height="680"></div>
        </template>
        <template v-if="adding[3] == true">
          <div class="fly-wrapper img-size" data-top="450" data-left="350">
            <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
          </div>
          <div class="img-size anm-player" data-top="336" data-left="0" data-width="750" data-height="680"></div>
        </template>
        <template v-if="adding[4] == true">
          <div class="fly-wrapper img-size" data-top="450" data-left="350">
            <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
          </div>
          <div class="img-size anm-player" data-top="336" data-left="0" data-width="750" data-height="680"></div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
    const cRoundTime = 5000;
    const cMaxScore = 400;
    const cPushtime = 150;
    const cUnitQty = 10;
    const cAjaxTime = 3000;
    import {requestService, httpChance, httpPlay, httpGetSign} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                showStrategy: false,
                beginCounter: 0,
                roundScore: 0,
                miliseconds: cRoundTime,
                adding : [false, false, false, false, false],
                addIndex : 0,
                isPushing : false,
                isAjaxing : false
            };
        },
        components : {
            'lock-screen' : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        computed: {
            seconds : function () {
                let mili = this.miliseconds;
                let frac = Math.floor(mili % 1000 / 10);
                return (mili < 10000 ? '0' : '') + Math.floor(mili / 1000) + '.' + (frac < 10 ? '0' : '') + frac;
            },
            roundTime : function () {
                return cRoundTime;
            },
            unitScore : function () {
                return cUnitQty;
            }
        },
        watch: {
            miliseconds : function (newOne, oldOne) {
                if (newOne === 0) {
                    setTimeout(() => {this.sendPlayResult();}, 1000);
                }
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
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : "系统错误，请联系客服。",
                                btnBackHome: false
                            }
                        });
                        bus.$once("closePopEvent", this.onBack);
                        return false;
                    }
                    this.showStrategy = _data.map.isFirst;
                    if (this.showStrategy) {
                        setTimeout(() => {
                            this.showStrategy = false;
                            this.beginCounter = 3;
                            this.getGameSign();
                        }, 3000);
                    } else {
                        this.beginCounter = 3;
                        this.getGameSign();
                    }
                });
            },
            getGameSign: function () {
                let rqOver = false;
                let ctdwnItv = setInterval(() => {
                    if (this.beginCounter > 1) {
                        this.beginCounter--;
                    } else {
                        if (rqOver) {
                            this.beginCounter = 0;
                            clearInterval(ctdwnItv);
                            this.gameRun();
                        }
                    }
                }, 1000);
                let params = {
                    uid: T.uid
                };
                requestService(httpGetSign, params, _data => {
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : "系统错误，请联系客服。",
                                btnBackHome: false
                            }
                        });
                        bus.$once("closePopEvent", this.onBack);
                        return false;
                    }
                    this.sign = _data.map.uuid;
                    if (this.beginCounter <= 1) {
                        setTimeout(() => {
                            this.beginCounter = 0;
                            this.gameRun();
                            clearInterval(ctdwnItv);
                        }, 100);
                    } else {
                        rqOver = true;
                    }
                });
            },
            /*gameRun: function () {
                let stClk = Date.now(), curClk;
                let timer = () => {
                    this.$nextTick(() => {
                        if (this.miliseconds < 2) {
                            this.miliseconds = 0;
                            for( let i = 0, {len} = this.adding; i < len; i++) {
                                this.adding[i] = false;
                            }
                            this.$nextTick(() => {T.setImgSize();});
                        } else {
                            curClk = Date.now();
                            this.miliseconds = Math.max(cRoundTime - (curClk - stClk), 0);
                            timer();
                        }
                    });
                }
                timer();
            },*/
            gameRun: function () {
                const sttime = Date.now();
                const ctdItv = setInterval(() => {
                    const curtime = Date.now();
                    const lefttime = Math.max(cRoundTime + sttime - curtime, 0);
                    if (lefttime < 2) {
                        clearInterval(ctdItv);
                        for (let i = 0; i < this.adding.length; i++) {
                            this.adding[i] = false;
                        }
                        this.miliseconds = 0;
                        T.setImgSize();
                    } else {
                        this.miliseconds = lefttime;
                    }
                }, 10);
            },
            onPush: function() {
                this.isPushing = true;
                setTimeout(() => {this.isPushing = false;}, cPushtime);
                let addIndex = this.addIndex;
                this.adding[addIndex] = true;
                this.$nextTick(() => {T.setImgSize();});
                if (this.addIndex + 1 == this.adding.length) {
                    this.addIndex = 0;
                } else {
                    this.addIndex++;
                }
                setTimeout(() => {
                    this.adding[addIndex] = false;
                    if (this.roundScore < cMaxScore) {this.roundScore += cUnitQty;}
                    else {this.miliseconds = 0;}
                    T.setImgSize();
                }, 300);
            },
            sendPlayResult: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let engyQty, giftType;
                const succeed = () => {
                    this.isAjaxing = false;
                    if (engyQty > 0) {
                        requirePop("showGift", {
                            props: {
                                transition : "rotate3d",
                                popState : giftType,
                                amount : engyQty,
                                highest : engyQty >= cMaxScore
                            },
                            on : {
                                "close-only-event" : this.onBack
                            }
                        });
                    } else {
                        requirePop("notify", {
                            props: {
                                transition : "bounceIn",
                                popState: 3
                            },
                            on : {
                                "close-only-event" : this.onBack
                            }
                        });
                    }
                };
                let altFlag = false;
                setTimeout(() => {
                    if (altFlag) {
                        succeed();
                    } else {
                        altFlag = true;
                    }
                }, cAjaxTime);
                let params = {
                    uid: T.uid,
                    uuid: this.sign,
                    energyType: 2,
                    energyNum: this.roundScore,
                    isMany: false
                };
                requestService(httpPlay, params, _data => {
                    const {success, errorCode, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        if (errorCode == 10009) {
                            requirePop("notify", {
                                props : {
                                    transition : "bounceIn",
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
                                    detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                    btnBackHome : false
                                }
                            });
                            bus.$once("closePopEvent", this.onBack);
                        }
                        return false;
                    }
                    engyQty = this.roundScore;
                    giftType  = _data.map.prizeType;
                    if (altFlag) {
                        succeed();
                    } else {
                        altFlag = true;
                    }
                });
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