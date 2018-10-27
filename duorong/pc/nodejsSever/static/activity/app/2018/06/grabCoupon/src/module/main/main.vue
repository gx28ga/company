<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain("../../images/bg.png");
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    .mid-align{
      text-align: center;
    }
    .clock{
      margin: 0 auto;
      @include contain("../../images/clock.png");
    }
    .show{
      visibility: visible;
    }
    .hide{
      visibility: hidden;
    }
    .grab-item{
      margin: 0 auto;
      border: 1px solid #FFF;
      .item-bg{
        background: #FFF;
        width: 100%;
        height: 100%;
        .cpn-1{
          @include contain("../../images/cpn-1.png");
        }
        .cpn-2{
          @include contain("../../images/cpn-2.png");
        }
        .cpn-3{
          @include contain("../../images/cpn-3.png");
        }
        .cpn-4{
          @include contain("../../images/cpn-4.png");
        }
        .full{
          background: #B5B5B5;
          .left{
            background: #f25472;
            height: 100%;
          }
        }
        .progress-desc{
          width: 100%;
          color: #333;
        }
      }
      .item-bg > div{
        display: inline-block;
        vertical-align: bottom;
        height: 100%;
      }
      .btn-area{
        .wait{
          @include contain("../../images/wait.png");
        }
        .gotten{
          border: 2px solid #f25472;
          color: #f25472;
          transform: rotate(-30deg);
        }
        .grab{
          @include contain("../../images/grab.png");
          position: relative;
        }
        .grabout{
          @include contain("../../images/grabout.png");
        }
        .grab-disabled{
          @include contain("../../images/grab-disabled.png");
        }
        .take{
          @include contain("../../images/take.png");
          position: relative;
        }
        .take-disabled{
          @include contain("../../images/take-disabled.png");
        }
        .requesting{
          position: absolute;
          @include contain("../../images/requesting.gif");
        }
      }
      .btn-area > div{
        display: inline-block;
        vertical-align: middle;
      }
      .btn-area::after{
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 0;
        height: 100%;
      }
    }
    .rule{
      margin: 0 auto;
      @include contain("../../images/rule.png");
    }
  }
</style>
<template>
  <div>
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="img-size main-box" data-paddingTop="534" data-width="750" data-height="2095">
      <div class="img-size clock" :class="clockClass" data-width="210" data-height="38"></div>
      <div v-for="(item, no) in couponList" class="img-size grab-item" data-marginTop="20" :data-marginBottom="no + 1  === couponList.length ? 0 : 40" data-borderRadius="20" data-width="670" data-height="263" data-padding="20">
        <div class="img-size item-bg" data-borderRadius="20">
          <div class="img-size" data-marginLeft="30">
            <div class="img-size" :class="item.code | cptCouponClass" data-marginTop="30" data-width="220" data-height="141"></div>
            <div class="img-size full" data-marginTop="25" data-borderRadius="6" data-width="220" data-height="12">
              <!--<div class="img-size left" :style="'width:' + item.left * 100 + '%'" data-borderRadius="6"></div>-->
              <div class="img-size left" :style="'width:' + (myVip < item.vip && !checkGotten(item.code) || beginAfter > 0 ? item.left : 0) * 100 + '%'" data-borderRadius="6"></div>
            </div>
            <!--<p class="img-size progress-desc mid-align" data-fontSize="18" data-lineHeight="36">{{item.left > 0 ? "还剩 " + item.left * 100 + "%，限量50张" : "已经抢光啦~"}}</p>-->
            <p class="img-size progress-desc mid-align" data-fontSize="18" data-lineHeight="36">{{item.left > 0 && (myVip < item.vip && !checkGotten(item.code) || beginAfter > 0) ? "还剩 " + trimMoreFrac(item.left) + "%，限量" + item.grantQty + "张" : "已经抢光啦~"}}</p>
          </div>
          <div class="img-size btn-area" data-marginLeft="72">
            <div v-show="beginAfter > 0" class="img-size btn wait" data-width="292" data-height="57"></div>
            <template v-if="beginAfter === 0">
              <div v-if="checkGotten(item.code) === true" class="img-size gotten mid-align" data-marginLeft="80" data-width="156" data-height="156" data-borderRadius="82" data-fontSize="48" data-lineHeight="160">已领取</div>
              <template v-else>
                <div v-if="myVip < item.vip">
                  <div v-if="item.left > 0" class="img-size grab" data-width="292" data-height="57" @click="onGrab(item.code)" onclick="this.firstChild.style.display = 'block'">
                    <div style="display: none" class="img-size requesting" data-top="13" data-right="20" data-width="30" data-height="30"></div>
                  </div>
                  <div v-else class="img-size grabout" data-width="292" data-height="57"></div>
                  <div class="img-size take-disabled" data-marginTop="46" data-width="292" data-height="57"></div>
                </div>
                <div v-else>
                  <!--<div class="img-size grab-disabled" data-width="292" data-height="57"></div>-->
                  <div class="img-size grabout" data-width="292" data-height="57"></div>
                  <div class="img-size take" data-marginTop="46" data-width="292" data-height="57" @click="onVipTake(item.code)" onclick="this.firstChild.style.display = 'block'">
                    <div style="display: none" class="img-size requesting" data-right="20" data-top="13" data-width="30" data-height="30"></div>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
      <div class="img-size rule" data-marginTop="50" data-width="740" data-height="646"></div>
    </div>
  </div>
