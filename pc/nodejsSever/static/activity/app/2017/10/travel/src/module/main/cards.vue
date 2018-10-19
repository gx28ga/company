<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .cards-outer {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/my-cards.jpg');
      .back-btn, .rank-btn, .common-card, .btn-convert, .convert-disabled, .btn-xchg{
        position: absolute;
      }
      .back-btn{
        color: #FFF;
        font-size: 2rem;
      }
      .rank-btn{
        @include contain("../../images/btn-rank-link.gif");
      }
      .common-card{
        color: #D83D6E;
        text-align: center;
        font-weight: bolder;
      }
      .btn-convert{
        @include contain("../../images/convert-btn.png");
      }
      .convert-disabled{
        @include contain("../../images/convert-disabled.png");
      }
      .cards-area{
        position: relative;
        margin: 0 auto;
        .city{
          color: #181E45;
          display: inline-block;
          text-align: center;
          vertical-align: middle;
        }
        .city:nth-of-type(6), .city:nth-of-type(12){
          margin-right: 0!important;
        }
        .city.on{
          background-color: #4EC6C7;
        }
        .city.off{
          background-color: #BBB;
        }
      }
    }
  }
</style>
<template>
  <div class="cards-outer flip-left-bounce">
    <div class="img-size content-wrapper" data-width="750" data-height="2627">
      <div class="back-btn img-size" data-top="-10" data-left="20" @click="onBack">&laquo;</div>
      <div class="rank-btn img-size" data-top="29" data-left="450" data-width="280" data-height="60" @click="onGoRank"></div>
      <div class="common-card img-size" data-top="154" data-left="172" data-width="100" data-fontSize="36" data-lineHeight="36">&times; {{common}}</div>
      <div v-show="common > 0" class="btn-convert img-size" data-top="140" data-left="272" data-width="141" data-height="65" @click="onConvert"></div>
      <div v-show="common <= 0" class="convert-disabled img-size" data-top="140" data-left="272" data-width="138" data-height="65"></div>
      <div class="cards-area img-size" data-top="675" data-width="560">
        <div v-for="(city, i) in ['北京','上海','广州','南京','青岛','拉萨','香港','长白山','成都','桂林','西安','三亚']"
             class="city img-size" :class="{true:'on', false:'off'}[cards[i]>0]" data-marginRight="25" data-marginBottom="20"
             data-paddingTop="8" data-width="72" data-height="64" data-fontSize="22" data-lineHeight="30" data-borderRadius="36">{{city}}<br>&times{{cards[i]}}</div>
      </div>
      <div class="btn-xchg img-size" data-top="1390" data-left="435" data-width="135" data-height="65" @click="onXchg(1)"></div>
      <div class="btn-xchg img-size" data-top="1745" data-left="435" data-width="135" data-height="65" @click="onXchg(2)"></div>
      <div class="btn-xchg img-size" data-top="2100" data-left="435" data-width="135" data-height="65" @click="onXchg(3)"></div>
      <div class="btn-xchg img-size" data-top="2455" data-left="435" data-width="135" data-height="65" @click="onXchg(4)"></div>
    </div>
  </div>
