<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .my-wrapper {
      position: relative;
      @include contain('../../images/my.png');
      .back-btn,
      .rank-btn,
      .gift-info,
      .small-num,
      .big-num,
      .no-data,
      .record-area,
      .pager,
      .try-convert,
      .try-tear{
        position: absolute;
      }
      .num{
        color: #E02023;
      }
      .no-data{
        width: 100%;
        text-align: center;
        color: #251957;
      }
      .record-area{
        width: 100%;
        .row{
          width: 100%;
          text-align: center;
          font-size: 14px;
          .td{
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            color: #251957;
          }
          .td.btn{
            border: 1px solid #B597FF;
            color: #B597FF;
            text-align: center;
          }
          .td.btn.inactive{
            border: 1px solid #BBB;
            background: #DDD;
            color: #888;
          }
          .td.figure{
            color: #B597FF;
          }
        }
      }
      .back-btn{
        color: #0F0;
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <div class="img-size my-wrapper" data-width="750" data-height="1800">
      <div class="back-btn img-size" data-left="20" data-top="-10" data-fontSize="75" @click="onBack">&laquo;</div>
      <div class="gift-info img-size" data-top="224" data-left="480" data-width="200" data-height="36" @click="onGiftInfo"></div>
      <div class="num small-num img-size" data-top="350" data-left="320" data-fontSize="30" data-lineHeight="30">&times; {{smallBox}}</div>
      <div class="try-convert img-size" data-top="380" data-left="420" data-width="120" data-height="40" @click="onTryConvert"></div>
      <div class="try-tear img-size" data-top="290" data-left="552" data-width="128" data-height="140" @click="onTryTear('small')"></div>
      <div class="num big-num img-size" data-top="500" data-left="320" data-fontSize="30" data-lineHeight="30">&times; {{bigBox}}</div>
      <div class="try-tear img-size" data-top="440" data-left="552" data-width="128" data-height="140" @click="onTryTear('big')"></div>
      <div v-show="records.length <= 0" class="no-data img-size" data-top="750" data-fontSize="32" data-lineHeight="640">暂无记录</div>
      <div v-if="records.length > 0" class="record-area img-size" data-top="750">
        <div v-for="item in curPageRcds" class="row img-size" data-fontSize="26" data-lineHeight="58">
          <div class="td img-size" data-width="405">{{item.giftName}}</div><div class="td img-size" data-width="200">{{item.addTime | convertTimestampToDatetime}}</div>
        </div>
        <div class="pager row img-size" data-top="640" data-fontSize="24" data-lineHeight="40">
          <div class="td btn img-size" :class="curPageNo <= 1 ? 'inactive' : ''" data-borderRadius="8" data-width="112" @click="onNav(-1)">上一页</div>
          <div class="td figure img-size" data-marginLeft="30" data-marginRight="30" data-fontSize="32">{{curPageNo}} / {{totalPage}}</div>
          <div class="td btn img-size" :class="curPageNo >= totalPage ? 'inactive' : ''" data-borderRadius="8" data-width="112" @click="onNav(1)">下一页</div>
        </div>
      </div>
      <div class="rank-btn img-size" data-left="490" data-top="1660" data-width="190" data-height="60" @click="onGoRank"></div>
    </div>
  </div>
</template>
<script>
    import {httpMyGift, httpTear, httpConvert} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                smallBox: 0,
                bigBox: 0,
                records: [],
                pageRange: 10,
                curPageNo: 1
            };
        },
        computed: {
            totalPage : function () {
                let rcds = this.records.length;
                return rcds > 0 ? Math.ceil(rcds / 10) : 0;
            },
            curPageRcds : function () {
                let all = this.records;
                if (all.length <= 0) return [];
                let start = (this.curPageNo - 1) * this.pageRange;
                return all.slice(start, start + this.pageRange);
            }
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('MM-dd hh:mm:ss');
            }
        },
        mounted(){
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.getMyGift();
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
            getMyGift: function () {
                let params = {
                    uid: T.uid
                };
                this.__requestService(httpMyGift, params, _data => {
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
                    this.smallBox = _data.map.smallCaseNum;
                    this.bigBox = _data.map.bigCaseNum;
                    this.records = _data.map.lotteryList;
                    setTimeout(() => {T.setImgSize();}, 200);
                });
            },
            onGiftInfo : function () {
                requirePop("giftInfo", {
                    props : {
                        transition : 'rotate3d'
                    }
                });
            },
            onNav : function (offset) {
                let cur = this.curPageNo;
                let all = this.totalPage;
                if (cur <= 1 && offset < 0) return;
                if (cur >= all && offset > 0) return;
                this.curPageNo += offset;
                setTimeout(() => {T.setImgSize();}, 30);
            },
            onTryConvert : function () {
                if (this.smallBox < 50) {
                    requirePop("playResult", {
                        props : {
                            transition : 'bounceIn',
                            popState : 3
                        }
                    });
                    return false;
                }
                requirePop("giftBox", {
                    props : {
                        transition : 'mask',
                        popType : 0,
                        boxNum : this.smallBox
                    }
                });
                this.__oncePopCallback();
            },
            onTryTear : function (type) {
                let popState;
                if (type == 'small' && this.smallBox <= 0) {
                    popState = 2;
                }
                if (type == 'big' && this.bigBox <= 0) {
                    popState = 4;
                }
                if (popState) {
                    requirePop("playResult", {
                        props: {
                            transition: 'bounceIn',
                            popState: popState
                        }
                    });
                    return false;
                }
                if (type == 'small') {
                    requirePop("giftBox", {
                        props : {
                            transition : 'mask',
                            popType : 0,
                            boxNum : this.smallBox
                        }
                    });
                } else if (type == 'big') {
                    requirePop("giftBox", {
                        props: {
                            transition: 'mask',
                            popType: 1,
                            boxNum: this.bigBox
                        }
                    });
                }
                this.__oncePopCallback();
            },
            __oncePopCallback : function () {
                bus.$off();
                bus.$once("tear-one-request", type => {
                    this.__getTearOne(type);
                });
                bus.$once("tear-ten-request", type => {
                    this.__getTearTen(type);
                });
                bus.$once("ask-for-convert", () => {
                    if (this.smallBox < 30) {
                        requirePop("playResult", {
                            props : {
                                transition : "bounceIn",
                                popState : 3
                            }
                        });
                        return false;
                    }
                    requirePop("giftBox", {
                        props : {
                            transition : 'fadeIn',
                            popType : 2,
                            boxNum : this.smallBox
                        }
                    });
                });
                bus.$once("confirm-cvt-request", (smallBefore, bigAfter, smallAfter) => {
                    this.__getConvertResult(smallBefore, bigAfter, smallAfter);
                });
            },
            __getTearOne : function (type) {
                if (!T.isLogin) return false;
                let boxSize;
                if (type == 'small') {
                    boxSize = 0;
                } else if (type == 'big') {
                    boxSize = 1;
                }
                let params = {
                    uid: T.uid,
                    caseType: type,
                    isMany: false
                }
                this.__requestService(httpTear, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 10000) {
                            requirePop("playResult", {
                                props : {
                                    transition : 'bounceIn',
                                    popState : [2, 4][boxSize]
                                }
                            });
                            if (boxSize == 0) {
                                this.smallBox = _data.map.totalchance;
                            } else if (boxSize == 1) {
                                this.bigBox = _data.map.totalchance;
                            }
                        }/* else if (boxSize == 1 && _data.errorCode == 7002) {
                            requirePop("playResult", {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 4
                                }
                            });
                            this.bigBox = 0;
                        }*/ else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg,
                                    btnBackHome: false
                                }
                            });
                        }
                        return false;
                    }
                    requirePop("giftBox", {
                        props : {
                            transition : 'rotate3d',
                            popType : 3,
                            giftName : _data.map.prizeName
                        }
                    });
                    bus.$once("closePopEvent", () => {
                        this.getMyGift();
                    });
                    bus.$once("continue-to-tear", () => {
                        this.onTryTear(type);
                    });
                });
            },
            __getTearTen : function (type) {
                if (!T.isLogin) return false;
                let boxSize;
                if (type == 'small') {
                    boxSize = 0;
                } else if (type == 'big') {
                    boxSize = 1;
                }
                let params = {
                    uid: T.uid,
                    caseType: type,
                    isMany: true
                }
                this.__requestService(httpTear, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 10000) {
                            requirePop("playResult", {
                                props : {
                                    transition : 'bounceIn',
                                    popState : [2, 4][boxSize]
                                }
                            });
                            if (boxSize == 0) {
                                this.smallBox = _data.map.totalchance;
                            } else if (boxSize == 1) {
                                this.bigBox = _data.map.totalchance;
                            }
                        } else if (_data.errorCode == 10001) {
                            requirePop("playResult", {
                                props : {
                                    transition : 'bounceIn',
                                    popState : [5, 6][boxSize]
                                }
                            });
                            if (boxSize == 0) {
                                this.smallBox = _data.map.totalchance;
                            } else if (boxSize == 1) {
                                this.bigBox = _data.map.totalchance;
                            }
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg,
                                    btnBackHome: false
                                }
                            });
                        }
                        return false;
                    }
                    requirePop("giftBox", {
                        props : {
                            transition : 'rotate3d',
                            popType : 3,
                            giftName : "拆得10个奖品！"
                        }
                    });
                    bus.$once("closePopEvent", () => {
                        this.getMyGift();
                    });
                    bus.$once("continue-to-tear", () => {
                        this.onTryTear(type);
                    });
                });
            },
            __getConvertResult : function (smallBefore, bigAfter, smallAfter) {
                if (!T.isLogin) return false;
                let params = {
                    uid: T.uid
                };
                this.__requestService(httpConvert, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 10005) {
                            requirePop("playResult", {
                                props : {
                                    transition : "bounceIn",
                                    popState : 3
                                }
                            });
                        } else {
                            requirePop("warning", {
                                props : {
                                    transition : "bounceIn",
                                    title : "系统提示",
                                    detail : _data.errorMsg,
                                    btnBackHome : false
                                }
                            });
                        }
                        return false;
                    }
                    requirePop("playResult", {
                        props : {
                            transition : 'rotate3d',
                            popState : 7
                        }
                    });
                    bus.$once("closePopEvent", () => {
                        this.getMyGift();
                    });
                });
            },
            onGoRank : function () {
                let pathUrl = window.location.pathname + "#/rank/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=my";
                window.location.replace(pathUrl);
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