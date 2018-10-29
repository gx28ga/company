<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.bet{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            .mid-align{
                text-align: center;
            }
            .section{
                width: 100%;
                div{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .title{
                color: #333;
                text-align: center;
                .deco-line{
                    border-top: 1px solid #333;
                }
            }
            .sum{
                width: 100%;
                color: #0944a5;
            }
            .detail{
                overflow-y: scroll;
            }
            .coupon-area{
                margin: 0 auto;
                border-bottom: 1px solid #014099;
                text-align: left;
                .block{
                    display: inline-block;
                    vertical-align: top;
                    color: #333;
                    .coupon-active{
                        @include contain("../images/gift-frame.png");
                        color: #bf0008;
                    }
                    .coupon-inactive{
                        @include contain("../images/gift-frame-blur.png");
                        color: #999;
                    }
                    p{
                        width: 100%;
                    }
                }
            }
            .bet-list{
                margin: 0 auto;
                color: #0944a5;
                .bet-item > div{
                    display: inline-block;
                    vertical-align: top;
                }
                .para p span{
                    color: #999;
                }
            }
        }
        .close{
            color: #222;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask bet">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='520' data-height="1000" data-paddingBottom="20"  data-borderRadius="16" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='20' data-height='20' data-top='0' data-right='18' data-fontSize="40" data-lineHeight="40" @click='onClose'>&times;</div>
                </slot>
                <div class="img-size section title" data-marginTop="15" data-height="24">
                    <div class="img-size deco-line" data-width="50" data-height="0"></div><!--
                 --><div class="img-size" data-marginLeft="15" data-marginRight="15" data-fontSize="24" data-lineHeight="24">我的竞猜</div><!--
                 --><div class="img-size deco-line" data-width="50" data-height="0"></div>
                </div>
                <div class="img-size sum mid-align" data-marginTop="42" data-marginBottom="25" data-fontSize="24" data-lineHeight="24">共参与{{engagedGame}}场，猜对{{myWinnedGame}}场，赢得{{winnedSumPoint}}积分</div>
                <div class="img-size detail">
                    <div class="img-size coupon-area" data-width="490" data-marginTop="10" data-paddingBottom="20">
                        <div v-for="(cpn, no) in coupons" class="img-size block" :data-marginLeft="no % 2 === 0 ? 0 : 12" :data-marginRight="no % 2 === 0 ? 12 : 0" data-marginBottom="30">
                            <div class="img-size" :class="cpn.winnedGameAmt <= myWinnedGame ? 'coupon-active' : 'coupon-inactive'" data-width="231" data-height="94" data-marginBottom="20">
                                <div class="img-size mid-align" data-marginLeft="70" data-marginTop="8" data-marginRight="16" data-marginBottom="8" data-paddingTop="20" data-fontSize="24" data-lineHeight="30">{{cpn.value}}加息券<br>&times; {{cpn.amt}}</div>
                            </div>
                            <p class="img-size mid-align" data-fontSize="24" data-lineHeight="24">猜对{{cpn.winnedGameAmt}}场可获得</p>
                        </div>
                    </div>
                    <div class="img-size bet-list" data-paddingTop="20" data-width="490">
                        <div v-for="betItem in myBetList" class="img-size bet-item" data-fontSize="24" data-lineHeight="32">
                            <div class="img-size" data-paddingLeft="15" data-width="90">{{betItem.gameDate}}</div>
                            <div>
                                <div class="img-size para" data-marginBottom="20">
                                    <p>{{betItem.teams[0]}} VS {{betItem.teams[1]}}</p>
                                    <p><span>已投注{{betItem.betPoint}}积分→{{betItem.betTeam}}</span></p>
                                </div>
                                <div class="img-size para" data-marginBottom="50">
                                    <p>竞猜结果：{{betItem.betResult}}</p>
                                    <p v-show="betItem.winnedPoint > 0">赢得{{betItem.winnedPoint}}积分</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cCoupons = [
        {value: '2.0%', amt: 1, winnedGameAmt: 1},
        {value: '2.3%', amt: 1, winnedGameAmt: 3},
        {value: '2.5%', amt: 1, winnedGameAmt: 6},
        {value: '3.0%', amt: 1, winnedGameAmt: 10},
        {value: '3.0%', amt: 2, winnedGameAmt: 20}
    ];
    export default {
        props : {
            transition : String,
            engagedGame : Number,
            myWinnedGame : Number,
            winnedSumPoint : Number,
            myBetList : Object
        },
        data(){
            return{
                showModal : true,
                waitTime: 500,
            }
        },
        computed : {
            coupons(){
                return cCoupons;
            }
        },
        mounted(){
            T.setImgSize();
            setTimeout(() => {this.waitTime = 0;}, this.waitTime);
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
                if (this.waitTime > 0) return;
                this.showModal = false;
                T.getPop(callback);
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            }
        }
    }
</script>