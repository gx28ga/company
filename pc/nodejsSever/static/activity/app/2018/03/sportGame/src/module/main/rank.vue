<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #003333;
      @include contain("../../images/rank.png");
      .today-date,
      .my-area,
      .list-area,
      .hist-link,
      .section,
      .comment{
        position: absolute;
      }
      .today-date{
        color: rgb(40, 155, 132);
        font-weight: bold;
      }
      .my-area{
        span{
          color: #ff6400;
          vertical-align: baseline;
        }
      }
      .list-area{
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
      .hist-link{
        width: 100%;
        text-align: center;
        color: #ba7749;
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
        color: #666;
        text-align: left;
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size rank-wrapper" data-width="750" data-height="2310">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="img-size today-date" data-top="205" data-left="510" data-fontSize="36" data-lineHeight="36">{{todayDate | formatDate}}</div>
      <div class="my-area img-size" data-top="308" data-left="40" data-fontSize="36" data-lineHeight="60">
        <div>我今日获取的能量：<span :class="myTodayEngy > 0 ? 'img-size' : ''" data-fontSize="40">{{myTodayEngy > 0 ? myTodayEngy : '暂无'}}</span></div>
        <div>预计可获得：<span>{{myTodayGift == '' ? '暂无' : myTodayGift}}</span></div>
      </div>
      <div v-if="todayData && todayData.rankList">
        <div class="list-area img-size" data-top="612" data-left="55">
          <div v-for="record in todayData.rankList" :key="record.rowNo" class="row img-size" :class="myTodayRank == record.rowNum ? 'high-light' : ''" data-fontSize="30" data-lineHeight="60">
            <div class="img-size" data-width="80">{{record.rowNum}}</div><!--
         --><div class="img-size" data-width="185">{{record.mobilePhone}}</div><!--
         --><div class="img-size" data-width="200" data-marginRight="5">{{record.spare1}}</div><!--
         --><div class="img-size" data-width="175">{{record.gift}}</div>
          </div>
        </div>
      </div>
      <div v-else class="section img-size" data-top="666">
        <div class="no-data img-size" data-borderRadius="12" data-width="280" data-height="160" data-fontSize="22" data-lineHeight="160">今日暂无数据</div>
      </div>
      <div v-show="histData.length > 0" class="img-size hist-link" data-top="950" data-fontSize="24" data-lineHeight="24" @click="onHistory">更多历史榜单&gt;</div>


      <div class="my-area img-size" data-top="1186" data-left="40" data-fontSize="36" data-lineHeight="60">
        <div>我的总能量：<span :class="myFinalEngy > 0 ? 'img-size' : ''" data-fontSize="40">{{myFinalEngy > 0 ? myFinalEngy : '暂无'}}</span><i v-show="myFinalEngy > 0" class="img-size" data-fontSize="24" data-lineHeight="24"> （包含已兑换能量）</i></div>
        <div>预计可获得：<span>{{myFinalGift == '' ? '暂无' : myFinalGift}}</span></div>
      </div>
      <div v-if="finalList.length > 0">
        <div class="list-area img-size" data-top="1438" data-left="55">
          <div v-for="record in finalList" :key="record.rowNo" class="row img-size" :class="myFinalRank == record.rowNo ? 'high-light' : ''" data-fontSize="30" data-lineHeight="58">
            <div class="img-size" data-width="80">{{record.rowNo}}</div><!--
         --><div class="img-size" data-width="185">{{record.mobilePhone}}</div><!--
         --><div class="img-size" data-width="200" data-marginRight="5">{{record.description}}</div><!--
         --><div class="img-size" data-width="175" data-fontSize="20" data-lineHeight="24">{{record.gift}}</div>
          </div>
        </div>
        <div class="img-size comment" data-top="2070" data-left="52" data-width="658" data-fontSize="24" data-lineHeigh="30">* 以活动结束最终排名为准。如总能量相同，则按时间顺序优先排名</div>
      </div>
      <div v-else class="section img-size" data-top="1610">
        <div class="no-data img-size" data-borderRadius="12" data-width="280" data-height="160" data-fontSize="22" data-lineHeight="160">暂无排名数据</div>
      </div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpDailyRank, httpFinalRank} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                todayDate: '',
                myTodayEngy: 0,
                myTodayRank: 0,
                myTodayGift: '',
                todayData: undefined,
                histData: [],
                myFinalEngy: 0,
                myFinalRank: 0,
                myFinalGift: '',
                finalList: []
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        filters: {
            formatDate: function (input) {
                input = input.replace(/(年|月)/g, '-');
                input = input.replace("日", '');
                input = input.replace(/^0/, '');
                input = input.replace(/-0/g, '-');
                return input;
            }
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.getDailyRank();
            }
        },
        methods: {
            getFinalRank: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpFinalRank, params, _data => {
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
                    this.myFinalEngy = Number(myDescription) > 0 ? Number(myDescription) : 0;
                    this.myFinalRank = Number(myRank) > 0 ? Number(myRank) : 0;
                    this.myFinalGift = (myGift != '无') ? myGift : '';
                    this.finalList = rankList;
                    this.$nextTick(() => {T.setImgSize();});
                });
            },
            getDailyRank: function () {
                if (!T.isLogin) {return false;}
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpDailyRank, params, _data => {
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
                    const {myInvest, myRank, myGift} = _data.map;
                    let {rankData : dailyData} = _data.map;
                    this.myTodayEngy = (typeof myInvest == 'number') ? myInvest : 0;
                    this.myTodayRank = (typeof myRank == 'number') ? myRank : 0;
                    this.myTodayGift = (myGift != '无') ? myGift : '';
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
                    this.todayDate = dailyData[0].isToday ? dailyData[0].date : this.todayDate;
                    this.todayData = dailyData[0].isToday ? dailyData[0] : this.todayData;
                    this.histData = dailyData.slice(dailyData[0].isToday ? 1 : 0);

                    this.getFinalRank();
                });
            },
            onHistory : function () {
                requirePop("histRank", {
                    props : {
                        transition : "mask",
                        histData : this.histData
                    }
                });
            }
        }
    }
</script>