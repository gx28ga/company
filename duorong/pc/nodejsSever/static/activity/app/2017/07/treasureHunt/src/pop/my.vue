<style lang='sass'>
    @import '../css/global.scss';
    /*$sjianwidth : $s17;*/
    .modal-mask.my{
        .modal-container.pop-cnt{
            max-width:none;
            position: relative;
            .my-tab{
                position: absolute;
                top: 10.93279839518556%;
                width: 33.77386196769457%;
                height: 05.41624874623872%;
            }
            .my-box-tab{
                @extend .my-tab;
                left: 8.95741556534508%;
            }
            .my-prize-tab{
                @extend .my-tab;
                left: 53.15712187958884%;
            }
        }
        .modal-container.pop-cnt.first-bg{
            @include contain('../images/my-box.png');
            .box-num{
                position: absolute;
                left: 38.32599118942731%;
                color: #633F2B;
                font-size: 1.5rem;
                line-height: 2.2rem;
            }
            .open-btn{
                position: absolute;
                left: 60.20558002936858%;
                height: 9.02708124373119%;
                width: 26.43171806167401%;
            }
            .black-num{
                @extend .box-num;
                top: 26.47943831494483%;
            }
            .open-black{
                @extend .open-btn;
                top: 26.47943831494483%;
            }
            .silver-num{
                @extend .box-num;
                top: 26.47943831494483% + 24.57372116349047%;
            }
            .open-silver{
                @extend .open-btn;
                top: 26.47943831494483% + 24.57372116349047%;
            }
            .gold-num{
                @extend .box-num;
                top: 26.47943831494483% + 24.57372116349047% + 22.86860581745236%;
            }
            .open-gold{
                @extend .open-btn;
                top: 26.47943831494483% + 24.57372116349047% + 22.86860581745236%;
            }
        }
        .modal-container.pop-cnt.second-bg{
            @include contain('../images/my-prize.png');
            .prize-list-wrapper{
                position: absolute;
                left: 7.34214390602056%;
                top: 32.79839518555667%;
                width: 84.28781204111601%;
                height: 60.78234704112337%;
                overflow-y: scroll;
                .prize-row{
                    width: 100%;
                    color: #633F2B;
                    font-size: .7rem;
                    line-height : 1.8rem;
                    .prize-name{
                        display: inline-block;
                        width: 58%;
                        font-weight: bolder;
                    }
                    .get-time{
                        display: inline-block;
                    }
                }
            }
            .point-mall-link{
                position: absolute;
                top: 27.18244734202608%;
                left: 71%;
                width: 15.56534508076358%;
                height: 3.00902708124373%;
            }
        }
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask my" @click='closePop'>
        <div class="modal-wrapper">
            <!--我的宝箱tab-->
            <div v-show="tab == 0" class="modal-container pop-cnt first-bg img-size" data-paddingTop='126' data-paddingLeft='50' data-width='681' data-height='997' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="my-box-tab" @click="tab = 0;"></div>
                <div class="my-prize-tab" @click="tab = 1;"></div>
                <div class="black-num">× {{blackNum}}</div>
                <div class="open-black" @click="blackNum <= 0 || onGoBox(0)"></div>
                <div class="silver-num">× {{silverNum}}</div>
                <div class="open-silver" @click="silverNum <= 0 || onGoBox(1)"></div>
                <div class="gold-num">× {{goldNum}}</div>
                <div class="open-gold" @click="goldNum <= 0 || onGoBox(2)"></div>
            </div>
            <!--我的奖品tab-->
            <div v-show="tab == 1" class="modal-container pop-cnt second-bg img-size" data-paddingTop='126' data-paddingLeft='50' data-width='681' data-height='997' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="my-box-tab" @click="tab = 0;"></div>
                <div class="my-prize-tab" @click="tab = 1;"></div>
                <div class="point-mall-link" @click="onGoPointMall"></div>
                <div class="prize-list-wrapper">
                    <div v-for="item in prizeList" class="prize-row">
                        <div class="prize-name">{{item.giftName}}</div>
                        <div class="get-time">{{item.addTime | convertTimestampToDatetime}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import {httpPrizeList} from '../common/URL';
    import requirePop from './requirePop.js';
    export default {
        props : {
            transition : String,
            blackNum : Number,
            silverNum : Number,
            goldNum : Number
        },
        data(){
            return{
                showModal : true,
                tab : 0,
                prizeList : [],
                isOnGoingBox : false
            }
        },
        mounted(){
            T.setImgSize();
            this.getPrizeList();
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy.M.dd hh:mm:ss');
            }
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onGoBox : function (level) {
                if (this.isOnGoingBox) return false;
                this.isOnGoingBox = true;
                setTimeout(() => {this.isOnGoingBox = false;}, 1200);
                this.closePop();
                router.push({path : '/box/' + level, query: { wap: 'true', uid: T.uid }});
            },
            onGoPointMall : function () {
                T.callApp.pointMall();
            },
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.success && !_data.hasOwnProperty('errorMsg')) {
                            let Pop = require('./index.js');
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
            getPrizeList : function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpPrizeList + '?uid=' + T.uid, params, _data => {
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
                    this.prizeList = _data.map.lotteryList;
                });
            }
        }
    }
</script>