<style lang='sass' scoped>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  @import "../../css/ft-carousel.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/game.jpg');
      color: #FFF;
      span{
        color: #ffde00;
      }
      .strategy-bg,
      .instruct,
      .i-see-btn,
      .nav,
      .chance,
      .wish-area,
      .wishing-wrapper,
      .wish-times,
      .least-wish-comment,
      .play-btn,
      .back-link{
        position: absolute;
      }
      .strategy-bg{
        background-color: rgba(0, 0, 0, .7);
        width: 100%;
        height: 100%;
        z-index: 100;
        .instruct{
          @include contain("../../images/strategy.png");
        }
      }
      .wish-area{
        width: 100%;
        text-align: center;
        .carousel-item{
          position: relative;
          text-align: center;
          div{
            display: inline-block;
            vertical-align: middle;
          }
          .aladdin{
            @include contain("../../images/big-aladdin.png");
            background-position: top center;
            position: relative;
          }
          .meteor{
            @include contain("../../images/big-meteor.png");
            background-position: top center;
            position: relative;
          }
          .dragon-ball{
            @include contain("../../images/big-dragon-ball.png");
            background-position: top center;
            position: relative;
          }
          .guanyin{
            @include contain("../../images/big-guanyin.png");
            background-position: top center;
            position: relative;
          }
          .floating-bottle{
            @include contain("../../images/big-floating-bottle.png");
            background-position: top center;
            position: relative;
          }
          .wish-times{
            width: 100%;
            text-align: center;
          }
        }
        .carousel-item:after{
          display: inline-block;
          vertical-align: middle;
          content: '';
          width: 0;
          height: 100%;
        }
      }
      .hilt-least{
        color: #ff00d8;
      }
      .nav{
        @include contain("../../images/nav.png");
      }
      .prev, .next{
        @extend .nav;
      }
      .prev{
        transform: rotate(180deg);
      }
      .least-wish-comment{
        width: 100%;
        color: #fff6b8;
        text-align: center;
      }
      .wishing-wrapper{
        width: 100%;
        text-align: center;
        .wish-lgt{
          display: inline-block;
          vertical-align: middle;
          @include contain("../../images/wish-light.png");
        }
        .wish-hand-wrapper{
          position: absolute;
          z-index: 10;
          width: 100%;
          height: 100%;
          text-align: center;
          .wish-hand{
            display: inline-block;
            vertical-align: middle;
            @include contain("../../images/wish-hand.png");
          }
        }
      }
      .wishing-wrapper:after, .wish-hand-wrapper:after{
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 0;
        height: 100%;
      }
      .chance{
        width: 100%;
        text-align: center;
      }
      .play-once, .play-ten{
        @extend .play-btn;
      }
    }
  }
  /*.lock-screen{
    z-index: 300;
    margin : 0 auto;
    height: 100%;
    position: fixed;
    div{
      margin: 0 auto;
      @include contain("../../images/busy.gif");
    }
  }*/
