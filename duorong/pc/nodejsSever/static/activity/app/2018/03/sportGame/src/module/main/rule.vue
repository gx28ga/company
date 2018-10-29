<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .rule-main {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .content-wrapper {
      position: relative;
      @include contain('../../images/rule.jpg');
      .back-btn, .rule-area{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        text-align: center;
      }
      .rule-area{
        color: #FFF;
        .hi-lgt{
          color: #fff6b8;
        }
        .item{
          margin-bottom: .4rem;
        }
        .inner-item{
          margin-top: .25rem;
        }
        .inner-item.comment{
          color: #9cfff2;
        }
        .part{
          display: inline-block;
          vertical-align: top;
        }
        .row{
          width: 100%;
          .td{
            display: inline-block;
            vertical-align: top;
            border-right: 1px solid rgb(7, 82, 69);
            border-bottom: 1px dotted rgb(7, 82, 69);
            text-align: center;
            color: #003333;
          }
          .td.left{
            border-left: 1px solid rgb(7, 82, 69);
            border-right-style: dotted!important;
          }
          .td.head{
            border-top: 1px solid rgb(7, 82, 69);
          }
          .td.out-left{
            background-color: rgb(143, 235, 223);
            border: 1px solid rgb(7, 82, 69);
            border-right: none!important;
            padding: 2px 0 2px;
            div{
              display: inline-block;
              vertical-align: middle;
            }
          }
          .out-right .td.head, .out-right .td.last{
            /*padding-right: 1px;*/
            border-right-style: solid!important;
          }
          .out-right .td.single{
            padding-right: 1px;
          }
          .td.out-left::after{
            display: inline-block;
            vertical-align: middle;
            content: '';
            width: 0;
            height: 100%;
          }
          .td.out-right{
            border: none!important;
          }
          .out-right .td{
            text-align: left!important;
          }
        }
        .row.bg-clrfu{
          .td{
            background-color: rgb(143, 235, 223);
          }
          /*.td:not(.left){
            text-align: left;
          }*/
        }
        .row.last .td{
          border-bottom: 1px solid rgb(7, 82, 69);
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="3100">
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="80" data-height="100" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      <div class="rule-area img-size" data-top="140" data-left="20" data-width="720" data-fontSize="30" data-lineHeight="46">
        <div class="item"><div class="part img-size" data-width="45">1、</div>
          <div class="part img-size" data-width="660">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        </div>
        <div class="item"><div class="part img-size" data-width="45">2、</div>
          <div class="part img-size" data-width="660">活动期间：<br>• 投资≥20天以上产品，单笔投资≥10000元，即可获得踢毽子机会1次，可累计<br>• 投资≥120天以上产品，单笔投资≥30000元，可额外获得踢足球机会2次，可累计<br>• 举例：投资143天产品8万元，可获得踢毽子8次，踢足球4次，以此类推</div>
        </div>
        <div class="item"><div class="part img-size" data-width="45">3、</div>
          <div class="part img-size" data-width="660">运动对抗赛：<br>• 【踢毽子】5秒内点击屏幕中的毽子，每成功点击一次即可获得5运动能量<br>• 【踢足球】5秒内点击屏幕中的足球，每成功点击一次即可获得10运动能量
            <div class="inner-item">选择踢毽子/踢足球10次可进入省力模式，不参与游戏，直接获赠1500/3000的能量值及随机小奖品</div>
            <div class="inner-item">如时间到达则游戏结束，请在5秒内尽可能的多点踢毽子/足球；每次游戏结束可获赠运动对抗赛随机小奖品：</div>
            <div class="row img-size" data-marginLeft="14" data-marginTop="28" data-marginBottom="20">
              <div class="td out-left bg-clrfu img-size" data-width="84" data-height="240">
                <div class="img-size" data-width="60" data-fontSize="24">奖品包含</div>
              </div><!--
           --><div class="td out-right img-size">
                <div class="row bg-clrfu img-size">
                  <div class="td single head left img-size" data-paddingLeft="20" data-width="447" data-fontSize="24" data-lineHeight="48">积分：5 / 10 / 50</div>
                </div>
                <div class="row bg-clrfu">
                  <div class="td left img-size" data-paddingLeft="20" data-width="171" data-fontSize="24" data-lineHeight="48">1.2%加息券</div><!--
                 --><div class="td img-size" data-width="256" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">10元红包</div>
                </div>
                <div class="row bg-clrfu">
                  <div class="td left img-size" data-paddingLeft="20" data-width="171" data-fontSize="24" data-lineHeight="48">10元京东卡</div><!--
                 --><div class="td img-size" data-width="256" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">能量值： 5 / 10</div>
                </div>
                <div class="row bg-clrfu">
                  <div class="td left img-size" data-paddingLeft="20" data-width="171" data-fontSize="24" data-lineHeight="48">星享卡</div><!--
                   --><div class="td img-size" data-width="256" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">松下离子蒸汽美容仪</div>
                </div>
                <div class="row bg-clrfu last">
                  <div class="td single left last img-size" data-paddingLeft="20" data-width="447" data-fontSize="24" data-lineHeight="48">Kindle paperwhite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item"><div class="part img-size" data-width="45">4、</div>
          <div class="part img-size" data-width="660">每日能量大作战（每天运动能量可参与每日排名）
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="80" data-fontSize="24" data-lineHeight="48">名 次</div><!--
           --><div class="td head img-size" data-width="274" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in dailyPrize" class="row bg-clrfu" :class="i + 1 == dailyPrize.length ? 'last' : ''">
              <div class="td left img-size" data-width="80" data-fontSize="24" data-lineHeight="48">{{i + 1}}</div><!--
           --><div class="td img-size" data-width="274" data-fontSize="24" data-lineHeight="48">{{box}}</div>
            </div>
          </div>
        </div>
        <div class="item"><div class="part img-size" data-width="45">5、</div>
          <div class="part img-size" data-width="660" data-marginBottom="20">我的能量不可想象（运动能量可以兑换不同奖品），详见活动页面
          </div>
        </div>
        <div class="item scroll-dest"><div class="part img-size" data-width="45">6、</div>
          <div class="part img-size" data-width="660" data-marginBottom="20">运动达人就是我（排名，包含已兑换掉的运动能量）
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">名 次</div><!--
           --><div class="td head img-size" data-width="240" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in totalRankPrize" class="row bg-clrfu" :class="i + 1 == totalRankPrize.length ? 'last' : ''">
              <div class="td left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">{{i + 1}}</div><!--
           --><div class="td img-size" data-width="240" data-fontSize="24" data-lineHeight="48">{{box}}</div>
            </div>
            <div class="inner-item comment img-size" data-fontSize="24" data-lineHeight="32">* 以活动结束最终排名为准。如总能量相同，则按时间顺序优先排名</div>
          </div>
        </div>
        <div class="item"><div class="part img-size" data-width="45">7、</div>
          <div class="part img-size" data-width="660">活动结束之后，尚未使用的机会一律作废。如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格</div>
        </div>
        <div class="item"><div class="part img-size" data-width="45">8、</div>
          <div class="part img-size" data-width="660">奖品以活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分、红包、加息券实时发放；积分可用于前往“积分商城”兑换红包、加息券、各种实物奖励等</div>
        </div>
        <div class="item"><div class="part img-size" data-width="45">9、</div>
          <div class="part img-size" data-width="660">本活动最终解释权归多融财富所有。</div>
        </div>
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
                dailyPrize : [
                    '1500积分',
                    '800积分',
                    '500积分',
                    '300积分',
                    '100积分'
                ],
                totalRankPrize : [
                    '戴森空气净化扇',
                    'iPad',
                    '科沃斯扫地机器人',
                    'Sk-2小灯泡精华',
                    '小米2空气净化器',
                    '松下洗牙器',
                    '飞利浦剃须刀',
                    '小米手环',
                    '星享卡',
                    '50元JD卡'
                ],
                xchgMap : [
                   {val: '7500', gift: '小米移动电源'},
                   {val: '15000', gift: '星享卡'},
                   {val: '27500', gift: '小米手环'},
                   {val: '50000', gift: '拍立得'},
                   {val: '135000', gift: 'Foreo洁面仪'},
                   {val: '165000', gift: '戴森吹风机'},
                   {val: '265000', gift: '6666元JD卡'}
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