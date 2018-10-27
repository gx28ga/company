<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/bg.png');
    position: relative;
    .rule-btn{/*border: 1px solid blue;*/
      position: absolute;
      left: 76%;
      top: 0.72%;
      height: 1.14148392910784%;
      width: 20.66666666666667%;
    }
    .invest-btn{/*border: 1px solid red;*/
      position: absolute;
      left: 33.333333333%;
    }
    .invest-on-btn{
      @extend .invest-btn;
      @include contain("../../images/invest-on.png");
      background-position: center;
    }
    .invest-off-btn{
      @extend .invest-btn;
      @include contain("../../images/invest-off.png");
      background-position: center;
    }
    .invest-on-btn.current, .invest-off-btn.current{
      top: 40.40252328026434%;
    }
    .invest-on-btn.time, .invest-off-btn.time{
      width: 34.13333333333333%;
      height: 1.92249924902373%;
      /*top: 55.6924001201562%;*/
      top: 47.60371959942775%;
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="3350">
    <div class="rule-btn" @click="onPopRule"></div>
      <!--<div class="invest-on-btn current img-size" data-width="256" data-height="64" @click="login"></div>-->
      <!--<div class="invest-on-btn time img-size" data-top="1331" data-width="256" data-height="64" @click="login"></div>-->
      <template v-if="isLogin==false">
        <div class="invest-on-btn time img-size" data-top="1331" data-width="256" data-height="64" @click="login"></div>
        <div class="invest-on-btn time img-size" data-top="1818" data-width="256" data-height="64" @click="login"></div>
      </template>
      <template v-else>
        <div v-show="timeStatus == true" class="invest-on-btn time img-size" data-width="256" data-top="1331"  data-height="64" @click="onInvestTimeNew"></div>
        <div v-show="timeStatus == false" class="invest-off-btn time img-size" data-width="256" data-top="1331" data-height="64"></div>
        <div v-show="timeStatus == true" class="invest-on-btn time img-size" data-top="1818" data-width="256" data-height="64" @click="onInvestTimeNew"></div>
        <div v-show="timeStatus == false" class="invest-off-btn time img-size" data-top="1818" data-width="256" data-height="64"></div>
      </template>
  </div>
</template>
<script>
    import {httpNoviceStatus, httpTimeProduct} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                currentStatus: false,
                timeStatus: false
            };
        },
        computed: {},
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            if(this.isLogin){
                this.getNoviceStatus();
            }
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
                                content: "系统错误，请联系客服！",
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
            getNoviceStatus: function () {
                var self = this;
                T.ajax({
                    url: httpNoviceStatus + '?uid=' + T.uid,
                    type: 'get',
                    callback: true,
                    success: function (_data) {
                        self.$nextTick(()=>{
                            T.setImgSize();
                        });
                        if (!_data.hasOwnProperty('canCurrent') || !_data.hasOwnProperty('canRookie')) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title: '&nbsp;',
                                content: "系统错误，请联系客服！",
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定',
                            });
                            return false;
                        }
                        self.currentStatus = (_data.canCurrent == true ? true : false);
                        if (_data.canRookie == true) {
                            self.getTimeProduct();
                            self.timeStatus = true;
                        }
                    }
                });
            },
            getStatusTime: function () {
                this.__requestService(httpStatusTime, {}, _data => {
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
                    this.timeStatus = _data.map.newHands;
                    if (this.timeStatus) {
                        this.getTimeProduct();
                    }
                });
            },
            getTimeProduct: function () {
                this.__requestService(httpTimeProduct, {}, _data => {
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
                    if (_data.map.rookieList && _data.map.rookieList.length > 0) {
                        this.timePid = _data.map.rookieList[0].id;
                        this.timeType = _data.map.rookieList[0].type;
                    } else {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: '未发现定投新手专享数据。',
                                btnBackHome: true
                            }
                        });
                    }
                });
            },
            login: function () {
                T.login();
            },
            onInvestCurrentNew: function () {
                T.callApp.currentNovice();
            },
            onInvestTimeNew: function () {
                T.callApp.timeNovice({pid: this.timePid, type: this.timeType});
            }
        }
    }
</script>