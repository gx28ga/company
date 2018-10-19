<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section.gift-setting {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      text-align: center;
      @include contain("../../images/giftSetting.jpg");
      .current-container,
      .current-invest,
      .current-bar,
      .mode-state-bar,
      .mode-icon,
      .rain-mode-icon,
      .mode-desc,
      .gift-container,
      .unopened-wrapper{
        position: absolute;
      }
      .current-invest{
        color: #e8320d;
      }
      .current-bar{
        .mode-icon.small{
          @include contain("../../images/small-white.png");
        }
        .mode-icon.mid{
          @include contain("../../images/mid-white.png");
        }
        .mode-icon.big{
          @include contain("../../images/big-white.png");
        }
        .mode-icon.storm{
          @include contain("../../images/storm-white.png");
        }
        .mode-state-bar.current{
          background: #46d946;
          color: #FFF;
        }
        .mode-state-bar.unopened{
          background: #999;
          color: #FFF;
        }
      }
      .current-bar.small{
        background: rgb(0, 160, 233);
      }
      .current-bar.mid{
        background: rgb(251, 209, 14);
      }
      .current-bar.big{
        background: rgb(243, 152, 0);
      }
      .current-bar.storm{
        background: rgb(232, 50, 13);
      }
      .rain-mode-icon.small, .rain.small{
        @include contain("../../images/small.png");
      }
      .rain-mode-icon.mid, .rain.mid{
        @include contain("../../images/mid.png");
      }
      .rain-mode-icon.big, .rain.big{
        @include contain("../../images/big.png");
      }
      .rain-mode-icon.storm, .rain.storm{
        @include contain("../../images/storm.png");
      }
      .mode-desc{
        color: #333;
      }
      .gift-container{
        text-align: left;
      }
      .gift-box{
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #e8320d;
        color: #e8320d;
        text-align: center;
        div{
          display: inline-block;
          vertical-align: middle;
        }
      }
      .gift-box::after{
        display: inline-block;
        vertical-align: middle;
        content: '';
        height: 100%;
        width: 0;
      }
      .unopened-wrapper{
        overflow-x: hidden;
        .card-container{
          width: 150%;
          height: 100%;
          text-align: left;
          .card{
            display: inline-block;
            vertical-align: top;
            background: #FFF;
            position: relative;
            height: 100%;
            .section{
              width: 100%;
              text-align: center;
              div{
                display: inline-block;
                vertical-align: top;
              }
            }
            .color-mode.small{
              @include contain("../../images/small-color.png");
            }
            .color-mode.mid{
              @include contain("../../images/mid-color.png");
            }
            .color-mode.big{
              @include contain("../../images/big-color.png");
            }
            .color-mode.storm{
              @include contain("../../images/storm-color.png");
            }
            .detail-btn{
              @include contain("../../images/btn-detail.png");
            }
            .state{
              position: absolute;
              background: #999;
              color: #FFF;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="main-section gift-setting">
    <div class="img-size content-wrapper" data-width="750" data-height="1334">
      <lock-screen :lock="isAjaxing"></lock-screen>
      <div class="img-size current-container" data-top="60" data-left="55" data-width="640" data-height="715">
        <div class="img-size current-invest" data-top="35" data-left="35" data-fontSize="24" data-lineHeight="24">您当前累计投资≥120天产品：{{myInvest}}元</div>
        <div class="img-size current-bar" :class="modeClass[rainMode]" data-top="176" data-left="54" data-width="328" data-height="64" data-borderRadius="32">
          <div class="img-size mode-icon" :class="['small', 'mid', 'big', 'storm'][rainMode]" data-top="20" data-left="90" data-width="103" data-height="28"></div>
          <div class="img-size mode-state-bar current" data-top="20" data-left="207" data-width="100" data-height="26" data-borderRadius="5" data-fontSize="18" data-lineHeight="26">正在进行</div>
        </div>
        <div class="img-size rain-mode-icon" :class="['small', 'mid', 'big', 'storm'][rainMode]" data-top="177" data-left="35" data-width="100" data-height="116"></div>
        <div class="img-size mode-desc" data-top="257" data-left="125" data-fontSize="24" data-lineHeight="24">{{modeDesc}}</div>
        <div class="img-size gift-container" data-top="408" data-left="30" data-width="608" data-height="306">
          <div v-for="(item, i) in modeGifts" class="img-size gift-box" data-width="250" data-height="76" :data-marginRight="i % 2 ? 0 : 50" data-marginBottom="20" data-fontSize="24" data-lineHeight="30">
            <div>{{item}}</div>
          </div>
        </div>
      </div>
      <div class="img-size unopened-wrapper" data-top="850" data-left="55" data-width="640" data-height="260">
        <div class="card-container">
          <div v-for="i in 4" v-show="i - 1 > rainMode" class="img-size card" data-width="205" data-marginRight="12" data-borderRadius="20">
            <div class="img-size section" data-marginTop="23" data-height="116">
              <div class="img-size rain" :class="modeClass[i - 1]" data-width="100" data-height="116"></div>
            </div>
            <div class="img-size section" data-marginTop="20" data-height="28">
              <div class="img-size color-mode" :class="modeClass[i - 1]" data-width="103" data-height="28"></div>
            </div>
            <div class="img-size section" data-marginTop="13" data-height="40">
              <div class="img-size detail-btn" data-width="120" data-height="40" @click="onModeDetail(i - 1)"></div>
            </div>
            <div class="img-size state" data-top="13" data-right="0" data-width="70" data-height="30" data-borderTopLeftRadius="15" data-borderBottomLeftRadius="15" data-fontSize="18" data-lineHeight="30">未开启</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    const cModeClass = [
        'small',
        'mid',
        'big',
        'storm'
    ];
    const cModeDesc = [
        '雨量较小，每回掉落的红包数量较少',
        '雨量中等，每回掉落的红包数量较多',
        '雨量较大，每回掉落的红包数量很多',
        '雨量最大，每回掉落的红包数量最多'
    ];
    const cModeGifts = [
        ['1~5积分', '0.5%加息券'],
        ['5~20积分', '加息券%%（1.0%~1.2%）', '京东卡%%（5-20元）'],
        ['20-50积分', '加息券%%（1.2%~1.5%）', '京东卡%%（20-100元）', '倍轻松颈部按摩仪', '松下护眼台灯'],
        ['50-1000积分', '加息券%%（1.5%~2.0%）', '京东卡%%（100-150元）', '倍轻松颈部按摩仪', '松下护眼台灯', 'Kindle Paperwhite']
    ];
    import {requestService, httpChance} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isAjaxing: false,
                myInvest: 0,
                rainMode: 0
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
            modeClass(){
                return cModeClass;
            },
            modeDesc(){
                return cModeDesc[this.rainMode];
            },
            modeGifts(){
                return cModeGifts[this.rainMode];
            }
        },
        mounted(){
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.__getRainMode();
            }
        },
        methods: {
            __getRainMode : function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpChance, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
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
                    const {amount, pattern} = _data.map;
                    this.myInvest = amount;
                    this.rainMode = pattern - 1;
                    this.$nextTick(() =>{
                        let el = document.querySelector(".gift-container");
                        el.innerHTML = el.innerHTML.replace(/%%/g, "<br>");
                        T.setImgSize();
                    });
                });
            },
            onModeDetail(mod){
                requirePop("modeDetail", {
                    props: {
                        transition : "fadeIn",
                        mode: mod
                    }
                });
            }
        }
    }
</script>