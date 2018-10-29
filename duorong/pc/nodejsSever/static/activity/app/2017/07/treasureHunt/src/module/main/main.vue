<style lang='sass'>
  @import '../../css/global.scss';

  .main-box {
    @include contain('../../images/bg.jpg');
    position: relative;
    .rule-btn{
      position: absolute;
      right: 0;
      top: 1.78571428571429%;
      height: 2.75297619047619%;
      width: 32.26666666666667%;
    }
    .func-btn{
      position: absolute;
      left: 16.66666666666667%;
      /*width: 67.33333333333333%;*/
    }
    .main-btn{
      @extend .func-btn;
      top: 16.33184523809524%;
    }
    .act-coming-btn{
      @extend .main-btn;
      @include contain('../../images/act-coming-btn.png');
    }
    .act-end-btn{
      @extend .main-btn;
      @include contain('../../images/act-end-btn.png');
    }
    .invest-btn{
      @extend .main-btn;
      @include contain('../../images/invest-btn.png');
    }
    .login-btn{
      @extend .main-btn;
      @include contain('../../images/login-btn.png');
    }
    .my-box-btn{
      @extend .func-btn;
      top: 22.13541666666667%;
      @include contain('../../images/my-box-btn.png');
      p{
        margin-left: 59.8019801980198%;
        font-size: 1.1rem;
        color: rgb(255, 247, 200);
        line-height: 3rem;
      }
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="2688">
    <div class="rule-btn" @click="onPopRule"></div>
    <!-- 立即投资 请登录 活动状态按钮 -->
    <div v-show="status < 0" class="act-coming-btn img-size" data-width="505" data-height="117"></div>
    <div v-show="status > 0" class="act-end-btn img-size" data-width="505" data-height="117"></div>
    <div v-show="status == 0 && isLogin" class="invest-btn img-size" data-width="505" data-height="117" @click="onInvest"></div>
    <div v-show="status == 0 && isLogin == false" class="login-btn img-size" data-width="505" data-height="117" @click="login"></div>
    <!-- 我的宝箱按钮 -->
    <div v-show="status >= 0" class="my-box-btn img-size" data-width="505" data-height="117" @click="onGoMy">
      <p>( {{boxNum}} )</p>
    </div>
  </div>
</template>
<script>
    import {httpStatus, httpParticipate, httpBoxNum} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: {
                    type: Number,
                    default: 0
                },
                isLogin: false,
                boxNum: 0,
                blackNum: 0,
                silverNum: 0,
                goldNum: 0
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
            onPopRule : function () {
                requirePop('explain', {
                    props : {
                        transition : 'bounceIn'
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
                    /*if (this.status < 0) {  //活动未开始
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '敬请期待',
                                detail: '活动即将开始, 期待您的热情参与!',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }*/
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
                        this.getBoxNum();
                    }
                });
            },
            getBoxNum : function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpBoxNum + '?uid=' + T.uid, params, _data => {
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
                    this.boxNum = _data.map.totalNum;
                    this.blackNum = _data.map.blackNum;
                    this.silverNum = _data.map.silverNum;
                    this.goldNum = _data.map.goldNum;
                });
            },
            login: function () {
                T.login();
            },
            onInvest: function () {
                T.callApp.investment();
            },
            onGoMy: function () {
                if (!T.isLogin) {
                    T.login();
                } else {
                    requirePop('my', {
                        props : {
                            transition : 'bounceIn',
                            blackNum : this.blackNum,
                            silverNum : this.silverNum,
                            goldNum : this.goldNum
                        }
                    });
                }
            }
        }
    }
</script>