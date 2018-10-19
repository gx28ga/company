<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/game.jpg');
      color: #FFFA80;
      .timer, .counter, .play-box, .fly-wrapper{
        position: absolute;
      }
      .play-box{
        overflow-y: hidden;
        text-align: center;
        width: 100%;
        .santa{
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
        .santa:last-child{
          margin-right: 0!important;
        }
        .santa.genuine{
          @include contain("../../images/santa.png");
        }
        .santa.counterfeit{
          @include contain("../../images/deer.png");
        }
      }
      .play-box > div{
        display: inline-block;
        position: relative;
      }
      .fly-wrapper{
        -webkit-animation: clockwise .9s linear forwards;
        animation: clockwise .9s linear forwards;
        transform-origin: 90px -30px;
        .fly-box{
          transform: rotate(-90deg);
          display: block;
          color:red;
          -webkit-animation: counter-clockwise .9s linear forwards;
          animation: counter-clockwise .9s linear forwards;
          div{
            display: inline-block;
            vertical-align: middle;
          }
          .score{
            transform: rotate(-90deg);
          }
          .gift{
            transform: rotate(-90deg);
            @include contain("../../images/small-box.png");
            height: 100%;
            background-position: center;
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
    <div v-show="!gameBegin" class="begin-mask img-size" data-fontSize="150"><div class="counter">{{beginCounter}}</div></div>
    <div v-show="gameBegin" class="main-section">
      <div class="img-size content-wrapper" data-width="750" data-height="1336">
        <div class="timer img-size" data-top="40" data-left="115" data-fontSize="24" data-lineHeight="55">倒计时： {{seconds}} 秒</div>
        <div class="counter img-size" data-top="40" data-left="535" data-fontSize="24" data-lineHeight="55">本次成绩： {{roundScore}}</div>
        <div v-show="miliseconds > 0 && !hasWrong" class="play-box img-size" data-top="200">
          <div v-for="(rowData, rowIndex)  in roundData" :key="rowData.rowno" class="row img-size" data-top="0" data-marginBottom="60">
            <div v-show="roundScore < 10" v-for="(item, colIndex) in rowData.data" :key="item.col" class="santa img-size" :class="{0: 'counterfeit', 1: 'genuine', 2: '', 3: ''}[item.val]" data-width="160" data-height="160" data-marginRight="70" @click="onPush(rowData.rowno, colIndex)">
              <!--<div v-show="face.status > 0" class="check img-size" data-height="87" data-width="77"></div>-->
              <div v-show="item.status < 0" class="fork img-size" data-height="87" data-width="64"></div>
            </div>
            <div v-show="roundScore >= 10" v-for="(item, colIndex) in rowData.data" :key="item.col" class="santa img-size" :class="{0: 'counterfeit', 1: 'counterfeit', 2: '', 3: ''}[item.val]" data-width="160" data-height="160" data-marginRight="70" @click="onPush(rowData.rowno, colIndex)">
              <!--<div v-show="face.status > 0" class="check img-size" data-height="87" data-width="77"></div>-->
              <div v-show="item.status < 0" class="fork img-size" data-height="87" data-width="64"></div>
            </div>
          </div>
        </div>
        <div v-if="adding[0] == true" class="fly-wrapper img-size" data-top="270" data-left="575">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="48">+1</div></div>
        </div>
        <div v-if="adding[1] == true" class="fly-wrapper img-size" data-top="270" data-left="575">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="48">+1</div></div>
        </div>
        <div v-if="adding[2] == true" class="fly-wrapper img-size" data-top="270" data-left="575">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="48">+1</div></div>
        </div>
        <div v-if="adding[3] == true" class="fly-wrapper img-size" data-top="270" data-left="575">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="48">+1</div></div>
        </div>
        <div v-if="adding[4] == true" class="fly-wrapper img-size" data-top="270" data-left="575">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="score img-size" data-fontSize="48">+1</div></div>
        </div>


        <div v-if="adding[0] == true" class="fly-wrapper img-size" data-top="270" data-left="625">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="gift img-size" data-width="60"></div></div>
        </div>
        <div v-if="adding[1] == true" class="fly-wrapper img-size" data-top="270" data-left="625">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="gift img-size" data-width="60"></div></div>
        </div>
        <div v-if="adding[2] == true" class="fly-wrapper img-size" data-top="270" data-left="625">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="gift img-size" data-width="60"></div></div>
        </div>
        <div v-if="adding[3] == true" class="fly-wrapper img-size" data-top="270" data-left="625">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="gift img-size" data-width="60"></div></div>
        </div>
        <div v-if="adding[4] == true" class="fly-wrapper img-size" data-top="270" data-left="625">
          <div class="fly-box img-size" data-width="40" data-height="40"><div class="gift img-size" data-width="60"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpChance, /*httpMyInvest, */httpPlay, httpGetSign} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                gameBegin: false,
                beginCounter: 3,
                chanceNum : 0,
//                investEnough: false,
                clockItv : undefined,
//                score: 0,
                roundScore: 0,
                hasWrong: false,
                isRoundOver: false,
                miliseconds: 5000,
                roundData: [],
//                adding: false,
                adding : [false, false, false, false, false],
                addIndex : 0,
                isOnBusy : false
            };
        },
        computed: {
            seconds : function () {
                let mili = this.miliseconds;
                let frac = Math.floor(mili % 1000 / 10);
                return (mili < 10000 ? '0' : '') + Math.floor(mili / 1000) + '.' + (frac < 10 ? '0' : '') + frac;
            }
        },
        watch: {
            miliseconds : function (newOne, oldOne) {
                if (newOne === 0) {
//                    this.sendPlayResult();
                    setTimeout(() => {this.sendPlayResult();}, 1000);
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
                    if (this.chanceNum <= 0) {
                        requirePop('playResult', {
                            props : {
                                transition : 'bounceIn',
                                popState : 1
                            }
                        });
                        bus.$once("closePopEvent", () => {
                            this.onBack();
                        });
                        return false;
                    }
//                    this.getMyInvest();
                    this.getGameSign();
                });
            },
            /*getMyInvest: function () {
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
                    if (_data.map.gap == 0) {
                        this.investEnough = true;
                        this.miliseconds = 20000;
                    }
                    this.getGameSign();
                });
            },*/
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
                function renew() {
                    var arr = [];
                    for(let i = 0; i < 4; i++) {
                        var row = [];
                        for (let k = 0; k < 3; k++) {
                            let val = Math.floor(Math.random() * 4);
                            row.push({col: k + 1, val: val, status: 0});
                        }
                        arr.push({rowno: i + 1, data: row});
                    }
                    return arr;
                }

                var itv = setInterval(() => {
                    if (this.beginCounter > 1){
                        this.beginCounter--;
                    } else {
                        clearInterval(itv);
                        this.gameBegin = true;
                        let newRound = renew();
                        this.roundData = newRound.slice(0);
                        setTimeout(() => {T.setImgSize();}, 0);
                        this.clockItv = setInterval(() => {
                            if (this.miliseconds < 5) {
                                clearInterval(this.clockItv);
                            } else {
                                if (this.miliseconds % 550 === 0) {
                                    let newRound = renew();
                                    this.roundData = newRound.slice(0);
                                    T.setImgSize();
                                }
                                this.miliseconds -= 10;
                            }
                        }, 10);
                    }
                }, 1000);
            },
            onPush: function(rowno, col) {
                if (this.isRoundOver || this.roundScore >= 10) return;
                let row = -1;
                for (let i = 0; i < this.roundData.length; i++) {
                    if (this.roundData[i].rowno == rowno) {
                        row = i;
                        break;
                    }
                }
                if (row >= 0) {
                    if (this.roundData[row].data[col].status != 0) return;
                    if (this.roundData[row].data[col].val == 1){
                        this.roundData[row].data[col].status = 1;
//                        this.adding = true;
                        let addIndex = this.addIndex;
                        this.adding[addIndex] = true;
                        setTimeout(() => {T.setImgSize();}, 160);
                        if (this.addIndex + 1 == this.adding.length) {
                            this.addIndex = 0;
                        } else {
                            this.addIndex++;
                        }
                        setTimeout(() => {
//                            this.adding = false;
                            this.adding[addIndex] = false;
//                            this.score++;
                            if (this.roundScore < 10) {this.roundScore++};
                            T.setImgSize();
                        }, 900);
                    }/* else if (this.roundData[row].data[col].val == 0) {
                        this.roundData[row].data[col].status = -1;
                        clearInterval(this.clockItv);
                        this.isRoundOver = true;
                        setTimeout(() => {this.hasWrong = true;}, 2000);
                    }*/
                    this.roundData = this.roundData.slice(0);
                }
            },
            sendPlayResult: function () {
                if (!T.isLogin) return false;
                let params = {
                    uid: T.uid,
                    uuid: this.sign,
                    caseNum: this.roundScore
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
                    requirePop('playResult', {
                        props: {
                            transition : this.roundScore > 0 ? 'rotate3d' : 'bounceIn',
                            popState : 0,
                            chanceNum : this.chanceNum,
//                            investEnough : this.investEnough,
//                            score : this.score,
                            roundScore : this.roundScore,
                            isTimeout : this.miliseconds <= 0
//                            overType : this.overReason
                        }
                    });
                    bus.$once("closePopEvent", () => {
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