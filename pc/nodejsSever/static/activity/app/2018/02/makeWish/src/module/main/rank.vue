<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #fff4a1;
      @include contain("../../images/my-rank.jpg");
      .back-btn,
      .record-area,
      .pager-box,
      .cash-area,
      .wish-area,
      .my-area,
      .list-area,
      .section,
      .rank-comment{
        position: absolute;
      }
      .back-btn{
        color: #ffde00;
        text-align: center;
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
        color: #90FC00;
        div{
          display: inline-block;
          vertical-align: middle;
        }
        .nav{
          margin: 0!important;
          color : #fff4a1;
        }
        .nav.disable{
          color: #666;
        }
      }
      .cash-area{
        color: #FFF;
        span{
          color: #fff6b8;
        }
        .large span{
          color: #ffde00!important;
        }
        .about{
          border: 1px solid #0cebf9;
          display: inline-block;
          vertical-align: middle;
          color : #0cebf9;
          text-align: center;
        }
      }
      .wish-area{
        width: 100%;
        text-align: center;
        .row div{
          display: inline-block;
          vertical-align: top;
          color: #ffe100;
        }
        .row.single div{
          vertical-align: middle!important;
        }
        .row.single:after{
          display: inline-block;
          vertical-align: middle;
          content: '';
          width: 0;
          height: 100%;
        }
        .row .aladdin{
          @include contain("../../images/aladdin.png");
        }
        .row .meteor{
          @include contain("../../images/meteor.png");
        }
        .row .dragon-ball{
          @include contain("../../images/dragon-ball.png");
        }
        .row .guanyin{
          @include contain("../../images/guanyin.png");
        }
        .row .floating-bottle{
          @include contain("../../images/floating-bottle.png");
        }
      }
      .my-area{
        span{
          color: #ffde00;
        }
      }
      .list-area{
        text-align: center;
        color: #FFF;
        .row{}
        .row > div{
          display: inline-block;
        }
        .highlight{
          color: #ffde00;
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
          background: #FAFAD2;
          color: #999;
        }
      }
      .rank-comment{
        color: #FFF;
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="img-size rank-wrapper" data-width="750" data-height="2730">
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="80" data-height="100" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      <template v-if="myRcds.length > 0">
        <div class="record-area img-size" data-top="250" data-left="30" data-width="685">
          <div v-for="(page, no) in rcdPages">
            <div v-show="pgIndex == no" v-for="row in page" class="row img-size" data-fontSize="26" data-lineHeight="60">
              <div class="img-size" data-width="200" data-marginRight="0">{{row.giftName}}</div><!--
           --><div class="img-size" data-width="223">{{row.descpt}}</div><!--
           --><div class="img-size" data-width="255">{{row.addTime | transferTimeStr}}</div>
            </div>
          </div>
        </div>
        <div class="pager-box img-size" data-top="635" data-left="0">
          <div class="nav img-size" :class="pgIndex <= 0 ? 'disable' : ''" data-fontSize="28" data-lineHeight="55" @click="onNav(-1)">上一页</div><!--
       --><div class="img-size" data-width="150" data-fontSize="28" data-lineHeight="55">{{pgIndex + 1}} / {{rcdPageNum}}</div><!--
       --><div class="nav img-size" :class="pgIndex + 1 >= rcdPageNum ? 'disable' : ''" data-fontSize="28" data-lineHeight="55" @click="onNav(1)">下一页</div>
        </div>
      </template>
      <div v-show="myRcds.length <= 0" class="section img-size" data-top="350">
        <div class="no-data img-size" data-borderRadius="12" data-width="300" data-height="200" data-fontSize="24" data-lineHeight="200">暂无获奖记录</div>
      </div>
      <div class="cash-area img-size" data-top="890" data-left="32" data-width="698">
        <div class="large img-size" data-fontSize="30" data-lineHeight="48">预计可获得现金奖励：<span>{{cashSum}}</span> 元</div>
        <div class="img-size" data-marginTop="10" data-fontSize="26" data-lineHeight="42">
          <template v-if="bigInvest">
            您累计投资≥120天产品达到30万以上，<span>全部许愿次数</span>均计算现金奖励
          </template>
          <template v-else>
            您累计投资≥120天产品{{investment}}元尚未达到30万以上，<span>仅部分许愿次数</span>计算现金奖励
          </template>
          <div class="about img-size" data-marginLeft="10" data-width="32" data-height="32" data-borderRadius="21" data-fontSize="28" data-lineHeight="32" @click="onAbout">?</div>
        </div>
      </div>
      <div v-if="curWishObj > 0" class="wish-area img-size" data-top="1177">
        <div v-show="bigInvest == true">
          <div class="row">
            <div class="aladdin img-size" data-width="191" data-height="174" data-marginRight="55">
              <div class="img-size" data-marginTop="129" data-fontSize="24" data-lineHeight="44">{{wishNumArray[0]}} 次</div>
            </div>
            <div class="meteor img-size" data-width="191" data-height="174" data-marginRight="55">
              <div class="img-size" data-marginTop="129" data-fontSize="24" data-lineHeight="44">{{wishNumArray[1]}} 次</div>
            </div>
            <div class="dragon-ball img-size" data-width="191" data-height="174">
              <div class="img-size" data-marginTop="129" data-fontSize="24" data-lineHeight="44">{{wishNumArray[2]}} 次</div>
            </div>
          </div>
          <div class="row img-size" data-marginTop="38">
            <div class="guanyin img-size" data-width="191" data-height="174" data-marginRight="95">
              <div class="img-size" data-marginTop="129" data-fontSize="24" data-lineHeight="44">{{wishNumArray[3]}} 次</div>
            </div>
            <div class="floating-bottle img-size" data-width="191" data-height="174">
              <div class="img-size" data-marginTop="129" data-fontSize="24" data-lineHeight="44">{{wishNumArray[4]}} 次</div>
            </div>
          </div>
        </div>
        <div v-show="bigInvest == false">
          <div class="row single img-size" data-height="390">
            <div class="img-size" :class="{'1':'aladdin', '2': 'meteor', '3': 'dragon-ball', '4': 'guanyin', '5': 'floating-bottle'}[curWishObj + '']" data-width="191" data-height="174">
              <div class="img-size" data-marginTop="129" data-fontSize="24" data-lineHeight="44">{{wishNumArray[curWishObj - 1]}} 次</div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="curWishObj <= 0" class="section img-size" data-top="1267">
        <div class="no-data img-size" data-width="350" data-height="200" data-borderRadius="12" data-fontSize="26" data-lineHeight="200">暂无现金奖励</div>
      </div>
      <div class="my-area img-size" data-top="1770" data-left="32" data-fontSize="30" data-lineHeight="48">
        <div>当前许愿次数：<span>{{wishSum || '暂无'}}</span>{{wishSum ? ' 次' : ''}}</div>
        <div>我的排名：<span>{{myRank || '暂无'}}</span></div>
        <div>预计获得奖品：<span>{{myGift || '暂无'}}</span></div>
      </div>
      <div class="list-area img-size" data-top="1956" data-left="32">
        <div class="row img-size" data-fontSize="26" data-lineHeight="75">
          <div class="img-size" data-width="88">排 名</div><!--
       --><div class="img-size" data-width="182">用户手机</div><!--
       --><div class="img-size" data-width="120">许愿次数</div><!--g
       --><div class="img-size" data-width="290">奖 品</div>
        </div>
        <div v-show="rankList.length > 0" v-for="(item, i) in rankList" :key="item.rowNo" class="row img-size" :class="myRank == item.rowNo ? 'highlight' : ''" data-fontSize="26" data-lineHeight="52">
          <div class="img-size" data-width="88">{{i + 1}}</div><!--
       --><div class="img-size" data-width="182">{{item.mobilePhone}}</div><!--
       --><div class="img-size" data-width="120">{{item.description}}</div><!--g
       --><div class="img-size" data-width="290">{{item.gift}}</div>
        </div>
      </div>
      <div v-show="rankList.length > 0" class="rank-comment img-size" data-top="2600" data-width="685" data-left="32" data-fontSize="24" data-lineHeight="30">* 榜单实时更新，以活动结束最终排名为准。如总数相同，按最<br>&nbsp;&nbsp;先到达该数量的排名在前</div>
      <div v-show="rankList.length <= 0" class="section img-size" data-top="2180">
        <div class="no-data img-size" data-borderRadius="12" data-width="350" data-height="200" data-fontSize="26" data-lineHeight="200">暂无排名数据</div>
      </div>
    </div>
  </div>
</template>
<script>
    const cRcdPgSize = 6;
    const cVipRates = [1, 2, 3, 5, 10, 20, 40];
    import {requestService, httpChance, httpRank, httpMyGift} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing : false,
                myRank: 0,
                myGift: '',
                rankList: [],
                myRcds: [],
                pgIndex: 0,
                wishNumbers: [],
                curWishObj: 0,
                bigInvest: false,
                investment: 0,
                cashSum: 0
            };
        },
        components : {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
            rcdPageNum : function () {
                return Math.ceil(this.myRcds.length / cRcdPgSize);
            },
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
            },
            wishNumArray : function () {
                let arr = [0 , 0, 0, 0, 0];
                let dt = this.wishNumbers;
                for (let i = 0; i < dt.length; i++) {
                    let j = dt[i].spare1 - 1;
                    arr[j] = dt[i].spare2;
                }
                return arr;
            },
            wishSum : function () {
                let all = this.wishNumbers;
                let sum = 0;
                for (let i = 0; i < all.length; i++) {
                    sum += all[i].spare2;
                }
                return sum;
            }
        },
        watch: {
            rankList : function (newList, oldList) {
                setTimeout(() => {T.setImgSize();}, 0);
            },
            myRcds : function (newRcds, oldRcds) {
                setTimeout(() => {T.setImgSize();}, 0);
            },
            bigInvest : function (newOne, oldOne) {
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
            getMyGift: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpMyGift, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        this.isAjaxing = false;
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
                    this.myRcds = _data.map.lotteryList;
                    this.wishNumbers = _data.map.vows;
                    this.curWishObj = _data.map.leastWish;
                    this.bigInvest = _data.map.isFull;
                    if (!_data.map.isFull) {
                        this.investment = _data.map.investAmount;
                    }
                    this.cashSum = _data.map.reward;
                    this.getRank();
                });
            },
            getRank: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpRank, params, _data => {
                    this.isAjaxing = false;
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
                    this.myRank = Number(_data.map.myRank) ? Number(_data.map.myRank) : 0;
                    this.myGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.rankList = _data.map.rankList;
                });
            },
            onNav : function (offset) {
                let shift = this.pgIndex + offset;
                if (shift < 0 || shift + 1 > this.rcdPageNum) return;
                this.pgIndex = shift;
            },
            onAbout : function () {
                let goUrl = window.location.pathname + "#/rule";
                if (T.wap) {
                    goUrl += "?wap=true";
                    if (T.isLogin){
                        goUrl += "&uid=" + T.uid;
                    }
                } else {
                    if (T.isLogin) {
                        goUrl += "?uid=" + T.uid;
                    }
                }
                goUrl += "&scroll=true";
                window.location.replace(goUrl);
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
                window.location.replace(hrefUrl);
            }
        }
    }
</script>