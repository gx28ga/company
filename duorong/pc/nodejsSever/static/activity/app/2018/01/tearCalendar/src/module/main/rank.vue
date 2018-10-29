<style lang='sass'>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #2123b7;
      @include contain("../../images/my-rank.png");
      .back-btn,
      .point,
      .record-area,
      .pager-box,
      .my-area,
      .list-area,
      .section{
        position: absolute;
      }
      .back-btn{
        font-size: 2rem;
        color: #0F0;
      }
      .point .sum{
        color: #FD9001;
      }
      .record-area{
        .row div{
          display: inline-block;
          vertical-align: top;
          text-align: center;
        }
      }
      .pager-box{
        width: 100%;
        text-align: center;
        font-size: 2px;
        div{
          display: inline-block;
          vertical-align: middle;
        }
        .nav{
          color : #333;
        }
        .nav.disable{
          color: #BBB;
        }
      }
      .my-area{
        span{
          color: #FD9001;
        }
      }
      .list-area{
        text-align: center;
        .row{}
        .row > div{
          display: inline-block;
        }
        .highlight{
          color: #FD9001;
          font-weight: bold;
        }
      }
      .head{
        color: #333;
      }
      .section{
        width: 100%;
        text-align: center;
        .no-data{
          display: inline-block;
          background: #FFF;
          color: #999;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size rank-wrapper" data-width="750" data-height="1528">
      <div class="back-btn img-size" data-left="20" data-top="15" data-width="60" data-height="60" @click="onBack"></div>
      <div class="point img-size" data-top="330" data-left="60" data-fontSize="24" data-lineHeight="24">已获得积分：<span class="sum">{{myPoint || '暂无'}}</span>（积分可前往<span style="font-weight: bold;" @click="onPointMall">【积分商城】</span>兑换）</div>
      <template v-if="myRcds.length > 0">
        <div class="record-area img-size" data-top="480" data-left="30" data-width="690">
          <div class="row head img-size" data-fontSize="20" data-lineHeight="40">
            <div class="img-size" data-width="250" data-marginRight="10">奖品</div><!--
         --><div class="img-size" data-width="205">获取时间</div><!--
         --><div class="img-size" data-width="223">大事记日期</div>
          </div><!--
          <div v-for="row in dispRcds" class="row img-size" data-fontSize="18" data-lineHeight="32">
            <div class="img-size" data-width="230" data-marginRight="50">{{row.giftName}}</div>&lt;!&ndash;
         &ndash;&gt;<div class="img-size" data-width="185">{{row.addTime | transferTimeStr}}</div>&lt;!&ndash;
         &ndash;&gt;<div class="img-size" data-width="223">{{row.descpt}}</div>
          </div>-->
          <div v-for="(page, no) in rcdPages">
            <div v-show="pgIndex == no" v-for="row in page" class="row img-size" data-fontSize="20" data-lineHeight="32">
              <div class="img-size" data-width="250" data-marginRight="10">{{row.giftName}}</div><!--
           --><div class="img-size" data-width="205">{{row.addTime | transferTimeStr}}</div><!--
           --><div class="img-size" data-width="223">{{row.descpt}}</div>
            </div>
          </div>
        </div>
        <div class="pager-box img-size" data-top="675">
          <div class="nav img-size" :class="pgIndex <= 0 ? 'disable' : ''" data-fontSize="20" data-lineHeight="55" @click="onNav(-1)">上一页</div><!--
       --><div class="img-size" data-width="100" data-fontSize="20" data-lineHeight="55">{{pgIndex + 1}} / {{rcdPageNum}}</div><!--
       --><div class="nav img-size" :class="pgIndex + 1 >= rcdPageNum ? 'disable' : ''" data-fontSize="20" data-lineHeight="55" @click="onNav(1)">下一页</div>
        </div>
      </template>
      <div v-show="myRcds.length <= 0" class="section img-size" data-top="520">
        <div class="no-data img-size" data-borderRadius="12" data-width="200" data-height="120" data-fontSize="18" data-lineHeight="120">暂无获奖记录</div>
      </div>
      <div class="my-area img-size" data-top="830" data-left="60" data-fontSize="24" data-lineHeight="36">
        <div>我的成绩：<span>{{myScore == '' ? '暂无' : myScore}}</span></div>
        <div>当前排名：<span>{{myRank > 0 ? myRank : '暂无'}}</span></div>
        <div>预计奖品：<span>{{myGift == '' ? '暂无' : myGift}}</span></div>
      </div>
      <div v-show="rankList.length > 0" class="list-area img-size" data-top="960" data-left="36">
        <div class="row head img-size" data-fontSize="24" data-lineHeight="45">
          <div class="img-size" data-width="88">排 名</div><!--
       --><div class="img-size" data-width="182">用户手机</div><!--
       --><div class="img-size" data-width="138">撕日历成绩</div><!--g
       --><div class="img-size" data-width="240">奖 品</div>
        </div>
        <div v-for="(item, i) in rankList" :key="item.rowNo" class="row img-size" :class="myRank == item.rowNo ? 'highlight' : ''" data-fontSize="22" data-lineHeight="36">
          <div class="img-size" data-width="88">{{i + 1}}</div><!--
       --><div class="img-size" data-width="182">{{item.mobilePhone}}</div><!--
       --><div class="img-size" data-width="138">{{item.description}}</div><!--g
       --><div class="img-size" data-width="240">{{item.gift}}</div>
        </div>
      </div>
      <div v-show="rankList.length <= 0" class="section img-size" data-top="1055">
        <div class="no-data img-size" data-borderRadius="12" data-width="350" data-height="200" data-fontSize="26" data-lineHeight="200">暂无排名数据</div>
      </div>
    </div>
  </div>
</template>
<script>
    const cRcdPgSize = 5;
    import {requestService, httpRank, httpMyGift} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                tab: 0,
                myScore: 0,
                myRank: 0,
                myGift: '',
                rankList: [],
                myPoint: 0,
                myRcds: [],
                pgIndex: 0
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
            },
            rcdPageNum : function () {
                return Math.ceil(this.myRcds.length / cRcdPgSize);
            },
            /*dispRcds : function () {
                let all = this.myRcds;
                let start = this.pgIndex * cRcdPgSize;
                return all.slice(start, start + cRcdPgSize);
            },*/
            rcdPages : function () {
                let all = this.myRcds;
                all.sort((a, b) => {
                    return a.addTime - b.addTime;
                });
                let pgnum = Math.ceil(all.length / cRcdPgSize);
                let pgs = [];
                let pgdata;
                for (let i = 0; i < pgnum; i++) {
                    pgdata = all.slice(i * cRcdPgSize, (i + 1) * cRcdPgSize);
                    pgs.push(pgdata);
                }
                return pgs.slice(0);
            }
        },
        watch: {
            /*dispRcds : function (newOne, oldOne) {
                setTimeout(() => {T.setImgSize();}, 0);
            },*/
            rankList : function (newList, oldList) {
                setTimeout(() => {T.setImgSize();}, 0);
            },
            myRcds : function (newRcds, oldRcds) {
                setTimeout(() => {T.setImgSize();}, 0);
            }
        },
        filters: {
            transferTimeStr : function (input) {
                if (Number(input)) {
                    let dt = new Date(input);
                    return dt.Format('yyyy.M.d hh:mm:ss');
                } else {
                    return '';
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
                this.getMyGift();
            }
        },
        methods: {
            getRank: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpRank, params, _data => {
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
                    this.myScore = (_data.map.myScore != '无') ? _data.map.myScore : '';
                    this.myRank = Number(_data.map.myRank) > 0 ? Number(_data.map.myRank) : 0;
                    this.myGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.rankList = _data.map.rankList;
                });
            },
            getMyGift: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpMyGift, params, _data => {
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
                    this.myPoint = Number(_data.map.myPoint) > 0 ? Number(_data.map.myPoint) : 0;
                    this.myRcds = _data.map.lotteryList;
                    this.getRank();
                });
            },
            onPointMall : function () {
                if (T.getQueryString("wap") == 'true') {
                    this.__launchApp();
                } else {
                    window.location.href='jump://page=34?';
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
            onNav : function (offset) {
                let shift = this.pgIndex + offset;
                if (shift < 0 || shift + 1 > this.rcdPageNum) return;
                this.pgIndex = shift;
            },
            onBack : function () {
                let from = T.getQueryString("from");
                let sub = from == 'home' ? '' : ("#/" + from);
                let hrefUrl = window.location.pathname;
                if (T.wap) {
                    hrefUrl  += sub + "?wap=true&uid=" + T.uid;
                } else {
                    hrefUrl += sub + "?uid=" + T.uid;
                }
                /*if (from == 'play') {
                    hrefUrl += '&nostrategy=true';
                }*/
                window.location.replace(hrefUrl);
            }
        }
    }
</script>