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
        color: #003333;
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
          color: #003333;
        }
        .part{
          display: inline-block;
          vertical-align: top;
        }
        .part.paragraph-symbol{
          text-align: center;
        }
        .part.paragraph-symbol > div{
          display: inline-block;
          vertical-align: middle;
          @include contain("../../images/star.png");
        }
        .part.paragraph-symbol::after{
          display: inline-block;
          vertical-align: middle;
          width: 0;
          height: 100%;
          content: '';
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
          .td.single{
            border-left: 1px solid rgb(7, 82, 69);
            border-right-style: solid!important;
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
            background-color: #DCDCDC;
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
    <div class="img-size content-wrapper" data-width="750" data-height="4200">
      <div class="back-btn img-size" data-left="20" data-top="13" data-width="59" data-height="57" data-fontSize="64" data-lineHeight="64" @click="onBack"><!--&laquo;--></div>
      <div class="rule-area img-size" data-top="225" data-left="32" data-width="700" data-fontSize="30" data-lineHeight="48">
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【农场劳动】<br>• 单笔投资20≤期限＜120天产品，每满10000元，可获得1次农场锄草机会。5次锄草即可获赠1枚劳模勋章<br>• 单笔投资20≤期限＜120天产品，每满30000元，可额外获得1次农场浇水机会。1次浇水即可获赠1枚劳模勋章<br><p class="img-size" data-marginTop="10">举例：投资90天产品7万，可获得7次锄草+2次浇水机会，共计获得3枚勋章，以此类推。</p></div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【牧场劳动】<br>• 单笔投资 ≥120天产品，每满10000元，可获得1次牧场喂食机会。2次喂食即可获赠1枚劳模勋章<br>• 单笔投资 ≥120天产品，每满30000元，可额外获得1次牧场清扫机会。1次清扫即可获赠2枚劳模勋章<br><p class="img-size" data-marginTop="10">举例：投资147天产品7万，可获得7次喂食+2次清扫机会，共计获得7枚勋章，以此类推。</p></div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【随机劳动奖励】<br>每回劳动（锄草、浇水、喂食、清扫），都会获得1份劳动奖励，通过抽奖获得。奖品如下：<br>• 农场模式：
            <div class="row bg-clrfu img-size" data-marginTop="18"">
              <div class="td head single img-size" data-width="240" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in cultivatePrize" class="row bg-clrfu" :class="i + 1 == cultivatePrize.length ? 'last' : ''">
              <div class="td single img-size" data-width="240" data-fontSize="24" data-lineHeight="48">{{box}}</div>
            </div><div class="img-size" data-marginBottom="18"></div>
            • 牧场模式：
            <div class="row bg-clrfu img-size" data-marginTop="18">
              <div class="td head single img-size" data-width="240" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in raisePrize" class="row bg-clrfu" :class="i + 1 == raisePrize.length ? 'last' : ''">
              <div class="td single img-size" data-width="240" data-fontSize="24" data-lineHeight="48">{{box}}</div>
            </div>
          </div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【劳模表彰大会 领奖啦】<br>劳动勋章可用于兑换不同的奖品，逾期不兑换，视为自动放弃兑换奖励，概不补发。奖品如下：
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">劳模勋章</div><!--
           --><div class="td head img-size" data-width="340" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in xchgMap" class="row bg-clrfu" :class="i + 1 == xchgMap.length ? 'last' : ''">
              <div class="td left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">{{box.val}}</div><!--
           --><div class="td img-size" data-width="340" data-fontSize="24" data-lineHeight="48">{{box.gift}}</div>
            </div>
          </div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【劳动最光荣 多融致敬赠豪礼】<br>活动期间，根据最终获得的劳动勋章进行排名，排名前10的用户，依次获得如下大奖
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">名 次</div><!--
           --><div class="td head img-size" data-width="340" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in totalRankPrize" class="row bg-clrfu" :class="i + 1 == totalRankPrize.length ? 'last' : ''">
              <div class="td left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">{{i + 1}}</div><!--
           --><div class="td img-size" data-width="340" data-fontSize="24" data-lineHeight="48">{{box}}</div>
            </div>
            <div class="inner-item comment img-size" data-fontSize="24" data-lineHeight="32">* 以活动结束最终排名为准。如劳动勋章总数相同，则按时间顺序优先排名</div>
          </div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；活动结束后尚未使用的游戏机会将被清零，概不补发。</div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；活动中获得的积分，即时发放到您的账户，积分可前往【积分商城】兑换红包、加息券、实物奖品等</div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">本活动最终解释权归多融财富所有</div>
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
                cultivatePrize : [
                    '1-10积分',
                    '1%加息券',
                    '1.5%加息券',
                    '5元JD卡',
                    '劳动勋章'
                ],
                raisePrize : [
                    '1-30积分',
                    '1.5%加息券',
                    '2%加息券',
                    '10元JD卡',
                    '30元JD卡',
                    '星享卡',
                    '小米电饭煲3L',
                    '劳动勋章'
                ],
                totalRankPrize : [
                    'iPhoneX 64g',
                    '华为P20 Pro手机',
                    '以色列美容仪',
                    'Kindle Paperwhite',
                    '松下护眼台灯',
                    '米家电磁炉',
                    '飞利浦剃须刀',
                    '星享卡',
                    '小米移动电源5000mah',
                    '30元JD卡'
                ],
                xchgMap : [
                   {val: '62', gift: '小米手环'},
                   {val: '84', gift: 'kindle入门款'},
                   {val: '115', gift: 'airpods'},
                   {val: '140', gift: '米家扫地机器人'},
                   {val: '175', gift: '索尼PS4主机'},
                   {val: '350', gift: '戴森空调扇'}
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