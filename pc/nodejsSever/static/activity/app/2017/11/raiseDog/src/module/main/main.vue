<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .head{
    @include contain("../../images/bg-head.jpg");
    .rule-btn{
      position: relative;
    }
  }
  .coupon-area{
    position: relative;
    @include contain("../../images/bg-coupon.jpg");
    .clock,
    .more-coupon,
    .coupon-detail,
    .swipe-area,
    .progress,
    .grab-btn,
    .grab-disabled,
    .vipget-btn,
    .vipget-disabled,
    .grab-out,
    .gotten-mark,
    .coupon-nav-btn,
    .index-disc-box{
      position: absolute;
    }
    .clock{
      @include contain("../../images/clock.png");
    }
    .coupon-detail{
      color: #FCF626;
      div{
        display: inline-block;
        vertical-align: baseline;
      }
      .profit-val{
        font-weight: bolder;
      }
      .type-name{
        vertical-align: top;
      }
    }
    .progress{
      color: #FFF;
      /*text-align: center;*/
    }
    .grab-btn{
      z-index: 5;
      color: #FFF;
      text-align: center;
      @include contain("../../images/coupon-btn.png");
    }
    .btn-disabled{
      @include contain("../../images/btn-disabled.png");
      color: #6D5E90;
      text-align: center;
    }
    .grab-disabled{
      @extend .btn-disabled;
    }
    .vipget-btn{
      z-index: 5;
      text-align: center;
      color: #FFF;
      @include contain("../../images/coupon-btn.png");
    }
    .vipget-disabled{
      @extend .btn-disabled;
    }
    .grab-out{
      @extend .btn-disabled;
    }
    .gotten-mark{
      @include contain("../../images/got-mark.png");
      background-position: center;
    }
    .index-disc-box{
      text-align: center;
      div{
        display: inline-block;
      }
      .disc{
        background: rgba(0, 0, 0, .3);
        vertical-align: top;
      }
      .disc.on{
        background: #FFD300;
      }
      .disc:last-child{
        margin-right: 0!important;
      }
    }
    .coupon-nav-btn{
      z-index: 5;
    }
  }
  .foot{
    @include contain("../../images/bg-foot.jpg");
    position: relative;
    .dog-body,
    .go-raise-dog,
    .go-draw,
    .food-wgt,
    .left-chance,
    .invest-about,
    .invest-btn{
      position: absolute;
    }
    .food-wgt, .left-chance{
      text-align: center;
      color: #E32635;
    }
    .invest-about{
      color: #110A04;
    }
  }
