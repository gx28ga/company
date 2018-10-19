<style lang='sass'>
  @import '../../css/global.scss';
  .main-box {
    @include contain("../../images/bg.png");
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    .mid-align{
      text-align: center;
    }
    .my-section{
      position: relative;
      margin: 0 auto;
      background: #F6FEFF;
      color: #004f84;
      span.value{
        color: #ff5400;
      }
      .half-cirle{
        position: absolute;
        background: #0F29A3;
      }
    }
    .my-section > div{
      display: inline-block;
      vertical-align: middle;
    }
    .my-section::after{
      display: inline-block;
      vertical-align: middle;
      content: '';
      width: 0;
      height: 100%;
    }
    .func-btn{
      position: absolute;
      @include contain("../../images/btn-bg.png");
      color: #FFF;
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
    <div class="img-size main-box" data-paddingTop="758" data-width="750" :data-height="2220-758">
      <div class="img-size my-section" data-borderRadius="14" data-width="708" data-height="180">
        <div class="img-size half-cirle" data-top="80" data-left="-10" data-borderRadius="10" data-width="20" data-height="20"></div>
        <div class="img-size half-cirle" data-top="80" data-right="-10" data-borderRadius="10" data-width="20" data-height="20"></div>
        <div class="img-size" data-marginLeft="36" data-fontSize="30" data-lineHeight="60">
          <p>我的年化总金额：<span class="img-size value" :data-fontSize="isNumber(investAmt()) ? 32 : 'inherit'">{{investAmt()}}</span><span v-show="isNumber(investAmt())"> 元</span></p>
          <p>预计获得奖品：<span class="img-size value" :data-fontSize="reward().length > 10 ? 28 : 'inherit'">{{reward()}}</span></p>
          <div class="img-size func-btn mid-align" data-left="513" :data-top="reward().length > 10 ? 24 : 88" data-width="160" data-height="54" data-fontSize="26" data-lineHeight="54" @click="isLogin ? onInvest() : onLogin()">{{isLogin ? '立即投资' : '立即登录'}}</div>
        </div>
      </div>
      <div class="img-size rule" data-marginTop="60" data-width="653" data-height="1130"></div>
    </div>
  </div>
</template>
<script>
    import {requestService, httpStatus, httpParticipate, httpMyData} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data() {
            return {
                isAjaxing: false
            };
        },
        computed: {
            isLogin(){
                return T.isLogin;
            }
        },
        components : {
            'lockScreen' : () => import('./lockScreen')
        },
        mounted() {
            T.setImgSize();
            this.getActivityStatus();
        },
        methods: {
            getActivityStatus() {
                this.isAjaxing = true;
                requestService(httpStatus, {}, _data => {
                    const {success, errorMsg, map} = _data;
                    if (!success) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '操作失败，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return;
                    }
                    const sts = map.status;
                    if (sts != 0) {  //活动未开始
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : sts < 0 ? '敬请期待' : '温馨提示',
                                detail: sts < 0 ? '活动即将开始, 期待您的热情参与!' : '活动已结束，您可以参加其他活动',
                                btnBackHome: true
                            }
                        });
                        return;
                    }
                    if (T.isLogin) {
                        this.checkParticipatable();
                    } else {
                        this.isAjaxing = false;
                    }
                });
            },
            checkParticipatable() {
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
                                    btnBackHome: true
                                }
                            });
                            return;
                        }
                        this.getMyData();
                    }
                });
            },
            investAmt() {
                return T.isLogin ? (val => {return Number(val) ? Number(val) : '暂无'})(bus.$data.invest) :
                '----';
            },
            reward() {
                return !T.isLogin ? '----' :
                    (input => {return !input || (input + '').trim() == '无' ? '暂无' : input.trim()})(bus.$data.reward);
            },
            getMyData() {
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
                                btnBackHome: true
                            }
                        });
                        return;
                    }
                    bus.$data.invest = map.amount;
                    bus.$data.reward = map.award;
                    this.$nextTick(() => T.setImgSize());
                });
            },
            isNumber(input) {
                return Number(input) > 0;
            },
            onLogin() {
                !T.getQueryString('wap') || T.getQueryString('force') === 'force' ? T.login() : this.__launchApp();
            },
            __launchApp() {
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
            },
            onInvest() {
                T.callApp.investment();
            }
        }
    }
</script>