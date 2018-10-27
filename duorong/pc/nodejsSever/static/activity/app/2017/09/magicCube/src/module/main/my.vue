<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .my-wrapper {
      position: relative;
      background: #F2F2F2;
      min-height: 100%;
      .back-btn, .title, .no-data, .records{
        position: absolute;
      }
      .back-btn{
        z-index: 10;
        color: #AAA;
        font-size: 2rem;
      }
      .title{
        width: 100%;
        color: #666;
        text-align: center;
      }
      .no-data{
        top: 30%;
        width: 100%;
        text-align: center;
        color: #666;
      }
      .records{
        background: #FFF;
        color: #333;
        .item{
          position: relative;
          border-bottom: 1px solid #F2F2F2;
          .col{
            position: absolute;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size my-wrapper" data-width="750">
      <div class="back-btn img-size" data-left="20" data-top="-10" @click="onBack">&laquo;</div>
      <div class="title img-size" data-top="0" data-left="0" data-height="75" data-fontSize="36" data-lineHeight="75">中奖记录</div>
      <div v-show="records.length == 0" class="no-data img-size" data-fontSize="24">暂无中奖记录</div>
      <div v-show="records.length > 0" class="records img-size" data-top="75" data-fontSize="24" data-lineHeight="100">
        <div v-for="item in records" class="item img-size" data-width="750" data-height="100">
          <span class="col img-size" data-left="30">{{item.addTime | convertTimestampToYmdhhmmss}}</span>
          <span class="col img-size" data-right="30">{{item.giftName}}</span>
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