</style>
<template>
  <div>
    <div class="head img-size" data-width="750" data-height="570">
      <div class="rule-btn img-size" data-top="20" data-left="20" data-width="145" data-height="60" @click="onRule"></div>
    </div><!--
 --><div v-if="phase == 0" class="coupon-area img-size" data-width="750" data-height="456">
      <template v-if="couponList.length > 0">
        <div v-show="!couponBegin" class="clock img-size" data-top="25" data-left="220" data-width="192" data-height="40"></div>
        <div class="more-coupon img-size" data-top="22" data-left="545" data-width="155" data-height="44" @click="onMoreCoupon"></div>
        <div class="coupon-detail img-size" data-top="150" data-left="370" data-width="150">
          <div class="profit-val img-size" data-fontSize="64" data-lineHeight="64">{{curCoupon.raisedRates}}</div><!--
         --><div class="img-size" data-fontSize="36" data-lineHeight="36">{{{2:"%", 1:"元"}[curCoupon.type]}}</div><!--
         --><div class="type-name img-size" data-fontSize="40" data-lineHeight="40">{{{2:"加息券", 1:"红包"}[curCoupon.type]}}</div>
        </div>
        <div class="progress img-size" data-top="260" data-left="250" data-fontSize="20">剩余：{{curCoupon.left > 0 ? (Math.floor(curCoupon.left * 100) + "%") : '已抢完'}}</div>
        <div v-if="!isLogin && couponList.length > 0">
          <div v-show="curCoupon.vip >= 0">
            <div class="grab-btn img-size" data-top="330" data-left="170" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="52" @click="login">抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
            <div class="vipget-btn img-size" data-top="330" data-left="400" data-width="190" data-heigth="55" data-fontSize="30" data-lineHeight="52" @click="login">领取<span class="img-size" data-fontSize="18">（限VIP{{curCoupon.vip}}<span v-show="curCoupon.vip < maxVip">&plus;</span>）</span></div>
          </div>
          <div v-show="curCoupon.vip < 0">
            <div class="grab-btn img-size" data-top="330" data-left="280" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="52" @click="login">抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
          </div>
        </div>
        <div v-if="isLogin && couponList.length > 0">
          <div v-show="curCoupon.state == 2 || (curCoupon.state == 3 && couponBegin == false)" class="grab-disabled img-size" data-top="330" data-left="170" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55">抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
          <div v-show="curCoupon.state == 3 && couponBegin" class="grab-btn img-size" data-top="330" data-left="170" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55" @click="onGrab(-1)">抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
          <div v-show="curCoupon.state == 3 || curCoupon.state == 4 || ((curCoupon.state == 2 || curCoupon.state == 5) && couponBegin == false)" class="vipget-disabled img-size" data-top="330" data-left="400" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55">领取<span class="img-size" data-fontSize="18">（限VIP{{curCoupon.vip}}<span v-show="curCoupon.vip < maxVip">&plus;</span>）</span></div>
          <div v-show="(curCoupon.state == 2 || curCoupon.state == 5) && couponBegin" class="vipget-btn img-size" data-top="330" data-left="400" data-width="190" data-heigth="55" data-fontSize="30" data-lineHeight="55" @click="onVipGet(-1)">领取<span class="img-size" data-fontSize="18">（限VIP{{curCoupon.vip}}<span v-show="curCoupon.vip < maxVip">&plus;</span>）</span></div>
          <div v-show="curCoupon.state == 6 && couponBegin == false" class="grab-disabled img-size" data-top="330" data-left="280" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55">抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
          <div v-show="curCoupon.state == 6 && couponBegin" class="grab-btn img-size" data-top="330" data-left="280" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55" @click="onGrab(-1)">抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
          <div v-show="curCoupon.state == 7" class="grab-out img-size" data-top="330" data-left="280" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55">抢完了</div>
          <div v-show="curCoupon.state == 4 || curCoupon.state == 5" class="grab-out img-size" data-top="330" data-left="170" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55">抢完了</div>
          <div v-show="curCoupon.state == 1" class="gotten-mark img-size" data-top="280" data-width="750" data-height="120"></div>
        </div>
        <div class="coupon-nav-btn img-size" data-top="230" data-left="50" data-width="50" data-height="45" @click="onCouponNav(-1)"></div>
        <div class="coupon-nav-btn img-size" data-top="230" data-left="665" data-width="50" data-height="45" @click="onCouponNav(1)"></div>
        <div v-show="couponList.length > 0" class="swipe-area img-size" data-top="90" data-left="50" data-width="665" data-height="366" @touchstart="onTouchStart($event)" @touchend="onTouchEnd($event)"></div>
        <div class="index-disc-box img-size" data-top="420" data-left="0" data-width="750">
          <div>
            <div v-for="(unuse, i) in couponList" class="disc img-size" :class="couponIndex == i ? 'on' : ''" data-width="15" data-height="15" data-borderRadius="7" data-marginRight="15"></div>
          </div>
        </div>
      </template>
    </div><!--
 --><div class="foot img-size" data-width="750" data-height="1068">
      <div v-show="isLogin == false">
        <div class="dog-body img-size" data-top="210" data-left="270" data-width="210" data-height="254" @click="login"></div>
        <div class="dog-body img-size" data-top="135" data-left="473" data-width="164" data-height="118" @click="login"></div>
        <div class="go-raise-dog img-size" data-top="499" data-left="146" data-width="266" data-height="59" @click="login"></div>
        <div class="go-draw img-size" data-top="499" data-left="440" data-width="155" data-height="55" @click="login"></div>
      </div>
      <div v-show="isLogin == true">
        <div class="dog-body img-size" data-top="210" data-left="270" data-width="210" data-height="254" @click="onGoFeed"></div>
        <div class="dog-body img-size" data-top="135" data-left="473" data-width="164" data-height="118" @click="onGoFeed"></div>
        <div class="go-raise-dog img-size" data-top="499" data-left="146" data-width="266" data-height="59" @click="onGoFeed"></div>
        <div class="go-draw img-size" data-top="499" data-left="440" data-width="155" data-height="55" @click="onGoDraw"></div>
      </div>
      <div v-show="smallShow" class="food-wgt img-size" data-top="557" data-left="147" data-width="266" data-fontSize="24" data-lineHeight="40">您有 {{food < 0 ? '**' : food}}g 狗粮</div>
      <div v-show="smallShow" class="left-chance img-size" data-top="557" data-left="430" data-width="175" data-fontSize="24" data-lineHeight="40">剩余 {{chanceNum < 0 ? '**' : chanceNum}} 次机会</div>
      <div v-show="smallShow" class="invest-about img-size" data-top="685" data-left="70" data-width="620" data-fontSize="24" data-lineHeight="30">
        <p>① 单笔投资 20天≤期限＜120天产品，每满10000元，即可获得4g狗粮+1次抽奖机会。</p><br>
        <p>② 单笔投资≥120天产品，每满10000元，可获得14g狗粮+1次抽奖机会。</p>
      </div>
      <div class="invest-btn img-size" data-top="880" data-left="290" data-width="170" data-height="50" @click="onInvest"></div>
    </div>
  </div>
