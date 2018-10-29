<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home-bg.jpg');
    position: relative;
    .rule-btn,
    .left-chance,
    .login-btn,
    .invest-btn,
    .goto-play-btn,
    .end-btn,
    .my-prize-btn,
    .method,
    .cube-num,
    .xchg,
    .about-rank,
    .login-notice,
    .no-rank-data,
    .rank,
    .comment
    {
      position: absolute;
    }
    .left-chance{
      color: #FFF;
    }
    .login-btn{
      @include contain('../../images/login.png');
      background-position: center;
    }
    .goto-play-btn{
      @include contain('../../images/play.png');
      background-position: center;
    }
    .invest-btn{
      @include contain("../../images/invest.png");
      background-position: center;
    }
    .end-btn{
      @include contain('../../images/end.png');
      background-position: center;
    }
    .method{
      @include contain('../../images/method.png');
      background-position: center;
    }
    .cube-num{
      color: #2A478B;
      text-align: center;
    }
    .about-rank{
      color: #FFF45C;
    }
    .login-notice, .no-rank-data{
      background: rgb(37, 62, 124);
      color: #F2F2F2;
      text-align: center;
      span{
        color: #FFF45C;
      }
    }
    .rank{
      color: #FFF;
      div {
        clear: left;
        .col{
          display: inline-block;
          text-align: center;
        }
        .col.prize{
          text-align: left;
        }
        .col.shift{
          position: relative;
        }
      }
    }
    .comment{
      color: #FFF;
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="2500">
    <div class="rule-btn img-size" data-top="20" data-left="630" data-width="120" data-height="40" @click="onRule"></div>
    <div class="left-chance img-size" data-top="430" data-left="640" data-fontSize="26">{{isLogin ? chanceNum : '--'}} 次</div>
    <div class="my-prize-btn img-size" data-top="285" data-left="550" data-width="115" data-height="60" @click="onMyRecord"></div>
    <!-- 登录 投资 开始破冰按钮 -->
    <div v-show="status > 0" class="end-btn img-size" data-top="362" data-left="235" data-width="132" data-height="66"></div>
    <template v-if="status <= 0">
      <div v-show="isLogin == false" class="login-btn img-size" data-top="362" data-left="235" data-width="132" data-height="66" @click="login"></div>
      <div v-show="isLogin == true && chanceNum <= 0" class="invest-btn img-size" data-top="362" data-left="235" data-width="132" data-height="66" @click="onInvest"></div>
      <div v-show="isLogin == true && chanceNum > 0" class="goto-play-btn img-size" data-top="362" data-left="235" data-width="132" data-height="66" @click="onGoPlay"></div>
    </template>
    <div class="method img-size" data-top="730" data-left="55" data-width="645" data-height="65"></div>
    <div class="cube-num img-size" data-top="1267" data-left="435" data-width="55" data-height="28" data-fontSize="24" data-lineHeight="30">{{isLogin ? multiNum : '--'}}</div>
    <div class="cube-num img-size" data-top="1645" data-left="435" data-width="55" data-height="28" data-fontSize="24" data-lineHeight="30">{{isLogin ? redNum : '--'}}</div>
    <div class="xchg img-size" data-top="1400" data-left="465" data-width="130" data-height="50" @click="onXchg"></div>
    <template v-if="isLogin == false">
      <div class="about-rank img-size" data-top="1726" data-left="385" data-fontSize="24" data-lineHeight="28">--</div>
      <div class="about-rank img-size" data-top="1767" data-left="435" data-fontSize="24" data-lineHeight="28">--</div>
    </template>
    <template v-else>
      <div class="about-rank img-size" data-top="1726" data-left="385" data-fontSize="24" data-lineHeight="24">{{myRank > 0 ? myRank : '暂无'}}</div>
      <div class="about-rank img-size" data-top="1767" data-left="435" data-fontSize="24" data-lineHeight="24">{{possiblePrize == '' ? '暂无' : possiblePrize}}</div>
    </template>
    <div v-show="isLogin == false" class="login-notice img-size" data-top="1930" data-left="215" data-width="320" data-height="24" data-paddingTop="90" data-paddingBottom="90" data-lineHeight="24" data-fontSize="24" @click="login">请<span> 登录 </span>后查看</div>
    <div v-show="isLogin && rankList.length == 0" class="no-rank-data img-size" data-top="1930" data-left="215" data-width="320" data-height="24" data-paddingTop="90" data-paddingBottom="90" data-lineHeight="24" data-fontSize="24">暂无数据</div>
    <div v-show="isLogin && rankList.length > 0" class="rank img-size" data-top="1890" data-left="78" data-fontSize="18" data-lineHeight="18">
      <div v-for="item in rankList" class="img-size" data-marginBottom="20">
        <div class="col img-size" data-width="77">{{item.rowNo}}</div>
        <div class="col img-size" data-width="205">{{item.mobilePhone}}</div>
        <div class="col shift img-size" data-left="-12" data-width="50">{{item.description}}</div>
        <div class="col prize img-size" data-marginLeft="85">{{item.gift}}</div>
      </div>
    </div>
    <div v-show="isLogin && rankList.length > 0" class="comment img-size" data-top="2355" data-left="110" data-fontSize="18">*  仅供参考，最终结果以活动结束日排名为准</div>
  </div>
</template>
<script>
    import {httpStatus, httpParticipate, httpChance, httpHomeData, httpXchg} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                chanceNum: 0,
                multiNum: 0,
                redNum: 0,
                myRank: 0,
                possiblePrize: '',
                rankList: [],
                isXchging: false
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
            bus.$on('closePopEvent', () => {this.isXchging = false;});
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
//                    this.startTime = _data.map.startTime;
//                    this.endTime = _data.map.endTime;
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
//                        this.getHomeData();
                        this.getMyChance();
                    }
                });
            },
            getMyChance: function () {
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
                    setTimeout(() => {T.setImgSize();}, 20);
                    this.getHomeData();
                });
            },
            getHomeData: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpHomeData + '?uid=' + T.uid, params, _data => {
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
//                    this.chanceNum = _data.map.surplusChance;
                    this.multiNum = _data.map.colorNum;
                    this.redNum = _data.map.redNum;
                    this.myRank =  _data.map.myRank;
                    this.possiblePrize = _data.map.myGift;
                    this.rankList = _data.map.rankList;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            login: function () {
                T.login();
            },
            onInvest: function () {
                T.callApp.investment();
            },
            onGoPlay: function () {
                window.location.replace(window.location.pathname + "#/play/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onMyRecord: function () {
                if (!T.isLogin) {
                    T.login();
                } else {
                    window.location.replace(window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                }
            },
            onXchg: function () {
                if (!T.isLogin) {
                    T.login();
                } else {
                    if (this.status != 0 || this.isXchging) return;
                    this.isXchging = true;
                    if (this.multiNum <= 0) {
                        requirePop('exchange', {
                            props : {
                                transition: 'bounceIn',
                                popState: 0
                            }
                        });
                    } else {
                        requirePop('exchange', {
                            props : {
                                transition: 'bounceIn',
                                popState: 1,
                                parent: this
                            }
                        });
                    }
                }
            },
            onConfirmXchg : function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpXchg + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        requirePop('exchange', {
                            props : {
                                transition : 'bounceIn',
                                popState : 3,
                                error : _data.errorMsg
                            }
                        });
                        return false;
                    }
                    requirePop('exchange', {
                        props : {
                            transition : 'bounceIn',
                            popState : 2
                        }
                    });
                    this.getHomeData();
                });
            }
        }
    }
</script>