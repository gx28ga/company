<style lang='sass'>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #3c245e;
      @include contain("../../images/rank.jpg");
      .back-btn,
      .my-area,
      .list-area,
      .section{
        position: absolute;
      }
      .back-btn{
        color: #0F0;
        text-align: center;
      }
      .my-area{
        span{
          color: #ff5800;
          vertical-align: baseline;
        }
      }
      .list-area{
        text-align: center;
        .row{}
        .row > div{
          display: inline-block;
        }
        .highlight{
          color: #ff5800;
          font-weight: bold;
        }
      }
      .head{
        /*color: #333;*/
        font-weight: bold;
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
        color: #aa82ed;
        text-align: left;
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size rank-wrapper" data-width="750" data-height="1334">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="80" data-height="100" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      <div class="my-area img-size" data-top="210" data-left="75" data-fontSize="30" data-lineHeight="48">
        <div>我的钞票：<span :class="myAllBills > 0 ? 'img-size' : ''" data-fontSize="36">{{myAllBills > 0 ? myAllBills : '暂无'}}</span><i v-show="myAllBills > 0">（含已兑换）</i></div>
        <div>当前排名：<span :class="myAllBills > 0 ? 'img-size' : ''" data-fontSize="36">{{myRank > 0 ? myRank : '暂无'}}</span></div>
        <div>预计可获得：<span>{{myGift == '' ? '暂无' : myGift}}</span></div>
      </div>
      <div class="list-area img-size" data-top="460" data-left="32">
        <div class="row head img-size" data-fontSize="26" data-lineHeight="120">
          <div class="img-size" data-width="100">排 名</div><!--
       --><div class="img-size" data-width="164">用户手机</div><!--
       --><div class="img-size" data-width="198">兑换券</div><!--g
       --><div class="img-size" data-width="220">奖 品</div>
        </div>
        <div v-show="rankList.length > 0" v-for="(item, i) in rankList" :key="item.rowNo" class="row img-size" :class="myRank == item.rowNo ? 'highlight' : ''" data-fontSize="26" data-lineHeight="50">
          <div class="img-size" data-width="100">{{i + 1}}</div><!--
       --><div class="img-size" data-width="164">{{item.mobilePhone}}</div><!--
       --><div class="img-size" data-width="198">{{item.description}}</div><!--g
       --><div class="img-size" data-width="220">{{item.gift}}</div>
        </div>
      </div>
      <div v-show="rankList.length > 0" class="section comment img-size" data-top="1148" data-left="70" data-width="608" data-fontSize="24" data-lineHeight="30">* 以活动结束最终排名为准。如钞票面值总额相同，按最<br>&nbsp;&nbsp;先到达该成绩的排名在前。</div>
      <div v-show="rankList.length <= 0" class="section img-size" data-top="720">
        <div class="no-data img-size" data-borderRadius="12" data-width="350" data-height="200" data-fontSize="26" data-lineHeight="200">暂无排名数据</div>
      </div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpRank} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                myRank: 0,
                myGift: '',
                rankList: [],
                myAllBills: 0
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        watch: {
            rankList : function (newList, oldList) {
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
                this.getRank();
            }
        },
        methods: {
            getRank: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpRank, params, _data => {
                    this.isAjaxing = false;
                    if (_data.success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg ? _data.errorMsg : "系统错误，请联系客服。",
                                btnBackHome: false
                            }
                        });
                        return false;
                    }
                    this.myAllBills = Number(_data.map.myMoney) > 0 ? Number(_data.map.myMoney) : 0;
                    this.myRank = Number(_data.map.myRank) > 0 ? Number(_data.map.myRank) : 0;
                    this.myGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.rankList = _data.map.rankList;
                });
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