</template>
<script>
    import {httpStatus, httpCoupon, httpParticipate, httpTake, httpFood, httpChance, httpMyCoupon} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                phase: 0,
                startTime: 0,
                endTime: 0,
                couponBegin: false,
                couponList: [],
                curCoupon: {},
                couponIndex: 0,
                isLogin: false,
                myVip: 0,
                maxVip: 6,
                food: -1,
                chanceNum: -1,
                myRank: 0,
                rankList: [],
                isSubmitting: false,
                stPosX: 0,
                edPosX: 0,
                stPosY: 0,
                edPosY: 0,
                smallShow: false
            };
        },
        computed: {
        },
        mounted(){
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            this.getActivityStatus();
            setTimeout(() => {
                this.smallShow = true;
                T.setImgSize();
            }, 450);
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
                        if (!_data.success && !_data.errorCode && !_data.errorMsg) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title: '&nbsp;',
                                content: "操作失败，请联系客服！",
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定',
                            });
                            if (this.isSubmitting == true) {
                                setTimeout(() => {
                                    this.isSubmitting = false;
                                }, 5000);
                            }
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
                    this.phase = _data.map.phase;
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
                    if (this.phase == 0){
                        this.getCouponData();
                    } else if (this.status >= 0){  //活动进行中或结束
                        this.checkParticipatable();
                    }
                });
            },
            getCouponData: function () {
                this.__requestService(httpCoupon, {}, _data => {
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
                    this.couponList = _data.map.couponList;
                    this.couponList.forEach(cpn => {
                        if (cpn.vip < 0) {
                            if (cpn.left > 0) {
                                cpn.state = 6;      //立即抢券 居中
                            } else {
                                cpn.state = 7;      //已抢完 居中
                            }
                        } else {
                            if (cpn.left > 0) {
                                cpn.state = 3;      //立即抢券 可点 居上 / VIP直接领取 灰显
                            } else {
                                cpn.state = 4;      //已抢完 居上 / VIP直接领取 灰显
                            }
                        }
                    });
                    this.curCoupon = this.couponList[this.couponIndex];
                    if (_data.map.beginAfter > 0) {
                        setTimeout(() => {this.couponBegin = true; bus.$emit('coupon-grab-begin');}, _data.map.beginAfter);
                    } else {
                        this.couponBegin = true;
                    }
                    setTimeout(() => {
                        T.setImgSize();
                        if (this.status >= 0) {
                            this.checkParticipatable();
                        }
                    }, 20);
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
                        this.getDogFood();
                        this.getMyChance();
                    }
                });
            },
            getDogFood: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpFood + '?uid=' + T.uid, params, _data => {
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
                    this.food = _data.map.dogFood;
                    setTimeout(() => {T.setImgSize();}, 20);
                    if (this.phase == 0) {
                        this.getMyCoupon();
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
                });
            },
            getMyCoupon: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpMyCoupon + '?uid=' + T.uid, params, _data => {
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
                    this.myCoupon = _data.map.myCoupon;
                    this.myVip = _data.map.myVip;
                    //设置券/红包的按钮状态
                    this.couponList.forEach(this.__setCouponState, this);
                    //再次设置当前券/红包数据
                    this.curCoupon = this.couponList[this.couponIndex];
                    setTimeout(() => {T.setImgSize();}, 400);
                    this.onCouponNav(1);
                    this.onCouponNav(-1);
                });
            },
            __setCouponState : function (cpn, i) {
                if (cpn.vip < 0) {
                    if (cpn.left > 0) {
                        cpn.state = 6;      //立即抢券 居中
                    } else {
                        cpn.state = 7;      //已抢完 居中
                    }
                } else {
                    if (cpn.left > 0) {
                        cpn.state = 3;      //立即抢券 可点 居上 / VIP直接领取 灰显
                    } else {
                        cpn.state = 4;      //已抢完 居上 / VIP直接领取 灰显
                    }
                }

                let myCpn = this.myCoupon;
                if (myCpn[i].gotten == true) {
                    cpn.state = 1;            //已领取
                    return;
                }
                if (cpn.state == 6 || cpn.state == 7) {
                    return;
                } else if (this.myVip >= cpn.vip) {
                    if (cpn.left > 0) {
                        cpn.state = 2;       //VIP直接领取 可点 / 立即抢券 灰显 居上
                    } else {
                        cpn.state = 5;       //VIP直接领取 可点 / 已抢完 居上
                    }
                } else if (cpn.left > 0) {
                    cpn.state = 3;           //立即抢券 可点 居上 / VIP直接领取 灰显
                } else {
                    cpn.state = 4;            //已抢完 居上 / VIP直接领取 灰显
                }
            },
            login: function () {
                if (!T.getQueryString("wap")) {
                    T.login();
                } else {
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
                        }else if (navigator.userAgent.match(/android/i)) {
                            try {
                                window.location.href = androidSchema;
                                setTimeout(function(){
                                    window.location.href = androidDownUrl; //android下载地址
                                },500);
                            } catch(e) {
                                window.location.href = androidDownUrl;
                            }
                        }
                    }
                }
