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
        color: #FFF;
        font-size: 2rem;
      }
      .rule-detail{
        color: #FFF;
        .rule-item{
          margin: 0 0 .6rem;
          div{
            display: inline-block;
            color: #F8B551;
          }
          div.left{
            width: 22%;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="rule-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="1334">
      <div class="back-btn img-size" data-left="20" data-top="-10" @click="onBack">&laquo;</div>
      <div class="rule-detail img-size" data-top="300" data-left="40" data-width="680" data-fontSize="20" data-lineHeight="24">
        <div class="rule-item">1、活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
        <div class="rule-item">2、活动期间，单笔购买≥20天产品，每满10000元获赠1次转动魔方的机会；单笔购买≥140天产品，每满10000元额外增加1次转动魔方的机会；</div>
        <div class="rule-item">3、【转动魔方】<br>七色魔方，对应星享卡、京东卡、积分、加息券等不同奖品，如下：</div>
        <div class="rule-item">
          <div class="left">魔方颜色</div><div>奖品</div><br>
          <div class="left">红</div><div>*（参与排名）</div><br>
          <div class="left">绿</div><div>10积分</div><br>
          <div class="left">黄</div><div>2%加息券</div><br>
          <div class="left">蓝</div><div>10元JD卡</div><br>
          <div class="left">白</div><div>30元JD卡</div><br>
          <div class="left">橙</div><div>星享卡</div><br>
          <div class="left">彩色</div><div>*（参与兑换）</div>
        </div>
        <div class="rule-item">4、【收集魔方】<br>① 彩色魔方：每5个彩色魔方，可兑换1张50元JD卡，可多次兑换。<br>② 红色魔方：活动期间，收集数量最高的前10名可以依次获赠奖品，如下：</div>
        <div class="rule-item">
          <div class="left">排名</div><div>奖品名称</div><br>
          <div class="left">1</div><div>6666元JD卡</div><br>
          <div class="left">2</div><div>Ipad</div><br>
          <div class="left">3</div><div>Foreo洁面仪</div><br>
          <div class="left">4</div><div>LG趣拍得</div><br>
          <div class="left">5</div><div>Brita净水器</div><br>
          <div class="left">6</div><div>膳魔师保温杯</div><br>
          <div class="left">7</div><div>米兔智能故事机</div><br>
          <div class="left">8</div><div>飞利浦电动剃须刀</div><br>
          <div class="left">9</div><div>100元JD卡</div><br>
          <div class="left">10</div><div>50元JD卡</div>
        </div>
        <div class="rule-item">5、     积分、加息券奖品将在3个工作日内发放到您的多融财富账户中，请到官网/APP中查看</div>
        <div class="rule-item">6、     实体奖品以实物为准，将在活动结束后15个工作日内联系您并发放</div>
        <div class="rule-item">7、     本活动最终解释权归多融财富所有</div>
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