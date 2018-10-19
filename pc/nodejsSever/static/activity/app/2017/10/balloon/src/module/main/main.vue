<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    position: relative;
    .rule-btn,
    .clock,
    .more-coupon,
    .coupon-detail,
    .swipe-area,
    .progress-bar,
    .progress-comment,
    .grab-btn,
    .grab-disabled,
    .vipget-btn,
    .vipget-disabled,
    .grab-out,
    .gotten-mark,
    .coupon-nav-btn,
    .left-chance,
    .login-btn,
    .invest-btn,
    .goto-play-btn,
    .end-btn,
    .my-prize,
    .method,
    .tab-flag,
    .tab-moon,
    .tab-chg,
    .flag-num,
    .xchg,
    .my-moon,
    .no-rank-data,
    .rank,
    .comment
    {/*border: 1px solid red;*/
      position: absolute;
    }
    .clock{
      @include contain("../../images/clock.png");
    }
    .coupon-detail{
      div {
        margin: 0 auto;
        color: #FFF;
        text-align: center;
        .top{
          display: inline-block;
          vertical-align: middle;
        }
        .top.bold{
          font-weight: bold;
        }
        .top:last-child{
          text-align: left;
        }
      }
    }
    .progress-bar{
      background-color: #9F2dFF;
      .current{
        background-color: rgb(241, 218, 180);
      }
    }
    .progress-comment{
      color: #FFF;
      .pct{
        color: #FFF600;
      }
    }
    .grab-btn{
      z-index: 5;
      @include contain("../../images/btn-grab.png");
    }
    .btn-disabled{
      @include contain("../../images/btn-disabled.png");
      color: #6D5E90;
      text-align: center;
    }
    .grab-disabled{
      /*@include contain("../../images/disabled-grab.png");*/
      @extend .btn-disabled;
    }
    .vipget-btn{
      z-index: 5;
      text-align: center;
      color: #FFF;
      @include contain("../../images/btn-vipget.png");
    }
    .vipget-disabled{
      /*text-align: center;*/
      /*color: #6A47BD;*/
      /*@include contain("../../images/disabled-vipget.png");*/
      @extend .btn-disabled;
    }
    .grab-out{
      /*@include contain("../../images/btn-out.png");*/
      @extend .btn-disabled;
    }
    .gotten-mark{
      @include contain("../../images/btn-gotten.png");
    }
    .left-chance{
      color: #FFF;
      span{
        color: #FFF600;
      }
    }
    .login-btn{
      @include contain('../../images/login.png');
      background-position: center;
    }
    .goto-play-btn{
      @include contain('../../images/btn-pierce.png');
      background-position: center;
    }
    .invest-btn{
      @include contain("../../images/btn-invest.png");
      background-position: center;
    }
    .end-btn{
      @include contain('../../images/end.png');
      background-position: center;
    }
    .method{
      width: 100%;
      color: #000;
      text-align: center;
    }
    .tab-flag{
      position: relative;
      @include contain("../../images/xchg-flag.png");
      .flag-num{
        color: #FFF600;
      }
    }
    .tab-moon{
      position: relative;
      @include contain("../../images/area-moon.png");
    }
    .tab-chg{
      z-index: 10;
    }
    .my-moon{
      color: #FFF600;
      text-align: center;
    }
    .no-rank-data{
      color: #974FFE;
      text-align: center;
      width: 100%;
    }
    .rank{
      color: #E4FDFF;
      .row{
        border-bottom: 1px dotted #974FFE;
        clear: left;
        .col{
          display: inline-block;
          text-align: center;
        }
        .col:last-child{
          text-align: right;
        }
      }
      .row:last-child{border: none;}
      .comment{
        width: 100%;
        text-align: center;
      }
    }
  }
  .phase-1{
    @include contain('../../images/home-bg.jpg');
    @extend .main-box;
  }
  .phase-2{
    @include contain('../../images/home-2nd.jpg');
    @extend .main-box;
  }
