<style lang='sass'>
  @import '../../css/global.scss';

  .main-box {
    @include contain('../../images/self/bg.jpg');
    position: relative;
    .rule-btn {
      position: absolute;
      top: 12.72480488632508% * 0.9726072607260726;
      left: 82.66666666666667%;
      width: 17.33333333333333%;
      height: 1.49304377332881%;
    }
    .rank-list-link{
      position: absolute;
      top: 16.3895486935867% * 0.9726072607260726;
      left: 70.4%;
      font-size: .5rem;
      color: #00c6ff;
      a{
        color: #00c6ff;
        text-decoration: underline;
      }
    }
    .main-btn{
      position: absolute;
      top: 30.70919579233118%;
      left: 27.33333333333333%;
      width: 45%;
      height: 4%;
    }
    .invest-btn {
      @extend .main-btn;
      @include contain('../../images/self/invest-btn.png');
    }
    .login-btn {
      @extend .main-btn;
      @include contain('../../images/self/login-btn.png');
    }
    .act-over-btn {
      @extend .main-btn;
      @include contain('../../images/self/act-over-btn.png');
    }
    .tell-user-shell-num{
      position: absolute;
      top: 40.21038344078724% * 0.9726072607260726;
      left: 4.4%;
      width: 90%;
      height: 2%;
      color: #FFF;
      font-size: .8rem;
      line-height: 1.5rem;
      text-align: center;
      span{
        color: #FFF600;
      }
    }
    .exchange-record-btn{
      position: absolute;
      top: 42.24635222259925% * 0.9726072607260726;
      left: 73.6%;
      height: 1.18764845605701%;
      width: 18%;
    }
    .exchange-btn{
      position: absolute;
      height: 1.01798439090601%;
      width: 8%;
    }
    .ex-btn-row-1{top: 51.3% * 0.9726072607260726;}
    .ex-btn-row-2{top: 59.2% * 0.9726072607260726;}
    .ex-btn-left{left: 25%;}
    .ex-btn-mid{left: 52%;}
    .ex-btn-right{left: 79%;}
    .exchange-by-1{
      @extend .exchange-btn;
      @extend .ex-btn-row-1;
      @extend .ex-btn-left;
    }
    .exchange-by-4{
      @extend .exchange-btn;
      @extend .ex-btn-row-1;
      @extend .ex-btn-mid;
    }
    .exchange-by-10{
      @extend .exchange-btn;
      @extend .ex-btn-row-1;
      @extend .ex-btn-right;
    }
    .exchange-by-12{
      @extend .exchange-btn;
      @extend .ex-btn-row-2;
      @extend .ex-btn-left;
    }
    .exchange-by-22{
      @extend .exchange-btn;
      @extend .ex-btn-row-2;
      @extend .ex-btn-mid;
    }
    .exchange-by-30{
      @extend .exchange-btn;
      @extend .ex-btn-row-2;
      @extend .ex-btn-right;
    }
    .exchange-by-54{
      @extend .exchange-btn;
      top: 64.75% * 0.9726072607260726;
      left: 58%;
    }
    .tell-user-rank{
      position: absolute;
      top: 74.38072616219885% * 0.9726072607260726;
      left: 8.4%;
      color: #5B3000;
      font-size: .8rem;
      line-height: 1.1rem;
    }
    .login-btn-small{
      position: absolute;
      top: 74.88971835765185% * 0.9726072607260726;
      left: 71.6%;
      width: 20%;
      height: 1.45911096029861%;
      @include contain('../../images/self/login-small.png');
    }
    .rank-table-wrapper{
      position: absolute;
      top: 78.35086528673227% * 0.9726072607260726;
      left: 10.26666666666667%;
      width: 79.6%;
      color: #5B3000;
      text-align: center;
      thead td{
        font-size: .72rem;
        font-weight: bold;
        line-height: 1.8rem;
      }
      tbody td{
        font-size: .65rem;
        line-height: 1.1rem;
      }
      p{
        border-top: 1px dashed #5B3000;
        width: 80%;
        margin: .4rem auto;
        padding: 0 3%;
        font-size: .72rem;
        line-height: 1.8rem;
      }
    }
    .note-act-over{
      position: absolute;
      top: 82.7960637936885% * 0.9726072607260726;
      width: 100%;
      text-align: center;
      p{
        color: #5B3000;
        font-size: 1rem;
      }
      a{
        color: #00c6ff;
        font-size: .5rem;
        text-decoration: underline;
      }
    }
    .refresh-btn{
      position: absolute;
      /*top: 94.60468272819817%;*/
      top: 94.85148514851485%;
      left: 27.46666666666667%;
      width: 45.2%;
      height: 3.93620631150322%;
    }
    .refresh-btn-active{
      @extend .refresh-btn;
      @include contain('../../images/self/refresh-btn-active.png');
    }
    .refresh-btn-disabled{
      @extend .refresh-btn;
      @include contain('../../images/self/refresh-btn-disabled.png');
    }
  }
