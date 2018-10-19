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
        color: #ffde00;
        text-align: center;
      }
      .rule-area{
        color: #ffccff;
        .hi-lgt{
          color: #fff6b8;
        }
        .item{
          margin-bottom: .4rem;
        }
        .inner-item{
          margin-top: .25rem;
        }
        .part{
          display: inline-block;
          /*text-align: center;*/
          vertical-align: top;
        }
        .part.index{
          @include contain("../../images/diamond.png");
          background-position: center right;
          position: relative;
        }
        .row{
          width: 100%;
          .td{
            display: inline-block;
            vertical-align: top;
            border-right: 1px solid #9c50ff;
            border-bottom: 1px dashed #9c50ff;
            text-align: center;
          }
          .td.left{
            border-left: 1px solid #9c50ff;
            border-right-style: dashed!important;
          }
          .td.head{
            border-top: 1px solid #9c50ff;
            /*border-bottom: 1px solid #cc99ff;*/
            border-right-style: solid!important;
            /*color: #251957;*/
            /*font-weight: bold;*/
          }
          .td.out-left{
            background-color: #5f29b8;
            border: 1px solid #9c50ff;
            border-right: none!important;
            padding: 2px 0 1px;
            /*text-align: center;*/
            div{
              display: inline-block;
              vertical-align: middle;
            }
          }
          .out-right .td.head{
            padding-right: 1px;
          }
          .td.out-left:after{
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
            background-color: #5f29b8;
          }
          /*.td:not(.left){
            text-align: left;
          }*/
        }
        .row.last .td{
          border-bottom: 1px solid #9c50ff;
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2600">
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="80" data-height="100" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      <div class="rule-area img-size" data-top="174" data-left="32" data-width="686" data-fontSize="26" data-lineHeight="36">
        <div class="item"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620">单笔投资≥20天产品每满10000元，可拆一次【开工红包】，可拆出积分、加息券、京东卡等奖品，或拆开获得数钞票的机会，每回5秒，每张钞票面值100，数到多少得多少，钞票可在兑换区兑换奖品（仅限本次活动兑换，过期不兑换视为自动放弃）</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620">单笔投资≥120天产品每满50000元，可额外获得面值为8000的钞票
            <div class="inner-item">例如：投资143天产品18万元，可获得18次拆【开工红包】机会，并获得24000钞票，以此类推。</div>
          </div>
        </div>
        <div class="item"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620">【开工大吉 老板送开工红包啦】
            <div class="row img-size" data-marginLeft="14" data-marginTop="28" data-marginBottom="20">
              <div class="td out-left bg-clrfu img-size" data-width="84" data-height="192">
                <div class="img-size" data-width="50" data-fontSize="24">奖品包含</div>
              </div><!--
           --><div class="td out-right img-size">
                <div class="row bg-clrfu img-size">
                  <div class="td head left img-size" data-paddingLeft="20" data-width="447" data-fontSize="24" data-lineHeight="48">积分：1 / 3 / 5</div>
                </div>
                <div class="row bg-clrfu">
                  <div class="td left img-size" data-paddingLeft="20" data-width="171" data-fontSize="24" data-lineHeight="48">1.5%加息券</div><!--
               --><div class="td img-size" data-width="256" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">5元JD卡</div>
                </div>
                <div class="row bg-clrfu">
                  <div class="td left img-size" data-paddingLeft="20" data-width="171" data-fontSize="24" data-lineHeight="48">小米体脂称</div><!--
               --><div class="td img-size" data-width="256" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">Kindle Paperwhite</div>
                </div>
                <div class="row bg-clrfu last img-size">
                  <div class="td left img-size" data-paddingLeft="20" data-width="171" data-fontSize="24" data-lineHeight="48">500面值钞票</div><!--
               --><div class="td img-size" data-width="256" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">5秒数钞票机会</div>
                </div>
              </div>
            </div>
            <!--<div class="inner-item">* 数钞票机会不累计，拆开红包获得数钞票机会，即时进入数钞票游戏</div>-->
          </div>
        </div>
        <div class="item"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620" data-marginBottom="20">【奖品不过瘾，再来抢榜单拿iPhone X】
            <div class="inner-item">按兑换券面值总额进行排名（包括已兑换奖品的兑换券面值），前10名可获得超值大奖，如下:</div>
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="80" data-fontSize="24" data-lineHeight="48">名 次</div><!--
           --><div class="td head img-size" data-width="274" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in rankPrize" class="row bg-clrfu" :class="i + 1 == rankPrize.length ? 'last' : ''">
              <div class="td left img-size" data-width="80" data-fontSize="24" data-lineHeight="48">{{i + 1}}</div><!--
           --><div class="td img-size" data-width="274" data-fontSize="24" data-lineHeight="48">{{box}}</div>
            </div>
            <div class="inner-item">* 以活动结束最终排名为准。如兑换券面值总额相同，按最先到达该成绩的排名在前。</div>
          </div>
        </div>
        <div class="item scroll-dest"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620" data-marginBottom="20">【兑换区豪礼】
            <div class="inner-item">仅限钞票兑换，逾期不兑换视为自动放弃。可兑换奖品，如下：</div>
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">面值总数</div><!--
           --><div class="td head img-size" data-width="240" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in xchgMap" class="row bg-clrfu" :class="i + 1 == xchgMap.length ? 'last' : ''">
              <div class="td left img-size" data-width="130" data-fontSize="24" data-lineHeight="48">{{box.val}}</div><!--
           --><div class="td img-size" data-width="240" data-fontSize="24" data-lineHeight="48">{{box.gift}}</div>
            </div>
          </div>
        </div>
        <div class="item"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620">奖品以活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分实时发放，可前往【积分商城】兑换红包、加息券、实物奖品等</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="12" data-height="13" data-width="43"></div>
          <div class="part img-size" data-width="620">本活动最终解释权归多融财富所有。</div>
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
                rankPrize : [
                    'iPhoneX',
                    '戴森吹风机',
                    '飞利浦空气炸锅',
                    '888元JD卡',
                    '趣拍得',
                    '泰昌全自动足浴盆',
                    '张小泉刀具七件套',
                    '力博得电动牙刷',
                    '星享卡',
                    '50元JD卡'
                ],
                xchgMap : [
                   {val: '15000', gift: '10元JD卡'},
                   {val: '50000', gift: '星享卡'},
                   {val: '120000', gift: '欧乐b电动牙刷'},
                   {val: '220000', gift: '趣拍得'},
                   {val: '300000', gift: 'irobot扫地机器人'},
                   {val: '450000', gift: '戴森手持除螨仪'},
                   {val: '600000', gift: 'rimova行李箱'}
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