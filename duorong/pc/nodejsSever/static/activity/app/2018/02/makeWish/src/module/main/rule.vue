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
          @include contain("../../images/star.png");
          background-position: center right;
          position: relative;
        }
        .row{
          width: 100%;
          .td{
            display: inline-block;
            vertical-align: top;
            border-right: 1px solid #cc99ff;
            border-bottom: 1px dashed #cc99ff;
            text-align: center;
          }
          .td.left{
            border-left: 1px solid #cc99ff;
            border-right-style: dashed!important;
          }
          .td.head{
            border-top: 1px solid #cc99ff;
            border-bottom: 1px solid #cc99ff;
            border-right-style: solid!important;
            /*color: #251957;*/
            /*font-weight: bold;*/
          }
        }
        .row.bg-clrfu{
          .td{
            background-color: #88077E;
          }
          .td:not(.left){
            text-align: left;
          }
        }
        .row.last .td{
          border-bottom: 1px solid #B597FF;
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2600">
      <div class="back-btn img-size" data-left="0" data-top="0" data-width="80" data-height="100" data-fontSize="64" data-lineHeight="64" @click="onBack">&laquo;</div>
      <div class="rule-area img-size" data-top="126" data-left="0" data-width="720" data-borderRadius="16" data-paddingBottom="0" data-fontSize="24" data-lineHeight="32">
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="660">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="660">活动期间，单笔投资≥20天产品，每满10000元，可获得1次许愿机会。单笔投资≥120天产品，每满50000元，额外获得10次机会。<br>例如：投资143天产品8万，可获得18次机会，以此类推。</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="660">【许愿奖励】
            <div class="inner-item">任意选择向阿拉丁神灯/流星/七龙珠/观世音/漂流瓶，许下自己的新年愿望。每回许愿，可随机获得奖品1份，100%有奖</div>
            <div class="row bg-clrfu img-size" data-marginTop="15">
              <div class="td head left img-size" data-width="480" data-fontSize="24" data-lineHeight="32">奖品包含</div>
            </div>
            <div class="row bg-clrfu">
              <div class="td left img-size" data-width="103" data-fontSize="20" data-lineHeight="32">积分</div><!--
           --><div class="td img-size" data-width="355" data-paddingLeft="20" data-fontSize="20" data-lineHeight="32">10 / 20</div>
            </div>
            <div class="row bg-clrfu">
              <div class="td left img-size" data-width="103" data-fontSize="20" data-lineHeight="32">加息券</div><!--
           --><div class="td img-size" data-width="355" data-paddingLeft="20" data-fontSize="20" data-lineHeight="32">1.0% / 1.5%</div>
            </div>
            <div class="row bg-clrfu last img-size" data-marginBottom="15">
              <div class="td left img-size" data-width="103" data-fontSize="20" data-lineHeight="32">京东卡</div><!--
           --><div class="td img-size" data-width="355" data-paddingLeft="20" data-fontSize="20" data-lineHeight="32">10元 / 50元 / 100元 / 300元 / 500元</div>
            </div>
          </div>
        </div>
        <div class="item scroll-dest"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="660">【愿望还是要有的，万一实现了呢】
            <div class="inner-item">活动结束后，您的<span class="hi-lgt">部分或全部</span>许愿次数将计算现金奖励（最高3000元，如超出按3000元发放，现金奖励将在活动结束后5个工作日内以无门槛投资返现红包的形式统一发放到账户），计算公式，如下：<br><span class="hi-lgt">现金奖励 = 你符合条件的许愿次数 &times; VIP系数</span></div>
            <div class="inner-item">① 活动期间, 累计投资≥120天产品满30万及以上，您的<span class="hi-lgt">全部许愿次数</span>均将计算现金奖励</div>
            <div class="inner-item">② 如不满足条件①，仅<span class="hi-lgt">部分许愿次数</span>计算现金奖励，仅计算阿拉丁神灯等5个选项中，最终被许愿总次数最少的那一项</div>
            <div class="inner-item">③ VIP系数</div>
            <div class="row img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="160" data-fontSize="24" data-lineHeight="36">用户等级</div><!--
           --><div class="td head img-size" data-width="160" data-fontSize="24" data-lineHeight="36">VIP系数</div>
            </div>
            <div v-for="(box, i) in vipRate" class="row" :class="i + 1 == vipRate.length ? 'last' : ''">
              <div class="td left img-size" data-width="160" data-fontSize="20" data-lineHeight="36">{{box.vip}}</div><!--
           --><div class="td img-size" data-width="160" data-fontSize="20" data-lineHeight="36">{{box.rate}}</div>
            </div>
            <div class="inner-item img-size" data-marginTop="20">例如：“阿拉丁神灯”最终被许愿次数为3681次，在5个选项中最少，则凡向Ta许过愿的用户可获得现金奖励，</div>
            <div class="inner-item">A用户：累计投资≥120天产20万，VIP等级为VIP3，向“阿拉丁神灯”许愿20次，则最终可获得现金 = 20 &times; 2 = 40元</div>
            <div class="inner-item">B用户：累计投资≥120天产品50万，VIP等级为VIP5，向“阿拉丁神灯”许愿20次，总共许愿150次，最终可获得现金 = 150 &times; 5 = 750元</div>
            <div class="inner-item">④ 如最终被许愿总次数最少的那一项，出现2个及以上并列的情况，按时间先后顺序为准</div>
            <div class="inner-item">⑤ VIP系数按活动结束时间为准，活动期间投资任意产品可实时升级您的VIP等级，可提高VIP系数，最终增加可获得的现金奖励</div>
          </div>
        </div>
        <div class="item img-size" data-marginTop="20"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="660">【愿望不分大小，许愿许得多才好】
            <div class="inner-item">根据许愿次数，许愿最多的前10名可获得奖品</div>
            <div class="row img-size" data-marginTop="28">
              <div class="td head left img-size" data-width="90" data-fontSize="24" data-lineHeight="36">排 名</div><!--
           --><div class="td head img-size" data-width="400" data-fontSize="24" data-lineHeight="36">奖 品</div>
            </div>
            <div v-for="(box, i) in rankPrize" class="row" :class="i + 1 == rankPrize.length ? 'last' : ''">
              <div class="td left img-size" data-width="90" data-fontSize="20" data-lineHeight="36">{{i + 1}}</div><!--
           --><div class="td img-size" data-width="400" data-fontSize="20" data-lineHeight="36">{{box}}</div>
            </div>
            <div class="inner-item img-size" data-marginTop="20">* 以活动结束最终排名为准。如相同，按时间顺序优先排名</div>
          </div>
        </div>
        <div class="item img-size" data-marginTop="20"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="660">活动结束之后，尚未许愿的次数一律作废。如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="660">由于春节假期快递等缘故，本次活动奖品发放可能有所延误，以具体发放时间为准，敬请谅解</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
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
               vipRate : [
                    {vip: 'VIP6', rate: '10'},
                    {vip: 'VIP5', rate: '5'},
                    {vip: 'VIP4', rate: '2'},
                    {vip: 'VIP3', rate: '2'},
                    {vip: 'VIP2', rate: '1'},
                    {vip: 'VIP1', rate: '1'},
                    {vip: '普通', rate: '0'}
                ],
                rankPrize : [
                    'iphoneX 64g',
                    'iwatch',
                    'Bose SoundSport Free 真无线蓝牙耳机',
                    '飞利浦空气炸锅',
                    '博朗5系电动剃须刀',
                    '小米3L电饭煲',
                    '飞利浦剃须刀',
                    '星享卡',
                    '小米移动电源',
                    '50元JD卡'
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