</style>
<template>
  <div class="main-section">
    <!--<div v-show="isAjaxing" class="lock-screen img-size" data-width="750">
      <div class="img-size" data-marginTop="440" data-width="200" data-height="200"></div>
    </div>-->
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="img-size content-wrapper" data-width="750" data-height="1334">
      <div v-show="isFirst == true" class="strategy-bg">
        <div class="instruct img-size" data-top="0" data-left="0" data-width="750" data-height="1334"></div>
        <div class="i-see-btn img-size" data-top="1105" data-left="260" data-width="210" data-height="75" @click="isFirst = false"></div>
      </div>
      <div class="wish-area img-size" data-top="175" data-height="680" data-fontSize="140" data-lineHeight="750">
        <div class="ft-carousel" id="carousel">
          <ul class="carousel-inner" @touchstart="isWishing || onTouchStart($event)" @touchend="isWishing || onTouchEnd($event)">
            <li class="carousel-item">
              <div class="aladdin img-size" data-top="-60" data-width="601" data-height="512"></div><!--
           --><div class="wish-times img-size" data-bottom="30" data-left="0" data-fontSize="36" data-lineHeight="42">已被许愿次数：<span>{{wishArray[0]}}</span><span v-show="leastWishIndex == 0" class="hilt-least">（当前最少）</span></div>
            </li>
            <li class="carousel-item">
              <div class="meteor img-size" data-top="-60" data-width="568" data-height="354"></div><!--
           --><div class="wish-times img-size" data-bottom="30" data-left="0" data-fontSize="36" data-lineHeight="42">已被许愿次数：<span>{{wishArray[1]}}</span><span v-show="leastWishIndex == 1" class="hilt-least">（当前最少）</span></div>
            </li>
            <li class="carousel-item">
              <div class="dragon-ball img-size" data-top="-60" data-width="536" data-height="404"></div><!--
           --><div class="wish-times img-size" data-bottom="30" data-left="0" data-fontSize="36" data-lineHeight="42">已被许愿次数：<span>{{wishArray[2]}}</span><span v-show="leastWishIndex == 2" class="hilt-least">（当前最少）</span></div>
            </li>
            <li class="carousel-item">
              <div class="guanyin img-size" data-top="-60" data-width="573" data-height="576"></div><!--
           --><div class="wish-times img-size" data-bottom="30" data-left="0" data-fontSize="36" data-lineHeight="42">已被许愿次数：<span>{{wishArray[3]}}</span><span v-show="leastWishIndex == 3" class="hilt-least">（当前最少）</span></div>
            </li>
            <li class="carousel-item">
              <div class="floating-bottle img-size" data-top="-60" data-width="365" data-height="475"></div><!--
           --><div class="wish-times img-size" data-bottom="30" data-left="0" data-fontSize="36" data-lineHeight="42">已被许愿次数：<span>{{wishArray[4]}}</span><span v-show="leastWishIndex == 4" class="hilt-least">（当前最少）</span></div>
            </li>
          </ul>
          <div class="carousel-prev-btn nav prev img-size" data-top="260" data-left="20" data-width="65" data-height="106" @click="isWishing || onNav(-1)"></div>
          <div class="carousel-next-btn nav next img-size" data-top="260" data-right="20" data-width="65" data-height="106" @click="isWishing || onNav(1)"></div>
        </div>
      </div>
      <div v-show="isWishing" class="wishing-wrapper img-size" data-top="260" data-height="550">
        <div class="wish-lgt pulse-slow img-size" data-width="736" data-height="669"></div><!--
     --><div class="wish-hand-wrapper img-size" data-top="0" data-left="0">
          <div class="wish-hand scale-bounce img-size" data-width="307" data-height="295"></div>
        </div>
      </div>
      <div v-show="curIndex == leastWishIndex" class="least-wish-comment img-size" data-top="850" data-left="0" data-fontSize="30" data-lineHeight="30">（向Ta许愿有机会最终获得现金奖励）</div>
      <div v-show="isAjaxing == false">
        <div class="chance img-size" data-top="1070" data-fontSize="36" data-lineHeight="36">您剩余机会：<span>{{chanceNum}}</span> 次</div>
        <div class="play-once img-size" data-top="935" data-left="67" data-width="270" data-height="101" @click="isWishing || onPlayOnce()"></div>
        <div class="play-ten img-size" data-top="935" data-left="380" data-width="270" data-height="101" @click="isWishing || onPlayTen()"></div>
        <div class="back-link img-size" data-top="1122" data-left="570" data-width="155" data-height="43" @click="isWishing || onBack()"></div>
      </div>
    </div>
  </div>