</template>
<script>
    import {httpChance, httpCard, httpConvert, httpXchg} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                common : 0,
                beijing : 0,
                shanghai : 0,
                guangzhou : 0,
                nanjing : 0,
                qingdao : 0,
                lasa : 0,
                hongkong : 0,
                changbaishan : 0,
                chengdu : 0,
                guilin : 0,
                xiAn : 0,
                sanya : 0,
                isOnBusy : false
            };
        },
        computed: {
            cards : function () {
                var cardArr = [];
                cardArr.push(this.beijing);
                cardArr.push(this.shanghai);
                cardArr.push(this.guangzhou);
                cardArr.push(this.nanjing);
                cardArr.push(this.qingdao);
                cardArr.push(this.lasa);
                cardArr.push(this.hongkong);
                cardArr.push(this.changbaishan);
                cardArr.push(this.chengdu);
                cardArr.push(this.guilin);
                cardArr.push(this.xiAn);
                cardArr.push(this.sanya);
                return cardArr;
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
                this.getCommonCard();
                this.getCityCard();
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
            getCommonCard: function () {
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
                    this.common = _data.map.specialNum;
                });
            },
            getCityCard: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpCard + '?uid=' + T.uid, params, _data => {
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
                        let cards = _data.map.data;
                        this.beijing = cards.beiJing;
                        this.shanghai = cards.shangHai;
                        this.guangzhou = cards.guangZhou;
                        this.nanjing = cards.nanJing;
                        this.qingdao = cards.qingDao;
                        this.lasa = cards.laSa;
                        this.hongkong = cards.hongKong;
                        this.changbaishan = cards.changBaiShan;
                        this.chengdu = cards.chengDu;
                        this.guilin = cards.guiLin;
                        this.xiAn = cards.xiAn;
                        this.sanya = cards.sanYa;
                        /*cards.forEach((card, i) => {
                            switch (card.type) {
                                case 0 : this.common = card.amount; break;
                                case 1 : this.beijing = card.amount; break;
                                case 2 : this.shanghai = card.amount; break;
                                case 3 : this.guangzhou = card.amount; break;
                                case 4 : this.nanjing = card.amount; break;
                                case 5 : this.qingdao = card.amount; break;
                                case 6 : this.lasa = card.amount; break;
                                case 7 : this.hongkong = card.amount; break;
                                case 8 : this.changbaishan = card.amount; break;
                                case 9 : this.chengdu = card.amount; break;
                                case 10 : this.guilin = card.amount; break;
                                case 11 : this.xiAn = card.amount; break;
                                case 12 : this.sanya = card.amount; break;
                            }
                        });*/
                    }
                });
            },
            onConvert : function () {
                if (this.isOnBusy) return;
                this.isOnBusy = true;
                requirePop("convert", {
                    props: {
                        transition : "mask"
                    }
                });
                bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                bus.$once("convert-confirm", this.onConvertConfirm);
            },
            onConvertConfirm : function (cityType) {
                let params = {uid: T.uid, debrisType: cityType};
                this.__requestService(httpConvert + "?uid=" + T.uid + "&debrisType=" + cityType, params, _data => {
                    if (!_data.success && _data.hasOwnProperty("errorMsg")) {
                        requirePop("warning", {
                            props : {
                                transition : 'bounceIn',
                                title : "系统提示",
                                detail : _data.errorMsg,
                                btnBackHome : false
                            }
                        });
                        return false;
                    }
                    if (_data.success) {
                        requirePop('otherResult', {
                            props : {
                                transition : 'rotate3d',
                                popState : 4
                            }
                        });
                        this.getCommonCard();
                        this.getCityCard();
                        bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                    }
                });
            },
            onXchg : function (cardType) {
                if (this.isOnBusy) return;
                this.isOnBusy = true;
                let isLack = false;
                switch (cardType) {
                    case 1 :
                        if (this.sanya < 10 || this.xiAn < 10 || this.hongkong < 10) {
                            isLack = true;
                        }
                        break;
                    case 2 :
                        if (this.beijing < 1 || this.sanya < 1 || this.lasa < 1) {
                            isLack = true;
                        }
                        break;
                    case 3 :
                        if (this.beijing < 1 || this.guilin < 1 || this.guangzhou < 1) {
                            isLack = true;
                        }
                        break;
                    case 4 :
                        for (var i = 0; i < this.cards.length; i++) {
                            if (this.cards[i] < 1) {
                                isLack = true;
                                break;
                            }
                        }
                        break;
                }
                if (isLack) {
                    requirePop("otherResult", {
                        props : {
                            transition : "bounceIn",
                            popState : 6
                        }
                    });
                    bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                } else {
                    requirePop("exchange", {
                        props : {
                            transition : "fadeIn",
                            xchgType : cardType
                        }
                    });
                    bus.$once("pop-display-ok", () => {this.isOnBusy = false;});
                    bus.$once("xchg-confirmed", xchgType => {this.getXchgResult(xchgType);});
                }
            },
            getXchgResult : function (xchgType) {
                let params = {uid: T.uid, exchange: xchgType};
                this.__requestService(httpXchg + "?uid=" + T.uid + "&exchange=" + xchgType, params, _data => {
                    if (!_data.success) {
                        if (_data.errorCode == 8001) {
                            requirePop("otherResult", {
                                props : {
                                    transition : "bounceIn",
                                    popState : 6
                                }
                            });
                        } else {
                            requirePop("warning", {
                                props : {
                                    transition : "bounceIn",
                                    title : "系统提示",
                                    detail : _data.errorMsg ? _data.errorMsg : "操作失败，请联系客服。",
                                    btnBackHome : false
                                }
                            });
                        }
                        return false;
                    } else {
                        requirePop("otherResult", {
                            props : {
                                transition : "rotate3d",
                                popState : 5
                            }
                        });
                        this.getCommonCard();
                        this.getCityCard();
                    }
                });
            },
            onGoRank : function () {
                let sub = T.getQueryString("from");
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/rank" + "/?wap=true&uid=" + T.uid + "&backFrom=" + sub);
                } else {
                    window.location.replace(window.location.pathname + "#/rank" + "/?uid=" + T.uid + "&backFrom=" + sub);
                }
                window.location.reload();
            },
            onBack : function () {
                let sub = T.getQueryString("from");
                if (!sub) return;
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/" + sub +"/?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + "#/" + sub +"/?uid=" + T.uid);
                }
            }
        }
    }
</script>