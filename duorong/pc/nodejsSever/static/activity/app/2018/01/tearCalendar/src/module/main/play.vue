<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  @import "../../vendor/photoSwipe.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/game-winter.png');
      color: #FFFA80;
      .strategy-bg,
      .instruct,
      .i-see-btn,
      .timer,
      .date,
      .caldr-page,
      .en-mon,
      .year,
      .cn-mon,
      .day-num,
      .tr-year,
      .tr-mon,
      .tr-ymd,
      .tr-day,
      .week-day,
      .en-week,
      .cn-week,
      .chance,
      .play-btn,
      .back-link,
      .event-list,
      .all-event{
        position: absolute;
      }
      .strategy-bg{
        background-color: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
        z-index: 100;
        .instruct{
          @include contain("../../images/strategy.png");
        }
      }
      .timer{
        color: #2123b7;
      }
      .date{
        text-align: center;
        color: #171fc6;
        font-weight: bold;
      }
      .year,
      .tr-ymd,
      .week-day{
        color: #FFF;
      }
      .en-mon,
      .cn-mon,
      .day-num,
      .tr-year,
      .tr-mon,
      .en-week{
        color: #c63e39;
      }
      .year{
        text-align: center;
        font-weight: bold;
      }
      .cn-mon,
      .tr-ymd,
      .week-day{
        text-align: center;
      }
      .day-num{
        width: 100%;
        text-align: center;
        font-weight: bold;
      }
      .tr-mon{
        text-align: right;
      }
      .tr-day, .cn-week{
        text-align: center;
        color: #FFF;
        font-family: STHupo, "Heiti SC", "Times New Roman";
        font-weight: bold;
      }
      #factory{
        display: none;
      }
      .chance{
        color: #2123b7;
        span{
          color: #F00;
          font-weight: bold;
        }
      }
      .play-once, .play-ten{
        @extend .play-btn;
      }
      .back-link{
        color: #c63e39;
      }
      .back-link.new-color{
        color: #2F4F4F;
      }
      .event-list{
        .row div{
          display: inline-block;
          vertical-align: top;
          text-align: center;
          color: #333;
        }
      }
    }
    .spring{
      @include contain("../../images/game-spring.png");
    }
    .summer{
      @include contain("../../images/game-summer.png");
    }
    .fall{
      @include contain("../../images/game-fall.png");
    }
  }
  .countdown{
    /*width: 100%;*/
    margin: 0 auto;
    height: 100%;
    position: fixed;
    z-index: 200;
    background-color: rgba(0, 0, 0, .5);
    .num-wrapper{
      width: 100%;
      height: 100%;
      text-align: center;
      div{
        display: inline-block;
        vertical-align: middle;
        color: #BBB;
        font-weight: bold;
      }
    }
    .num-wrapper:after{
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 100%;
    }
  }
  .lock-screen{
    z-index: 300;
    /*width: 100%;*/
    margin : 0 auto;
    height: 100%;
    position: fixed;
    div{
      margin: 0 auto;
      @include contain("../../images/busy.gif");
    }
  }
