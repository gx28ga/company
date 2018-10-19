<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #FFF;
      @include contain("../../images/rank.png");
      .back-btn,
      .tree-rank,
      .daily-rank,
      .tab-btn,
      .my-area,
      .today-date,
      .list-area,
      .no-data,
      .history-link{
        position: absolute;
      }
      .back-btn{
        font-size: 2rem;
        color: #0F0;
      }
      .tree-rank{
        @include contain("../../images/tree-bg.png");
      }
      .daily-rank{
        @include contain("../../images/daily-bg.png");
      }
      .my-area{
        color: #002114;
        span{
          color: #FD9001;
        }
      }
      .today-date{
        color: #FFF;
      }
      /*.my-area .item{
        .label{
          color: #151640;
          display: inline-block;
          text-align: right;
          width: 50%;
        }
      }*/
      .list-area{
        text-align: center;
        color: #251957;
        .row{}
        .row > div{
          display: inline-block;
        }
        .highlight{
          color: #FD9001;
          font-weight: bold;
        }
      }
      .decimal{
        text-align: right;
      }
      .no-data{
        text-align: center;
        color: #251957;
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size rank-wrapper" data-width="750" data-height="1334">
      <div class="back-btn img-size" data-left="20" data-top="-10" @click="onBack">&laquo;</div>
      <div v-show="tab == 0">
        <div class="tree-rank img-size" data-top="90" data-left="20" data-width="710" data-height="1175"></div>
        <div class="tab-btn img-size" data-top="90" data-left="410" data-width="320" data-height="125" @click="tab = 1"></div>
        <div class="my-area img-size" data-top="300" data-left="76" data-fontSize="32" data-lineHeight="48">
          <div>我的圣诞树：<span>{{myTree > 0 ? myTree : '暂无'}}</span></div>
          <div>当前排名：<span>{{myTreeRank > 0 ? myTreeRank : '暂无'}}</span></div>
          <div>预计奖品：<span>{{myTreeGift == '' ? '暂无' : myTreeGift}}</span></div>
        </div>
        <div v-show="treeRankList.length > 0" class="list-area img-size" data-top="620" data-left="65">
          <div v-for="(item, i) in treeRankList" :key="item.rowNo" class="row img-size" :class="myTreeRank == item.rowNo ? 'highlight' : ''" data-fontSize="26" data-lineHeight="60">
            <div class="img-size" data-width="48">{{i + 1}}</div><!--
       --><div class="img-size" data-width="216" data-marginRight="24">{{item.mobilePhone}}</div><!--
       --><div class="img-size" data-width="92">{{item.description}}</div><!--g
       --><div class="img-size" data-width="256">{{item.gift}}</div>
          </div>
        </div>
        <div v-show="treeRankList.length <= 0" class="no-data img-size" data-top="780" data-width="750" data-fontSize="32" data-lineHeight="32">暂无数据</div>
      </div>
      <div v-show="tab == 1">
        <div class="daily-rank img-size" data-top="90" data-left="20" data-width="710" data-height="1175"></div>
        <div class="tab-btn img-size" data-top="90" data-left="20" data-width="390" data-height="140" @click="tab = 0"></div>
        <div class="my-area img-size" data-top="300" data-left="76" data-fontSize="32" data-lineHeight="48">
          <div>年化投资：<span>{{myTodayInvest > 0 ? myTodayInvest : '暂无'}}</span></div>
          <div>当前排名：<span>{{myTodayRank > 0 ? myTodayRank : '暂无'}}</span></div>
          <div>预计奖品：<span>{{myTodayGift == '' ? '暂无' : myTodayGift}}</span></div>
        </div>
        <div v-if="dailyRankData.length > 0" class="today-date img-size" data-top="345" data-left="475" data-fontSize="30" data-lineHeight="30">{{dailyRankData[todayIndex].date | replaceMulti}}</div>
        <div v-show="todayRankList.length > 0" class="list-area img-size" data-top="620" data-left="65">
          <div v-for="(item, i) in todayRankList" :key="item.rowNo" class="row img-size" :class="myTodayRank == item.rowNum ? 'highlight' : ''" data-fontSize="26" data-lineHeight="60">
            <div class="img-size" data-width="48">{{i + 1}}</div><!--
       --><div class="img-size" data-width="216">{{item.mobilePhone}}</div><!--
       --><div class="decimal img-size" data-width="140">{{item.amount | formatDecimal}}</div><!--g
       --><div class="img-size" data-width="232">{{item.gift}}</div>
          </div>
        </div>
        <div v-show="todayRankList.length <= 0" class="no-data img-size" data-top="780" data-width="750" data-fontSize="32" data-lineHeight="32">暂无数据</div>
        <div class="history-link img-size" data-top="1010" data-left="295" data-width="160" data-height="45" @click="onShowHistory"></div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpTreeRank, httpDailyRank} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                tab: 0,
                myTree: 0,
                myTreeRank: 0,
                myTreeGift: '',
                treeRankList: [],
                myTodayInvest: 0,
                myTodayRank: 0,
                myTodayGift: '',
                dailyRankData: [],
                todayIndex: 0
            };
        },
        computed: {
            todayRankList : function () {
                if (this.dailyRankData.length <= 0) return [];
                return this.dailyRankData[this.todayIndex].rankList.slice(0);
            },
            historyData : function () {
                let all = this.dailyRankData;
                if (all.length < 2) return [];
                return all.slice(0, all.length - 1);
            }
        },
        filters: {
            replaceMulti : function (input) {
                if (input.length <= 0) return '';
                let temp = input.replace(/(年|月)/g, '-');
                return temp.replace(/日/g, '');
            },
            formatDecimal : function (input) {
                if (Number(input)) {
                    input += '';
                    let dotPos = input.indexOf('.');
                    if (dotPos == -1) {
                        return input + '.00';
                    } else {
                        input += '00';
                        return input.slice(0, dotPos + 3);
                    }
                } else {
                    return input;
                }
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.getTreeRank();
                this.getDailyRank();
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
            getTreeRank: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpTreeRank + '?uid=' + T.uid, params, _data => {
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
                    this.myTree = Number(_data.map.myTree) > 0 ? Number(_data.map.myTree) : 0;
                    this.myTreeRank = Number(_data.map.myRank) > 0 ? Number(_data.map.myRank) : 0;
                    this.myTreeGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.treeRankList = _data.map.rankList;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            getDailyRank: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpDailyRank + '?uid=' + T.uid, params, _data => {
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
                    this.myTodayInvest = Number(_data.map.myInvest) > 0 ? Number(_data.map.myInvest) : 0;
                    this.myTodayRank = Number(_data.map.myRank) > 0 ? Number(_data.map.myRank) : 0;
                    this.myTodayGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.dailyRankData = _data.map.rankData;
                    if (this.dailyRankData.length > 0) {
                        let data = this.dailyRankData;
                        data = data.sort((a, b) => {return a.dayNo - b.dayNo});
                        let today = -1;
                        data = data.filter((record, i) => {
                            if (record.isToday) {today = i;}
                            return today == -1 || today >= i;
                        });
                        this.dailyRankData = data.sort((a, b) => {return a.dayNo - b.dayNo});
                    }
                    this.todayIndex = this.dailyRankData.length - 1;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            onShowHistory : function () {
                requirePop("historyRank", {
                    props : {
                        transition : 'fadeIn',
                        data : this.historyData
                    }
                });
            },
            onBack : function () {
                let from = T.getQueryString("from");
                let sub = from == 'home' ? '' : ("#/" + from);
                if (T.wap) {
                    window.location.replace(window.location.pathname + sub + "?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + sub + "?uid=" + T.uid);
                }
            }
        }
    }
</script>