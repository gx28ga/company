<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/game-bg.jpg');
      .back-btn, .dashboard{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .dashboard{
        position: relative;
        background-color: #8D37C9;
        color: #FFF;
        .small-smile{
          display: inline-block;
          vertical-align: middle;
          @include contain("../../images/smile-face.png");
          background-position: center;
        }
        .timer{
          position: absolute;
        }
      }
      .play-box{/*border: 1px solid red;*/
        overflow-y: hidden;
        text-align: center;
        margin: 0 auto;
        .face{
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          div{
            display: inline-block;
          }
          .check{
            @include contain("../../images/check.png");
            background-position: center;
          }
          .fork{
            @include contain("../../images/fork.png");
            background-position: center;
          }
        }
        .face:last-child{
          margin-right: 0!important;
        }
        .face.f0{
          @include contain("../../images/f0.png");
        }
        .face.f0-gold{
          @include contain("../../images/f0-gold.png");
        }
        .face.f1{
          @include contain("../../images/f1.png");
        }
        .face.f2{
          @include contain("../../images/f2.png");
        }
        .face.f3{
          @include contain("../../images/f3.png");
        }
        .face.f4{
          @include contain("../../images/f4.png");
        }
      }
      .play-box > div{
        display: inline-block;
        position: relative;
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
</style>
<template>
  <div>
    <div v-show="!gameBegin" class="begin-mask img-size" data-fontSize="150"><div class="counter">{{beginCounter}}</div></div>
    <div v-show="gameBegin" class="main-section">
      <div class="img-size content-wrapper" data-width="750" data-height="1334">
        <!--<div class="back-btn img-size" data-top="-10" data-left="20" @click="onBack">&laquo;</div>-->
        <div class="dashboard img-size" data-top="40" data-left="170" data-borderRadius="45" data-width="480" data-height="95" data-paddingLeft="35" data-paddingRight="35"><!--
     --><div class="small-smile img-size" data-height="95" data-width="40" data-fontSize="30" data-lineHeight="95"></div><span> &times; {{score}}</span><span class="timer img-size" data-right="35" data-fontSize="24" data-lineHeight="95">游戏计时 {{seconds}} 秒</span>
        </div>
        <div v-show="miliseconds > 0 && !hasWrong" class="play-box img-size" data-marginTop="220" data-height="560">
          <div v-show="showGame == true" v-for="(rowData, rowIndex)  in faceBox" :key="rowData.rowno" class="row img-size" data-top="-90" data-marginBottom="60">
            <!--<div v-for="(face, colIndex) in rowData.data" :key="face.faceno" class="face img-size" :class="face.type | className(investEnough)" data-width="90" data-height="90" data-marginRight="50" @click="onPush(rowIndex, colIndex)">-->
            <div v-for="(face, colIndex) in rowData.data" :key="face.faceno" class="face img-size" :class="face.type | className(investEnough)" data-width="90" data-height="90" data-marginRight="50" @click="onPush(rowData.rowno, colIndex)">
              <div v-show="face.status > 0" class="check img-size" data-height="87" data-width="77"></div>
              <div v-show="face.status < 0" class="fork img-size" data-height="87" data-width="64"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpChance, httpMyInvest, httpPlay, httpGetSign} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                gameBegin: false,
                beginCounter: 3,
                chanceNum : 0,
                investEnough: false,
                clockItv : undefined,
                score: 0,
                roundScore: 0,
                hasWrong: false,
                isRoundOver: false,
                miliseconds: 60000,
                faceBox: [],
                rowCounter: 0,
                showGame: false,
                overReason: undefined,
                isOnBusy : false
            };
        },
        filters: {
            className : function (type, bigInvest) {
                if (type === 0) {
                    return bigInvest ? 'f0-gold' : 'f0';
                } else {
                    return 'f' + type;
                }
            }
        },
        computed: {
            seconds : function () {
                let mili = 60000 - this.miliseconds;
                let frac = Math.floor(mili % 1000 / 10);
                return (mili < 10000 ? '0' : '') + Math.floor(mili / 1000) + '.' + (frac < 10 ? '0' : '') + frac;
            }
        },
        watch: {
            miliseconds : function (newOne, oldOne) {
                if (newOne === 0) {
                    this.sendPlayResult();
                }
            },
            hasWrong: function (newOne, oldOne) {
                if (newOne === true) {
                    this.sendPlayResult();
                }
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            if (!T.isLogin) {
                T.login();
            } else {
                this.getInitData();
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
            getInitData: function () {
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
                    this.score = _data.map.smileTotal;
                    if (this.chanceNum <= 0) {
                        requirePop('playResult', {
                            props : {
                                transition : 'bounceIn',
                                popState : 1
                            }
                        });
                        bus.$on("closePopEvent", () => {
                            this.onBack();
                        });
                        return false;
                    }
//                    this.gameRun();
                    this.getMyInvest();
                });
            },
            getMyInvest: function () {
                let params = {uid: T.uid};
                this.__requestService(httpMyInvest, params, _data => {
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
                    if (_data.map.amountDistance <= 0) {
                        this.investEnough = true;
                    }
                    this.getGameSign();
                });
            },
            getGameSign: function () {
                let params = {
                    uid: T.uid
                };
                this.__requestService(httpGetSign, params, _data => {
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
                    this.gameRun();
                });
            },
            gameRun: function () {
                function newRow(obj) {
                    var arr = [];
                    for(let i = 0; i < 4; i++) {
                        let item = Math.floor(Math.random() * 5);
                        if (item === 0) {
                            if (obj.scorePoint >= 80) {
                                item = Math.ceil(Math.random() * 4);
                            }
                            obj.scorePoint++;
                        }
                        arr.push({faceno: i + 1, type:item, status: 0});
                    }
                    return {rowno: ++obj.rowCounter, data: arr};
                }
                this.scorePoint = 0;
                this.faceBox.push(newRow(this));
                setTimeout(() => {
                    T.setImgSize();
                    var playBoxHgt = document.getElementsByClassName("play-box")[0].style.height;
                    playBoxHgt = parseFloat(playBoxHgt.substr(0, playBoxHgt.length - 2));
                    var onePix = 100 / playBoxHgt;

                    function topStyleToPctValue(top) {
                        if (top.indexOf('px') != -1) {
                            top = parseInt(top.substr(0, top.length - 2)) * 100 / playBoxHgt;
                        } else {
                            top = parseFloat(top.substr(0, top.length - 1));
                        }
                        return top;
                    }

                    var itv = setInterval(() => {
                        if (this.beginCounter > 1) {
                            this.beginCounter--;
                        } else {
                            clearInterval(itv);
                            this.gameBegin = true;
                            this.clockItv = setInterval(() => {
                                if (this.miliseconds < 10) {
                                    clearInterval(this.clockItv);
                                    this.overReason = 0;
                                    return;
                                }

                                if (this.miliseconds % 20 === 0) {
                                    //下移所有的行
                                    let clt = document.getElementsByClassName("row");
                                    for (var i = 0; i < clt.length; i++) {
                                        let before = clt[i].style.top;
                                        before = topStyleToPctValue(before);
                                        let acct = 0;
                                        if (!this.investEnough) {
                                            let acctStart = 52500;
                                            if (this.miliseconds < acctStart && this.miliseconds % 40 == 0) {
//                                                acct = onePix * Math.ceil((acctStart - this.miliseconds) / 1000);
                                                acct = onePix * Math.ceil((acctStart - this.miliseconds) / 1000) * 0.3;
                                            }
                                        } else {
                                            let acctStart = 45000;
                                            if (this.miliseconds % 40 == 0) {
                                                if (this.miliseconds < acctStart) {
//                                                    acct = onePix * Math.ceil((acctStart - this.miliseconds) / 1000);
                                                    acct = onePix * Math.ceil((acctStart - this.miliseconds) / 1000) * 0.3;
                                                }
                                            }
                                        }
                                        /*if (!this.investEnough) {
                                            if (this.miliseconds < 10000 && this.miliseconds % 40 == 0) {
                                                acct = onePix * 1;
                                            }
                                            if (this.miliseconds < 5000 && this.miliseconds % 40 == 0) {
                                                acct = onePix * 2;
                                            }
                                        } else {
                                            if (this.miliseconds % 40 == 0) {
                                                if (this.miliseconds < 8000) {
                                                    acct = onePix * 2;
                                                } else if (this.miliseconds < 6000) {
                                                    acct = onePix * 3;
                                                } else if (this.miliseconds < 4000) {
                                                    acct = onePix * 4;
                                                }
                                            }
                                        }*/
//                                        clt[i].style.top = before + onePix * 3 + acct + '%';
                                        clt[i].style.top = before + onePix * 2 + acct + '%';
                                    }
                                    //有漏掉未点的笑脸游戏结束
                                    if (this.faceBox.length > 5) {
                                        let tailIndex = this.faceBox.length - 1;
                                        let lastRow = this.faceBox[tailIndex].data;
                                        let wrongBox = lastRow.filter((face, i) => {
                                            return face.type == 0 && face.status == 0;
                                        });
                                        if (wrongBox && wrongBox.length > 0) {
                                            this.hasWrong = true;
                                            this.overReason = 2;
                                            clearInterval(this.clockItv);
                                            return;
                                        }
                                    }
                                    //第一行空出时追加新的行数据
                                    clt = document.getElementsByClassName("row");
                                    let last = this.faceBox.length - 1;
                                    let offset = clt[last].style.top;
                                    offset = topStyleToPctValue(offset);
                                    if (offset - 15 * onePix >= 0) {
                                        this.faceBox.unshift(newRow(this));
                                        this.faceBox = this.faceBox.slice(0, 7);
                                        T.setImgSize();
                                        //遮盖第一行出现的抖动
                                        if (this.showGame == false && this.faceBox.length > 1) {
                                            this.showGame = true;
                                        }
                                    }
                                }

                                this.miliseconds -= 10;
                            }, 10);
                        }
                    }, 1000);
                }, 10);
            },
            onPush: function(rowno, col) {
                if (this.isRoundOver) return;
                let row = -1;
                for (let i = 0; i < this.faceBox.length; i++) {
                    if (this.faceBox[i].rowno == rowno) {
                        row = i;
                        break;
                    }
                }
                if (row >= 0) {
                    if (this.faceBox[row].data[col].status != 0) return;
                    if (this.faceBox[row].data[col].type == 0){
                        this.faceBox[row].data[col].status = 1;
                        this.score++;
                        this.roundScore++;
                    } else {
                        this.faceBox[row].data[col].status = -1;
//                    this.hasWrong = true;
                        clearInterval(this.clockItv);
                        this.isRoundOver = true;
                        this.overReason = 1;
                        setTimeout(() => {this.hasWrong = true;}, 2000);
//                    this.miliseconds = 0;
                    }
                    this.faceBox = this.faceBox.slice(0);
                }
            },
            /*onPush: function(row, col) {
                if (this.faceBox[row].data[col].status != 0) return;
                if (this.faceBox[row].data[col].type == 0){
                    this.faceBox[row].data[col].status = 1;
                    this.score++;
                    this.roundScore++;
                } else {
                    this.faceBox[row].data[col].status = -1;
//                    this.hasWrong = true;
                    clearInterval(this.clockItv);
                    setTimeout(() => {this.hasWrong = true;}, 150000);
//                    this.miliseconds = 0;
                }
                this.faceBox = this.faceBox.slice(0);
            },*/
            sendPlayResult: function () {
                if (!T.isLogin) return false;
                let params = {
                    uid: T.uid,
                    uuid: this.sign,
                    smileNum: this.roundScore
                };
                this.__requestService(httpPlay, params, _data => {
                    if (_data.success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : "系统提示",
                                detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                btnBackHome : true
                            }
                        });
                        return false;
                    }
                    this.chanceNum = _data.map.totalchance;
                    this.score = _data.map.smileTotal;
                    requirePop('playResult', {
                        props: {
                            transition : 'rotate3d',
                            popState : 0,
                            chanceNum : this.chanceNum,
                            investEnough : this.investEnough,
                            score : this.score,
                            roundScore : this.roundScore,
                            overType : this.overReason
                        }
                    });
                    bus.$on("closePopEvent", () => {
                        this.onBack();
                    });
                });
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