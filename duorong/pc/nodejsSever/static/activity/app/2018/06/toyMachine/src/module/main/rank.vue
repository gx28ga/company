<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      @include contain("../../images/rank.png");
      .my-area,
      .list-area,
      .section,
      .comment{
        position: absolute;
      }
      .my-area{
        color: #a90094;
        span{
          color: #ff0090;
          vertical-align: baseline;
        }
      }
      .list-area{
        color: #a90094;
        text-align: center;
        .row{}
        .row > div{
          display: inline-block;
          vertical-align: middle;
        }
        .high-light{
          color: #ff0090;
          font-weight: bold;
        }
      }
      .section{
        width: 100%;
        text-align: center;
        .no-data{
          display: inline-block;
          background: #FFF;
          color: #3c245e;
        }
      }
      .comment{
        color: #a90094;
        text-align: left;
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size rank-wrapper" data-width="750" data-height="1470">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="my-area img-size" data-top="180" data-left="55" data-fontSize="36" data-lineHeight="60">
        <div>已抓取公仔数：<span :class="myMedal > 0 ? 'img-size' : ''" data-fontSize="40">{{myMedal > 0 ? myMedal : '暂无'}}</span><!--<i v-show="myMedal > 0" class="img-size" data-fontSize="24" data-lineHeight="24"> （包含已兑换）</i>--></div>
        <div>当前排名：<span :class="myRank > 0 ? 'img-size' : ''" data-fontSize="40">{{myRank > 0 ? myRank : '暂无'}}</span></div>
        <div>预计可获得：<span>{{myGift == '' ? '暂无' : myGift}}</span></div>
      </div>
      <div v-if="rankList.length > 0">
        <div class="list-area img-size" data-top="385" data-left="50">
          <div class="row img-size" data-fontSize="30" data-lineHeight="90">
            <div class="img-size" data-width="70" data-marginRight="5">排名</div><!--
         --><div class="img-size" data-width="180">用户手机</div><!--
         --><div class="img-size" data-width="180">公仔数量</div><!--
         --><div class="img-size" data-width="224">奖 品</div>
          </div>
          <div v-for="record in rankList" :key="record.rowNo" class="row img-size" :class="myRank == record.rowNo ? 'high-light' : ''" data-fontSize="30" data-lineHeight="56">
            <div class="img-size" data-width="70" data-marginRight="5">{{record.rowNo}}</div><!--
         --><div class="img-size" data-width="180">{{record.mobilePhone}}</div><!--
         --><div class="img-size" data-width="180">{{record.description}}</div><!--
         --><div class="img-size" data-width="224" data-fontSize="20" data-lineHeight="24">{{record.gift}}</div>
          </div>
        </div>
        <div class="img-size comment" data-top="1140" data-left="53" data-width="658" data-fontSize="24" data-lineHeigh="30">* 以活动结束最终排名为准。如总数相同，按最先到达该数量的排名在前</div>
      </div>
      <div v-else class="section img-size" data-top="650">
        <div class="no-data img-size" data-borderRadius="12" data-width="280" data-height="180" data-fontSize="22" data-lineHeight="180">暂无排名数据</div>
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
                myMedal: 0,
                myRank: 0,
                myGift: '',
                rankList: []
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
                    this.myMedal = Number(myDescription) ? Number(myDescription) : 0;
                    this.myRank = Number(myRank) ? Number(myRank) : 0;
                    this.myGift = (myGift != '无') ? myGift : '';
                    this.rankList = rankList;
                    this.$nextTick(() => {T.setImgSize();});
                });
            }
        }
    }
</script>