</style>
<template>
  <div class="main-section">
    <div v-show="isSending || inInit" class="lock-screen img-size" data-width="750">
      <div class="img-size" data-marginTop="440" data-width="200" data-height="200"></div>
    </div>
    <div v-if="inDowncounting == true" class="countdown img-size" data-width="750">
      <div class="num-wrapper">
        <div class="img-size" data-fontSize="250">{{countNum}}</div>
      </div>
    </div>
    <div class="img-size content-wrapper" :class="['spring', 'summer', 'fall'][season]" data-width="750" data-height="1851">
      <!--<div v-show="strategyRead == false" class="strategy-bg">-->
      <div v-show="isFirst == true" class="strategy-bg">
        <div class="instruct img-size" data-top="526" data-left="185" data-width="315" data-height="424"></div>
        <!--<div class="i-see-btn img-size" data-top="772" data-left="250" data-width="250" data-height="75" @click="strategyRead = true"></div>-->
        <div class="i-see-btn img-size" data-top="750" data-left="250" data-width="250" data-height="75" @click="isFirst = false"></div>
      </div>
      <!--<div class="caldr-wrapper img-size" data-top="211" data-height="579">
        <div class="caldr-bg img-size" data-width="399">
          <div class="year img-size" data-top="16" data-left="163" data-width="74" data-height="35" data-fontSize="24" data-lineHeight="35">{{date | getCaldrAttr(roundScore, 'year')}}</div>
          <div class="en-mon img-size" data-top="16" data-left="34" data-fontSize="20" data-lineHeight="35">{{date | getCaldrAttr(roundScore, 'en-mon')}}</div>
          <div class="cn-mon img-size" data-top="16" data-left="243" data-width="124" data-height="35" data-fontSize="20" data-lineHeight="35">{{date | getCaldrAttr(roundScore, 'cn-mon')}}</div>
          <div class="day-num img-size" data-top="57" data-fontSize="200" data-lineHeight="370">{{date | getCaldrAttr(roundScore, 'day-num')}}</div>
          <div class="tr-year img-size" data-top="438" data-left="18" data-fontSize="20" data-lineHeight="40">{{date | getCaldrAttr(roundScore, 'tr-year')}}</div>
          <div class="tr-mon img-size" data-top="438" data-left="13" data-width="140" data-fontSize="20" data-lineHeight="40">{{date | getCaldrAttr(roundScore, 'tr-mon')}}</div>
          <div class="tr-day img-size" data-top="478" data-left="13" data-width="149" data-fontSize="42" data-lineHeight="66">{{date | getCaldrAttr(roundScore, 'tr-day')}}</div>
          <div class="en-week img-size" data-top="438" data-left="245" data-width="143" data-fontSize="20" data-lineHeight="40">{{date | getCaldrAttr(roundScore, 'en-week')}}</div>
          <div class="cn-week img-size" data-top="478" data-left="245" data-width="149" data-fontSize="42" data-lineHeight="66">{{date | getCaldrAttr(roundScore, 'cn-week')}}</div>
        </div>
      </div>-->
      <div id="factory">
        <div class="year img-size" data-top="58" data-left="195" data-width="155" data-height="60" data-fontSize="42" data-lineHeight="60">{{nextDate | getCaldrAttr(generatedPage, 'year')}}</div>
        <div class="en-mon img-size" data-top="75" data-left="95" data-fontSize="30" data-lineHeight="35">{{nextDate | getCaldrAttr(generatedPage, 'en-mon')}}</div>
        <div class="cn-mon img-size" data-top="75" data-left="350" data-width="142" data-height="35" data-fontSize="30" data-lineHeight="35">{{nextDate | getCaldrAttr(generatedPage, 'cn-mon')}}</div>
        <div class="day-num img-size" data-top="80" data-fontSize="200" data-lineHeight="370">{{nextDate | getCaldrAttr(generatedPage, 'day-num')}}</div>
        <div class="tr-ymd img-size" data-top="450" data-left="70" data-width="140" data-fontSize="22" data-lineHeight="30">{{nextDate | getCaldrAttr(generatedPage, 'tr-year')}}<br>{{nextDate | getCaldrAttr(generatedPage, 'tr-mon')}}{{nextDate | getCaldrAttr(generatedPage, 'tr-day')}}</div>
        <div class="tr-ymd img-size" data-top="450" data-left="330" data-width="136" data-fontSize="22" data-lineHeight="30">{{nextDate | getCaldrAttr(generatedPage, 'en-week')}}<br>{{nextDate | getCaldrAttr(generatedPage, 'cn-week')}}</div>
      </div>
      <div id="photo_box" class="caldr-page img-size" data-top="285" data-left="105" data-width="541" data-height="579" @touchstart="isTearing && miliseconds > 0 && onTouchStart($event)" @touchend="isTearing && miliseconds > 0 && onTouchEnd($event, __scoreUp)" @touchmove="isTearing && miliseconds > 0 && onTouchMove($event)">
        <div>
          <div></div>
        </div>
      </div>
      <div v-show="!inInit">
        <div class="timer img-size" data-top="22" data-left="605" data-fontSize="30" data-lineHeight="30">{{seconds}}</div>
        <div v-show="lastDate" class="date img-size" data-top="60" data-left="90" data-width="320" data-fontSize="30" data-lineHeight="40">您上次撕到的日期<br>{{lastDate}}</div>
        <div class="chance img-size" data-top="1070" data-left="160" data-fontSize="18" data-lineHeight="18">您剩余机会：<span>{{chanceNum}}</span> 次</div>
        <div class="play-once img-size" data-top="970" data-left="134" data-width="202" data-height="74" @click="!inInit && !isTearing && onPlayOnce()"></div>
        <div class="play-ten img-size" data-top="970" data-left="416" data-width="202" data-height="74" @click="!inInit && !isTearing && onPlayTen()"></div>
        <div class="back-link img-size" :class="['', 'new-color', 'new-color'][season]" data-top="1070" data-left="475" data-fontSize="18" data-lineHeight="18" @click="!isTearing && onBack()">先不玩了>></div>
        <div class="event-list img-size" data-top="1445" data-left="92">
          <div v-for="row in eventList" class="row img-size" data-fontSize="20" data-lineHeight="36">
            <div class="img-size" data-width="100" data-marginRight="45">{{row.date}}</div><!--
         --><div class="img-size" data-width="292">{{row.event}}</div><!--
         --><div class="img-size" data-width="130">{{row.gift}}</div>
          </div>
        </div>
      </div>
      <div class="all-event img-size" data-top="1685" data-left="315" data-width="215" data-height="30" @click="onDrEvent"></div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpChance, httpPlay, httpGetSign} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    import CALDR from '../../common/calendar.js';
    import photoSwipe from '../../common/photoSwipe.js';

    const cRoundTime = 3000;
    const cPlaytenScore = 50;
    const cMaxScore = 10;
    const cDrEvents = [
        {date: '3月26日', event: '多融周年庆（2017）', gift: '50积分'},
        {date: '4月1日', event: '单月交易金额突破2亿（3月）', gift: '5元JD卡'},
        {date: '6月17日', event: '举办2017第一届投资人交流会', gift: '30积分'},
        {date: '9月12日', event: '累计交易金额突破30亿', gift: '50积分'},
        {date: '12月17日', event: '荣膺"最具社会责任感企业奖”', gift: '10元JD卡'}
    ];
    export default {
        data: function() {
            return {
//                strategyRead: false,
                isFirst : false,
                chanceNum : 0,
                lastDate : '',
                nextDate : '',
                generatedPage: 0,
                roundScore: 0,
                inInit: true,
                isRoundOver: false,
                miliseconds: 0,
                clockItv: undefined,
                isTearing: false,
                isOnBusy : false,
                inDowncounting : false,
                countNum : 3,
                isSending : false/*,
                waitReload: true*/
            };
        },
        computed: {
            seconds : function () {
                let mili = this.miliseconds;
                let frac = Math.floor(mili % 1000 / 10);
                return (mili < 10000 ? '0' : '') + Math.floor(mili / 1000) + '"' + (frac < 10 ? '0' : '') + frac;
            },
            eventList : function () {
                return cDrEvents.slice(0);
            },
            season : function () {
                let obj = new Date(this.nextDate);
                if (!obj) return 0;
                obj.setDate(obj.getDate() + Math.max(this.generatedPage - 2, 0));
                let mon = obj.getMonth();
                switch (mon) {
                    case 2 :
                    case 3 :
                    case 4 : return 0;
                    case 5 :
                    case 6 :
                    case 7 : return 1;
                    case 8 :
                    case 9 :
                    case 10 : return 2;
                }
            }
        },
        filters : {
            getCaldrAttr : function (input, offset, attr) {
                let obj = new Date(input);
                if (!obj) return '';
                obj.setDate(obj.getDate() + offset);
                let arr, mon, day, buf, lunar;
                switch(attr) {
                    case 'year' : return obj.getFullYear();
                    case 'en-mon' :
                        arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        mon = obj.getMonth();
                        return arr[mon];
                    case 'cn-mon' :
                        arr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
                        mon = obj.getMonth();
                        return arr[mon];
                    case 'day-num' :
                        return obj.getDate();
                    case 'tr-year' :
                        lunar = CALDR.solar2lunar(obj.getFullYear(), obj.getMonth() + 1, obj.getDate());
                        return lunar.gzYear + lunar.Animal + '年';
                    case 'tr-mon' :
                        lunar = CALDR.solar2lunar(obj.getFullYear(), obj.getMonth() + 1, obj.getDate());
                        buf = lunar.IMonthCn;
//                        buf += lunar.lBigSmall;
                        return buf;
                    case 'tr-day' :
                        lunar = CALDR.solar2lunar(obj.getFullYear(), obj.getMonth() + 1, obj.getDate());
                        buf = lunar.IDayCn;
//                        buf += buf.indexOf('初') == -1 ? '日' : '';
                        return  buf;
                    case 'en-week' :
                        arr = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
                        day = obj.getDay();
                        return arr[day];
                    case 'cn-week' :
                        lunar = CALDR.solar2lunar(obj.getFullYear(), obj.getMonth() + 1, obj.getDate());
                        return lunar.ncWeek;
                }
            }
        },
        /*beforeCreate : function () {
            if (T.getQueryString('reload') == 'true') {
                let url = window.location.href;
                url = url.replace('&reload=true', '');
                window.location.replace(url);
                window.location.reload();
            }
        },*/
        mounted(){
            /*if (T.getQueryString('reload') != 'true') {
                this.waitReload = false;
            }*/
            /*if (T.getQueryString('nostrategy')) {
                this.strategyRead = true;
            }*/
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.miliseconds = cRoundTime;
                this.getInitData();
            }
        },
        methods: {
            getInitData: function () {
                if (!T.isLogin) return false;
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
                    this.lastDate = _data.map.lastDate;
                    this.nextDate = _data.map.nextDate;
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
                    this.getGameSign();
                    setTimeout(() => {T.setImgSize();}, 20);
                    setTimeout(() => {this.__init();}, 150);
                });
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
                });
            },
            __init : function () {
                this.doc_width=$(document).width();
                photoSwipe.imgHtml = this.__nextDay;
                photoSwipe.index = 0;
                photoSwipe.init();
                photoSwipe.activeEl($("#ind-0"));
                photoSwipe.index++;
                photoSwipe.load = true;
                setTimeout(() => {
                    $("#photo_box>div>div").append(this.__nextDay());
                    this.inInit = false;
                }, 100);
            },
            onPlayOnce: function () {
                if (this.chanceNum <= 0) {
                    requirePop("playResult", {
                        props : {
                            transition : 'bounceIn',
                            popState : 1
                        }
                    });
                    bus.$once("closePopEvent", () => {this.onBack();});
                    return;
                }
                this.inDowncounting = true;
                setTimeout(() => {T.setImgSize();}, 20);
                let cntDnItv =
                    setInterval(() => {
                        if (this.countNum > 1) {
                            this.countNum--;
                        } else {
                            clearInterval(cntDnItv);
                            this.inDowncounting = false;
                            this.__gameRun();
                        }
                    }, 1000);
            },
            __gameRun : function () {
                this.isTearing = true;
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
                this.submitPlayOnce();
            },
            submitPlayOnce: function () {
                if (!T.isLogin) return false;
                let params = {
                    uid: T.uid,
                    uuid: this.sign,
                    page: this.roundScore,
                    isMany: false
                };
                this.isSending = true;
                requestService(httpPlay, params, _data => {
                    this.isSending = false;
                    if (_data.success == false) {
                        if (_data.errorCode == 10004) {
                            requirePop("playResult", {
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
                    if (this.roundScore > 0) {
                        this.__renewGame(_data);
                    } else {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '很遗憾！',
                                detail : '本轮未得分',
                                btnBackHome : false
                            }
                        });
                        bus.$once('closePopEvent', () => {
                            this.chanceNum = _data.map.totalchance;
                            this.miliseconds = cRoundTime;
                            this.isTearing = false;
                            this.countNum = 3;
                            this.sign = _data.map.uuid;
                        });
                    }
                });
            },/*
            __renewGame : function (_data) {
                let dt = new Date(_data.map.calendar);
                requirePop('tearScore', {
                    props: {
                        transition : 'rotate3d',
                        yyyyMM : dt.Format('yyyy - MM'),
                        d : dt.getDate(),
                        w : dt.getDay(),
                        giftList : _data.map.respList
                    }
                });
                bus.$once("closePopEvent", goRank => {
                    if (goRank) {
                        let pathUrl = window.location.pathname + "#/rank/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=play";
                        window.location.replace(pathUrl);
                    } else {
                        if (!T.getQueryString('nostrategy')){
                            window.location.replace(window.location.href + '&nostrategy=true');
                        }
                        window.location.reload();
                    }
                });
            },*/
            __renewGame : function (_data) {
                let dt = new Date(_data.map.calendar);
                requirePop('tearScore', {
                    props: {
                        transition : 'rotate3d',
                        /*yyyyMM : dt.Format('yyyy - MM'),
                        d : dt.getDate(),
                        w : dt.getDay(),*/
                        scoreDate : dt.Format('yyyy年M年d日'),
                        giftList : _data.map.respList
                    },
                    on : {
                        'on-go-my' : function () {
                            let pathUrl = window.location.pathname + "#/rank/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=play";
                            window.location.replace(pathUrl);
                        },
                        'reload-page' : function () {
                            /*if (!T.getQueryString('nostrategy')){
                                window.location.replace(window.location.href + '&nostrategy=true');
                            }*/
                            window.location.reload();
                        }
                    }
                });
            },
            onPlayTen : function () {
                if (this.chanceNum < 10) {
                    requirePop("playResult", {
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
                this.submitPlayTen();
            },
            submitPlayTen : function () {
                let params = {
                    uid : T.uid,
                    uuid : this.sign,
                    page : cPlaytenScore,
                    isMany : true
                };
                this.isSending = true;
                requestService(httpPlay, params, _data => {
                    this.isSending = false;
                    if (_data.success == false) {
                        if (_data.errorCode == 10004) {
                            requirePop("playResult", {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 1
                                }
                            });
                            bus.$once("closePopEvent", () => {
                                this.onBack();
                        });
                        } else if (_data.errorCode == 10001) {
                            requirePop("playResult", {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 2
                                }
                            });
                        }
                        return false;
                    }
                    this.__renewGame(_data);
                });
            },
            __scoreUp : function () {
                if (++this.roundScore >= cMaxScore) {
                    this.__endGame();
                }
            },
            __nextDay : function () {
                let str='<div id="ind-'+photoSwipe.index+'">'
                    + document.getElementById("factory").innerHTML
                    +'</div>';
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

                if(photoSwipe.left_val>0 && photoSwipe.left_val>this.doc_width/3-this.doc_width/4.5){
                    photoSwipe.animateMove(act_el,1, this.doc_width);
                    cbk();
                }else if(photoSwipe.left_val<0 && photoSwipe.left_val<-this.doc_width/3+this.doc_width/4.5){
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
            onDrEvent : function () {
                requirePop('drEvents', {
                    props : {
                        transition : 'mask'
                    }
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