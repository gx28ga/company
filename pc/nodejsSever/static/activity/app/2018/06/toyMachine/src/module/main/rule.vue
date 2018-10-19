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
        color: #a90094;
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
          color: #a90094;
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
            background: #FFE7E8;
            vertical-align: top;
            border-right: 1px solid #BA289A;
            border-bottom: 1px dotted #BA289A;
            text-align: center;
            color: #a90094;
          }
          .td.left{
            border-left: 1px solid #BA289A;
            border-right-style: dotted!important;
          }
          .td.head{
            border-top: 1px solid #BA289A;
          }
          .td.single{
            border-left: 1px solid #BA289A;
            border-right-style: solid!important;
          }
          .td.out-left{
            /*background-color: rgb(143, 235, 223);*/
            border: 1px solid #BA289A;
            border-right: none!important;
            padding: 2px 0 1px;
            div{
              display: inline-block;
              vertical-align: middle;
            }
          }
          .out-right .td.head:not(.left), .out-right .td.last{
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
            background-color: #FFE7E8;
          }
          /*.td:not(.left){
            text-align: left;
          }*/
        }
        .row.last .td{
          border-bottom: 1px solid #BA289A;
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="3200">
      <div class="back-btn img-size" data-left="20" data-top="13" data-width="59" data-height="57" data-fontSize="64" data-lineHeight="64" @click="onBack"><!--&laquo;--></div>
      <div class="rule-area img-size" data-top="170" data-left="32" data-width="700" data-fontSize="30" data-lineHeight="48">
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">活动期间，单笔投资≥20天产品，每满10000元，可获得1次抓娃娃机机会。单笔投资≥120天产品，每满50000元，额外获得10次抓娃娃机机会。<br><p class="img-size" data-marginTop="10">例如：投资143天产品8万，可获得18次机会，以此类推。</p></div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【抓娃娃机】<br>抓娃娃机公仔，包括：哆啦A梦、麦兜、灰太狼、奥特曼、葫芦娃、黑猫警长，每抓到一个，随机获得小奖品一份，100%有奖，如下：<br>
            <div class="row img-size" data-marginLeft="14" data-marginTop="28" data-marginBottom="20">
              <div class="td out-left bg-clrfu img-size" data-width="84" data-height="192">
                <div class="img-size" data-width="60" data-fontSize="24">奖品包含</div>
              </div><!--
           --><div class="td out-right img-size">
                <div class="row bg-clrfu">
                  <div class="td  head left img-size" data-paddingLeft="20" data-width="256" data-fontSize="24" data-lineHeight="48">积分：1 / 3 / 5 </div><!--
                   --><div class="td head img-size" data-width="171" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">2.0%加息券</div>
                </div>
                <div class="row bg-clrfu">
                  <div class="td left img-size" data-paddingLeft="20" data-width="256" data-fontSize="24" data-lineHeight="48">5元JD卡</div><!--
                     --><div class="td img-size" data-width="171" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">30元JD卡</div>
                </div>
                <div class="row bg-clrfu">
                  <div class="td left img-size" data-paddingLeft="20" data-width="256" data-fontSize="24" data-lineHeight="48">星享卡</div><!--
                     --><div class="td img-size" data-width="171" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">摩飞榨汁机</div>
                </div>
                <div class="row bg-clrfu last">
                  <div class="td left img-size" data-paddingLeft="20" data-width="256" data-fontSize="24" data-lineHeight="48">BOSE蓝牙电子音箱</div><!--
                     --><div class="td img-size" data-width="171" data-paddingLeft="20" data-fontSize="24" data-lineHeight="48">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【疯狂抓娃娃机模式】<br>活动期间，累计投资≥120天产品满30万，即可开启疯狂模式，未使用的全部机会升级为疯狂模式。疯狂模式下，每回游戏可开启两个抓手，可抓到两个公仔，可随机获取2份小奖品。
          </div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【集“童年回忆” 换精彩大礼】<br>集齐哆啦A梦等6个不同的公仔（“童年回忆”），可获得奖励，如下：
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="170" data-fontSize="24" data-lineHeight="48">集齐套数</div><!--
           --><div class="td head img-size" data-width="340" data-fontSize="24" data-lineHeight="48">奖 励</div>
            </div>
            <div v-for="(box, i) in collectPrize" class="row bg-clrfu" :class="i + 1 == collectPrize.length ? 'last' : ''">
              <div class="td left img-size" data-width="170" data-fontSize="24" data-lineHeight="48">{{box[0]}}套</div><!--
           --><div class="td img-size" data-width="340" data-fontSize="24" data-lineHeight="48">{{box[1]}}</div>
            </div>
            <p class="img-size" data-marginTop="10">奖励在满足条件后自动获得，无需兑换<br>以最高奖励为准，不重复获得</p>
          </div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">【排名奖励】<br>根据获得的娃娃机公仔总数量，进行排名，前10名获得大奖，如下：
            <div class="row bg-clrfu img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="170" data-fontSize="24" data-lineHeight="48">名 次</div><!--
           --><div class="td head img-size" data-width="340" data-fontSize="24" data-lineHeight="48">奖 品</div>
            </div>
            <div v-for="(box, i) in totalRankPrize" class="row bg-clrfu" :class="i + 1 == totalRankPrize.length ? 'last' : ''">
              <div class="td left img-size" data-width="170" data-fontSize="24" data-lineHeight="48">{{i + 1}}</div><!--
           --><div class="td img-size" data-width="340" data-fontSize="24" data-lineHeight="48">{{box}}</div>
            </div>
            <div class="inner-item comment img-size" data-fontSize="24" data-lineHeight="32">* 以活动结束最终排名为准。如总数量相同，则按时间顺序优先排名。
            </div>
          </div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">活动结束之后，尚未使用的抓娃娃机机会一律作废。如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；</div>
        </div>
        <div class="item"><div class="part paragraph-symbol img-size" data-width="32" data-height="51"><div class="img-size" data-width="25" data-height="25"></div></div>
          <div class="part img-size" data-width="645">奖品以活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分、红包、加息券实时发放；积分可用于前往“积分商城”兑换红包、加息券、各种实物奖励等</div>
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
                collectPrize : [
                    ['1', '小米移动电源5000mah'],
                    ['3', '欧乐B电动牙刷'],
                    ['5', 'Kindle入门款'],
                    ['8', '富士instax拍立得'],
                    ['10', '倍轻松眼部按摩仪'],
                ],
                totalRankPrize : [
                    'Macbook Air 13.3',
                    'Irobot扫地机器人',
                    'Kindle voyage',
                    'SK2大红瓶精华露',
                    '博朗剃须刀',
                    'LG趣拍得',
                    '小米电饭煲',
                    '飞利浦多士炉',
                    '小米移动电源高配版',
                    '星享卡'
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