<style lang='sass'>
  @import '../../css/global.scss';
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .content-wrapper {
      position: relative;
      .op-btn{
        position: absolute;
        top: 23.59484777517564%;
        width: 32.13333333333333%;
        height: 4.21545667447307%;
      }
      .back-btn{
        @extend .op-btn;
        left: 12%;
      }
      .open-btn{
        @extend .op-btn;
        left: 56.26666666666667%;
      }
    }

    .black-wrapper {
      @extend .content-wrapper;
      @include contain('../../images/black-box-bg.jpg');
    }

    .silver-wrapper {
      @extend .content-wrapper;
      @include contain('../../images/silver-box-bg.jpg');
    }

    .gold-wrapper {
      @extend .content-wrapper;
      @include contain('../../images/gold-box-bg.jpg');
    }
  }
</style>
<template>
  <div class="main-section">
    <div :class="['img-size', {0 : 'black-wrapper', 1 : 'silver-wrapper', 2 : 'gold-wrapper'}[boxLevel]]" data-width="750" data-height="1708">
      <div class="back-btn" @click="onBack"></div>
      <div class="open-btn" @click="onShowContent"></div>
    </div>
  </div>
</template>
<script>
    import {httpPrizeInfo} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                boxLevel : 0,
                isOnBusy : false
            };
        },
        computed: {
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            if (!T.isLogin) {
                T.login();
            }
            this.boxLevel = parseInt(this.$route.params.level);
        },
        methods: {
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
            onShowContent : function () {
                if (!T.isLogin || this.isOnBusy) return false;
                this.isOnBusy = true;
                setTimeout(() => {this.isOnBusy = false;}, 1200);
                let params = {uid: T.uid, caseType: this.boxLevel + 1};
                this.__requestService(httpPrizeInfo + '?uid=' + T.uid, params, _data => {
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
//                    this.prizeInfo = _data.map;
                    requirePop('boxContent', {
                        props : {
                            transition : 'bounceIn',
                            boxLevel : this.boxLevel,
                            prizeCode : _data.map.code,
                            prizeType : _data.map.prizeType,
                            prizeName : _data.map.prizeName
                        }
                    });
                });
            },
            onBack : function () {
                window.history.back();
            }
        }
    }
</script>