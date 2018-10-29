<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .draw-wrapper {
      position: relative;
      @include contain('../../images/draw-bg.jpg');
      .back-btn, .chance, .draw-btn, .my-record, .pager-box, .no-record{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .chance{
        color: #E32635;
        text-align: center;
        width: 100%;
      }
      .my-record{
        text-align: center;
        div{
          display: inline-block;
          vertical-align: top;
        }
        .row:last-child{
          margin-bottom: 0!important;
        }
        .td{
          background: #FFF0A6;
          color: #110A04;
        }
      }
      .pager-box{
        text-align: center;
        color: #110A04;
        div{
          display: inline-block;
          vertical-align: middle;
        }
        .nav-btn{
          background: #FFF0A6;
        }
        .nav-btn.disabled{
          background: #CCC;
        }
      }
      .no-record{
        background: #FFF0A6;
        color: #9B9B9B;
        text-align: center;
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size draw-wrapper" data-width="750" data-height="2237">
      <div class="back-btn img-size" data-top="-10" data-left="20" @click="onBack">&laquo;</div>
      <div class="chance img-size" data-top="1325" data-fontSize="24" data-lineHeight="24">剩余<span class="img-size" data-fontSize="36" data-height="36">{{chanceNum}}</span>次机会</div>
      <!--<div class="draw-btn img-size" data-top="810" data-left="290" data-width="170" data-height="145" @click="onDrawOne"></div>-->
      <div class="draw-btn img-size" data-top="1253" data-left="150" data-width="195" data-height="58" @click="onDrawOne"></div>
      <div class="draw-btn img-size" data-top="1253" data-left="408" data-width="195" data-height="58" @click="onDrawTen"></div>
      <template v-if="records.length > 0">
        <div class="my-record img-size" data-top="1710" data-width="750"><!--
     --><div class="row img-size" data-marginBottom="5"><!--
       --><div class="td img-size" data-width="215" data-height="55" data-fontSize="24" data-lineHeight="55">中奖时间</div>
          <div class="td img-size" data-width="220" data-height="55" data-fontSize="24" data-lineHeight="55">奖品名称</div><!--
     --></div><!--
     --><div v-for="item in pageData" class="row img-size" data-marginBottom="5"><!--
       --><div class="td img-size" data-width="215" data-height="55" data-fontSize="24" data-lineHeight="55">{{item.addTime | convertTimestampToYmdhhmmss}}</div>
          <div class="td img-size" data-width="220" data-height="55" data-fontSize="24" data-lineHeight="55">{{item.giftName}}</div><!--
     --></div>
        </div>
        <div class="pager-box img-size" data-top="2068" data-width="750">
          <div class="nav-btn img-size" :class="pageIndex <= 0 ? 'disabled' : ''" data-width="100" data-height="45" data-fontSize="24" data-lineHeight="45" @click="onPrev">上一页</div>
          <div class="img-size" data-marginLeft="15" data-marginRight="15" data-fontSize="30" data-lineHeight="45">{{pageIndex + 1}} / {{pageNum}}</div>
          <div class="nav-btn img-size" :class="pageIndex + 1 >= pageNum ? 'disabled' : ''" data-width="100" data-height="45" data-fontSize="24" data-lineHeight="45" @click="onNext">下一页</div>
        </div>
      </template>
      <template v-if="records.length == 0">
        <div class="no-record img-size" data-top="1750" data-marginLeft="150" data-marginRight="150" data-width="450" data-fontSize="30" data-lineHeight="300">暂无数据</div>
      </template>
    </div>
  </div>
</template>
<script>
    import {httpChance, httpDraw, httpMyRecord} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                chanceNum : 0,
                records : [],
                pageIndex: 0,
                isOnBusy : false
            };
        },
        computed: {
            pageNum: function () {
                return Math.ceil(this.records.length / 5);
            },
            pageData: function () {
                if (this.records.length > 0) {
                    return this.records.slice(this.pageIndex * 5, (this.pageIndex + 1) * 5);
                } else {
                    return [];
                }
            }
        },
        filters: {
            convertTimestampToYmdhhmmss : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('MM-dd hh:mm:ss');
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
                this.getMyChance();
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
            getDrawOnceResult: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpDraw + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 10000){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 1
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : "系统提示",
                                    detail : _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    btnBackHome : false
                                }
                            });
                        }
                        bus.$once('closePopEvent', () => {
                            this.isOnBusy = false;
                        });
                        return false;
                    }
                    requirePop('playResult', {
                        props: {
                            transition : 'fadeIn',
                            popState : 2,
                            prizeType : _data.map.prizeType,
                            times : _data.map.isDoubleFood,
                            parent : this
                        }
                    });
                    this.chanceNum = _data.map.totalchance;
                    this.getMyRecord();
                    bus.$once('closePopEvent', () => {
                        this.isOnBusy = false;
                    });
                });
            },
            getDrawTenResult: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid, isMany: true};
                this.__requestService(httpDraw + '?uid=' + T.uid + '&isMany=true', params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 10000){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 1,
                                    parent : this
                                }
                            });
                        } else if (_data.errorCode == 10001){
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 3,
                                    parent : this
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg ? _data.errorMsg : '系统错误，请联系客服。',
                                    btnBackHome: false
                                }
                            });
                        }
                        bus.$once('closePopEvent', () => {
                            this.isOnBusy = false;
                        });
                        return false;
                    }
                    requirePop('playResult', {
                        props: {
                            transition : 'rotate3d',
                            popState : 4,
                            parent : this
                        }
                    });
                    this.chanceNum = _data.map.totalchance;
                    this.getMyRecord();
                    bus.$once('closePopEvent', () => {
                        this.isOnBusy = false;
                    });
                });
            },
            onDrawOne : function (target) {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum == 0) {
                    requirePop('playResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : 1
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                setTimeout(() => {
                    this.getDrawOnceResult();
                }, 200);
            },
            onDrawTen : function () {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.chanceNum < 10) {
                    requirePop('playResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : this.chanceNum > 0 ? 3 : 1
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                setTimeout(() => {
                    this.getDrawTenResult();
                }, 200);
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
                    this.pageIndex = 0;
                    this.records = _data.map.lotteryList;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            onPrev : function () {
                if (this.pageIndex > 0) this.pageIndex--;
                setTimeout(() => {T.setImgSize();}, 10);
            },
            onNext : function () {
                if (this.pageIndex < this.pageNum - 1) this.pageIndex++;
                setTimeout(() => {T.setImgSize();}, 10);
            },
            onBack : function () {
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid);
                }
                window.location.reload();
            }
        }
    }
</script>