</style>
<template>
  <!--<div class="main-box img-size" data-width="750" data-height="2947">-->
  <div class="main-box img-size" data-width="750" data-height="3030">
    <div class="rule-btn" @click="onPopRule"></div>
    <!-- 活动已结束 -->
    <template v-if="status > 0">
      <div class="act-over-btn"></div>
      <div class="rank-list-link" @click="onPopWinnerList">
        <a>排名中奖名单</a><span>></span>
      </div>
      <div v-if="isLogin === false" class="tell-user-rank">
        <p>您的总贝壳数为：*******</p>
        <p>总排名：*******名</p>
      </div>
      <div v-if="isLogin === true" class="tell-user-rank">
        <p>您的总贝壳数为：{{totalShellNum}}</p>
        <p v-if="userRankNo > 0">总排名：第{{userRankNo}}名</p>
        <p v-else>总排名：暂无</p>
      </div>
      <div class="note-act-over">
        <p>活动已结束</p>
        <a @click="onPopWinnerList">查看排名中奖名单</a>
      </div>
      <div class="refresh-btn-disabled"></div>
    </template>
    <!-- 活动未结束 -->
    <template v-else>
      <!-- 未登录 -->
      <template v-if="isLogin === false">
        <div class="login-btn" @click="login"></div>
        <div v-show="status == 0" class="login-btn-small" @click="login"></div>
        <div class="tell-user-shell-num">您的未兑换贝壳数为<span>***</span>，可以兑换以下相应奖品</div>
        <div class="tell-user-rank">
          <p>您的总贝壳数为：*******</p>
          <p>总排名：*******名</p>
        </div>
      </template>
      <!-- 已登录 -->
      <template v-else>
        <div class="invest-btn" @click="onInvest"></div>
        <div class="tell-user-shell-num">您的未兑换贝壳数为<span>{{usableShellNum}}</span>，可以兑换以下相应奖品</div>
        <div class="tell-user-rank">
          <p>您的总贝壳数为：{{totalShellNum}}</p>
          <p v-if="userRankNo > 0">总排名：第{{userRankNo}}名</p>
          <p v-else>总排名：暂无</p>
        </div>
      </template>
      <div class="rank-table-wrapper">
        <table style="width: 100%;">
          <thead>
          <tr>
            <td width="15%">排名</td>
            <td width="30%">手机号码</td>
            <td width="20%">贝壳数</td>
            <td width="35%">奖品</td>
          </tr>
          </thead>
          <tbody v-if="status == 0">
          <tr v-for="item in topList">
            <td>{{item.index}}</td>
            <td>{{item.mobilePhone}}</td>
            <td>{{item.fortune}}</td>
            <td>{{item.prize}}</td>
          </tr>
          </tbody>
        </table>
        <p v-if="status == 0">更新时间：{{rankDataTime}}</p>
      </div>
      <div class="refresh-btn-active" @click="onRefreshToplist"></div>
    </template>
    <div class="exchange-record-btn" @click="onPopExRecords"></div>
    <div class="exchange-by-1" @click="onClickExchange(0)"></div>
    <div class="exchange-by-4" @click="onClickExchange(1)"></div>
    <div class="exchange-by-10" @click="onClickExchange(2)"></div>
    <div class="exchange-by-12" @click="onClickExchange(3)"></div>
    <div class="exchange-by-22" @click="onClickExchange(4)"></div>
    <div class="exchange-by-30" @click="onClickExchange(5)"></div>
    <div class="exchange-by-54" @click="onClickExchange(6)"></div>
  </div>
</template>
<script>
    import {httpStatus, httpWinner, httpParticipate, httpUserData, httpExchangeRecord, httpExchangeRequest} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: {
                    type: Number,
                    default: 0
                },
                usableShellNum: 0,
                totalShellNum: 0,
