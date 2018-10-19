<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .my-wrapper {
      position: relative;
      color: #FFF;
      @include contain("../../images/my-records.jpg");
      .back-btn, .no-data, .records{
        position: absolute;
      }
      .back-btn{
        font-size: 2rem;
      }
      .no-data{
        text-align: center;
        width: 100%;
      }
      .records{
        overflow-y: scroll;
        .item{
          position: relative;
          .col{
            display: inline-block;
            text-align: center;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size my-wrapper" data-width="750" data-height="1410">
      <div class="back-btn img-size" data-left="20" data-top="-10" @click="onBack">&laquo;</div>
      <div v-show="records.length == 0" class="no-data img-size" data-top="890" data-fontSize="32">暂无中奖记录</div>
      <div v-show="records.length > 0" class="records img-size" data-top="790" data-height="295" data-fontSize="24" data-lineHeight="24">
        <div v-for="item in records" class="item img-size" data-marginTop="26" data-width="750">
          <div class="col img-size" data-width="400">{{item.giftName}}</div><!--
       --><div class="col img-size" data-width="280">{{item.addTime | convertTimestampToYmdhhmmss}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpMyRecord} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                records: []
            };
        },
        computed: {
        },
        filters: {
            convertTimestampToYmdhhmmss : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy-MM-dd hh:mm:ss');
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.getMyRecord();
            }
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
            getMyRecord: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpMyRecord + '?uid=' + T.uid, params, _data => {
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
                    this.records = _data.map.lotteryList;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            onBack : function () {
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid);
                }
            }
        }
    }
</script>