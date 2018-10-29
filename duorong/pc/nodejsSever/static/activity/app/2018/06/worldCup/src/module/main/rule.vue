<style lang='sass'>
  @import '../../css/global.scss';
  /*@import "../../vendor/all-animation.min.css";*/
  .rule-main {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .content-bg {
      position: relative;
      .top-bar{
        @include contain("../../images/rule-bar.png");
        position: relative;
        .back-btn{
          position: relative;
          color: #D2691E;
          text-align: center;
        }
      }
      .rule-area{;
        position: relative;
      }
      .rule-area{
        background: #073190;
        color: #FFF;
        h3{
          width: 100%;
          color: #efe432;
          text-align: center;
        }
        table{
          width: 100%;
          border-collapse: collapse;
          text-align: center;
        }
        .half{
          width: 50%!important;
        }
        table, th, td{
          border: 1px solid #073190;
        }
        th, td{
          width: 50%;
        }
        th{
          background: #1A70C0;
        }
        td{
          background: #014099;
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main">
    <div class="img-size content-bg animated zoomIn" data-width="750">
      <div class="img-size top-bar" data-width="750" data-height="305">
        <div class="back-btn img-size" data-left="20" data-top="0" data-width="59" data-height="57" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      </div>
      <div class="img-size rule-area" data-width="700" data-paddingLeft="25" data-paddingRight="25" data-paddingBottom="40" data-fontSize="24" data-lineHeight="40">
        <h3 class="img-size" data-fontSize="36" data-lineHeight="64">活动规则</h3>
        <p class="img-size" data-marginTop="30">1、活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</p>
        <p class="img-size" data-marginTop="20">2、抽奖</p>
        <p>活动期间，单笔投资≥20天产品，每满10000元，可获1次抽奖机会，单笔投资≥120天产品，每满50000元，可额外获得3次机会。单笔投资≥120天产品，每满10万元，再多获得1张万能卡片，可转换为任意球队卡片。例如：投资143天产品12万，可获得18次抽奖机会以及1张万能卡片，以此类推奖品如下：</p>
        <table class="img-size half" data-marginTop="20">
          <tr class="img-size" data-fontSize="30" data-lineHeight="50">
            <th>奖 品</th>
          </tr>
          <tr v-for="gift in drawGift" class="img-size" data-fontSize="24" data-lineHeight="42">
            <td>{{gift}}</td>
          </tr>
        </table>
        <p class="img-size" data-marginTop="30">3、【集球队卡片 拿精彩好礼】</p>
        <table class="img-size" data-marginTop="20">
          <tr class="img-size" data-fontSize="30" data-lineHeight="50">
            <th>球队卡片</th><th>奖 品</th>
          </tr>
          <tr v-for="row in cardGift" class="img-size" data-fontSize="24" data-lineHeight="42">
            <td>{{row.card}}</td><td>{{row.gift}}</td>
          </tr>
        </table>
        <p class="img-size" data-fontSize="20" data-lineHeight="32">* 奖项自动获得，无需兑换操作，以获得的最高奖项为准，不可累积获得。</p>
        <p class="img-size" data-fontSize="20" data-lineHeight="32">* 奖项对应的球队卡片，待比赛结束出比赛结果之后确定。</p>
        <p class="img-size" data-marginTop="30">4、排名</p>
        <p>根据所获得的任意世界杯球队卡片的总数量进行排名，前10名获得大奖，如下：</p>
        <table class="img-size" data-marginTop="20">
          <tr class="img-size" data-fontSize="30" data-lineHeight="50">
            <th>排 名</th><th>奖 品</th>
          </tr>
          <tr v-for="(gift, no) in rankGift" class="img-size" data-fontSize="24" data-lineHeight="42">
            <td>{{no + 1}}</td><td>{{gift}}</td>
          </tr>
        </table>
        <p class="img-size" data-fontSize="20">* 以活动结束最终排名为准。如成绩相同，则按时间顺序优先排名。</p>
        <p class="img-size" data-marginTop="30">5、【世界杯竞猜】</p>
        <p>• 竞猜方式：世界杯期间，竞猜比赛结果（共64场竞猜），当日竞猜下一个比赛日的所有比赛赛事的结果，逾期未投注，视为放弃参与该比赛的竞猜。每场比赛只可投注一个结果，一经投注不可更改，每次投注最小10积分；</p>
        <p>• 竞猜奖励：竞猜正确可获得以下奖励</p>
        <p>① 积分奖励：根据您投注的积分获取积分奖励，积分奖励= （该场比赛自己投注的积分/猜对组总投注积分）× 该场比赛总投注积分；</p>
        <p>② 高额加息券：</p>
        <table class="img-size" data-marginTop="20">
          <tr v-for="(item, index) in lotteryGift" class="img-size" data-fontSize="24" data-lineHeight="42">
            <td v-if="index === 0">每猜对任意1场比赛</td><td v-else>累积猜对{{item.num}}场比赛</td><td>{{item.gift}}</td>
          </tr>
        </table>
        <p class="img-size" data-marginTop="20">• 竞猜结果将在比赛结束后第2个工作日内公布并发放积分奖励；</p>
        <p class="img-size" data-marginTop="30">7、活动结束之后，尚未使用的抽奖机会一律作废。如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；</p>
        <p class="img-size" data-marginTop="30">8、奖品以活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分、红包、加息券实时发放；积分可用于前往“积分商城”兑换红包、加息券、各种实物奖励等</p>
        <p class="img-size" data-marginTop="30">9、本活动最终解释权归多融财富所有。</p>
      </div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpStatus} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data() {
            return {
                startTime: 0,
                endTime: 0,
                drawGift : [
                    '10-50积分',
                    '1%~2%加息券',
                    '世界杯球队卡片（32支球队）',
                    '5元JD卡',
                    '小米手环3',
                    '小米电饭煲',
                    '小米空气净化器2s'
                ],
                cardGift : [
                    {card: '世界杯32支球队全部卡片 x 1', gift: 'BOSE真无线耳机'},
                    {card: '16强球队卡片', gift: 'Kindle Paperwhite'},
                    {card: '8强球队卡片', gift: '欧乐b电动牙刷'},
                    {card: '4强球队卡片', gift: '星享卡'},
                    {card: '冠军球队卡片 x 3', gift: '小米移动电源5000mah'}
                ],
                rankGift : [
                    '10000元JD卡',
                    '华为P20 pro',
                    '飞利浦电动牙刷',
                    '米技电陶炉',
                    '飞利浦空气炸锅',
                    '拍立得',
                    '北美电器咖啡机',
                    '博朗离子发梳',
                    '碧然德净水器',
                    '星享卡'
                ],
                lotteryGift : [
                    {num: 1, gift: '获得2%加息券 x 1'},
                    {num: 3, gift: '额外获得2.3%加息券 x 1'},
                    {num: 6, gift: '额外获得2.5%加息券 x 1'},
                    {num: 10, gift: '额外获得3%加息券 x 1'},
                    {num: 20, gift: '额外获得3%加息券 x 2'}
                ]
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
            if (T.getQueryString('scroll')) {
                let el = document.getElementsByClassName("scroll-dest")[0];
                let rect = el.getBoundingClientRect();
                $(".rule-main").scrollTop(rect.top);
            }
        },
        methods: {
            getActivityPeriod: function () {
                requestService(httpStatus, {}, _data => {
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
                        bus.$once("closePopEvent", this.onBack);
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