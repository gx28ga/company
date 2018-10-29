<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .ranking-weekly-box {
      @include contain('../../images/weekly.png');
      position: relative;
      .back-btn,
      .invest-btn,
      .current-title,
      .showday-title,
      .nav-wrapper,
      .arrow,
      .sibling-day,
      .mine,
      .rank-list,
      .rank-comment,
      .touch-area,
      .section
      {
        position: absolute;
      }
      .mine{
        /*width: 100%;*/
        color: #422900;
        span{
          color: #422900;
        }
      }
      .invest-btn{
        @include contain("../../images/btn-invest.png");
      }
      .current-title{
        @include contain("../../images/curweek.png");
      }
      .showday-title{
        text-align: center;
        color: #422900;
        font-weight: bold;
      }
      .nav-wrapper{
        .arrow{
          @include contain("../../images/nav-btn.png");
        }
        .arrow.left{
          transform: rotate(180deg);
        }
        .sibling-day{
          color: #422900;
        }
      }
      .rank-list{
        text-align: center;
        color: #422900;
        .row > div{
          display: inline-block;
          vertical-align: middle;
        }
        .row.high-light{
          font-weight: bold;
          color: #8A2BE2;
        }
      }
      .touch-area{
        z-index: 200;
      }
      .rank-comment, .no-data{
        width: 100%;
        text-align: center;
        color: #422900;
      }
      .section{
        width: 100%;
        text-align: center;
        .no-data{
          display: inline-block;
          background: #DCDCDC;
          color: #3c245e;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="ranking-weekly-box img-size" data-width="750" data-height="1334">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="89" data-height="77" @click="onBack"></div>
      <template v-if="isLogin">
        <div v-show="isRankingOn == true" class="mine img-size" data-width="750" data-top="425" data-left="75" data-fontSize="24" data-lineHeight="40">
          我的财富值：<span>{{myInvest > 0 ? myInvest : '暂无'}}</span><i v-show="curPeriod.length > 0">　({{curPeriod}})</i><br>
          当前排名：<span>{{myRank > 0 ? myRank : '暂无'}}</span><br>
          预计可获得：<span>{{myGift == '' ? '暂无' : myGift}}</span>
        </div>
        <div v-show="investable && isRankingOn" class="invest-btn img-size" data-top="455" data-left="487" data-width="188" data-height="52" @click="onInvest"></div>
        <div v-if="rankData.length <= 0 || showWeekData.isCurWeek == true" class="current-title img-size" data-top="600" data-left="290" data-width="170" data-height="40"></div>
        <div v-else class="showday-title img-size" data-top="602" data-left="0" data-width="750" data-fontSize="30" data-lineHeight="30">{{showWeekData.period}}</div>
        <div class="nav-wrapper img-size" data-top="606" data-left="85" data-width="580" data-height="26">
          <div v-show="rankData.length > 1 && showWeekIndex > 0">
            <div class="arrow left img-size" data-left="0" data-width="14" data-height="26" @click="onNav(-1)"></div>
            <div class="sibling-day img-size" data-left="24" data-fontSize="22" data-lineHeight="26" @click="onNav(-1)">上周获奖名单</div>
          </div>
          <div v-show="rankData.length > 1 && showWeekIndex + 1 < rankData.length">
            <div class="arrow img-size" data-right="0" data-width="14" data-height="26" @click="onNav(1)"></div>
            <div class="sibling-day img-size" data-right="24" data-fontSize="22" data-lineHeight="26" @click="onNav(1)">下周获奖名单</div>
          </div>
        </div>
        <div v-if="rankData.length > 0 && showWeekData.rankList.length > 0">
          <div class="rank-list img-size" data-top="726" data-left="60">
            <div v-for="record in showWeekData.rankList" :key="record.rowNo" class="row img-size" :class="showWeekData.isCurWeek == true && myRank == record.rowNum ? 'high-light' : ''" data-fontSize="26" data-lineHeight="50">
              <div class="img-size" data-width="105">{{record.rowNum}}</div><!--
           --><div class="img-size" data-width="127" data-marginRight="50">{{record.mobilePhone}}</div><!--
           --><div class="img-size" data-width="134">{{record.amount}}</div><!--
           --><div class="img-size" data-width="202" data-fontSize="20">{{record.gift}}</div>
            </div>
          </div>
          <div v-show="showWeekData.isCurWeek == true" class="rank-comment img-size" data-top="1222" data-fontSize="18" data-lineHeight="18">* 榜单实时展示，榜单结果以当天23:59最终结果为准，其余时间仅供参考</div>
        </div>
        <div v-show="rankData.length > 0" class="touch-area img-size" data-top="705" data-width="750" data-height="409" @touchstart="onTouchStart($event)" @touchend="onTouchEnd($event)"></div>
        <div v-if="rankData.length <= 0 || showWeekData.rankList.length <= 0" class="section img-size" data-top="900">
          <div class="no-data img-size" data-borderRadius="12" data-width="280" data-height="160" data-fontSize="22" data-lineHeight="160">暂无排名数据</div>
        </div>
      </template>
      <template v-if="!isLogin">
        <div class="current-title img-size" data-top="604" data-left="278" data-width="201" data-height="36"></div>
      </template>
    </div>
  </div>
</template>
<script>
    import {requestService, httpStatus, httpWeekly} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                investable: true,
                isAjaxing: false,
                isRankingOn: false,
                myInvest: 0,
                myRank: 0,
                myGift: '',
                rankData: [],
                curPeriod: '',
                showWeekIndex: 0
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
            showWeekData : function () {
                if (this.rankData.length <= 0) return [];
                return this.rankData[this.showWeekIndex];
            },
            prevDate : function () {
                let prev = this.showWeekIndex - 1;
                if (prev < 0 ) return '';
                let setdata = this.rankData;
                return setdata[prev].period;
            },
            nextDate : function () {
                let next = this.showWeekIndex + 1;
                let setdata = this.rankData;
                if (next >= setdata.length) return '';
                return setdata[next].period;
            }
        },
        filters : {
            /*formatDate: function (input) {
                return input.replace(/\d+年/, '');
            }*/
            formatDate: function (input) {
                input = input.replace(/\d+年/, '');
                input = input.replace(/^0/, '');
                input = input.replace(/月0/, '月');
                return input;
            }
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                if (T.getQueryString("invest") == "no"){
                    this.investable = false;
                }
                this.isAjaxing = true;
                this.getWeekly();
            }
        },
        methods: {
            onInvest: function () {
                T.callApp.investment();
            },
            getWeekly: function () {
                if (!T.isLogin) {this.isAjaxing = false; return false;}
                let params = {uid: T.uid};
                requestService(httpWeekly, params, _data => {
                    this.isAjaxing = false;
                    if (_data.success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg ? _data.errorMsg : "系统错误，请联系客服。",
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.myInvest = (typeof _data.map.myInvest == 'number') ? _data.map.myInvest : 0;
                    this.myRank = (typeof _data.map.myRank == 'number') ?_data.map.myRank : 0;
                    this.myGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.rankData = _data.map.rankData;
                    this.$nextTick(() => {
                        T.setImgSize();
                    });
                    if (this.rankData.length > 0) {
                        let data = this.rankData;
                        data = data.sort((a, b) => {return a.weekNo - b.weekNo});
                        let curWeek = -1;
                        data = data.filter((record, i) => {
                            if (record.isCurWeek) {curWeek = i; this.isRankingOn = true;}
                            return curWeek == -1 || curWeek >= i;
                        });
                        this.rankData = data.sort((a, b) => {return a.weekNo - b.weekNo});
                    }
                    this.showWeekIndex = this.rankData.length - 1;
                    let curWeekIndex= this.showWeekIndex;
                    let all = this.rankData;
                    this.curPeriod = all[curWeekIndex].period;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            onNav : function (offset) {
                let newIndex = this.showWeekIndex + offset;
                if (newIndex < 0 || newIndex >= this.rankData.length) return;
                this.showWeekIndex = newIndex;
//                setTimeout(() =>{T.setImgSize();}, 20);
                this.$nextTick(() => {T.setImgSize();});
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
                    this.onNav(-1);
                } else {
                    this.onNav(1);
                }
            },
            onBack : function () {
                let from = T.getQueryString("from");
                let sub = !from || from == 'home' ? '' : ("#/" + from);
                let hrefUrl = window.location.pathname;
                if (T.wap) {
                    hrefUrl  += sub + "?wap=true&uid=" + T.uid;
                } else {
                    hrefUrl += sub + "?uid=" + T.uid;
                }
                window.location.replace(hrefUrl);
            }
        }
    }
</script>