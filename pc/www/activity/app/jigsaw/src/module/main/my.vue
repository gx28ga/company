<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    .my-piece-wrapper {
      position: relative;
      width: 100%;
      @include contain('../../images/piece-bg.jpg');
      .back-btn{
        display: inline-block;
      }
      .my-rank-tab, .my-com-num, .convert-btn, .prize-area{
        position: absolute;
      }
      .my-com-num{
        color: #FF5A00;
        font-size: .75rem;
        line-height: .75rem;
      }
      .prize-area{
        .prize-box{
          display: inline-block;
          float: left;
          height: 7.45rem;
          /*width: 39.5%;*/
          width: 6.9rem;
          .process{
            position: relative;
            width: 100%;
            margin: 0 auto;
            div{
              display: inline-block;
              vertical-align: middle;
            }
            .num{
              position: relative;
              top: .1rem;
              color: #00FCFF;
            }
            .num.left{
              width: 12%;
              text-align: right;
            }
            .num.right{
              /*width: 8%;*/
              width: 1%;
              text-align: left;
            }
            .bar-full{
              margin: 0 auto;
              width: 70%;
              border: 1px solid #00FCFF;
              background: rgb(0, 70, 53);
              -webkit-border-radius: .2rem;
              -moz-border-radius: .2rem;
              border-radius: .2rem;
              .current{
                background: #00FCFF;
                height: 100%;
                -webkit-border-radius: .2rem;
                -moz-border-radius: .2rem;
                border-radius: .2rem;
                vertical-align: top;
              }
            }
          }
          .detail{
            position: relative;
            color: #333;
            span{
              color: #FF5A00;
            }
          }
        }
        .prize-box:nth-child(even){
          /*margin-left: 8.5%;*/
          margin-left: 1.82rem;
        }
      }
    }
    .my-rank-wrapper{
      position: relative;
      @include contain("../../images/rank-bg.jpg");
      .back-btn{
        display: inline-block;
      }
      .my-piece-tab, .my-rank, .no-rank-data{
        position: absolute;
      }
      .my-rank{
        color: #333;
        span{
          color: #FF5A00;
        }
      }
      .rank-list{
        position: relative;
        .rank-item{
          text-align: center;
          color: #E4FDFF;
          border-bottom: 1px dashed rgba(126, 252, 255, .7);
        }
        .rank-item:last-child{
          border-bottom-style: solid;
        }
        .rank-item > div{
          float: left;
        }
        .rank-item > div:first-child{
          clear: left;
        }
      }
      .no-rank-data{
        color: #04DEF0;
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div v-show="tab == 0" class="img-size my-piece-wrapper" data-width="750" data-height="2300">
      <div class="back-btn img-size" data-width="66" data-height="88" @click="onBack"></div>
      <div class="my-rank-tab img-size" data-top="107" data-left="375" data-width="355" data-height="83" @click="tab = 1;"></div>
      <div class="img-size my-com-num" data-top="330" data-left="420">{{myCom}}</div>
      <div class="img-size convert-btn" data-top="327" data-left="519" data-width="163" data-height="60" @click="onConvert"></div>
      <div class="img-size prize-area" data-top="551" data-left="78">
        <div v-for="item in pieceInfo" class="prize-box img-size">
          <div class="img-size process" data-top="112">
            <div class="num left img-size" data-fontSize="14">0</div>
            <div class="img-size bar-full" data-height="6.6">
              <div class="current" :style="{width: item[1] / item[2] * 100 + '%'}"></div>
            </div>
            <div class="num right img-size" data-fontSize="14">{{item[2]}}</div>
          </div>
          <div class="img-size detail" data-fontSize="20" data-top="125" data-lineHeight="36">碎片进度：<span>{{item[1]}}</span> / {{item[2]}}<br>已获得奖品数量：<span>{{item[0]}}</span></div>
        </div>
      </div>
    </div>
    <div v-show="tab == 1" class="img-size my-rank-wrapper" data-width="750" data-height="1513">
      <div class="back-btn img-size" data-width="66" data-height="88" @click="onBack"></div>
      <div class="img-size my-piece-tab" data-left="20" data-top="107" data-width="355" data-height="83" @click="tab = 0;"></div>
      <div class="img-size my-rank" data-top="405" data-left="66" data-fontSize="26" data-lineHeight="40">碎片总数：<span>{{myPiece}}</span><br>当前排名：<span>{{myRank == 0 ? '无' : myRank}}</span><br>预计排名奖品：<span>{{myPrize == '' ? '无' : myPrize}}</span></div>
      <div v-show="rankList.length == 0" class="img-size no-rank-data" data-top="1014" data-left="279" data-fontSize="48">暂无数据</div>
      <!--<div v-show="rankList.length > 0" class="img-size rank-list journal" data-top="667" data-lineHeight="58" data-fontSize="24">-->
      <div v-show="rankList.length > 0" class="img-size rank-list" data-top="667" data-lineHeight="58" data-fontSize="24">
        <div v-for="item in rankList" class="rank-item img-size" data-marginLeft="42" data-marginRight="42" data-height="59">
          <div class="img-size" data-width="85">{{item.rowNo}}</div>
          <div class="img-size" data-width="169">{{item.mobilePhone}}</div>
          <div class="img-size" data-width="159">{{item.description}}</div>
          <div class="img-size" data-width="247">{{item.gift}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpMyPiece, httpConvert, httpRank} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                tab: 0,
                myCom: 0,
                pieceInfo: [],
                myPiece: 0,
                myRank: 0,
                myPrize: '',
                rankList: [],
                isConverting: false
            };
        },
        computed: {
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.getMyPiece();
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
            getMyPiece: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpMyPiece + '?uid=' + T.uid, params, _data => {
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
                    if (_data.map.data) {
                        this.myCom = _data.map.data.wnDebris;
                        var info = _data.map.data;
                        this.pieceInfo = [
                            [info.iphone7Num, info.iphone7Debris, info.iphone7GoalDebris],
                            [info.ipadNum, info.ipadDebris, info.ipadGoalDebris],
                            [info.foreoNum, info.foreoDebris, info.foreoGoalDebris],
                            [info.diAoNum, info.diAoDebris, info.diAoGoalDebris],
                            [info.mfNum, info.mfDebris, info.mfGoalDebris],
                            [info.xgNum, info.xgDebris, info.xgGoalDebris],
                            [info.jdk100Num, info.jdk100Debris, info.jdk100GoalDebris],
                            [info.jdk30Num, info.jdk30Debris, info.jdk30GoalDebris],
                            [info.jdk10Num, info.jdk10Debris, info.jdk10GoalDebris],
                            [info.jf30Num, info.jf30Debris, info.jf30GoalDebris],
                            [info.jf10Num, info.jf10Debris, info.jf10GoalDebris]
                        ];
                        setTimeout(() => {T.setImgSize();}, 20);
                        this.getRank();
                    }
                });
            },
            getRank: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpRank + '?uid=' + T.uid, params, _data => {
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
                    if (_data.map) {
                        this.myPiece = _data.map.myDebris;
                        this.myRank = _data.map.myRank;
                        this.myPrize = _data.map.myGift;
                        this.rankList = _data.map.rankList;
                        setTimeout(() => {T.setImgSize();}, 20);
                    }
                });
            },
            onConvert : function () {
                if (this.isConverting) return;
                this.isConverting = true;
                setTimeout(() => {this.isConverting = false;}, 2500);
                requirePop('convert', {
                    props : {
                        transition : 'bounceIn',
                        myCom : this.myCom,
                        parent: this
                    }
                });
            },
            submitConvert : function (type) {
                if (!T.isLogin) return false;
                let params = {uid: T.uid, debrisType: type};
                this.__requestService(httpConvert + '?uid=' + T.uid + '&debrisType=' + type, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == '5002') {
                            requirePop('result', {
                                props : {
                                    transition : 'bounceIn',
                                    detail : _data.errorMsg,
                                    closeForward : 1
                                }
                            });
                        } else if (_data.errorMsg) {
                            requirePop('result', {
                                props : {
                                    transition : 'bounceIn',
                                    detail: _data.errorMsg
                                }
                            });
                        }
                        return false;
                    }
                    if (_data.success) {
                        requirePop('result', {
                            props : {
                                transition : 'bounceIn',
                                detail: '恭喜！转换成功',
                                closeForward : 2
                            }
                        });
                        this.getMyPiece();
                    }
                });
            },
            onBack : function () {
                var targetUrl = window.location.pathname + "#/" + (T.getQueryString("from") == "home" ? "" : "shake/") + "?";
                if (T.wap) {
                    targetUrl += "wap=true&uid=" + T.uid;
                } else {
                    targetUrl += "uid=" + T.uid;
                }
                window.location.replace(targetUrl);
            }
        }
    }
</script>