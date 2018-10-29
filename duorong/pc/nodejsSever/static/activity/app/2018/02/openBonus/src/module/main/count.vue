<style lang='sass' scoped>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  @import "../../vendor/photoSwipe.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/game-counting.jpg');
      color: #FFFA80;
      .timer,
      .sum,
      .myy,
      .envelop{
        position: absolute;
      }
      .timer{
        color: #ffea00;
      }
      .sum{
        width: 100%;
        text-align: center;
        color: #F7C6FF;
        font-weight: bold;
      }
    }
  }
  .envelop{
    z-index: 50;
    @include contain("../../images/envelop.png");
  }
  .countdown{
    margin: 0 auto;
    height: 100%;
    position: fixed;
    z-index: 200;
    background-color: rgba(0, 0, 0, .7);
    .section{
      width: 100%;
      text-align: center;
      color: #FFF;
    }
    .icon{
      display: inline-block;
      vertical-align: top;
      @include contain("../../images/counting-icon.png");
    }
    .second{
      vertical-align: sub;
      color: #FF0;
      font-weight: bold;
    }
  }
</style>
<template>
  <div class="main-section">
    <div v-if="inDowncounting == true" class="countdown img-size" data-width="750">
      <div class="section img-size" data-marginTop="169">
        <div class="icon img-size" data-width="275" data-height="275"></div>
      </div>
      <div class="section img-size" data-marginTop="44" data-fontSize="30" data-lineHeight="42">您有5秒时间，数到多少得多少<br>钞票可用于【兑换区】兑换豪礼</div>
      <div class="section img-size" data-marginTop="50" data-fontSize="30" data-lineHeigh="30"><span class="second img-size" data-fontSize="60">{{countNum}}</span> 秒后开始</div>
    </div>
    <lockScreen :lock="isAjaxing"></lockScreen>
    <div class="img-size content-wrapper" :class="['spring', 'summer', 'fall'][season]" data-width="750" data-height="1334">
      <div id="photo_box" class="myy img-size" data-top="367" data-left="162" data-width="484" data-height="830" @touchstart="isCounting && miliseconds > 0 && onTouchStart($event)" @touchend="isCounting && miliseconds > 0 && onTouchEnd($event, __scoreUp)" @touchmove="isCounting && miliseconds > 0 && onTouchMove($event)">
        <div>
          <div></div>
        </div>
      </div>
      <div v-show="!inInit">
        <div class="timer img-size" data-top="64" data-left="480" data-fontSize="24" data-lineHeight="24">倒计时：{{seconds}}</div>
      </div>
      <div v-show="roundScore > 0" class="sum img-size" data-top="138" data-left="0" data-fontSize="60" data-lineHeight="60">&plus;{{roundScore * 100}}</div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpCount, httpGetSign} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    import photoSwipe from '../../common/photoSwipe.js';

    const cRoundTime = 5000;
    const cMaxScore = 50;
    export default {
        data: function() {
            return {
                generatedPage: 0,
                roundScore: 0,
                inInit: true,
                miliseconds: 0,
                clockItv: undefined,
                isCounting: false,
                inDowncounting : false,
                countNum : 3,
                isAjaxing : false
            };
        },
        components : {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
            seconds : function () {
                let mili = this.miliseconds;
                let frac = Math.floor(mili % 1000 / 10);
                return (mili < 10000 ? '0' : '') + Math.floor(mili / 1000) + '"' + (frac < 10 ? '0' : '') + frac;
            }
        },
        watch: {
            inDowncounting : function (newOne, oldOne) {
                if (newOne) {
                    setTimeout(() => {T.setImgSize();}, 0);
                }
            }
        },
        mounted(){
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.miliseconds = cRoundTime;
                this.__init();
            }
        },
        methods: {
            __init : function () {
                this.__countDown();
                this.__resetHongbao();
                this.getGameSign();
            },
            __countDown: function () {
                this.inDowncounting = true;
                let cntDnItv = setInterval(() => {
                    if (this.countNum > 1) {
                        this.countNum--;
                    } else {
                        if (this.inInit == false) {
                            clearInterval(cntDnItv);
                            this.inDowncounting = false;
                            this.__gameRun();
                        }
                    }
                }, 1000);
            },
            getGameSign: function () {
                let params = {
                    uid: T.uid
                };
                requestService(httpGetSign, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg,
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.sign = _data.map.uuid;
                    this.inInit = false;
                });
            },
            __resetHongbao : function () {
                this.doc_width=$(document).width();
                photoSwipe.imgHtml = this._nextBill;
                photoSwipe.index = 0;
                photoSwipe.init();
                photoSwipe.activeEl($("#ind-0"));
                photoSwipe.index++;
                photoSwipe.load = true;
                setTimeout(() => {
                    $("#photo_box>div>div").append(this._nextBill());
                }, 100);
            },
            __gameRun : function () {
                this.isCounting = true;
                this.clockItv =
                    setInterval(() => {
                        if (this.miliseconds >= 10) {
                            this.miliseconds -= 10;
                        } else {
                            this.__endGame();
                        }
                    }, 10);
            },
            __endGame : function () {
                this.miliseconds = 0;
                clearInterval(this.clockItv);
                this.submit();
            },
            submit: function () {
                if (!T.isLogin) return false;
                let params = {
                    uid: T.uid,
                    uuid: this.sign,
                    money: this.roundScore * 100
                };
                this.isAjaxing = true;
                requestService(httpCount, params, _data => {
                    this.isAjaxing = false;
                    if (_data.success == false) {
                        if (_data.errorCode == 10008) {
                            requirePop("notify", {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 3
                                },
                                on : {
                                    "go-draw-event" : function () {
                                        window.location.replace(window.location.pathname + "#/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                                    },
                                    "close-only-event" : this.onBack
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : "系统提示",
                                    detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    btnBackHome : true
                                }
                            });
                        }
                        return false;
                    }
                    if (this.roundScore > 0) {
                        requirePop("showGift", {
                            props : {
                                transition : 'rotate3d',
                                popState : 16,
                                amount : this.roundScore * 100
                            },
                            on : {
                                "close-only-event" : this.onBack,
                                "go-xchg-event" : this.onGoXchg
                            }
                        });
                    } else {
                        requirePop("notify", {
                            props : {
                                transition : "bounceIn",
                                popState : 8
                            },
                            on : {
                                "close-only-event" : this.onBack
                            }
                        });
                    }
                });
            },
            __scoreUp : function () {
                if (++this.roundScore >= cMaxScore) {
                    this.__endGame();
                }
            },
            _nextBill : function () {
                let str='<div id="ind-'+photoSwipe.index+'"></div>';
                this.generatedPage++;
                return str;
            },
            onTouchStart : function (e) {
                if(!photoSwipe.load || !photoSwipe.run){
                    return;
                }

                var ev = e || window.event;
                photoSwipe._x_start=ev.touches[0].pageX;
                photoSwipe._y_start=ev.touches[0].pageY;
                var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
            },
            onTouchEnd : function (e, cbk) {
                if(!photoSwipe.load || !photoSwipe.run){
                    return;
                }
                var ev = e || window.event;
                photoSwipe._x_end=ev.changedTouches[0].pageX;
                photoSwipe._y_end=ev.changedTouches[0].pageY;
                var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));

                if(photoSwipe.left_val>0 && photoSwipe.left_val>this.doc_width/4-this.doc_width/4.5){
                    photoSwipe.animateMove(act_el,1, this.doc_width);
                    cbk();
                }else if(photoSwipe.left_val<0 && photoSwipe.left_val<-this.doc_width/4+this.doc_width/4.5){
                    photoSwipe.animateMove(act_el,-1, this.doc_width);
                    cbk();
                }else {
                    photoSwipe.animateReset(act_el);
                }
            },
            onTouchMove : function (e) {
                if(!photoSwipe.load || !photoSwipe.run){
                    return;
                }
                var ev = e || window.event;
                photoSwipe._x_move=ev.touches[0].pageX;
                photoSwipe._y_move=ev.touches[0].pageY;

                var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
                photoSwipe.top_val=parseFloat(photoSwipe._y_move)-parseFloat(photoSwipe._y_start);
                photoSwipe.left_val=parseFloat(photoSwipe._x_move)-parseFloat(photoSwipe._x_start);

                act_el.css({"transform":"translate3d("+photoSwipe.left_val+"px,"+photoSwipe.top_val+"px,0px)","transition-duration":"0s"});
            },
            onGoXchg : function () {
                let goUrl = window.location.pathname + "#/xchg?";
                if (T.wap) {
                    goUrl += "wap=true&uid=" + T.uid;
                } else {
                    goUrl += "uid=" + T.uid;
                }
                goUrl += "&from=draw";
                window.location.replace(goUrl);
            },
            onBack : function () {
                let goUrl = window.location.pathname + "#/" + T.getQueryString("from") + "?";
                if (T.wap) {
                    goUrl += "wap=true&uid=" + T.uid;
                } else {
                    goUrl += "uid=" + T.uid;
                }
                window.location.replace(goUrl);
            }
        }
    }
</script>