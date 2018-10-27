<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .ranking-main-box {
    @include contain('../../images/bg.png');
    position: relative;
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
    .section,
    .weekly-rank,
    .final-rank
    {
      position: absolute;
    }
    .mine{
      width: 100%;
      color: #422900;
      span{
        /*color: #AA2900;*/
      }
    }
    .invest-btn{
      @include contain("../../images/btn-invest.png");
    }
    .current-title{
      @include contain("../../images/current.png");
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
</style>
<template>
  <div class="ranking-main-box img-size" data-width="750" data-height="3488">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <template v-if="isLogin">
      <div class="mine img-size" data-top="425" data-left="75" data-fontSize="24" data-lineHeight="40">
        我的财富值：<span>{{myInvest > 0 ? myInvest : '暂无'}}</span><i v-show="todayDate.length > 0">　({{todayDate | formatDate}})</i><br>
        <!--我的元宵数量：<span>{{myInvest > 0 ? myInvest : '暂无'}}</span><i v-show="todayDate.length > 0">　(今日)</i><br>-->
        当前排名：<span>{{myRank > 0 ? myRank : '暂无'}}</span><br>
        预计可获得：<span>{{myGift == '' ? '暂无' : myGift}}</span>
      </div>
      <div v-if="rankData.length <= 0 || showdayData.isToday == true" class="current-title img-size" data-top="600" data-left="290" data-width="170" data-height="40"></div>
      <div v-else class="showday-title img-size" data-top="602" data-left="0" data-width="750" data-fontSize="30" data-lineHeight="30">{{showdayData.date | formatDate}}获奖名单</div>
      <div class="nav-wrapper img-size" data-top="606" data-left="85" data-width="580" data-height="26">
        <div v-show="rankData.length > 1 && showdayIndex > 0">
          <div class="arrow left img-size" data-left="0" data-width="14" data-height="26" @click="onNav(-1)"></div>
          <div class="sibling-day img-size" data-left="24" data-fontSize="22" data-lineHeight="26" @click="onNav(-1)">{{prevDate | formatDate}}名单</div>
        </div>
        <div v-show="rankData.length > 1 && showdayIndex + 1 < rankData.length">
          <div class="arrow img-size" data-right="0" data-width="14" data-height="26" @click="onNav(1)"></div>
          <div class="sibling-day img-size" data-right="24" data-fontSize="22" data-lineHeight="26" @click="onNav(1)">{{nextDate | formatDate}}名单</div>
        </div>
      </div>
      <div v-if="rankData.length > 0 && showdayData.rankList.length > 0">
        <div class="rank-list img-size" data-top="726" data-left="60">
          <div v-for="record in showdayData.rankList" :key="record.rowNo" class="row img-size" :class="showdayData.isToday == true && myRank == record.rowNum ? 'high-light' : ''" data-fontSize="26" data-lineHeight="50">
            <div class="img-size" data-width="105">{{record.rowNum}}</div><!--
         --><div class="img-size" data-width="127" data-marginRight="50">{{record.mobilePhone}}</div><!--
         --><div class="img-size" data-width="134">{{record.amount}}</div><!--
         --><div class="img-size" data-width="202">{{record.gift}}</div>
          </div>
        </div>
        <div v-show="showdayData.isToday == true" class="rank-comment img-size" data-top="1070" data-fontSize="18" data-lineHeight="18">* 榜单实时展示，榜单结果以当天23:59最终结果为准，其余时间仅供参考</div>
      </div>
      <div v-show="rankData.length > 0" class="touch-area img-size" data-top="705" data-width="750" data-height="409" @touchstart="onTouchStart($event)" @touchend="onTouchEnd($event)"></div>
      <!--<div v-if="rankData.length <= 0 || showdayData.rankList.length <= 0" class="no-data img-size" data-top="854" data-fontSize="26" data-lineHeight="26">暂无数据</div>-->
      <div v-if="rankData.length <= 0 || showdayData.rankList.length <= 0" class="section img-size" data-top="800">
        <div class="no-data img-size" data-borderRadius="12" data-width="280" data-height="160" data-fontSize="22" data-lineHeight="160">暂无排名数据</div>
      </div>
    </template>
    <template v-if="!isLogin">
      <div class="current-title img-size" data-top="600" data-left="290" data-width="170" data-height="40"></div>
    </template>
    <div v-show="status <= 0" class="invest-btn img-size" data-top="455" data-left="485" data-width="188" data-height="52" @click="onInvest"></div>
    <div class="weekly-rank img-size" data-top="1190" data-left="26" data-width="334" data-height="52" @click="onWeeklyRank"></div>
    <div class="final-rank img-size" data-top="1190" data-left="393" data-width="334" data-height="52" @click="onFinalRank"></div>
  </div>
</template>
<script>
    import {requestService, httpStatus, httpDaily} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                isAjaxing: false,
                startTime: 0,
                endTime: 0,
                myInvest: 0,
                myRank: 0,
                myGift: '',
                rankData: [],
                todayDate: '',
                showdayIndex: 0
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
            showdayData : function () {
                if (this.rankData.length <= 0) return [];
                return this.rankData[this.showdayIndex];
            },
            prevDate : function () {
                let prev = this.showdayIndex - 1;
                if (prev < 0 ) return '';
                let setdata = this.rankData;
                return setdata[prev].date;
            },
            nextDate : function () {
                let next = this.showdayIndex + 1;
                let setdata = this.rankData;
                if (next >= setdata.length) return '';
                return setdata[next].date;
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
            this.isLogin = T.isLogin;
            this.getActivityStatus();
        },
        methods: {
            getActivityStatus: function () {
                this.isAjaxing = true;
                requestService(httpStatus, {}, _data => {
                    if (_data.success == false) {
                        this.isAjaxing = false;
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
                    let sts = _data.map.status;
                    /*if (sts != 0) {  //活动未开始
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : sts < 0 ? '敬请期待' : '温馨提示',
                                detail: sts < 0 ? '活动即将开始, 期待您的热情参与!' : '本次活动已结束！',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }*/
                    if (sts < 0) {  //活动未开始
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
                    this.status = sts;
                    this.startTime = _data.map.startTime;
                    this.endTime = _data.map.endTime;
                    if (T.isLogin) {
                        this.getDaily();
                    } else {
                        requirePop("login", {
                            props : {
                                transition : 'mask'
                            }
                        });
                        bus.$once("login-or-launch-app", () => {
                            this.login();
                            setTimeout(() => {
                                T.callApp.home();
                            }, 5000);
                        });
                        bus.$once("closePopEvent", () => {
                            T.callApp.home();
                        });
                    }
                });
            },
            login: function () {
                if (!T.getQueryString('wap') || T.getQueryString('force') === 'force') {
                    T.login();
                } else {
                    this.__launchApp();
                }
            },
            __launchApp : function () {
                let iphoneSchema = 'duorongcf://';
                let iphoneDownUrl = 'itms-apps://itunes.apple.com/cn/app/duo-rong-li-cai/id1095192150?mt=8';
                let androidSchema = 'duorongcf://';
                let androidDownUrl = 'http://app.duorongcf.com/dr_app.apk';
                if (T.weixin) {
                    requirePop("warning", {
                        props: {
                            transition: 'bounceIn',
                            title: '温馨提示',
                            detail: '请点击右上角选择"在浏览器打开"',
                            btnBackHome: false
                        }
                    });
                } else {
                    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                        var loadDateTime = new Date();
                        window.setTimeout(function() {
                            var timeOutDateTime = new Date();
                            if (timeOutDateTime - loadDateTime < 2200) {
                                window.location.href = iphoneDownUrl;//ios下载地址
                            } else {
                                window.close();
                            }
                        },2000);
                        window.location.href = iphoneSchema;
                    }else if (navigator.userAgent.match(/android/i)) {
                        try {
                            window.location.href = androidSchema;
                            setTimeout(function(){
                                window.location.href = androidDownUrl; //android下载地址
                            },500);
                        } catch(e) {
                            window.location.href = androidDownUrl;
                        }
                    }
                }
            },
            onInvest: function () {
                T.callApp.investment();
            },
            getDaily: function () {
                if (!T.isLogin) {this.isAjaxing = false; return false;}
                let params = {uid: T.uid};
                requestService(httpDaily, params, _data => {
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
                        data = data.sort((a, b) => {return a.dayNo - b.dayNo});
                        let today = -1;
                        data = data.filter((record, i) => {
                            if (record.isToday) {today = i;}
                            return today == -1 || today >= i;
                        });
                        this.rankData = data.sort((a, b) => {return a.dayNo - b.dayNo});
                    }
                    this.showdayIndex = this.rankData.length - 1;
                    let today= this.showdayIndex;
                    let all = this.rankData;
                    this.todayDate = all[today].date;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            onNav : function (offset) {
                let newIndex = this.showdayIndex + offset;
                if (newIndex < 0 || newIndex >= this.rankData.length) return;
                this.showdayIndex = newIndex;
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
            onWeeklyRank : function () {
                window.location.replace(window.location.pathname + "#/week" + (T.getQueryString("wap") == "true" ? "?wap=true&" : "?") + "uid=" + T.uid + (this.status <= 0 ? "" : "&invest=no"));
            },
            onFinalRank : function () {
                window.location.replace(window.location.pathname + "#/final" + (T.getQueryString("wap") == "true" ? "?wap=true&" : "?") + "uid=" + T.uid + (this.status <= 0 ? "" : "&invest=no"));
            }
        }
    }
</script>