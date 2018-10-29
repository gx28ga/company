<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .rule-main {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .content-wrapper {
      position: relative;
      @include contain('../../images/rule.png');
      color: #FFF;
      .back-btn, .rule-area{
        position: absolute;
      }
      .rule-area{
        background: #EAE3FF;
        color: #002114;
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
          text-align: center;
          color: #44338A;
          .td{
            display: inline-block;
            vertical-align: middle;
            border-right: 1px solid #B597FF;
            border-bottom: 1px dashed #B597FF;
          }
          .td.left{
            border-left: 1px solid #B597FF;
          }
          .td.head{
            border-top: 1px solid #B597FF;
            border-bottom: 1px solid #B597FF;
            color: #251957;
            /*font-weight: bold;*/
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
    <div class="img-size content-wrapper" data-width="750" data-height="2000">
      <div class="back-btn img-size" data-left="20" data-top="-10" data-fontSize="64" @click="onBack">&laquo;</div>
      <div class="rule-area img-size" data-top="170" data-left="32" data-width="686" data-borderRadius="16" data-paddingTop="40" data-paddingBottom="30" data-fontSize="24" data-lineHeight="32">
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">活动期间，单笔投资≥20天产品，每满10000元，可获得1次追击圣诞老人机会。单笔投资≥120天产品，每满5万元，可获得8次追击圣诞老人机会。</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">单笔投资≥120天产品，每满5万元，可额外直接获赠5个圣诞树。圣诞树可用来参与排名，获取排名奖励
            <div class="inner-item">例如：投资147天产品23万，可获得35次追击机会，且可<br>　　　额外获得20个圣诞树</div></div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">每次追击5秒，点中圣诞老人即有机会获得一个圣诞小礼盒。可直接打开小礼盒获赠小奖品或合成大礼盒获得更丰厚的奖品，每50个小礼盒可以转换成一个大礼盒，拆开大礼盒，可获得更丰厚的奖品1份。（一旦转换成大礼盒，不可撤销，不可转换回小礼盒）
          </div>
        </div>
        <div class="row img-size" data-marginTop="28">
          <div class="td head left img-size" data-width="290" data-fontSize="24" data-lineHeight="48">小礼盒</div><!--
       --><div class="td head img-size" data-width="290" data-fontSize="24" data-lineHeight="48">大礼盒</div>
        </div>
        <div v-for="(box, i) in giftData" class="row" :class="i + 1 == giftData.length ? 'last' : ''">
          <div class="td left img-size" data-width="290" data-fontSize="20" data-lineHeight="40">{{box.small}}</div><!--
       --><div class="td img-size" data-width="290" data-fontSize="20" data-lineHeight="40">{{box.big}}</div>
        </div>
        <div class="item img-size" data-marginTop="36"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">活动期间，获得圣诞树最多的前10名获得排名奖励，依次为：iphoneX 64G/惠人原汁机第三代/飞利浦空气炸锅/科沃斯扫地机器人/LG趣拍得/兰蔻粉水400ML/欧姆龙家用电子血压计/小米体脂称/星享卡/50元JD卡
            <div class="inner-item">* 以活动结束最终排名为准。如成绩相同，按最先到达该<br>　成绩的排名在前</div></div>
        </div>
        <div class="item img-size" data-marginTop="36"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">活动期间，每天进行一次排名，根据每天投资的年化总金额进行排名（年化总金额=投资金额*产品期限/360），前6名可以获得积分奖励，依次为：2000积分/1000积分/800积分/500积分/300积分/100积分
            <div class="inner-item">*以当天23:59:59最终排名结果为准。如成绩相同，按最先到达该成绩的排名在前</div></div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分奖励，将于活动结束后5个工作日内发放，积分可前往【积分商城】用于兑换红包、加息券及各种实物奖品。</div>
        </div>
        <div class="item"><div class="part index img-size" data-top="6" data-height="20" data-width="45"></div>
          <div class="part img-size" data-width="610">本活动最终解释权归多融财富所有。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpStatus, httpParticipate, httpHomeData} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data() {
            return {
                startTime: 0,
                endTime: 0,
                giftData: [
                    {small: '1积分', big: '圣诞树'},
                    {small: '3积分', big: '2.0%加息券'},
                    {small: '5积分', big: '300积分'},
                    {small: '10积分', big: '500积分'},
                    {small: '1.0%加息券', big: '10元JD卡'},
                    {small: '1.5%加息券', big: '50元JD卡'},
                    {small: '　', big: '星享卡'},
                    {small: '　', big: '膳魔师保温杯'},
                    {small: '　', big: 'Kindle入门款'},
                    {small: '　', big: 'Foreo luna mini2洁面仪'}
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