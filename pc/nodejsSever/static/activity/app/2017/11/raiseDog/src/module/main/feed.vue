<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/feed-bg.jpg');
      .back-btn,
      .dog-weight,
      .dog-1,
      .dog-2,
      .dog-3,
      .gif,
      .left-food,
      .empty-plate,
      .full-plate,
      .feed-btn,
      .growth-prize-wrapper,
      .rank-list-wrapper,
      .tab-left,
      .tab-right,
      .prize-comment,
      .table-wrapper,
      .dog-head,
      .my-status,
      .rank-comment
      {
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .dog-1{
        @include contain("../../images/dog-1.png");
      }
      .dog-2{
        @include contain("../../images/dog-2.png");
      }
      .dog-weight{
        color: #110A04;
        text-align: center;
      }
      .empty-plate{
        @include contain("../../images/plate-empty.png");
      }
      .full-plate{
        @include contain("../../images/plate-full.png");
      }
      .left-food{
        color: #110A04;
        span{
          color: #FFF600;
        }
      }
      .feed-btn{
        @include contain("../../images/feed-btn.png");
      }
      .gif-img{
        @include contain("../../images/eating.gif");
      }
      .gif-s{
        @include contain("../../images/eating-s.gif");
      }
      .table-wrapper{
        text-align: center;
        color: #110A04;
        div{
          display: inline-block;
          vertical-align: top;
        }
        .td{
          background: #FFF0A6;
          text-align: center;
          position: relative;
          .dog-head{
            @include contain("../../images/dog-head.png");
          }
        }
        .high-light{
          color: #E32635;
        }
      }
      .growth-prize-wrapper{
        @include contain("../../images/bg-growth-prize.png");
        .prize-comment{
          color: #110A04;
          text-align: center;
        }
      }
      .rank-list-wrapper{
        @include contain("../../images/bg-rank-list.png");
        .my-status{
          color: #110A04;
          span{
            color: #E32635;
          }
        }
        .rank-comment{
          color: #110A04;
          text-align: center;
        }
        .no-data{
          background: #FFF0A6;
        }
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="1951">
      <div class="back-btn img-size" data-top="-10" data-left="20" @click="onBack">&laquo;</div>
      <div class="dog-weight img-size" data-top="48" data-left="590" data-width="130" data-fontSize="30" data-lineHeight="30">{{animatedWeight}}g</div>
      <div v-show="isOnBusy == false && dogWeight <= 388" class="dog-1 img-size jump-bounce" data-top="234" data-left="215" data-width="280" data-height="350"></div>
      <div v-show="isOnBusy == false && dogWeight > 388" class="dog-2 img-size jump-bounce" data-top="140" data-left="233" data-width="326" data-height="430"></div>
      <div v-show="isOnBusy == true" class="gif img-size flip-right" data-top="180" data-width="750" data-height="429"></div>
      <div v-show="isOnBusy == false && leftFood > 0" class="full-plate img-size" data-top="605" data-left="260" data-width="60" data-height="53"></div>
      <div v-show="isOnBusy == false && leftFood <= 0" class="empty-plate img-size" data-top="605" data-left="260" data-width="60" data-height="43"></div>
      <div v-show="isOnBusy == false" class="left-food img-size" data-top="620" data-left="330" data-fontSize="24" data-lineHeight="24">您有 {{leftFood}}g 狗粮</span></div>
      <div v-show="isOnBusy == false" class="feed-btn img-size" data-top="675" data-left="255" data-width="240" data-height="75" @click="onFeed"></div>
      <div v-show="tab == 0" class="growth-prize-wrapper img-size" data-top="920" data-left="48" data-width="670" data-height="743">
        <div class="tab-right img-size" data-top="10" data-left="357" data-width="225" data-height="60" @click="tab = 1"></div>
        <div class="prize-comment img-size" data-left="0" data-width="670" data-top="118" data-fontSize="30" data-lineHeight="30">当“二哈”成长到一定程度，可获得奖品：</div>
        <div class="table-wrapper img-size" data-top="187" data-width="670">
          <div v-for="(item, index) in growthPrizeData" class="img-size" data-marginBottom="5"><!--
         --><div class="td img-size" data-width="128" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">{{item.wgt}}</div><!--
         --><div class="td img-size" data-width="260" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">{{item.prize}}</div><!--
         --><div class="td img-size" data-width="122" data-height="55" data-fontSize="24" data-lineHeight="55">{{item.dog}}<div v-show="index == currentPos" class="dog-head img-size" data-top="-8" data-left="33" data-width="57" data-height="65"></div></div><!--
       --></div>
        </div>
      </div>
      <div v-show="tab == 1" class="rank-list-wrapper img-size" data-top="920" data-left="48" data-width="670" data-height="976">
        <div class="tab-right img-size" data-top="10" data-left="66" data-width="225" data-height="60" @click="tab = 0"></div>
        <div class="my-status img-size" data-top="109" data-left="65" data-fontSize="30" data-lineHeight="45">我家二哈排名：<span>{{myRank <= 0 ? '暂无' : myRank}}</span><br>预计可获得奖品：<span>{{myGift == '' ? '暂无' : myGift}}</span></div>
        <div class="rank-comment img-size" data-top="257" data-left="0" data-width="670" data-fontSize="18" data-lineHeight="18">谁家“二哈”养得最壮实？按二哈重量排名，前10名可获得奖品：</div>
        <div class="table-wrapper img-size" data-top="306" data-width="670">
          <template v-if="rankList.length > 0">
            <div class="img-size" data-marginBottom="5"><!--
         --><div class="td img-size" data-width="97" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">排名</div><!--
         --><div class="td img-size" data-width="155" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">手机号</div><!--
         --><div class="td img-size" data-width="112" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">体重</div><!--
         --><div class="td img-size" data-width="228" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">奖品名称</div><!--
       --></div><!--
       --><div v-for="(item, index) in rankList" class="img-size" :class="myRank == index + 1 ? 'high-light' : ''" data-marginBottom="5"><!--
         --><div class="td img-size" data-width="97" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">{{index + 1}}</div><!--
         --><div class="td img-size" data-width="155" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">{{item.mobilePhone}}</div><!--
         --><div class="td img-size" data-width="112" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">{{item.description}}</div><!--
         --><div class="td img-size" data-width="228" data-height="55" data-marginRight="5" data-fontSize="24" data-lineHeight="55">{{item.gift}}</div><!--
       --></div>
          </template>
          <template v-if="rankList.length <= 0">
            <div class="no-data img-size" data-marginTop="100" data-width="500" data-height="350" data-fontSize="36" data-lineHeight="350">暂无数据</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {httpFood, httpRank, httpFeed} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    import TWEEN from '../../plug/tween.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                dogWeight: 100,
                animatedWeight: 0,
                leftFood : 0,
                tab : 0,
                growthPrizeData: [
                    {wgt: '克数/g', prize: '奖品', dog: '我家二哈'},
                    {wgt: 188, prize: '10元JD卡', dog: ''},
                    {wgt: 388, prize: '星享卡', dog: ''},
                    {wgt: 598, prize: '膳魔师保温杯', dog: ''},
                    {wgt: 858, prize: '祖马龙30ml香水', dog: ''},
                    {wgt: 1588, prize: 'Foreo洁面仪', dog: ''},
                    {wgt: 2888, prize: '雅萌美容仪', dog: ''},
                    {wgt: 5288, prize: 'Iphone8 64g', dog: ''}
                ],
                myRank: 0,
                myGift: '',
                rankList: [],
                isOnBusy : false
            };
        },
        computed: {
            currentPos : function () {
                let pos = -1;
                let curWgt = this.dogWeight;
                let arr = this.growthPrizeData;
                for(let i = 1; i < arr.length; i++) {
                    if (curWgt >= arr[i].wgt) { pos = i; continue;}
                    if (curWgt < arr[i].wgt) break;
                }
                return pos;
            }
        },
        watch: {
            dogWeight: function(newValue, oldValue) {
                if (!this.isOnBusy) return;
                this.isOnBusy = false;
                var vm = this;
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate);
                    }
                }
                new TWEEN.Tween({ tweeningNumber: oldValue })
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .to({ tweeningNumber: newValue }, 1200)
                    .onUpdate(function () {
                        vm.animatedWeight = this.tweeningNumber.toFixed(0)
                    })
                    .start();
                animate();
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
                this.animatedWeight = this.dogWeight;
                this.getDogFood();
                this.getRankData();
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
            getDogFood: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpFood + '?uid=' + T.uid, params, _data => {
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
                    this.leftFood = _data.map.dogFood;
                    this.animatedWeight = this.dogWeight = _data.map.dogWeight;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            getRankData: function () {
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
                    this.myRank = Number(_data.map.myRank) ? _data.map.myRank : 0;
                    this.myGift = _data.map.myGift.indexOf('无') == 0 ? '暂无' : _data.map.myGift;
                    this.rankList = _data.map.rankList;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            getFeedResult: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpFeed + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false) {
                        if (_data.errorCode == 10002){
                            this.leftFood = 0;
                            requirePop('playResult', {
                                props : {
                                    transition : 'bounceIn',
                                    popState : 0
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
                    this.dogWeight += this.leftFood;
                    this.leftFood = 0;
                    this.getRankData();
                });
            },
            onFeed : function (target) {
                if (!T.isLogin || this.isOnBusy) return false;
                if (this.leftFood == 0) {
                    requirePop('playResult', {
                        props : {
                            transition : 'bounceIn',
                            popState : 0
                        }
                    });
                    return false;
                }
                this.isOnBusy = true;
                let gif = document.getElementsByClassName("gif")[0];
                if (this.dogWeight <= 2988) {
                    gif.style.backgroundImage = "url(" + "src/images/eating-s.gif?" + Math.random() * 100000 + ")";
                } else {
                    gif.style.backgroundImage = "url(" + "src/images/eating.gif?" + Math.random() * 100000 + ")";
                }
                gif.style.backgroundRepeat = "no-repeat";
                gif.style.backgroundPosition = "center";
                gif.style.backgroundSize = "contain";

                setTimeout(() => {
                    this.getFeedResult();
                }, 2250);
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