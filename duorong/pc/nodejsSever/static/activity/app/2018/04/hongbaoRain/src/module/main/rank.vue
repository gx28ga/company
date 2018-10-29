<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #FFF;
      @include contain("../../images/rank.jpg");
      .my-area,
      .list-area,
      .section,
      .comment{
        position: absolute;
      }
      .my-area{
        span{
          color: #fff600;
          vertical-align: baseline;
        }
      }
      .list-area{
        color: #555;
        text-align: center;
        .row{}
        .row > div{
          display: inline-block;
          vertical-align: middle;
        }
        .high-light{
          color: #ff5800;
          font-weight: bold;
        }
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
      .comment{
        color: #999;
        text-align: left;
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size rank-wrapper" data-width="750" data-height="1656">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="my-area img-size" data-top="20" data-left="230" data-fontSize="24" data-lineHeight="50">
        <div>您当前红包雨总次数：<span :class="myChance > 0 ? 'img-size' : ''" data-fontSize="30">{{myChance > 0 ? myChance : '暂无'}}</span><i v-show="myChance > 0" class="img-size" data-fontSize="20" data-lineHeight="20"> （含已使用）</i></div>
        <div>当前排名：<span :class="myRank > 0 ?'img-size' : ''" data-fontSize="30">{{myRank > 0 ? myRank : '暂无'}}</span></div>
        <div>预计可获得：<span>{{myGift == '' ? '暂无' : myGift}}</span></div>
      </div>
      <div v-if="finalList.length > 0">
        <div class="list-area img-size" data-top="270" data-left="95">
          <div v-for="record in finalList" :key="record.rowNo" class="row img-size" :class="myRank == record.rowNo ? 'high-light' : ''" data-fontSize="24" data-lineHeight="50">
            <div class="img-size" data-width="70">{{record.rowNo}}</div><!--
         --><div class="img-size" data-width="137">{{record.mobilePhone}}</div><!--
         --><div class="img-size" data-width="205" data-marginRight="5">{{record.description}}</div><!--
         --><div class="img-size" data-width="180" data-fontSize="20" data-lineHeight="24">{{record.gift}}</div>
          </div>
        </div>
        <div class="img-size comment" data-top="860" data-left="90" data-width="595" data-fontSize="18" data-lineHeigh="24">* 以活动结束最终排名为准。如总数相同，按最先到达该数量的排名在前</div>
      </div>
      <div v-else class="section img-size" data-top="450">
        <div class="no-data img-size" data-borderRadius="12" data-width="280" data-height="160" data-fontSize="22" data-lineHeight="160">暂无排名数据</div>
      </div>
      <div class="my-area daily img-size" data-top="960" data-left="230" data-fontSize="24" data-lineHeight="50">
        <div>您当前年化金额：<span :class="myTodayInvest > 0 ? 'img-size' : ''" data-fontSize="30">{{myTodayInvest > 0 ? myTodayInvest : '暂无'}}</span></div>
        <div>当前排名：<span :class="myTodayRank > 0 ?'img-size' : ''" data-fontSize="30">{{myTodayRank > 0 ? myTodayRank : '暂无'}}</span></div>
      </div>
      <div v-if="todayList.length > 0">
        <div class="list-area img-size" data-top="1190" data-left="55">
          <div v-for="record in todayList" :key="record.rowNo" class="row img-size" :class="myTodayRank == record.rowNum ? 'high-light' : ''" data-fontSize="24" data-lineHeight="50">
            <div class="img-size" data-width="144" data-marginRight="36">{{record.rowNum}}</div><!--
         --><div class="img-size" data-width="234">{{record.mobilePhone}}</div><!--
         --><div class="img-size" data-width="200" data-marginRight="5">{{record.amount}}</div>
          </div>
        </div>
        <div class="img-size comment" data-top="1410" data-left="90" data-width="595" data-fontSize="18" data-lineHeigh="24">* 以当日23:59:59排名为准，单日投资年化金额排名前3的用户，可于次日额外获得1次暴雨模式红包雨机会</div>
      </div>
      <div v-else class="section img-size" data-top="1230">
        <div class="no-data img-size" data-borderRadius="12" data-width="280" data-height="160" data-fontSize="22" data-lineHeight="160">今日暂无数据</div>
      </div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpRank, httpDaily} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                myChance: 0,
                myRank: 0,
                myGift: '',
                finalList: [],
                myTodayInvest: 0,
                myTodayRank: 0,
                todayList: []
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.getFinal();
            }
        },
        methods: {
            getFinal: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpRank, params, _data => {
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
                        return false;
                    }
                    const {myDescription, myGift, myRank, rankList} = _data.map;
                    const getNumVal = input => Math.max(0, input);
                    this.myChance = getNumVal(Number(myDescription));
                    this.myRank = getNumVal(Number(myRank));
                    this.myGift = (myGift != '无') ? myGift : '';
                    this.finalList = rankList;
                    this.$nextTick(() => {T.setImgSize();});

                    this.getDaily();
                });
            },
            getDaily: function () {
                if (!T.isLogin) {return false;}
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpDaily, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail : errorMsg ? errorMsg : "系统错误，请联系客服。",
                                btnBackHome : false
                            }
                        });
                        return false;
                    }
                    const {myInvest, myRank/*, myGift*/} = _data.map;
                    let {rankData : dailyData} = _data.map;
                    this.myTodayInvest = (typeof myInvest == 'number') ? myInvest : 0;
                    this.myTodayRank = (typeof myRank == 'number') ? myRank : 0;
//                    this.myTodayGift = (myGift != '无') ? myGift : '';
                    this.$nextTick(() => {
                        T.setImgSize();
                    });
                    if (dailyData.length > 0) {
                        let data = dailyData;
                        data = data.sort((a, b) => {return a.dayNo - b.dayNo});
                        let today = -1;
                        data = data.filter((record, i) => {
                            if (record.isToday) {today = i;}
                            return today == -1 || today >= i;
                        });
                        dailyData = data.sort((a, b) => {return b.dayNo - a.dayNo});
                    }
//                    this.todayDate = dailyData[0].isToday ? dailyData[0].date : this.todayDate;
                    this.todayList = dailyData[0].isToday ? dailyData[0].rankList.slice(0, 3) : this.todayList;
//                    this.histData = dailyData.slice(dailyData[0].isToday ? 1 : 0);
                });
            }
        }
    }
</script>