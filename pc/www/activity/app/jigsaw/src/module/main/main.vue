<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home-bg.jpg');
    position: relative;
    .rule-btn{
      position: absolute;
      right: 0;
      top: 1.65%;
      height: 3%;
      width: 21%;
    }
    .animate-topic{
      position: absolute;
      @include contain("../../images/anm-topic.png");
    }
    .func-btn{
      position: absolute;
      top: 31.65%;
      left: 20%;
      width: 60%;
      height: 2.85rem;
    }
    .login-btn{
      @extend .func-btn;
      @include contain('../../images/login.png');
      background-position: center;
    }
    .goto-shake-btn{
      @extend .func-btn;
      @include contain('../../images/to-shake.png');
      background-position: center;
    }
    .invest-btn{
      @extend .func-btn;
      @include contain("../../images/invest.png");
      background-position: center;
    }/*
    .end-btn{
      @extend .func-btn;
      @include contain('../../images/end.png');
      background-position: center;
    }*/
    .end-btn{
      position: absolute;
      @include contain('../../images/end-btn.jpg');
      background-position: center;
    }
    .my-score{
      position: absolute;
      top: 39%;
      width: 100%;
      color: #FFF;
      font-size: .65rem;
      text-align: center;
      span{
        color: #FFFC00;
      }
    }
    .my-link{
      position: absolute;
      left: 36%;
      top: 41.8%;
      width: 30%;
      height: 2%;

    }
    .know-how{
      position: absolute;
      top: 53.37142857142857%;
      left: 5.33333333333333%;
      /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
      .tab{
        display: inline-block;
        width: 49.99%;
        float: left;
      }
      .invest{
        clear: both;
        position: relative;
        margin: 0 auto;
        top: 68.66059817945384%;
      }
    }
    .how-ord{
      background: url("../../images/how-ord.png") no-repeat;
      background-size: contain;
    }
    .how-com{
      @extend .know-how;
      background: url("../../images/how-com.png") no-repeat;
      background-size: contain;
    }
  }
</style>
<template>
  <div class="main-box img-size flip-left" data-width="750" data-height="1750">
    <div class="rule-btn" @click="onPopRule"></div>
    <!--<div class="img-size animate-topic journal" data-top="110" data-left="120" data-width="510" data-height="220"></div>-->
    <div class="img-size animate-topic" data-top="110" data-left="120" data-width="510" data-height="220"></div>
    <!-- 登录 投资 开始破冰按钮 -->
    <!--<div v-show="status > 0" class="end-btn"></div>-->
    <div v-show="status > 0" class="end-btn img-size" data-left="150" data-top="554" data-height="109" data-width="450"></div>
    <template v-if="status <= 0">
      <div v-show="isLogin == false" class="login-btn" @click="login"></div>
      <div v-show="isLogin == true && chanceNum <= 0" class="invest-btn" @click="onInvest"></div>
      <div v-show="isLogin == true && chanceNum > 0" class="goto-shake-btn" @click="onGoShake"></div>
    </template>
    <div class="my-score">已获得<span>{{isLogin == true && status == 0 ? pieceAmt : '**'}}</span>个拼图碎片，你当前有<span>{{isLogin == true && status == 0 ? chanceNum : '**'}}</span>次摇一摇获取拼图的机会</div>
    <div class="my-link" @click="onGoMy"></div>
    <div :class="['know-how', 'img-size', {0: 'how-ord', 1: 'how-com'}[tabIndex]]" data-width="670" data-height="769">
      <div class="tab img-size" data-height="95" @click="tabIndex = 0;"></div>
      <div class="tab img-size" data-height="95" @click="tabIndex = 1;"></div>
      <div class="invest img-size" data-width="493" data-height="95" @click="onInvest"></div>
    </div>
  </div>
</template>
<script>
    import {httpStatus, httpParticipate, httpMyScore} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                startTime: 0,
                endTime: 0,
                isLogin: false,
                pieceAmt: 0,
                chanceNum: 0,
                tabIndex: 0
            };
        },
        computed: {

        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            this.getActivityStatus();
//            setTimeout(() => {document.getElementsByClassName('animate-topic')[0].className += " pulse-slow";}, 2000);
        },
        methods: {
            onPopRule : function () {
                requirePop('explain', {
                    props : {
                        transition : 'bounceIn',
                        startTime: this.startTime,
                        endTime: this.endTime
                    }
                });
            },
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.success && !_data.hasOwnProperty('errorMsg')) {
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
            /*__submitService : function (url, data, callAfter) {
                T.ajax({
                    url: url,
                    data : data,
                    callback : true,
                    success : function (_data) {
                        callAfter(_data);
                    }
                });
            },*/
            getActivityStatus: function () {
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
                    this.status = _data.map.status;
                    this.startTime = _data.map.startTime;
                    this.endTime = _data.map.endTime;
                    if (this.status < 0) {  //活动未开始
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '敬请期待',
                                detail: '活动即将开始, 期待您的热情参与!',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
//                    if (this.status == 0){  //活动进行中
                    if (this.status >= 0){  //活动进行中或结束
                        this.checkParticipatable();
                    }
                });
            },
            checkParticipatable: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpParticipate + '?uid=' + T.uid, params, _data => {
                    if (!_data.flag) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '感谢关注！',
                                detail: 'VIP渠道用户不能参加，敬请期待后续活动……',
                                btnBackHome: true
                            }
                        });
                    } else {
                        if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg,
                                    btnBackHome: false
                                }
                            });
                            return false;
                        }
                        if ( this.status == 0) {
                            this.getMyScore();
                        }
                    }
                });
            },
            getMyScore: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpMyScore + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                      requirePop('warning', {
                          props : {
                              transition : 'bounceIn',
                              title : '系统提示',
                              detail: _data.errorMsg,
                              btnBackHome: false
                          }
                      });
                      return false;
                    }
                    this.chanceNum = _data.map.totalchance;
                    this.pieceAmt = _data.map.debrisCounts;
                });
            },
            login: function () {
                T.login();
            },
            onInvest: function () {
                T.callApp.investment();
            },
            onGoShake: function () {
                window.location.replace(window.location.pathname + "#/shake/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                setTimeout(() => {window.location.reload();}, 300);
            },
            onGoMy: function () {
                if (!this.isLogin) {
                    this.login();
                } else {
                    window.location.replace(window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=home");
                }
            }
        }
    }
</script>