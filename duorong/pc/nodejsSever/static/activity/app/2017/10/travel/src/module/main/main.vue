<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home-bg.jpg');
    position: relative;
    .rule-btn,
    .my-card,
    .left-common,
    .left-chance,
    .end-btn,
    .invest-first,
    .draw-card,
    .about-highest-prize,
    .my-prize-btn,
    .about-method,
    .invest-atonce
    {/*border: 1px solid red;*/
      position: absolute;
    }
    .left-common, .left-chance{
      color: #151640;
    }
    .left-common{
      text-align: center;
    }
    .end-btn{
      @include contain('../../images/btn-end.png');
      background-position: center;
    }
    .invest-first{
      @include contain('../../images/invest-first.png');
      background-position: center;
    }
    .draw-card{
      @include contain('../../images/btn-draw.png');
      background-position: center;
    }
    .about-highest-prize{
      @include contain('../../images/about-highest-prize.png');
      background-position: center;
    }
    .about-method{
      @include contain('../../images/about-method.png');
      background-position: center;
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="1800">
    <div class="rule-btn img-size" data-top="25" data-left="585" data-width="165" data-height="45" @click="onRule"></div>
    <div class="my-card img-size" data-top="610" data-left="120" data-width="515" data-height="130" @click="onMyCard"></div>
    <!-- 登录 投资 抽取卡片按钮 -->
    <div v-show="status > 0" class="end-btn img-size" data-top="790" data-left="120" data-width="515" data-height="130"></div>
    <div v-show="status <= 0 && isLogin == false" class="draw-card img-size" data-top="790" data-left="120" data-width="520" data-height="130" @click="login"></div>
    <div v-show="status <= 0 && isLogin == true && chanceNum > 0" class="draw-card img-size" data-top="790" data-left="120" data-width="520" data-height="130" @click="onDrawCard"></div>
    <div v-show="status <= 0 && isLogin == true && chanceNum <= 0" class="invest-first img-size" data-top="790" data-left="120" data-width="520" data-height="130" @click="invest"></div>
    <div class="left-common img-size" data-top="740" data-width="750" data-fontSize="24" data-lineHeight="40">已获得 {{isLogin ? commonCard : '--'}} 张万能卡，可任意转换</div>
    <div class="left-chance img-size" data-top="930" data-left="220" data-fontSize="24">还剩 {{isLogin ? chanceNum : '--'}} 次抽取城市卡片的机会</div>
    <div class="about-highest-prize img-size" data-top="1030" data-left="0" data-width="750" data-height="62"></div>
    <div class="my-prize-btn img-size" data-top="1110" data-left="257" data-width="239" data-height="60" @click="onMyPrize"></div>
    <div class="about-method img-size" data-top="1360" data-left="0" data-width="750" data-height="172"></div>
    <div class="invest-atonce img-size" data-top="1630" data-left="189" data-width="361" data-height="90" @click="onInvest"></div>
  </div>
</template>
<script>
    import {httpStatus, httpParticipate, httpChance} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                commonCard: 0,
                chanceNum: 0
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
        },
        methods: {
            onRule : function () {
                let goUrl = window.location.pathname + "#/rule";
                if (T.wap) {
                    goUrl += "?wap=true";
                    if (T.isLogin){
                        goUrl += "&uid=" + T.uid;
                    }
                } else {
                    if (T.isLogin) {
                        goUrl += "?uid=" + T.uid;
                    }
                }
                window.location.replace(goUrl);
            },
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
                        this.getChance();
                    }
                });
            },
            getChance: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpChance + '?uid=' + T.uid, params, _data => {
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
                    this.commonCard = _data.map.specialNum;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            login: function () {
                T.login();
            },
            invest: function () {
                T.callApp.investment();
            },
            onMyCard: function () {
                if (this.status != 0) return;
                if (!T.isLogin) {
                    T.login();
                } else {
                    window.location.replace(window.location.pathname + "#/cards/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=main");
                }
            },
            onDrawCard: function () {
                window.location.replace(window.location.pathname + "#/draw/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onMyPrize: function () {
                if (!T.isLogin) {
                    T.login();
                } else {
                    window.location.replace(window.location.pathname + "#/record/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                }
            },
            onInvest: function () {
                if (!this.isLogin) {
                    this.login();
                } else {
                    this.invest();
                }
            }
        }
    }
</script>