//                totalShellNum: 0,
                prizeList: [],
                userRankNo: 0,
                topList: [],
                rankDataTime: '',
                isExchanging: false,
                isRefreshing: false
            };
        },
        computed: {
            coinValue: function () {
                return (this.isLogin && this.prizeName == '') ? this.coin : '******';
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            this.getActivityStatus();
        },
        methods: {
            onPopRule : function () {
                requirePop('explain', {
                    props : {
                        transition : 'bounceIn'
                    }
                });
            },
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
            __submitService : function (url, data, callAfter) {
                T.ajax({
                    url: url,
                    data : data,
                    callback : true,
                    success : function (_data) {
                        callAfter(_data);
                    }
                });
            },
            getActivityStatus: function () {
                this.__requestService(httpStatus, {}, _data => {
                    this.status = _data.map.status;
                    if (this.status < 0) {  //活动未开始
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '敬请期待',
                                detail: '活动即将开始, 期待您的热情参与!',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.onRefreshToplist();
                    if (this.status == 0){  //活动进行中
//                        this.onRefreshToplist();
                        this.checkParticipatable();
                    }
                });
            },
            checkParticipatable: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpParticipate + '?uid=' + T.uid, params, _data => {
                    if (!_data.flag) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '感谢关注！',
                                detail: 'VIP渠道用户不能参加，敬请期待后续活动……',
                                btnBackHome: true
                            }
                        });
                    } else {
                        this.getUserData();
                    }
                });
            },
            getUserData : function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpUserData + '?uid=' + T.uid, params, _data => {
                    this.prizeList = _data.map.prizeAndRank;
                    this.usableShellNum = _data.map.funtuneOfUser;
                });
            },
            login: function () {
                T.login();
            },
            onPopWinnerList : function () {
                let params = {};
                if (T.isLogin) {
                    params.uid = T.uid;
                }
                this.__requestService(httpWinner, params, _data => {
                    requirePop('winnerList', {
                        props : {
                            transition : 'bounceIn',
                            winnerList : _data.map.prizeAndRank
                        }
                    });
                });
            },
            onClickExchange: function (prizeIndex) {
                if (this.status > 0) return false;
                if (this.isExchanging == true) return false;
                this.isExchanging = true;
                setTimeout(() => {this.isExchanging = false;}, 1000);
                if (!T.isLogin) {
                    T.login();
                }
                if (this.prizeList.length - 1 < prizeIndex) {
                    requirePop('warning', {
                        props : {
                            transition : 'bounceIn',
                            title : "系统错误！",
                            detail : "发生数据错误，请联系客服！"
                        }
                    });
                    return false;
                }
                if (this.usableShellNum < this.prizeList[prizeIndex].needGoldCoin) {
                    requirePop('warning', {
                        props : {
                            transition : 'bounceIn',
                            title : '很抱歉！',
                            detail : '您的贝壳数不足，无法兑换'
                        }
                    });
                    return false;
                } else {
                    let eventName = 'submitExchangeConfirm';
                    bus.$off(eventName);
                    requirePop('exchangeConfirm', {
                        props : {
                            transition : 'bounceIn',
                            prizeIndex : prizeIndex,
                            prizeName : this.prizeList[prizeIndex].name,
                            submitEvt : eventName
                        }
                    });
                    setTimeout(() => {bus.$on(eventName, this.onExchangeConfirm);}, 20);
                }
            },
            onExchangeConfirm : function (params) {
                let prizeId = this.prizeList[params.index].id;
                let self = this;
                this.__submitService(httpExchangeRequest, {
                    uid : T.uid,
                    prizeId : prizeId
                }, function (_data) {
                    if (_data.hasOwnProperty('success')) {
                        if (_data.success == true) {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '恭喜您，兑换成功！',
                                    detail : '奖品将在活动结束后15个工作日内联系发放'
                                }
                            });
                            self.getUserData();
                            return true;
                        } else {
                            if (_data.hasOwnProperty('errorMsg')) {
                                requirePop('warning', {
                                    props : {
                                        transition : 'bounceIn',
                                        title : '很抱歉！',
                                        detail : _data.errorMsg
                                    }
                                });
                                return false;
                            }
                        }
                    }
                    requirePop('warning', {
                        props : {
                            transition : 'bounceIn',
                            title : '系统错误！',
                            detail : '发生系统错误，请联系客服！'
                        }
                    });
                    return false;
                });
            },
            onPopExRecords: function () {
                if (!T.isLogin) {
                    T.login();
                    return false;
                }
                let params = {uid: T.uid};
                this.__requestService(httpExchangeRecord + '?uid=' + T.uid, params, _data => {
                    requirePop('exchangeRecords', {
                        props : {
                            transition : 'bounceIn',
                            exchangeRecords : _data.map.lotteryList
                        }
                    });
                });
            },
            onInvest: function () {
                T.callApp.investment();
            },
            onRefreshToplist : function () {
                if (this.isRefreshing == true) return false;
                this.isRefreshing = true;
                this.totalShellNum = 0;
                this.userRankNo = 0;
                this.topList = [];
                this.rankDataTime = '';
                setTimeout(() => {
                    let params = {};
                    if (T.isLogin) {
                        params.uid = T.uid;
                    }
                    this.__requestService(httpWinner, params, _data => {
                        this.totalShellNum = _data.map.funtuneOfUser.fortune;
                        this.userRankNo = _data.map.funtuneOfUser.index;
                        this.topList = _data.map.prizeAndRank;
                        this.rankDataTime = (new Date()).Format('yyyy-MM-dd hh:mm:ss');
                        this.isRefreshing = false;
                    });
                }, 1200);
            }
        }
    }
</script>