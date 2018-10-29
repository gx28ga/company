<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .strategy-main {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .content-wrapper {
      position: relative;
      @include contain('../../images/strategy.jpg');
      color: #FFF;
      .back-btn, .investment, .main-btn{
        position: absolute;
      }
      .investment{
        color: #FFF;
        a{
          color: #FFF;
          text-decoration: none;
        }
        span{
          color: #F44336;
        }
      }
    }
  }
</style>
<template>
  <div class="strategy-main flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="1334">
      <!--<div class="back-btn img-size" data-width="106" data-height="106" @click="onBack"></div>-->
      <div class="investment img-size" data-top="930" data-left="110" data-fontSize="18" data-lineHeight="18">您当前累计投资：<span>{{investedAmt}}</span>元<br><br><a v-show="gapAmt > 0">距离开启【简单模式】还差<span>{{gapAmt}}</span>元</a><a v-show="gapAmt <= 0">已开启【简单模式】</a></div>
      <div class="main-btn img-size" data-top="1090" data-left="204" data-width="342" data-height="72" @click="onBack"></div>
    </div>
  </div>
</template>
<script>
    import {httpMyInvest} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data() {
            return {
                investedAmt: 0,
                gapAmt: 0
            };
        },
        mounted(){
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.getMyInvest();
            }
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
            getMyInvest: function () {
                let params = {uid: T.uid};
                this.__requestService(httpMyInvest, params, _data => {
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
                this.investedAmt = _data.map.amountTotal;
                this.gapAmt = _data.map.amountDistance;
            });
            },
            onBack : function () {
                let homeUrl = window.location.pathname + (T.getQueryString("isFirst") == "true" ? '#/play/' : '');
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