</style>
<template>
  <div>
    <div v-if="phase == 0" class="phase-1 img-size" data-width="750" data-height="3740">
      <div class="rule-btn img-size" data-top="35" data-left="635" data-width="95" data-height="25" @click="onRule"></div>
      <div v-show="!couponBegin" class="clock img-size" data-top="595" data-left="500" data-width="210" data-height="48"></div>
      <div class="more-coupon img-size" data-top="665" data-left="540" data-width="140" data-height="30" @click="onMoreCoupon"></div>
      <template v-if="couponList.length > 0">
        <!--<div class="coupon-detail img-size" data-top="785" data-left="210">-->
        <div class="coupon-detail img-size" data-top="796" data-left="180" data-width="225">
          <div>
            <div class="top img-size" data-fontSize="60" data-lineHeight="60">{{curCoupon.raisedRates}}</div><!--
         --><div class="top img-size" data-fontSize="24" data-lineHeight="28">{{{2:"加息券", 1:"红包"}[curCoupon.type]}}<br>{{{2:"%", 1:"元"}[curCoupon.type]}}</div>
            <!--<div class="img-size" data-fontSize="24" data-lineHeight="36">（全场通用）</div>-->
          </div>
        </div>
        <div class="progress-bar img-size" data-top="930" data-left="95" data-width="178" data-height="14" data-borderRadius="10">
          <div class="current img-size" :style="'width:' + curCoupon.left * 100 + '%;'" data-marginTop="1" data-marginBottom="1" data-height="12" data-borderRadius="10"></div>
        </div>
        <div class="progress-comment img-size" data-top="925" data-left="280" data-fontSize="20" data-lineHeight="20">{{curCoupon.left > 0 ? "还剩 " : "已抢完，快去抢其他的吧~"}}<span v-show="curCoupon.left > 0" class="pct">{{Math.floor(curCoupon.left * 100) + "%"}}</span><span v-show="curCoupon.left > 0">，限量发放</span></div>
      </template>
      <div v-if="!isLogin && couponList.length > 0">
        <div v-show="curCoupon.vip >= 0">
          <div class="grab-btn img-size" data-top="767" data-left="450" data-width="205" data-height="60" @click="login"></div>
          <div class="vipget-btn img-size" data-top="840" data-left="450" data-width="205" data-heigth="59" data-fontSize="24" data-lineHeight="59" @click="login">VIP{{curCoupon.vip}}<span v-show="curCoupon.vip < maxVip">&plus;</span>直接领取</div>
        </div>
        <div v-show="curCoupon.vip < 0">
          <div class="grab-btn img-size" data-top="804" data-left="450" data-width="205" data-height="60" @click="login"></div>
        </div>
      </div>
      <div v-if="isLogin && couponList.length > 0">
        <div v-show="curCoupon.state == 2 || (curCoupon.state == 3 && couponBegin == false)" class="grab-disabled img-size" data-top="767" data-left="450" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">立即抢券</div>
        <div v-show="curCoupon.state == 3 && couponBegin" class="grab-btn img-size" data-top="767" data-left="450" data-width="205" data-height="60" @click="onGrab(-1)"></div>
        <div v-show="curCoupon.state == 3 || curCoupon.state == 4 || ((curCoupon.state == 2 || curCoupon.state == 5) && couponBegin == false)" class="vipget-disabled img-size" data-top="840" data-left="450" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">VIP{{curCoupon.vip}}<span v-show="curCoupon.vip < maxVip">&plus;</span>直接领取</div>
        <div v-show="(curCoupon.state == 2 || curCoupon.state == 5) && couponBegin" class="vipget-btn img-size" data-top="840" data-left="450" data-width="205" data-heigth="59" data-fontSize="24" data-lineHeight="59" @click="onVipGet(-1)">VIP{{curCoupon.vip}}<span v-show="curCoupon.vip < maxVip">&plus;</span>直接领取</div>
        <div v-show="curCoupon.state == 6 && couponBegin == false" class="grab-disabled img-size" data-top="804" data-left="450" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">立即抢券</div>
        <div v-show="curCoupon.state == 6 && couponBegin" class="grab-btn img-size" data-top="804" data-left="450" data-width="205" data-height="60" @click="onGrab(-1)"></div>
        <div v-show="curCoupon.state == 7" class="grab-out img-size" data-top="804" data-left="450" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">抢完了</div>
        <div v-show="curCoupon.state == 4 || curCoupon.state == 5" class="grab-out img-size" data-top="767" data-left="450" data-width="205" data-height="58" data-fontSize="24" data-lineHeight="60">抢完了</div>
        <div v-show="curCoupon.state == 1" class="gotten-mark img-size" data-top="758" data-left="450" data-width="184" data-height="146"></div>
      </div>
      <div v-show="couponList.length > 0" class="coupon-nav-btn img-size" data-top="830" data-left="25" data-width="50" data-height="50" @click="onCouponNav(-1)"></div>
      <div v-show="couponList.length > 0" class="coupon-nav-btn img-size" data-top="830" data-left="675" data-width="50" data-height="50" @click="onCouponNav(1)"></div>
      <div v-show="couponList.length > 0" class="swipe-area img-size" data-top="740" data-left="80" data-width="590" data-height="222" @touchstart="onTouchStart($event)" @touchend="onTouchEnd($event)"></div>
      <div class="left-chance img-size" data-top="1252" data-left="66" data-fontSize="30" data-lineHeight="30">剩余机会：<span>{{isLogin ? chanceNum : '--'}}</span> 次</div>
      <div class="my-prize img-size" data-top="1255" data-left="570" data-width="115" data-height="30" @click="onMyRecord"></div>
      <!-- 登录 投资 戳气球按钮 -->
      <div v-show="status > 0" class="end-btn img-size" data-top="1850" data-left="80" data-width="590" data-height="130"></div>
      <template v-if="status <= 0">
        <div v-show="isLogin == false" class="login-btn img-size" data-top="1850" data-left="80" data-width="590" data-height="130" @click="login"></div>
        <div v-show="isLogin == true && chanceNum <= 0" class="invest-btn img-size" data-top="1850" data-left="80" data-width="590" data-height="130" @click="onInvest"></div>
        <div v-show="isLogin == true && chanceNum > 0" class="goto-play-btn img-size" data-top="1850" data-left="80" data-width="590" data-height="130" @click="onGoPlay"></div>
      </template>
      <div class="method img-size" data-top="2008" data-left="0" data-fontSize="24">单笔投资≥20天产品每满10000元，获1次戳气球机会</div>
      <div v-show="tab == 0">
        <div class="tab-chg img-size" data-top="2395" data-left="375" data-width="355" data-height="82" @click="tab=1;"></div>
        <div class="tab-flag img-size" data-top="2395" data-left="20" data-width="711" data-height="1247">
          <div v-show="!isLogin">
            <div class="flag-num img-size" data-top="150" data-left="220" data-fontSize="36" data-lineHeight="36">--</div>
            <div class="xchg img-size" data-top="496" data-left="184" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="836" data-left="184" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="1176" data-left="184" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="496" data-left="520" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="836" data-left="520" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="1178" data-left="520" data-width="138" data-height="56" @click="login"></div>
          </div>
          <div v-show="isLogin">
            <div class="flag-num img-size" data-top="150" data-left="220" data-fontSize="36" data-lineHeight="36">{{myFlag > 0 ? myFlag : '暂无'}}</div>
            <div class="xchg img-size" data-top="496" data-left="184" data-width="138" data-height="56" @click="onXchg(6)"></div>
            <div class="xchg img-size" data-top="496" data-left="520" data-width="138" data-height="56" @click="onXchg(5)"></div>
            <div class="xchg img-size" data-top="836" data-left="184" data-width="138" data-height="56" @click="onXchg(4)"></div>
            <div class="xchg img-size" data-top="836" data-left="520" data-width="138" data-height="56" @click="onXchg(3)"></div>
            <div class="xchg img-size" data-top="1176" data-left="184" data-width="138" data-height="56" @click="onXchg(2)"></div>
            <div class="xchg img-size" data-top="1178" data-left="520" data-width="138" data-height="56" @click="onXchg(1)"></div>
          </div>
        </div>
      </div>
      <div v-show="tab == 1">
        <div class="tab-chg img-size" data-top="2395" data-left="0" data-width="355" data-height="82" @click="tab=0;"></div>
        <div class="tab-moon img-size" data-top="2395" data-left="20" data-width="711" data-height="1247">
          <div class="my-moon img-size" data-top="150" data-left="219" data-fontSize="36" data-lineHeight="36">{{isLogin ?  ( myMoon > 0 ? myMoon : '暂无') : '--'}}</div>
          <template v-if="isLogin == false">
            <div class="my-moon img-size" data-top="211" data-left="240" data-fontSize="36" data-lineHeight="36">--</div>
            <div class="my-moon img-size" data-top="270" data-left="309" data-fontSize="36" data-lineHeight="36">--</div>
          </template>
          <template v-else>
            <div class="my-moon img-size" data-top="211" data-left="240" data-fontSize="36" data-lineHeight="36">{{myRank > 0 ? myRank : '暂无'}}</div>
            <div class="my-moon img-size" data-top="270" data-left="309" data-fontSize="36" data-lineHeight="36">{{possiblePrize == '' ? '暂无' : possiblePrize}}</div>
          </template>
          <div v-show="!isLogin || rankList.length == 0" class="no-rank-data img-size" data-top="764" data-left="0" data-lineHeight="48" data-fontSize="48">暂无数据</div>
          <div v-show="isLogin && rankList.length > 0" class="rank img-size" data-top="476" data-left="35" data-fontSize="24" data-lineHeight="60">
            <div v-for="item in rankList" class="row">
              <div class="col img-size" data-width="50">{{item.rowNo}}</div><!--
         --><div class="col img-size" data-width="209">{{item.mobilePhone}}</div><!--
         --><div class="col img-size" data-width="127">{{item.description}}</div><!--
         --><div class="col img-size" data-width="250">{{item.gift}}</div>
            </div>
            <div class="comment img-size" data-top="760" data-fontSize="18">*  仅供参考，最终结果以活动结束日排名为准</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="phase-2 img-size" data-width="750" data-height="3085">
      <div class="rule-btn img-size" data-top="35" data-left="635" data-width="95" data-height="25" @click="onRule"></div>
      <div class="left-chance img-size" data-top="597" data-left="66" data-fontSize="30" data-lineHeight="30">剩余机会：<span>{{isLogin ? chanceNum : '--'}}</span> 次</div>
      <div class="my-prize img-size" data-top="600" data-left="570" data-width="115" data-height="30" @click="onMyRecord"></div>
      <!-- 登录 投资 戳气球按钮 -->
      <div v-show="status > 0" class="end-btn img-size" data-top="1195" data-left="80" data-width="590" data-height="130"></div>
      <template v-if="status <= 0">
        <div v-show="isLogin == false" class="login-btn img-size" data-top="1195" data-left="80" data-width="590" data-height="130" @click="login"></div>
        <div v-show="isLogin == true && chanceNum <= 0" class="invest-btn img-size" data-top="1195" data-left="80" data-width="590" data-height="130" @click="onInvest"></div>
        <div v-show="isLogin == true && chanceNum > 0" class="goto-play-btn img-size" data-top="1195" data-left="80" data-width="590" data-height="130" @click="onGoPlay"></div>
      </template>
      <div class="method img-size" data-top="1353" data-left="0" data-fontSize="24">单笔投资≥20天产品每满10000元，获1次戳气球机会</div>
      <div v-show="tab == 0">
        <div class="tab-chg img-size" data-top="1740" data-left="375" data-width="355" data-height="82" @click="tab=1;"></div>
        <div class="tab-flag img-size" data-top="1740" data-left="20" data-width="710" data-height="1247">
          <div v-show="!isLogin">
            <div class="flag-num img-size" data-top="150" data-left="220" data-fontSize="36" data-lineHeight="36">--</div>
            <div class="xchg img-size" data-top="496" data-left="184" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="836" data-left="184" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="1176" data-left="184" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="496" data-left="520" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="836" data-left="520" data-width="138" data-height="56" @click="login"></div>
            <div class="xchg img-size" data-top="1178" data-left="520" data-width="138" data-height="56" @click="login"></div>
          </div>
          <div v-show="isLogin">
            <div class="flag-num img-size" data-top="150" data-left="220" data-fontSize="36" data-lineHeight="36">{{myFlag > 0 ? myFlag : '暂无'}}</div>
            <div class="xchg img-size" data-top="496" data-left="184" data-width="138" data-height="56" @click="onXchg(6)"></div>
            <div class="xchg img-size" data-top="496" data-left="520" data-width="138" data-height="56" @click="onXchg(5)"></div>
            <div class="xchg img-size" data-top="836" data-left="184" data-width="138" data-height="56" @click="onXchg(4)"></div>
            <div class="xchg img-size" data-top="836" data-left="520" data-width="138" data-height="56" @click="onXchg(3)"></div>
            <div class="xchg img-size" data-top="1176" data-left="184" data-width="138" data-height="56" @click="onXchg(2)"></div>
            <div class="xchg img-size" data-top="1178" data-left="520" data-width="138" data-height="56" @click="onXchg(1)"></div>
          </div>
        </div>
      </div>
      <div v-show="tab == 1">
        <div class="tab-chg img-size" data-top="1740" data-left="0" data-width="355" data-height="82" @click="tab=0;"></div>
        <div class="tab-moon img-size" data-top="1740" data-left="20" data-width="711" data-height="1247">
          <div class="my-moon img-size" data-top="150" data-left="219" data-fontSize="36" data-lineHeight="36">{{isLogin ? ( myMoon > 0 ? myMoon : '暂无') : '--'}}</div>
          <template v-if="isLogin == false">
            <div class="my-moon img-size" data-top="211" data-left="240" data-fontSize="36" data-lineHeight="36">--</div>
            <div class="my-moon img-size" data-top="270" data-left="309" data-fontSize="36" data-lineHeight="36">--</div>
          </template>
          <template v-else>
            <div class="my-moon img-size" data-top="211" data-left="240" data-fontSize="36" data-lineHeight="36">{{myRank > 0 ? myRank : '暂无'}}</div>
            <div class="my-moon img-size" data-top="270" data-left="309" data-fontSize="36" data-lineHeight="36">{{possiblePrize == '' ? '暂无' : possiblePrize}}</div>
          </template>
          <div v-show="!isLogin || rankList.length == 0" class="no-rank-data img-size" data-top="764" data-left="0" data-lineHeight="48" data-fontSize="48">暂无数据</div>
          <div v-show="isLogin && rankList.length > 0" class="rank img-size" data-top="476" data-left="35" data-fontSize="24" data-lineHeight="60">
            <div v-for="item in rankList" class="row">
              <div class="col img-size" data-width="50">{{item.rowNo}}</div><!--
         --><div class="col img-size" data-width="209">{{item.mobilePhone}}</div><!--
         --><div class="col img-size" data-width="127">{{item.description}}</div><!--
         --><div class="col img-size" data-width="250">{{item.gift}}</div>
            </div>
            <div class="comment img-size" data-top="760" data-fontSize="18">*  仅供参考，最终结果以活动结束日排名为准</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpStatus, httpCoupon, httpParticipate, httpTake, httpChance, httpHomeData, httpXchg} from '../../common/URL';
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
                chanceNum: 0,
                myRank: 0,
                tab : 0,
                possiblePrize: '',
                rankList: [],
                isXchging: false,
                isSubmitting: false,
                stPosX: 0,
                edPosX: 0,
                stPosY: 0,
                edPosY: 0
            };
        },
        computed: {
        },
        mounted(){
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            this.getActivityStatus();
            bus.$on('closePopEvent', () => {this.isXchging = false;});
        },
        methods: {
            onRule : function () {
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
                            setTimeout(() => {
                                this.isXchging = false;
                                this.isSubmitting = false;
                            }, 5000);
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
                    }
                    if (this.status >= 0){  //活动进行中或结束
                        this.checkParticipatable();
                    }
                    setTimeout(() => {T.setImgSize();}, 20);
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
                    setTimeout(() => {T.setImgSize();}, 20);
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
                        this.getHomeData();
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
                    this.myFlag = _data.map.myFlag;
                    this.myMoon = _data.map.myMoons;
                    this.myRank =  _data.map.myRank;
                    this.possiblePrize = _data.map.myGift;
                    this.rankList = _data.map.rankList;
                    if (this.phase == 0) {
                        this.myCoupon = _data.map.myCoupon;
                        this.myVip = _data.map.myVip;
                        //设置券/红包的按钮状态
                        this.couponList.forEach(this.__setCouponState, this);
                        //再次设置当前券/红包数据
                        this.curCoupon = this.couponList[this.couponIndex];
                    }
                    setTimeout(() => {T.setImgSize();}, 100);
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
                T.login();
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
                document.getElementsByClassName("current")[0].style.width = this.curCoupon.left * 100 + "%";
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
//                        transition : 'bounceIn',
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
                    /*if (_data.success == false && _data.hasOwnProperty("errorMsg")) {
                        if (index === -1) {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg,
                                    btnBackHome: false
                                }
                            });
                            this.isSubmitting = false;
                        } else {
                            bus.$emit('pop-submit-failed', _data.errorMsg);
                        }
                        return false;
                    } else if (_data.flag == true) {  //抢券成功
                        if (index === -1) {  //从首页点击的抢券
                            this.myCoupon[this.couponIndex].gotten = true;
                            this.__setCouponState(this.couponList[this.couponIndex], this.couponIndex);
                            this.couponList = this.couponList.slice(0); //否则不会刷新
                            this.curCoupon = this.couponList[this.couponIndex];
                            this.isSubmitting = false;
                        } else {  //从弹窗点击的抢券
                            this.myCoupon[index].gotten = true;
                            this.__setCouponState(this.couponList[index], index);
                            this.couponList = this.couponList.slice(0);
                            if (this.couponIndex === index) {
                                this.curCoupon = this.couponList[this.couponIndex];
                            }
                        }
                    } else {
                        if (index === -1) { //已抢完
                            this.couponList[this.couponIndex].left = 0;
                            this.__setCouponState(this.couponList[this.couponIndex], this.couponIndex);
                            this.curCoupon.state = this.couponList[this.couponIndex].state;
                            this.isSubmitting = false;
                        } else {
                            this.couponList[index].left = 0;
                            this.__setCouponState(this.couponList[index], index);
                            if (this.couponIndex === index) {
                                this.curCoupon.state = this.couponList[index].state;
                            }
                        }
                    }*/
                    if (!_data.success) {
                        if (_data.errorCode == 7003) {
                            if (index === -1) { //已抢完
                                this.couponList[this.couponIndex].left = 0;
                                this.__setCouponState(this.couponList[this.couponIndex], this.couponIndex);
                                this.curCoupon.state = this.couponList[this.couponIndex].state;
                            } else {
                                this.couponList[index].left = 0;
                                this.__setCouponState(this.couponList[index], index);
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
                        setTimeout(() => {T.setImgSize();}, 20);
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
            onGoPlay: function () {
                window.location.replace(window.location.pathname + "#/play/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onMyRecord: function () {
                if (!T.isLogin) {
                    T.login();
                } else {
                    window.location.replace(window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=main");
                }
            },
            onXchg: function (targetNo) {
                if (this.status != 0 || this.isXchging) return;
                this.isXchging = true;
                let payFlag = [12, 32, 58, 88, 188, 298];
                if (this.myFlag < payFlag[targetNo - 1]) {
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
                            targetNo: targetNo,
                            parent: this
                        }
                    });
                }
            },
            onConfirmXchg : function (targetNo) {
                if (!T.isLogin) return false;
                let params = {uid: T.uid, exchangeId : targetNo};
                this.__requestService(httpXchg + '?uid=' + T.uid + '&exchangeId=' + targetNo, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 7000) {
                            requirePop('exchange', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 0
                                }
                            });
                            return false;
                        }
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title: '系统提示',
                                detail : _data.errorMsg,
                                btnBackHome : false
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