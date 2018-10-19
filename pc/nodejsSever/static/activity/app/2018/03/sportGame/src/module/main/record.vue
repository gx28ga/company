<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .record-wrapper {
      position: relative;
      color: #2123b7;
      @include contain("../../images/record.png");
      .record-area,
      .pager-box,
      .section{
        position: absolute;
      }
      .record-area{
        .row div{
          display: inline-block;
          vertical-align: top;
          text-align: left;
          color: #003333;
        }
      }
      .pager-box{
        width: 100%;
        text-align: center;
        div{
          display: inline-block;
          vertical-align: bottom;
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
      <template v-if="myRcds.length > 0">
        <div class="record-area img-size" data-top="260" data-left="85">
          <div v-for="(page, no) in rcdPages">
            <div v-show="pgIndex == no" v-for="row in page" class="row img-size" data-fontSize="30" data-lineHeight="60">
              <div class="img-size" data-width="330">{{row.giftName}}</div><!--
           --><div class="img-size" data-width="300">{{row.addTime | transferTimeStr}}</div>
            </div>
          </div>
        </div>
        <div class="pager-box img-size" data-top="900">
          <div class="nav img-size" :class="pgIndex <= 0 ? 'disable' : ''" data-fontSize="28" data-lineHeight="55" data-marginRight="50" @click="onNav(-1)">上一页</div><!--
       --><div class="img-size" data-fontSize="34" data-lineHeight="55">{{pgIndex + 1}} / {{rcdPageNum}}</div><!--
       --><div class="nav img-size" :class="pgIndex + 1 >= rcdPageNum ? 'disable' : ''" data-fontSize="28" data-lineHeight="55" data-marginLeft="50" @click="onNav(1)">下一页</div>
        </div>
      </template>
      <div v-show="myRcds.length <= 0" class="section img-size" data-top="432">
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
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ?errorMsg : '系统错误，请联系客服。',
                                btnBackHome: false
                            }
                        });
                        bus.$once("closePopEvent", () => {
                            this.$emit("record-error");
                        });
                        return false;
                    }
                    this.myRcds = _data.map.lotteryList;
                    this.$nextTick(() => {T.setImgSize();});
                });
            },
            onNav : function (offset) {
                let shift = this.pgIndex + offset;
                if (shift < 0 || shift + 1 > this.rcdPageNum) return;
                this.pgIndex = shift;
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