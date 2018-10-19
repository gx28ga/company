<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .rule-main {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .content-wrapper {
      position: relative;
      @include contain('../../images/rule-bg.jpg');
      .back-btn, .rule-detail{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .rule-detail{
        color: #110A04;
        .rule-item{
          margin: 0 0 1rem;
          div{
            display: inline-block;
            color: #F8B551;
          }
          div.left{
            width: 22%;
          }
        }
        .prize-area{
          text-align: center;
        }
        .prize-row{
          display: inline-block;
          div {
            display: inline-block;
            background: rgb(255, 244, 192);
            text-align: center;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2500">
      <div class="back-btn img-size" data-left="20" data-top="-10" @click="onBack">&laquo;</div>
      <div class="rule-detail img-size" data-top="200" data-left="40" data-width="680" data-fontSize="24" data-lineHeight="36">
        <div class="rule-item">1、活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        <div class="rule-item">2、双11活动：神券秒杀<br>①每日10：00准时开始，双十一专享福利加息券限时抢，先到先得，抢完为止，包括：2.3%，2.5%，3.0%加息券，666元红包<br>②仅限11.6-11.12，7天</div>
        <div class="rule-item">3、双11活动：“二哈”养成记<br>①活动期间，单笔投资 20天≤期限＜120天产品，每满10000元，即可获得4g狗粮+1次抽奖机会。<br><!--
     -->②单笔投资≥120天产品，每满10000元，可获得14g狗粮+1次抽奖机会。<br>③抽奖奖品，包括：ipad、小米体脂秤、5元京东卡、10元京东卡、2%加息券、10积分、30积分、50积分、1~10g狗粮<br><!--
     -->* 2017.11.6～11.19期间，获赠的“狗粮”奖励翻倍哟~<br>④【二哈成长奖】<br>当“二哈”成长到一定程度，可获得奖品：</div>
        <div class="prize-area img-size" data-marginTop="50" data-marginBottom="50">
          <div v-for="item in growthPrize" class="prize-row img-size" data-marginBottom="4" data-lineHeight="55">
            <div class="img-size" data-width="130" data-height="55">{{item.wgt}}</div>
            <div class="img-size" data-width="367" data-height="55">{{item.prize}}</div>
          </div>
        </div>
        <div class="rule-item">⑤【二哈排名奖】<br>按二哈重量排名，前10名可获得奖品：</div>
        <div class="prize-area img-size" data-marginTop="50" data-marginBottom="50">
          <div class="prize-row img-size" data-marginBottom="4" data-lineHeight="55">
            <div class="img-size" data-width="130" data-height="55">排名</div>
            <div class="img-size" data-width="367" data-height="55">奖品名称</div>
          </div><!--
       --><div v-for="(item, index) in rankPrize" class="prize-row img-size" data-marginBottom="4" data-lineHeight="55">
            <div class="img-size" data-width="130" data-height="55">{{index + 1}}</div>
            <div class="img-size" data-width="367" data-height="55">{{item}}</div>
          </div>
        </div>
        <div class="rule-item">4、 实体奖品将在活动结束后的15个工作日内联系您并发放，实物以收到为准</div>
        <div class="rule-item">5、本活动最终解释权归多融财富所有。</div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpStatus} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data() {
            return {
                startTime: 0,
                endTime: 0,
                growthPrize: [
                    {wgt:'克数/g', prize: '奖品名称'},
                    {wgt:'188', prize: '10元JD卡'},
                    {wgt:'388', prize: '星享卡'},
                    {wgt:'598', prize: '膳魔师保温杯'},
                    {wgt:'858', prize: '祖马龙30ml香水'},
                    {wgt:'1588', prize: 'Foreo洁面仪'},
                    {wgt:'2888', prize: '雅萌美容仪'},
                    {wgt:'5288', prize: 'Iphone8 64g'}
                ],
                rankPrize: ['Iphone8 Plus 64G', 'Ipad 32G', 'Bose无线耳机', '飞利浦空气炸锅', 'kindle paperwhite', '东菱面包机', '德尔玛除螨仪', '50元京东卡', '30元京东卡', '10元京东卡']
            };
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy.M.d');
            }
        },
        mounted(){
            T.setImgSize();
            this.getActivityPeriod();
        },
        methods: {
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.success && !_data.errorMsg) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title: '&nbsp;',
                                content: "操作失败，请联系客服！",
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定',
                            });
                            return false;
                        }
                        callAfter(_data);
                    }
                });
            },
            getActivityPeriod: function () {
                this.__requestService(httpStatus, {}, _data => {
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
                    this.startTime = _data.map.startTime;
                    this.endTime = _data.map.endTime;
                });
            },
            onBack : function () {
                let homeUrl = window.location.pathname;
                if (T.wap) {
                    homeUrl += "?wap=true";
                    if (T.isLogin) {
                        homeUrl += "&uid=" + T.uid;
                    }
                } else {
                    if (T.isLogin) {
                        homeUrl += "?uid=" + T.uid;
                    }
                }
                window.location.replace(homeUrl);
            }
        }
    }
</script>