</template>
<script>
    const cCouponClass = ['cpn-1', 'cpn-2', 'cpn-3', 'cpn-4'];
    import {requestService, httpStatus, httpParticipate, httpCoupon, httpMyData, httpTake} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isAjaxing: false,
                status: 0,
                startTime: 0,
                endTime: 0,
                couponList: [],
                isLogin: false,
                myVip: 0,
                beginAfter: 0,
                myCoupon: [],
                runCounter: []
            };
        },
        computed: {
            clockClass(){
                return this.beginAfter > 0 ? 'show' : 'hide';
            }
        },
        filters : {
            cptCouponClass(code){
                return cCouponClass[code - 1];
            }
        },
        components : {
            'lockScreen' : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        mounted(){
            T.setImgSize();
            this.getActivityStatus();
            this.isLogin = T.isLogin;
        },
        methods: {
            getActivityStatus: function () {
                this.isAjaxing = true;
                requestService(httpStatus, {}, _data => {
                    const {success, errorMsg} = _data;
                    if (!success) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.status = _data.map.status;
                    this.startTime = _data.map.startTime;
                    this.endTime = _data.map.endTime;
                    if (this.status < 0) {  //活动未开始
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '敬请期待',
                                detail: '活动即将开始, 期待您的热情参与!',
                                btnBackHome: true
                            }
                        });
                        return false;
                    } else if (this.status > 0) {
                        requirePop("warning", {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail : '活动已结束！感谢关注',
                                btnBackHome : true
                            }
                        });
                        return;
                    }
                    this.getCouponData();
                    if (!this.isLogin) {
                        this.isAjaxing = false;
                        requirePop("login", {
                            props : {
                                transition : 'bounceIn'
                            },
                            on : {
                                "login-click-event" : this.__login,
                                "close-only-event" : T.callApp.home
                            }
                        });
                        return;
                    }
                });
            },
            getCouponData: function () {
                requestService(httpCoupon, {}, _data => {
                    const {success, errorMsg} = _data;
                    if (!success) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '操作失败，请联系客服。',
                                btnBackHome: false
                            }
                        });
                        return false;
                    }
                    this.couponList = _data.map.couponList;
                    this.beginAfter = _data.map.beginAfter;
                    setTimeout(this.__start, this.beginAfter);
                    this.$nextTick(() => {T.setImgSize();});
                    this.checkParticipatable();
                });
            },
            __start(){
                const {length: len} = this.couponList;
                for (let i = 0; i < len; i++) {
                    this.runCounter.push(0);
                }
                this.beginAfter = 0;
                this.$nextTick(() => {T.setImgSize();});
            },
            checkParticipatable: function () {
                const params = {uid: T.uid};
                requestService(httpParticipate, params, _data => {
                    if (!_data.flag) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '感谢关注！',
                                detail: 'VIP渠道用户不能参加，敬请期待后续活动……',
                                btnBackHome: true
                            }
                        });
                    } else {
                        const {success, errorMsg} = _data;
                        if (!success) {
                            this.isAjaxing = false;
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: errorMsg ? errorMsg : '操作失败，请联系客服。',
                                    btnBackHome: false
                                }
                            });
                            return false;
                        }
                        this.getMyData();
                    }
                });
            },
            getMyData: function () {
                const params = {uid: T.uid};
                requestService(httpMyData, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg, map} = _data;
                    if (!success) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '操作失败，请联系客服。',
                                btnBackHome: false
                            }
                        });
                        return false;
                    }
                    this.myCoupon = map.myCoupon;
                    this.myVip = map.myVip;
                    this.$nextTick(() => {T.setImgSize();});
                });
            },
            checkGotten(code){
                for (let i = 0; i < this.myCoupon.length; i++) {
                    const curCode = this.myCoupon[i].code;
                    if (code === curCode){
                        return this.myCoupon[i].gotten;
                    }
                }
                return false;
            },
            onGrab(code){
                const idx = code - 1;
                if (this.runCounter[idx]++ > 0) return;
                const params = {
                    uid : T.uid,
                    fid : code
                }
                requestService(httpTake, params, _data => {
                    const {success, errorCode, errorMsg} = _data;
                    if (!success) {
                        if (Number(errorCode) === 7003) {
                            this.__setCouponOut(code);
                        } else {
                            requirePop("warning", {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: errorMsg ? errorMsg : '操作失败，请联系客服。',
                                    btnBackHome : false
                                }
                            });
                        }
                        return;
                    }
                    this.__setGetOK(code);
                });
            },
            __setCouponOut(code) {
                const cpnList = this.couponList;
                const {length: len} = cpnList;
                for (let i = 0; i < len; i++) {
                    if (cpnList[i].code === code) {
                        cpnList[i].left = 0;
                        break;
                    }
                }
                this.$nextTick(() => {T.setImgSize();});
            },
            __setGetOK(code) {
                const myData = this.myCoupon;
                const {length : len} = myData;
                for (let i = 0; i < len; i++) {
                    if (code === myData[i].code) {
                        myData[i].gotten = true;
                    }
                }
                this.$nextTick(() => {T.setImgSize();});
            },
            onVipTake: function (code) {
                const idx = code - 1;
                if (this.runCounter[idx]++ > 0) return;
                const params = {
                    uid : T.uid,
                    fid : code
                };
                requestService(httpTake, params, _data => {
                    const {success, errorMsg} = _data;
                    if (!success) {
                        requirePop("warning", {
                            props : {
                                transition : "bounceIn",
                                title : '系统提示',
                                detail : errorMsg ? errorMsg : '操作失败，请联系客服。',
                                btnBackHome : false
                            }
                        });
                        return;
                    }
                    this.__setGetOK(code);
                });
            },
            trimMoreFrac(input){
                const percent = (input * 100).toFixed(2) + '';
                return percent.replace('.00', '');
            },
            __login: function () {
                if (!T.getQueryString('wap') || T.getQueryString('force') === 'force') {
                    T.login();
                } else {
                    this.__launchApp();
                }
            },
            __launchApp : function () {
                let iphoneSchema = 'duorongcf://';
                let iphoneDownUrl = 'itms-apps://itunes.apple.com/cn/app/duo-rong-li-cai/id1095192150?mt=8';
                let androidSchema = 'duorongcf://';
                let androidDownUrl = 'http://app.duorongcf.com/dr_app.apk';
                if (T.weixin) {
                    requirePop("warning", {
                        props: {
                            transition: 'bounceIn',
                            title: '温馨提示',
                            detail: '请点击右上角选择"在浏览器打开"',
                            btnBackHome: false
                        }
                    });
                } else {
                    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                        var loadDateTime = new Date();
                        window.setTimeout(function() {
                            var timeOutDateTime = new Date();
                            if (timeOutDateTime - loadDateTime < 2200) {
                                window.location.href = iphoneDownUrl;//ios下载地址
                            } else {
                                window.close();
                            }
                        },2000);
                        window.location.href = iphoneSchema;
//                        T.callApp.home();
                    }else if (navigator.userAgent.match(/android/i)) {
                        try {
                            window.location.href = androidSchema;
                            setTimeout(function(){
                                window.location.href = androidDownUrl; //android下载地址
                            },500);
//                            T.callApp.home();
                        } catch(e) {
                            window.location.href = androidDownUrl;
                        }
                    }
                }
            }
        }
    }
</script>