//                T.login();
            },
            onCouponNav: function (offset) {
                let max = this.couponList.length - 1;
                if (offset > 0) {
                    if (this.couponIndex >= max) {
                        this.couponIndex = 0;
                    } else {
                        this.couponIndex++;
                    }
                } else if (offset < 0) {
                    if (this.couponIndex <= 0) {
                        this.couponIndex = max;
                    } else {
                        this.couponIndex--;
                    }
                }
                this.curCoupon = this.couponList[this.couponIndex];
            },
            onTouchStart : function(evt) {
                this.stPosX = evt.changedTouches[0].clientX;
                this.stPosY = evt.changedTouches[0].clientY;
            },
            onTouchEnd : function(evt) {
                let last = evt.changedTouches.length - 1;
                this.edPosX = evt.changedTouches[last].clientX;
                this.edPosY = evt.changedTouches[last].clientY;
                let lenX = Math.abs(this.edPosX - this.stPosX);
                if(lenX < 20 || Math.abs(this.edPosY - this.stPosY) > lenX) return;
                if (this.edPosX > this.stPosX ) {
                    this.onCouponNav(-1);
                } else {
                    this.onCouponNav(1);
                }
            },
            onMoreCoupon: function () {
                if (!this.isLogin) {
                    this.login();
                    return;
                }
                requirePop('allCoupon', {
                    props : {
                        transition : 'mask',
                        parent : this,
                        couponInit : this.couponList,
                        start : this.couponBegin
                    }
                });
            },
            onGrab: function (index) {
                if (this.isSubmitting) return;
                this.isSubmitting = true;
                let code = (index === -1) ? (this.curCoupon.code) : (this.couponList[index].code);
                let params = {
                    uid : T.uid,
                    fid : code
                };
                this.__requestService(httpTake + "?uid=" + T.uid + "&fid=" + code, params, _data => {
                    if (!_data.success) {
                        if (_data.errorCode == 7003) {
                            if (index === -1) { //已抢完
                                this.couponList[this.couponIndex].left = 0;
                                this.__setCouponState(this.couponList[this.couponIndex], this.couponIndex);
                                this.curCoupon.state = this.couponList[this.couponIndex].state;
                            } else {
                                this.couponList[index].left = 0;
                                this.__setCouponState(this.couponList[index], index);
                                this.couponList = this.couponList.slice(0);
                                if (this.couponIndex === index) {
                                    this.curCoupon.state = this.couponList[index].state;
                                }
                            }
                            this.isSubmitting = false;
                        } else {
                            if (index === -1) {
                                requirePop('warning', {
                                    props : {
                                        transition : 'bounceIn',
                                        title : '系统提示',
                                        detail: _data.errorMsg,
                                        btnBackHome: false
                                    }
                                });
                                bus.$once("closePopEvent", () =>{this.isSubmitting = false;});
                            } else {
                                bus.$emit('pop-submit-failed', _data.errorMsg);
                            }
                        }
                        setTimeout(() => {T.setImgSize();}, 1200);
                        return false;
                    }
                    //抢券成功
                    if (index === -1) {  //从首页点击的抢券
                        this.myCoupon[this.couponIndex].gotten = true;
                        this.__setCouponState(this.couponList[this.couponIndex], this.couponIndex);
                        this.couponList = this.couponList.slice(0); //否则不会刷新
                        this.curCoupon = this.couponList[this.couponIndex];
                    } else {  //从弹窗点击的抢券
                        this.myCoupon[index].gotten = true;
                        this.__setCouponState(this.couponList[index], index);
                        this.couponList = this.couponList.slice(0);
                        if (this.couponIndex === index) {
                            this.curCoupon = this.couponList[this.couponIndex];
                        }
                    }
                    this.isSubmitting = false;
                    setTimeout(() => {T.setImgSize();}, 20);
                    return true;
                });
            },
            onEchoMsg : function (errorMsg) {
                requirePop('warning', {
                    props : {
                        transition : 'bounceIn',
                        title : '系统提示',
                        detail: errorMsg,
                        btnBackHome: false
                    }
                });
                bus.$once("closePopEvent", () => {this.isSubmitting = false;});
            },
            onVipGet: function (index) {
                if (this.isSubmitting) return;
                this.isSubmitting = true;
                let code = (index === -1) ? (this.curCoupon.code) : (this.couponList[index].code);
                let params = {
                    uid : T.uid,
                    fid : code
                };
                this.__requestService(httpTake + "?uid=" + T.uid + "&fid=" + code, params, _data => {
                    if (_data.success == false) {
                        if (index === -1) {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg ? _data.errorMsg : "操作失败，请联系客服。",
                                    btnBackHome: false
                                }
                            });
                            bus.$once("closePopEvent", () => {this.isSubmitting = false;});
                        } else {
                            bus.$emit('pop-submit-failed', _data.errorMsg ? _data.errorMsg : "操作失败，请联系客服。");
                        }
                        return false;
                    } else {  //VIP领取成功
                        if (index === -1) {  //从首页点击的VIP领取
                            this.myCoupon[this.couponIndex].gotten = true;
                            this.__setCouponState(this.couponList[this.couponIndex], this.couponIndex);
                            this.couponList = this.couponList.slice(0); //否则不会刷新
                            this.curCoupon = this.couponList[this.couponIndex];
                        } else {  //从弹窗点击的VIP领取
                            this.myCoupon[index].gotten = true;
                            this.__setCouponState(this.couponList[index], index);
                            this.couponList = this.couponList.slice(0);
                            if (this.couponIndex === index) {
                                this.curCoupon = this.couponList[this.couponIndex];
                            }
                        }
                        this.isSubmitting = false;
                    }
                    setTimeout(() => {T.setImgSize();}, 20);
                    return true;
                });
            },
            onInvest: function () {
                T.callApp.investment();
            },
            onGoFeed: function () {
                window.location.replace(window.location.pathname + "#/feed/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onGoDraw: function () {
                if (!T.isLogin) {
                    T.login();
                } else {
//                    window.location.replace(window.location.pathname + "#/draw/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=main");
                    window.location.replace(window.location.pathname + "#/draw/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                }
            }
        }
    }
</script>