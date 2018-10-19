<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      color: #a90094;
      @include contain("../../images/xchg.png");
      .number,
      .gift-area,
      .about{
        position: absolute;
      }
      .number{
        color: #FFF;
        text-align: center;
      }
      .gift-area{
        span{
          color: #ff0090;
          font-weight: bold;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size content-wrapper" data-width="750" data-height="1350">
      <lockScreen :lock="isAjaxing"></lockScreen>
      <div class="img-size number cat" data-top="301" data-left="208" data-width="50" data-height="50" data-fontSize="24" data-lineHeight="50">{{catCnt}}</div>
      <div class="img-size number cat" data-top="301" data-left="433" data-width="50" data-height="50" data-fontSize="24" data-lineHeight="50">{{altmanCnt}}</div>
      <div class="img-size number cat" data-top="301" data-left="657" data-width="50" data-height="50" data-fontSize="24" data-lineHeight="50">{{gourdBoyCnt}}</div>
      <div class="img-size number cat" data-top="513" data-left="208" data-width="50" data-height="50" data-fontSize="24" data-lineHeight="50">{{mcdullCnt}}</div>
      <div class="img-size number cat" data-top="513" data-left="433" data-width="50" data-height="50" data-fontSize="24" data-lineHeight="50">{{greyWolfCnt}}</div>
      <div class="img-size number cat" data-top="513" data-left="657" data-width="50" data-height="50" data-fontSize="24" data-lineHeight="50">{{catOfficerCnt}}</div>
      <div class="img-size gift-area" data-top="812" data-left="70" data-fontSize="30" data-lineHeight="48">已集齐 <span>{{currentSetCnt}}</span> 套<br>可获得奖励：<span>{{currentGift || "暂无"}}</span><br><template v-if="gapToNext && nextGradeGift">再多收集 <span>{{gapToNext || "--"}}</span> 套，奖励可升级为 <span>{{nextGradeGift || "--"}}</span></template></div>
      <div class="img-size about" data-top="986" data-left="304" data-width="144" data-height="27" @click="onAbout"></div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpXchg} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                isAjaxing: false,
                catCnt : 0,
                altmanCnt: 0,
                gourdBoyCnt: 0,
                mcdullCnt: 0,
                greyWolfCnt: 0,
                catOfficerCnt: 0,
                currentSetCnt: 0,
                currentGift: "",
                gapToNext: 0,
                nextGradeGift: ""
            };
        },
        components : {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            if (T.isLogin) {
                this.__getXchgData();
            }
        },
        methods: {
            __getXchgData: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpXchg, params, _data => {
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
                            this.$emit("xchg-request-error");
                        });
                        return false;
                    }
                    const {dlam, atm, hlw, md, htl, hmjz, suit, nextSuit, reward, nextReward} = _data.map;
                    this.catCnt = Number(dlam) || 0;
                    this.altmanCnt = Number(atm) || 0;
                    this.gourdBoyCnt = Number(hlw) || 0;
                    this.mcdullCnt = Number(md) || 0;
                    this.greyWolfCnt = Number(htl) || 0;
                    this.catOfficerCnt = Number(hmjz) || 0;
                    this.currentSetCnt = Number(suit) || 0;
                    this.currentGift = reward ?
                                       reward.trim() === '无' ?
                                       "" : reward.trim() :
                                       "";
                    this.gapToNext = Number(nextSuit) || 0;
                    this.nextGradeGift = nextReward ?
                                         nextReward.trim() === '无' ?
                                         "" : nextReward.trim() :
                                         "";
                });
            },
            onAbout(){
                requirePop("aboutXchg", {
                    props : {
                        transition : "mask"
                    }
                })
            }
        }
    }
</script>