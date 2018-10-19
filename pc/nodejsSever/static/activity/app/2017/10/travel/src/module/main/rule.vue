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
        color: #151640;
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
        table,th,td{border: 1px solid #151640;}
        table{
          position: relative;
          width: 90%;
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2562">
      <div class="back-btn img-size" data-left="20" data-top="-10" @click="onBack">&laquo;</div>
      <div class="rule-detail img-size" data-top="750" data-left="40" data-width="680" data-fontSize="24" data-lineHeight="30">
        <div class="rule-item">1、活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        <div class="rule-item">2、活动期间，单笔购买≥20天产品每满10000元可抽取1张城市卡片。单笔购买≥120天产品每满100000元，可直接获取任意1张您想要的城市卡片。</div>
        <div class="rule-item">3、【城市卡片】：不同的城市卡片对应不同的奖品，包括加息券、积分、携程、京东卡、小米移动电源、飞利浦电动刮胡刀、松下离子蒸汽美容器、Lg趣拍得等等（投资≥120天产品直接获取的任意城市卡片，不含对应奖品）</div>
        <table class="img-size" data-top="-30">
          <tr>
            <th class="img-size" data-width="300">城市</th>
            <th class="img-size" data-width="300">对应奖品</th>
          </tr>
          <tr>
            <td>金融魔都—上海</td>
            <td>1000元携程卡</td>
          </tr>
          <tr>
            <td>美食天地—成都</td>
            <td>Lg趣拍得</td>
          </tr>
          <tr>
            <td>白雪皑皑—长白山</td>
            <td>松下离子蒸汽美容器</td>
          </tr>
          <tr>
            <td>六朝古都—南京</td>
            <td>飞利浦电动刮胡刀</td>
          </tr>
          <tr>
            <td>美味海鲜—青岛</td>
            <td>小米移动电源</td>
          </tr>
          <tr>
            <td>山水甲天下—桂林</td>
            <td>10元京东购物卡</td>
          </tr>
          <tr>
            <td>岭南风情—广州</td>
            <td>1.5%加息券</td>
          </tr>
          <tr>
            <td>人文帝都—北京</td>
            <td>50元红包</td>
          </tr>
          <tr>
            <td>朝圣之地—拉萨</td>
            <td>50积分</td>
          </tr>
          <tr>
            <td>海湾沙滩—三亚</td>
            <td>5积分</td>
          </tr>
          <tr>
            <td>历史名城—西安</td>
            <td>10积分</td>
          </tr>
          <tr>
            <td>购物天堂—香港</td>
            <td>2%加息券</td>
          </tr>
        </table>
        <div class="rule-item">4、【集齐卡片】：集齐相关旅行城市，可兑换不同的奖品（不限兑换次数，只要集齐即可兑换）</div>
        <table class="img-size" data-top="-30">
          <tr>
            <th class="img-size" data-width="460">集齐卡片</th>
            <th class="img-size" data-width="230">可兑换奖品</th>
          </tr>
          <tr>
            <td>三亚、西安、香港 &times;10</td>
            <td>30元携程卡</td>
          </tr>
          <tr>
            <td>北京、三亚、拉萨</td>
            <td>100元携程卡</td>
          </tr>
          <tr>
            <td>北京、桂林、广州</td>
            <td>300元携程卡</td>
          </tr>
          <tr>
            <td>游遍地图（北、上、广、南、青、拉、港、长、成、桂、西、三）</td>
            <td>1000元携程旅行卡</td>
          </tr>
        </table>
        <div class="rule-item">5、【排名奖】：活动结束时，按累计获得城市卡片总数（含已兑换的城市卡片）进行排名，排名前6依次获得Iphone 8 Plus 64G/GoPro HERO 6 Black/Bose蓝牙无线音箱/Kindle paperwhite/500元/300元京东卡奖励。</div>
        <div class="rule-item">6、如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；</div>
        <div class="rule-item">7、活动实物奖品将在活动结束后的15个工作日内完成礼品的发放；</div>
        <div class="rule-item">8、红包、加息券、积分将即时发放到您的多融账户，请注意查收并在有效期内使用；积分，可前往积分商城兑换各种奖品。</div>
        <div class="rule-item">9、本活动最终解释权归多融财富所有。</div>
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