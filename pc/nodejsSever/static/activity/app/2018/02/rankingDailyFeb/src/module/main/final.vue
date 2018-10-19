<style lang='sass'>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #422900;
      @include contain("../../images/rank.png");
      .back-btn,
      .my-area,
      .invest-btn,
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
      .invest-btn{
        @include contain("../../images/btn-invest.png");
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
        /*color: #aa82ed;*/
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
      <div class="my-area img-size" data-top="420" data-left="75" data-fontSize="20" data-lineHeight="40">
        <div>我的元宵总数：<span :class="myDumpling > 0 ? 'img-size' : ''" data-fontSize="24">{{myDumpling > 0 ? myDumpling : '暂无'}}</span></div>
        <div>当前排名：<span :class="myRank > 0 ? 'img-size' : ''" data-fontSize="24">{{myRank > 0 ? myRank : '暂无'}}</span></div>
        <div>预计可获得：<span>{{myGift == '' ? '暂无' : myGift}}</span></div>
      </div>
      <div v-show="investable" class="invest-btn img-size" data-top="455" data-left="487" data-width="188" data-height="52" @click="onInvest"></div>
      <div class="list-area img-size" data-top="715" data-left="68">
        <!--<div class="row head img-size" data-fontSize="26" data-lineHeight="120">
          <div class="img-size" data-width="100">排 名</div>&lt;!&ndash;
       &ndash;&gt;<div class="img-size" data-width="164">用户手机</div>&lt;!&ndash;
       &ndash;&gt;<div class="img-size" data-width="198">兑换券</div>&lt;!&ndash;g
       &ndash;&gt;<div class="img-size" data-width="220">奖 品</div>
        </div>-->
        <div v-show="rankList.length > 0" v-for="(item, i) in rankList" :key="item.rowNo" class="row img-size" :class="myRank == item.rowNum ? 'highlight' : ''" data-fontSize="20" data-lineHeight="50">
          <div class="img-size" data-width="94">{{i + 1}}</div><!--
       --><div class="img-size" data-width="152" data-marginRight="28">{{item.mobilePhone}}</div><!--
       --><div class="img-size" data-width="127">{{item.amount}}</div><!--g
       --><div class="img-size" data-width="228">{{item.gift}}</div>
        </div>
      </div>
      <div v-show="rankList.length > 0" class="section comment img-size" data-top="1225" data-left="100" data-width="585" data-fontSize="16" data-lineHeight="30">* 榜单实时展示，榜单结果以活动结束日23:59最终结果为准，其余时间仅供参考</div>
      <div v-show="rankList.length <= 0" class="section img-size" data-top="860">
        <div class="no-data img-size" data-borderRadius="12" data-width="350" data-height="200" data-fontSize="26" data-lineHeight="200">暂无排名数据</div>
      </div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpFinal} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                investable: true,
                myRank: 0,
                myGift: '',
                rankList: [],
                myDumpling: 0
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
                if (T.getQueryString("invest") == "no"){
                    this.investable = false;
                }
                this.getFinalRank();
            }
        },
        methods: {
            getFinalRank: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpFinal, params, _data => {
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
                    this.myDumpling = Number(_data.map.myInvest) > 0 ? Number(_data.map.myInvest) : 0;
                    this.myRank = Number(_data.map.myRank) > 0 ? Number(_data.map.myRank) : 0;
                    this.myGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.rankList = _data.map.rankList;
                });
            },
            onInvest : function () {
                T.callApp.investment();
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