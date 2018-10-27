<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .out-wrap {
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    .my-wrapper {
      position: relative;
      /*background: #F2F2F2;*/
      @include contain("../../images/gift-record.jpg");
      .back-btn, .title, .records{
        position: absolute;
      }
      .back-btn{
        z-index: 10;
      }
      .no-data{
        position: relative;
        margin: 0 auto;
        background-color: #FFF;
        text-align: center;
        p{
          color: #D7C0FE;
        }
      }
      .records{
        position: relative;
        overflow-y: scroll;
        background: #FFF;
        margin: 0 auto;
        color: #333;
        .item{
          margin: 0 auto;
          border-bottom: 1px dashed #D5BDFE;
          .left{
            clear: right;
          }
          .right{
            float: right;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="out-wrap flip-left-bounce">
    <div class="img-size my-wrapper" data-width="750" data-height="1490">
      <div class="back-btn img-size" data-width="80" data-height="105" @click="onBack"></div>
      <!--<div class="title img-size" data-top="0" data-left="0" data-height="75" data-fontSize="36" data-lineHeight="75">中奖记录</div>-->
      <div v-show="records.length == 0" class="no-data img-size" data-top="203" data-width="717" data-height="454" data-fontSize="36" data-lineHeight="430"><p>暂无中奖记录</p></div>
      <div v-show="records.length > 0" class="records img-size" data-top="203" data-width="717" data-minHeight="334" data-maxHeight="780" data-paddingTop="20" data-paddingBottom="100" data-fontSize="24" data-lineHeight="100">
        <div v-for="item in records" class="item img-size" data-width="624" data-paddingLeft="15" data-paddingRight="15" data-lineHeight="80">
          <span class="left img-size" data-left="0">{{item.addTime | convertTimestampToYmdhhmmss}}</span>
          <span class="right img-size" data-right="0">{{item.giftName}}</span>
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
                let target = T.getQueryString("from");
                if (T.wap) {
                    if (target == 'main') {
                        window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid);
                    } else {
                        window.location.replace(window.location.pathname + "#/" + target + "/?wap=true&uid=" + T.uid);
                    }
                } else {
                    if (target == 'main') {
                        window.location.replace(window.location.pathname + "#/?uid=" + T.uid);
                    } else {
                        window.location.replace(window.location.pathname + "#/" + target + "/?uid=" + T.uid);
                    }
                }
            }
        }
    }
</script>