</template>
<script>
    import {/*tempReqSvc, */requestService, httpChance, httpPlay} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    import '../../plug/ft-carousel.min';

    const cWishObjAmt = 5;
    const cWishingTime = 5000;
    const cWishObjName = ['阿拉丁神灯', '流星', '七龙珠', '观世音', '漂流瓶'];
    export default {
        data: function() {
            return {
                isFirst : false,
                chanceNum : 0,
                isAjaxing : false,
                wishNumbers: undefined,
                leastWishIndex: -1,
                curIndex: 0,
                stPosX: 0,
                edPosX: 0,
                stPosY: 0,
                edPosY: 0,
                isWishing : false,
                wishingOver: true
            };
        },
        components : {
            "lockScreen" : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        computed: {
            wishArray : function () {
                let obj = this.wishNumbers;
                if (obj){
                    let arr = [];
                    arr.push(Number(obj.light) ? Number(obj.light) : 0);
                    arr.push(Number(obj.meteor) ? Number(obj.meteor) : 0);
                    arr.push(Number(obj.longzhu) ? Number(obj.longzhu) : 0);
                    arr.push(Number(obj.guanyin) ? Number(obj.guanyin) : 0);
                    arr.push(Number(obj.bottle) ? Number(obj.bottle) : 0);
                    return arr;
                } else {
                    return [];
                }
            },
            wishObjNames : function () {
                return cWishObjName;
            },
            /*leastWishIndex : function () {
                let idx = 0;
                let lsnum = 0;
                let arr = this.wishArray;
                if (arr.length > 0) {
                    lsnum = arr[0]
                    for (let i = 1; i < arr.length; i++) {
                        if (lsnum > arr[i]) {
                            lsnum = arr[i];
                            idx = i;
                        }
                    };
                }
                return idx;
            }*/
        },
        mounted(){
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                jQuery("#carousel").FtCarousel({
                    index: 0,
                    buttons: false,
                    auto: false,
                    indicators: false
                });
                this.getInitData();
            }
        },
        methods: {
            getInitData: function (refresh) {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpChance, params, _data => {
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
                    this.isFirst = _data.map.isFirst;
                    this.chanceNum = _data.map.totalchance;
                    this.wishNumbers = _data.map.wishNumbers;
                    this.leastWishIndex = Number(_data.map.leastWish) - 1;
                    /*if (this.leastWishIndex > this.curIndex) {
                        let next = document.getElementsByClassName("carousel-next-btn")[0];
                        let offset = this.leastWishIndex - this.curIndex;
                        for (let i = 0; i < offset; i++) {
                            next.click();
                        }
                    } else if (this.leastWishIndex < this.curIndex) {
                        let prev = document.getElementsByClassName("carousel-prev-btn")[0];
                        let offset = this.curIndex - this.leastWishIndex;
                        for (let i = 0; i < offset; i++) {
                            prev.click();
                        }
                    }*/
                    if (!refresh) {
                        setTimeout(() => {
                            let next = document.getElementsByClassName("carousel-next-btn")[0];
                            let offset = this.leastWishIndex;
                            for (let i = 0; i < offset; i++) {
                                next.click();
                            }
                        }, 100);
                    }
                    /*if (this.chanceNum <= 0) {
                        requirePop("chanceError", {
                            props : {
                                transition : 'bounceIn',
                                popState : 1
                            }
                        });
                        bus.$once("closePopEvent", () => {
                            this.onBack();
                        });
                        return false;
                    }*/
                    this.isAjaxing = false;
                });
            },
            onPlayOnce: function () {
                if (this.chanceNum <= 0) {
                    requirePop("chanceError", {
                        props : {
                            transition : 'bounceIn',
                            popState : 1
                        }
                    });
                    bus.$once("closePopEvent", () => {this.onBack();});
                    return;
                }
                this.isWishing = true;
                this.wishingOver = false;
                setTimeout(() => {this.wishingOver = true;}, cWishingTime);
                this.submitPlayOnce();
            },
            submitPlayOnce: function () {
                if (!T.isLogin) return false;
                let params = {
                    uid: T.uid,
                    vowId: this.curIndex + 1,
                    isMany: false
                };
                requestService(httpPlay, params, _data => {
                    let itv = setInterval(() => {
                        if (this.wishingOver == true) {
                            clearInterval(itv);
                            this.isWishing = false;
                            if (_data.success == false) {
                                if (_data.errorCode == 10000) {
                                    requirePop("chanceError", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState :1
                                        }
                                    });
                                    bus.$once("closePopEvent", () => {
                                        this.onBack();
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
                            requirePop("showGift", {
                                props : {
                                    transition : "fadeIn",
                                    wishObject : cWishObjName[this.curIndex],
                                    giftType : _data.map.prizeType
                                },
                                on : {
                                    'close-pop' : this.getInitData
                                }
                            });
                        }
                    }, 10);
                });
            },
            onPlayTen : function () {
                if (this.chanceNum < 10) {
                    requirePop("chanceError", {
                        props : {
                            transition : 'bounceIn',
                            popState : this.chanceNum < 1 ? 1 : 2
                        }
                    });
                    if (this.chanceNum < 1) {
                        bus.$once("closePopEvent", () => {this.onBack();});
                    }
                    return;
                }
                this.isWishing = true;
                this.wishingOver = false;
                setTimeout(() => {this.wishingOver = true;}, cWishingTime);
                this.submitPlayTen();
            },
            submitPlayTen : function () {
                let params = {
                    uid : T.uid,
                    vowId : this.curIndex + 1,
                    isMany : true
                };
                requestService(httpPlay, params, _data => {
                    let itv = setInterval(() => {
                        if (this.wishingOver == true) {
                            clearInterval(itv);
                            this.isWishing = false;
                            if (_data.success == false) {
                                if (_data.errorCode == 10000) {
                                    requirePop("chanceError", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : 1
                                        }
                                    });
                                    bus.$once("closePopEvent", () => {
                                        this.onBack();
                                    });
                                } else if (_data.errorCode == 10001) {
                                    requirePop("chanceError", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : 2
                                        }
                                    });
                                } else {
                                    requirePop("warning", {
                                        props : {
                                            transition : "bounceIn",
                                            title : '系统提示',
                                            detail : _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                            btnBackHome : true
                                        }
                                    });
                                }
                                return false;
                            }
                            requirePop("showGift", {
                                props : {
                                    transition : 'fadeIn',
                                    wishObject : cWishObjName[this.curIndex],
                                    wishTen : true
                                },
                                on : {
                                    'close-pop' : this.getInitData,
                                    'go-to-rank' : function () {
                                        let pathUrl = window.location.pathname + "#/rank/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=play";
                                        window.location.replace(pathUrl);
                                    }
                                }
                            });
                        }
                    }, 10);
                });
            },
            onTouchStart : function(evt) {
                this.stPosX = evt.changedTouches[0].clientX;
                this.stPosY = evt.changedTouches[0].clientY;
            },
            onTouchEnd : function(evt) {
                let last = evt.changedTouches.length - 1;
                this.edPosX = evt.changedTouches[last].clientX;
                this.edPosY = evt.changedTouches[last].clientY;
                let lenX = Math.abs(this.edPosX - this.stPosX);
                if(lenX < 20 || Math.abs(this.edPosY - this.stPosY) > lenX) return;
                if (this.edPosX > this.stPosX ) {
                    document.getElementsByClassName("carousel-prev-btn")[0].click();
                } else {
                    document.getElementsByClassName("carousel-next-btn")[0].click();
                }
            },
            onNav : function (offset) {
                let idx = this.curIndex + offset;
                if (idx >= cWishObjAmt) {
                    idx = 0;
                } else if (idx < 0) {
                    idx = cWishObjAmt - 1;
                }
                this.curIndex = idx;
            },
            onBack : function () {
                if (this.isWishing) return;
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid);
                }
            }
        }
    }
</script>