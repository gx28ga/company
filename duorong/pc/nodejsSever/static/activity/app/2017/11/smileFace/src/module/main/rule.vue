<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .rule-main {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .content-wrapper {
      position: relative;
      @include contain('../../images/rule-bg.png');
      color: #FFF;
      .back-btn, .rule-area{
        position: absolute;
      }
      .rule-area{
        border: 1px solid #F44180;
        background: rgb(92, 3, 153);
        .title{
          text-align: center;
        }
        .td{
          display: inline-block;
          color: #FFCE00;
          text-align: center;
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2200">
      <div class="back-btn img-size" data-left="20" data-top="-10" data-fontSize="64" @click="onBack">&laquo;</div>
      <div class="rule-area img-size" data-top="380" data-left="30" data-width="640" data-borderRadius="30" data-paddingLeft="30" data-paddingRight="20" data-paddingBottom="60" data-fontSize="18" data-lineHeight="30">
        <div class="title img-size" data-fontSize="24" data-lineHeight="90">活动规则</div>
        <div>1、活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        <div>2、活动期间，每日1次免费机会（免费机会不累计，当天过期失效）；</div>
        <div>单笔购买≥20天产品，每满10000元可获得1次游戏机会；</div>
        <div>单笔购买≥120天产品，每满50000元，可获得10次游戏机会，且额外获得【笑脸】100个，以此类推。例如：</div>
        <div>　 &nbsp;投资≥120天产品9万，可获得14次机会+100个【笑脸】，以此类推。</div>
        <div>3、活动期间，投资≥120天产品累计金额达到5万及以上的用户，【笑脸】表情会变成【多融图标】，更容易分辨，且游戏难度更低。</div>
        <div>* 1个多融图标=1个普通笑脸，成绩计入笑脸数量中，无特殊奖励</div>
        <div>4、【收集笑脸】：</div>
        <div>进入游戏界面，点击屏幕中出现的所有【笑脸】（或多融图标），漏点或错点，即游戏结束。游戏中，尽可能多的收集【笑脸】（或多融图标）。根据该图案的累计获得数量，可获得相应的奖品，如下：</div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">数量</div><div class="td img-size" data-width="230">奖品名称</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">1000</div><div class="td img-size" data-width="230">30元京东卡</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">1788</div><div class="td img-size" data-width="230">80元京东卡</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">2700</div><div class="td img-size" data-width="230">150元京东卡</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">6200</div><div class="td img-size" data-width="230">500元京东卡</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">10000</div><div class="td img-size" data-width="230">1000元京东卡</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">12888</div><div class="td img-size" data-width="230">1500元京东卡</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">23300</div><div class="td img-size" data-width="230">3000元京东卡</div></div>
        <div>以最高奖项为准，不累计获得</div>
        <div>5、【看谁笑得最多】：</div>
        <div>累计收集【笑脸】表情图案最多的前10名，可获得丰厚大奖，如下：</div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">名次</div><div class="td img-size" data-width="230">奖品名称</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第一名</div><div class="td img-size" data-width="230">iPhoneX 64g</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第二名</div><div class="td img-size" data-width="230">戴森吹风机</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第三名</div><div class="td img-size" data-width="230">科沃斯扫地机器人</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第四名</div><div class="td img-size" data-width="230">飞利浦空气炸锅</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第五名</div><div class="td img-size" data-width="230">趣拍得</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第六名</div><div class="td img-size" data-width="230">泰昌全自动足浴盆</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第七名</div><div class="td img-size" data-width="230">张小泉刀具七件套</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第八名</div><div class="td img-size" data-width="230">力博得电动牙刷</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第九名</div><div class="td img-size" data-width="230">星享卡</div></div>
        <div><div class="td img-size" data-width="80" data-marginRight="20">第十名</div><div class="td img-size" data-width="230">50元JD卡</div></div>
        <div>6、【好友助力】：</div>
        <div>活动期间，邀请好友参加助力，好友每一笔≥5000元的投资（除新手宝），邀请人都能获得【笑脸】奖励（仅限活动期间邀请，非活动期间邀请的好友此规则不适用）。</div>
        <div>好友投资A天产品金额B元，邀请人可额外获得【笑脸】C个。按以下公式：</div>
        <div>C =（A*B/360）/100计算（四舍五入取整）</div>
        <div>通过邀请方式获得的【笑脸】奖励，每位邀请人最高获得6000个笑脸，超出6000个笑脸按6000发放</div>
        <div>邀请人除获得本活动【笑脸】奖励外，同时可获得【邀请好友3重福利】活动奖励（每日佣金/首月返现/邀请任务，详见该活动介绍），可同时参加这两个活动。例如：活动期间，好友投资3笔：</div>
        <div>1）30天产品20000元，邀请人可获得笑脸17个</div>
        <div>2）148天产品10000元，邀请人可获得笑脸41个</div>
        <div>3）92天产品4000元，邀请人不获得笑脸奖励</div>
        <div>7、如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；</div>
        <div>8、活动奖品将在活动结束后的15个工作日内完成礼品的发放（iPhoneX由于渠道供应问题，实际发放时间可能略晚于其他奖品）；未完成实名认证用户所获得的奖励不予发放；</div>
        <div>9、本活动最终解释权归多融财富所有。</div>
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
                endTime: 0
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