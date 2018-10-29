<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section.game-list {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    color: #FFF;
    .mid-align{
      text-align: center;
    }
    .top-bar{
      @include contain("../../images/top-bar.png");
    }
    .content-wrapper {
      position: relative;
      background: #073190;
      .my-score{
        width: 100%;
        background: #014099;
      }
      .my-score > div {
        display: inline-block;
        vertical-align: middle;
      }
      .my-score::after{
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 0;
        height: 100%;
      }
      table{
        margin: 0 auto;
        border-collapse: collapse;
        color: #FFF;
      }
      th, td{
        border: 1px solid #073190;
      }
      th {
        background: #1A70C0;
      }
      td {
        background: #014099;
      }
      .note{
        width: 100%;
      }
      .no-data{
        background: #1A70C0;
        margin: 0 auto;
        color: #FFF;
      }
    }
  }
</style>
<template>
  <div class="main-section game-list">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="img-size top-bar" data-width="750" data-height="310"></div>
    <div class="img-size content-wrapper" data-width="750" data-paddingTop="17" data-minHeight="907" data-paddingBottom="100">
      <div class="img-size my-score" data-marginBottom="30" data-height="188">
        <div class="img-size" data-marginLeft="47" data-fontSize="24" data-lineHeight="48">
          <p>我的卡片总数：<span :class="myCards > 0 ? 'img-size' : ''" data-fontSize="30">{{myCards > 0 ? myCards : '暂无'}}</span></p>
          <p>当前排名：<span :class="myRank > 0 ?'img-size' : ''" data-fontSize="30">{{myRank > 0 ? myRank : '暂无'}}</span></p>
          <p>预计可获得：<span>{{myGift == '' ? '暂无' : myGift}}</span></p>
        </div>
      </div>
      <template v-if="rankList.length > 0">
        <table class="img-size mid-align" data-fontSize="18" data-lineHeight="40">
          <tr class="img-size" data-fontSize="24" data-lineHeight="50">
            <th class="img-size" data-width="80">排 名</th>
            <th class="img-size" data-width="150">手机号</th>
            <th class="img-size" data-width="120">卡片数量</th>
            <th class="img-size" data-width="370">奖 品</th>
          </tr>
          <tr v-for="(item, no) in rankList">
            <td>{{no + 1}}</td>
            <td>{{item.mobilePhone}}</td>
            <td>{{item.gotCardCount}}</td>
            <td>{{item.prize}}</td>
          </tr>
        </table>
        <p class="img-size note mid-align" data-fontSize="18" data-lineHeight="60">*以活动结束最终排名为准，如总数相同，按最先到达该数量的排名在前。</p>
      </template>
      <template v-else>
        <div class="img-size no-data mid-align" data-marginTop="130" data-borderRadius="24" data-width="360" data-height="240" data-fontSize="28" data-lineHeight="240">暂无排名数据</div>
      </template>
    </div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    import {requestService, httpRank} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isAjaxing: false,
                rankList: [],
                myCards: 0,
                myRank: 0,
                myGift: ''
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
        },
        filters : {
        },
        mounted(){
            T.setImgSize();
            if (T.isLogin) {
                this.__getRank();
            }
        },
        methods: {
            __getRank : function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpRank, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: false
                            },
                            on : {
                                "close-only-event" : () => {
                                    this.$emit("exception-thrown-event");
                                }
                            }
                        });
                        return false;
                    }
                    const {memberOnMap, memberOnList} = _data.map;
                    this.rankList = memberOnList.sort((a, b) => {return a.index > b.index;});
                    this.myCards = memberOnMap.gotCardCount;
                    this.myRank = memberOnMap.index;
                    this.myGift = memberOnMap.prize;
                    this.$nextTick(() => {T.setImgSize();});
                });
            }
        }
    }
</script>