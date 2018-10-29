<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .record-wrapper {
      position: relative;
      color: #2123b7;
      @include contain("../../images/record.jpg");
      .back-btn,
      .count-btn,
      .xchg-btn,
      .rank-btn,
      .count-chance,
      .my-bills,
      .record-area,
      .pager-box,
      .section{
        position: absolute;
      }
      .back-btn{
        color: #0F0;
        text-align: center;
      }
      .count-chance{
        color: #ffea00;
        text-align: center;
      }
      .my-bills{
        color: #3c245e;
        span{
          color: #ff5800;
          vertical-align: bottom;
        }
      }
      .record-area{
        .row div{
          display: inline-block;
          vertical-align: top;
          text-align: left;
          color: #3c245e;
        }
      }
      .pager-box{
        width: 100%;
        text-align: center;
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
    <div class="img-size record-wrapper" data-width="750" data-height="1334">
      <lockScreen :lock="isAjaxing"></lockScreen>
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="80" data-height="100" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      <div class="count-chance img-size" data-top="120" data-left="540" data-width="178" data-height="32" data-fontSize="22" data-lineHeight="32">（{{myCntChance}}次机会）</div>
      <div class="count-btn img-size" data-top="83" data-left="480" data-width="238" data-height="77" @click="onCount"></div>
      <div class="my-bills img-size" data-top="218" data-left="75" data-fontSize="30" data-lineHeight="30">我的钞票：<span class="img-size" data-fontSize="36">{{myBills}}</span></div>
      <div class="xchg-btn img-size" data-top="295" data-left="75" data-width="240" data-height="82" @click="onGoXchg"></div>
      <div class="rank-btn img-size" data-top="295" data-left="350" data-width="327" data-height="82" @click="onGoRank"></div>
      <template v-if="myRcds.length > 0">
        <div class="record-area img-size" data-top="610" data-left="75">
          <div v-for="(page, no) in rcdPages">
            <div v-show="pgIndex == no" v-for="row in page" class="row img-size" data-fontSize="26" data-lineHeight="48">
              <div class="img-size" data-width="365">{{row.giftName}}</div><!--
           --><div class="img-size" data-width="250">{{row.addTime | transferTimeStr}}</div>
            </div>
          </div>
        </div>
        <div class="pager-box img-size" data-top="1130">
          <div class="nav img-size" :class="pgIndex <= 0 ? 'disable' : ''" data-fontSize="24" data-lineHeight="55" data-marginRight="50" @click="onNav(-1)">上一页</div><!--
       --><div class="img-size" data-fontSize="28" data-lineHeight="55">{{pgIndex + 1}} / {{rcdPageNum}}</div><!--
       --><div class="nav img-size" :class="pgIndex + 1 >= rcdPageNum ? 'disable' : ''" data-fontSize="24" data-lineHeight="55" data-marginLeft="50" @click="onNav(1)">下一页</div>
        </div>
      </template>
      <div v-show="myRcds.length <= 0" class="section img-size" data-top="750">
        <div class="no-data img-size" data-borderRadius="12" data-width="300" data-height="200" data-fontSize="24" data-lineHeight="200">暂无获奖记录</div>
      </div>
    </div>
  </div>
</template>
<script>
    const cRcdPgSize = 10;
    import {requestService, httpMyGift} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                myBills: 0,
                myRcds: [],
                myCntChance: 0,
                pgIndex: 0
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
//                    return a.addTime - b.addTime;
                    return b.addTime - a.addTime;
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
                    this.isAjaxing = false;
                    if (_data.success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.myBills = Number(_data.map.myMoney) > 0 ? Number(_data.map.myMoney) : 0;
                    this.myRcds = _data.map.lotteryList;
                    this.myCntChance = _data.map.totalchance;
                });
            },
            onNav : function (offset) {
                let shift = this.pgIndex + offset;
                if (shift < 0 || shift + 1 > this.rcdPageNum) return;
                this.pgIndex = shift;
            },
            onCount: function () {
                requirePop("notify", {
                    props : {
                        transition : this.myCntChance < 1 ? 'bounceIn' : 'fadeIn',
                        popState : this.myCntChance < 1 ? 3 : 4,
                        chance : this.myCntChance
                    },
                    on : {
                        "go-draw-event" : function () {
                            window.location.replace(window.location.pathname + "#/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                        },
                        "go-count-event" : function () {
                            window.location.replace(window.location.pathname + "#/count/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=record");
                        }
                    }
                });
            },
            onGoXchg : function () {
                window.location.replace(window.location.pathname + "#/xchg/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&opt=" + this.myBills + "&from=record");
            },
            onGoRank : function () {
                window.location.replace(window.location.pathname + "#/rank/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=record");
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