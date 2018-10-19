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
        color: #333;
        .center-table{
          width: 100%;
          div{
            display: inline-block;
            vertical-align: middle;
            text-align: center;
          }
        }
        .event-link{
          color: #171fc6;
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="1528">
      <div class="back-btn img-size" data-left="24" data-top="16" data-width="60" data-height="60" @click="onBack"></div>
      <div class="rule-area img-size" data-top="298" data-left="60" data-width="630" data-fontSize="18" data-lineHeight="36">
        1、活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}<br>
        2、活动期间，单笔投资≥20天产品，每满10000元，可获得1次撕日历的机会。单笔投资≥120天产品，每满50000元，可获得8次撕日历的机会。<br>
        例如：投资147天产品23万，可获得35次撕日历的机会<br>
        3、每次撕日历时间为3秒，每撕掉一个日期，获得1积分；撕到特定日期，获得特定奖励；累计撕日历撕得最多的前10名可额外获得超值大奖一份。<br>
        4、【回顾2017，展望2018+】<br>
        撕掉特定日期的日历，可获得特定的奖品（尤其是多融平台大事记中一些重要的日子哦），如下：<br><br>

        <span class="event-link" @click="onDrEvent">点击查看大事记</span><br><br>

        5、【未来10年，一起相伴】<br>
        理财之路，多融与您携手相伴。活动期间，撕日历撕出的日期最接近10周年庆（2026/3/26）的前10名可获得大奖（即撕掉日历最多的前10名），如下：<br>
        <div v-for="item in rankGift" class="center-table img-size" lineHeight="50">
          <div class="img-size" data-width="100">{{item.rank}}</div><div class="img-size" data-width="300">{{item.gift}}</div>
        </div>
        * 以活动结束最终排名为准。如成绩相同，按最先到达该成绩的排名在前。<br><br>
        6、如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；<br>
        7、奖品以活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；<br>
        8、本活动最终解释权归多融财富所有。<br>
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
                rankGift: [
                    {rank: '排名', gift: '奖品'},
                    {rank: '1', gift: 'iPhoneX 64g'},
                    {rank: '2', gift: '戴森手持吸尘器'},
                    {rank: '3', gift: '科莱丽mia2洁面仪'},
                    {rank: '4', gift: '双立人刀具8件套'},
                    {rank: '5', gift: '拍立得'},
                    {rank: '6', gift: '小米电饭煲3L'},
                    {rank: '7', gift: '小米手环'},
                    {rank: '8', gift: '星享卡'},
                    {rank: '9', gift: '小米移动电源5000mah'},
                    {rank: '10', gift: '10元JD卡'}
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
            onDrEvent : function () {
                requirePop('drEvents', {
                    props : {
                        transition : 'mask'
                    }
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