<style lang='sass'>
  @import '../../css/global.scss';
  .cp376-play.main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper.small{
      @include contain("../../images/small-bg.jpg");
    }
    .content-wrapper.mid{
      @include contain("../../images/mid-bg.jpg");
    }
    .content-wrapper.big{
      @include contain("../../images/big-bg.jpg");
    }
    .content-wrapper.storm{
      @include contain("../../images/storm-bg.jpg");
    }
    .content-wrapper {
      position: relative;
      color: #FFF;
      .strategy,
      .mode-bar,
      .mode-icon,
      .mode-literal,
      .timer,
      .counter,
      .hongbao-window,
      .hongbao,
      .play-box,
      .fly-wrapper{
        position: absolute;
      }
      .strategy{
        @include contain("../../images/strategy.png");
        z-index: 10;
        .isee-btn{
          position: absolute;
        }
      }
      .mode-bar{
        background: #FFF;
      }
      .mode-literal.small{
        @include contain("../../images/small-play.png");
      }
      .mode-literal.mid{
        @include contain("../../images/mid-play.png");
      }
      .mode-literal.big{
        @include contain("../../images/big-play.png");
      }
      .mode-literal.storm{
        @include contain("../../images/storm-play.png");
      }
      .mode-icon.small{
        @include contain("../../images/small.png");
      }
      .mode-icon.mid{
        @include contain("../../images/mid.png");
      }
      .mode-icon.big{
        @include contain("../../images/big.png");
      }
      .mode-icon.storm{
        @include contain("../../images/storm.png");
      }
      .counter{
        background: rgb(142, 131, 141);
        color: #FFF;
        font-weight: bold;
        text-align: center;
      }
      .hlt{color: #ff6400;}
      .hongbao-window{
        width: 100%;
        overflow: hidden;
      }
      @keyframes fall{
        0% {
          transform: translate(0px, 0px);
          animation-timing-function: linear;
        }
        33% {
          animation-timing-function: linear;
          transform: translate(20%, 250%);
        }
        66% {
          animation-timing-function: linear;
          transform: translate(-20%, 500%);
        }
        100% {
          transform: translate(0px, 750%);
        }
      }
      .hongbao{
        @include contain("../../images/hongbao.png");
        animation: fall 2s infinite;
      }
      .opened-hb{
        @include contain("../../images/hongbao-open.png");
        width: 100%;
        height: 100%;
        visibility: hidden;
      }
      .hongbao.hidden{
        display: none;
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
          color: #FF0;
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
    <img v-show="0" src="../../images/hongbao-open.png">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div v-show="beginCounter > 0" class="begin-mask img-size" data-fontSize="150"><div class="counter">{{beginCounter}}</div></div>
    <div v-show="beginCounter <= 0" class="cp376-play main-section">
      <div class="img-size content-wrapper" :class="modeName" data-width="750" data-height="1334">
        <div v-show="showStrategy" class="img-size strategy" data-top="0" data-left="0" data-width="750" data-height="1334">
          <div class="img-size isee-btn" data-top="697" data-left="235" data-width="280" data-height="70" @click="onCloseStrategy"></div>
        </div>
        <div class="img-size mode-bar" data-top="30" data-left="286" data-width="198" data-height="66" data-borderRadius="33">
          <div class="img-size mode-literal" :class="modeName" data-top="20" data-left="80" data-width="102" data-height="29"></div>
        </div>
        <div class="img-size mode-icon" :class="modeName" data-top="30" data-left="268" data-width="100" data-height="115"></div>
        <div class="timer img-size" data-top="112" data-left="380" data-fontSize="30" data-lineHeight="30">{{seconds}}s</div>
        <div class="counter img-size" data-top="26" data-left="640" data-width="80" data-height="80" data-borderRadius="40" data-fontSize="30" data-lineHeight="80">{{roundScore}}</div>
        <div v-show="miliseconds > 0" class="img-size hongbao-window" data-top="230" data-left="0" :data-height="modeIndex < 3 ? 1000 : 600">
        </div>
        <div v-if="adding[0] == true" class="fly-wrapper img-size" data-top="300" data-left="620">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
        </div>
        <div v-if="adding[1] == true" class="fly-wrapper img-size" data-top="300" data-left="620">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
        </div>
        <div v-if="adding[2] == true" class="fly-wrapper img-size" data-top="300" data-left="620">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
        </div>
        <div v-if="adding[3] == true" class="fly-wrapper img-size" data-top="300" data-left="620">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
        </div>
        <div v-if="adding[4] == true" class="fly-wrapper img-size" data-top="300" data-left="620">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="30">+{{unitScore}}</div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    const cRoundTime = 5000;
    const cMaxScore = [5, 10, 15, 20];
    const cUnitQty = 1;
    const cAjaxTime = 3000;
//    const cRowNum = 9;
    const cRowNum = [9, 9, 9, 5];
//    const cRowItv = 240;
    const cRowItv = [240, 240, 240, 360];
    const cRainModes = T.Iphone ? [1, 2, 3, 4] : [1, 2, 4, 6];
    const cModeNames = ['small', 'mid', 'big', 'storm'];
    import prefixFree from '../../common/prefixfree-module.min';
    import {requestService, httpChance, httpPlay, httpGetSign} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                showStrategy: false,
                beginCounter: 0,
                modeIndex: 0,
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
            },
            modeName(){
                return cModeNames[this.modeIndex];
            }
        },
        watch: {
            miliseconds : function (newOne, oldOne) {
                if (newOne === 0) {
                    this.adding = this.adding.map(item=>false);
                    setTimeout(() => {this.sendPlayResult();}, 1000);
                }
            }
        },
        mounted(){
            prefixFree(document.documentElement);
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.getInitData();
            }
        },
        methods: {
            __beginCountdown(){
                this.beginCounter = 3;
                this.__createHongbao();
            },
            __createHongbao(){
                const isOpen = el => {
                    return el.firstChild.style.visibility == "visible";
                }
                const addOneScore = () => {
                    if (this.roundScore < cMaxScore[this.modeIndex]) {this.roundScore++;}
                    if (this.roundScore >= cMaxScore[this.modeIndex]) {this.miliseconds = 0;}
                }
                const makeHbEffect = (el, {openHongbao = setHongbaoOpen, scoreupEffect = bounceOne} = {}) => {
                    openHongbao(el);
                    scoreupEffect();
                }
                const setHongbaoOpen = el => {
                    let face = el.firstChild;
                    if (face) {
                        face.style.visibility = "visible";
                    }
                }
                const resetHongbao = evt => {
                    let face = evt.target.firstChild;
                    face.style.visibility = "hidden";
                }
                const bounceOne = () => {
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
                    }, 300);
                }
                const onTouch = (evt, [checkOpened, scoreUp, showDomEffect] = [isOpen, addOneScore, makeHbEffect]) => {
                    const el = evt.target;
                    if (checkOpened(el) == true) return;
                    scoreUp();
                    showDomEffect(el);
                };
                const createSingle = ({sign, x=0, y=0, w=203 * .7, h=182 * .7, hdl = onTouch, reset = resetHongbao} = {}) => {
                    const prt = document.querySelector(".hongbao-window");
                    let el = document.createElement("DIV");
                    el.className = "img-size hongbao hidden " + sign;
                    el.setAttribute("data-top", y);
                    el.setAttribute("data-left", x);
                    el.setAttribute("data-width", w);
                    el.setAttribute("data-height", h);
                    el.ontouchstart = hdl;

                    let face = document.createElement("DIV");
                    face.className = "opened-hb";
                    el.appendChild(face);

                    prt.appendChild(el);
                    el.onanimationiteration = reset;
                    el.addEventListener("webkitAnimationIteration", reset);
                    el.addEventListener("mozAnimationIteration", reset);
                    el.addEventListener("oanimationIteration", reset);

                }
                const createAll = (modeRowLength, rowNum) => {
                    let args = [];
                    for (let j = 0; j < rowNum; j++) {
                        const sign = 'row-' + j;
                        for (let i = 0; i < modeRowLength; i++) {
                            const x = 100 + Math.round(Math.random() * 550);
                            const y = -230 + Math.round(Math.random() * 100);
                            args.push({sign, x, y});
                        }
                    }
                    return args;
                }
                createAll(cRainModes[this.modeIndex], cRowNum[this.modeIndex]).forEach(createSingle);
            },
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
                    const {isFirst, pattern} = _data.map;
                    this.showStrategy = isFirst;
                    this.modeIndex = pattern - 1;
                    if (!this.showStrategy) {
                        this.__beginCountdown();
                        this.getGameSign();
                    }
                });
            },
            onCloseStrategy(){
                this.showStrategy = false;
                this.__beginCountdown();
                this.getGameSign();
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
            gameRun() {
                let curRow = 0;
                let timer = 0;
                const sttime = Date.now();
                const ctdItv = setInterval(() => {
                    const curtime = Date.now();
                    const lefttime = Math.max(cRoundTime + sttime - curtime, 0);
                    if (this.miliseconds == 0 || lefttime < 2) {
                        clearInterval(ctdItv);
                        this.miliseconds = 0;
                    } else {
                        if (curRow < cRowNum[this.modeIndex] && Math.round((curtime - sttime) / cRowItv[this.modeIndex]) >= timer) {
                            [].forEach.call(document.querySelectorAll(".row-" + curRow), el => {el.className = "img-size hongbao";});
                            this.$nextTick(()=>{T.setImgSize();});
                            curRow++;
                            timer++;
                        }
                        this.miliseconds = lefttime;
                    }
                    T.setImgSize();
                }, 20);
            },
            sendPlayResult: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let openQty, gift1, gift2, chanceNum, sign, mode;
                const succeed = () => {
                    this.isAjaxing = false;
                    if (openQty > 0) {
                        this.chanceNum = chanceNum;
                        this.sign = sign;
                        const others = {openQty, gift1, gift2};
                        requirePop("showGift", {
                            props : {
                                transition: 'rotate3d',
                                popState: 0,
                                highest : openQty >= cMaxScore[this.modeIndex],
                                ...others
                            },
                            on : {
                                "close-only-event" : this.onBack,
                                "replay-event" : () => {this.modeIndex = mode; this.__replay()},
                                "go-my-event" : (init='my') => {this.onBack(init);}
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
                    pattern: this.modeIndex + 1,
                    packageNum: this.roundScore,
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
                    openQty = this.roundScore;
                    const {prizeName1, prizeName2, totalchance, pattern, uuid} = _data.map;
                    gift1 = prizeName1;
                    gift2 = prizeName2;
                    chanceNum = totalchance;
                    mode = pattern - 1;
                    sign = uuid;
                    if (altFlag) {
                        succeed();
                    } else {
                        altFlag = true;
                    }
                });
            },
            __replay(){
                if (this.chanceNum < 1) {
                    requirePop("notify", {
                        props : {
                            transition : "bounceIn",
                            popState :1
                        },
                        on : {
                            "close-only-event" : this.onBack
                        }
                    });
                    return;
                }
                this.beginCounter = 3;
                this.miliseconds = cRoundTime;
                this.roundScore = 0;
                document.querySelector(".hongbao-window").innerHTML = '';
                this.__createHongbao();
                const ctdwnItv = setInterval(() => {
                    if (this.beginCounter > 1) {
                        this.beginCounter--;
                    } else {
                        this.beginCounter = 0;
                        clearInterval(ctdwnItv);
                        this.gameRun();
                    }
                }, 1000);
            },
            onBack : function (init) {
                const sub = init ? ('&init=' + init) : '';
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid + sub);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid + sub);
                }
            }
        }
    }
</script>