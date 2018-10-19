<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.play-result{
        .modal-container.prize-show{
            position: relative;
            @include contain("../images/result-pop.png");
            text-align: center;
            color: #110A04;
            .food{
                @include contain("../images/prize-food.png");
                background-position: center;
            }
            .point{
                @include contain("../images/prize-point.png");
                background-position: center;
            }
            .scale{
                @include contain("../images/prize-scale.png");
                background-position: center;
            }
            .coupon{
                @include contain("../images/prize-coupon.png");
                background-position: center;
            }
            .ipad{
                @include contain("../images/prize-ipad.png");
                background-position: center;
            }
            .jd-card{
                @include contain("../images/jd-card.png");
                background-position: center;
            }
            .prize-name{
                color: #4A2829;
            }
            .prize-comment{
                color: #110A04;
                text-align: left;
            }
        }
        .modal-container.not-enough{
            position: relative;
            @include contain("../images/result-pop.png");
            .main-btn{
                margin: 0 auto;
                background: #FFD300;
                color: #FFF;
                text-align: center;
            }
        }
        .desc-box{
            text-align: center;
            div{
                display: inline-block;
                vertical-align: top;
            }
        }
        .desc-box::after{
            display: inline-block;
            vertical-align: middle;
            content: '';
            width: 0;
            height: 100%;
            clear: both;
        }
        .exception{
            @extend .desc-box;
            margin: 0 auto;
            color: #110;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask play-result">
        <div class="modal-wrapper">
            <div v-show="popState == 0 || popState == 1 || popState == 3 || popState == 4" class="modal-container not-enough img-size" data-width='420' data-height='400' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="exception img-size" data-marginTop="160" data-width="364" data-height="80" data-fontSize="24" data-lineHeight="32"><div v-for="item in msg">{{item}}</div></div>
                <div class="main-btn img-size" data-marginTop="43" data-width="314" data-height="70" data-borderRadius="16" data-fontSize="32" data-lineHeight="70" @click="onMainBtn">{{popState == 4 ? '我知道了' : '立即投资'}}</div>
            </div>
            <div v-show="popState == 2" class="modal-container prize-show img-size" data-width='420' data-height='400' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="img-size" data-marginTop="116" data-fontSize="24" data-lineHeight="24">恭喜抽中</div>
                <div class="img-size" data-marginTop="30" data-width="420" data-height="155">
                    <div v-show="prizeType >= 1 && prizeType <= 4" class="food img-size" data-marginBottom="16" data-width="420" data-height="58"></div>
                    <div v-show="prizeType == 5 || prizeType == 9 || prizeType == 10" class="point img-size" data-marginBottom="16" data-width="420" data-height="62"></div>
                    <div v-show="prizeType == 6" class="coupon img-size" data-marginBottom="16" data-width="420" data-height="70"></div>
                    <div v-show="prizeType == 7" class="scale img-size" data-marginBottom="16" data-width="420" data-height="56"></div>
                    <div v-show="prizeType == 8" class="ipad img-size" data-marginBottom="16" data-width="420" data-height="66"></div>
                    <div v-show="prizeType == 11 || prizeType == 12" class="jd-card img-size" data-marginBottom="16" data-width="420" data-height="60"></div>
                    <div class="prize-name img-size" data-fontSize="24" data-lineHeight="24">{{{1:'1g狗粮', 2:'3g狗粮', 3:'5g狗粮', 4:'10g狗粮', 5:'10分积分', 6:'2%加息券', 7:'小米体脂秤', 8:'iPad', 9:'30积分', 10:'50积分', 11:'5元JD卡', 12:'10元JD卡'}[prizeType]}}<span v-show="prizeType < 5 && times == true">&times;2</span></div>
                </div>
                <div class="prize-comment img-size" data-marginLeft="27" data-marginRight="27" data-fontSize="18" data-lineHeight="24">{{prizeComment}}</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,  //0: 戳1次成功、1: 戳10次成功、2：机会已用完、3：剩余机会不足10次、9: 发生其他错误
            prizeType: Number,
            times: Boolean,
            parent : Object,
            error: String
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            prizeComment : function () {
                if (this.popState == 2) {
                    switch (this.prizeType) {
                        case 1 :
                        case 2 :
                        case 3 :
                        case 4 : return '11.6～11.19期间，获赠的狗粮奖励翻倍~';
                        case 5 :
                        case 9 :
                        case 10 : return '积分已发放到您的账户，可用来前往【积分商城】兑换各种奖品';
                        case 6 : return '加息券已发放到您的账户，请注意查收并在有效期内使用';
                        case 7 :
                        case 8 :
                        case 11 :
                        case 12 : return '实物奖品将于活动结束后15个工作日内发放';
                    }
                }
            },
            msg : function () {
                if (this.popState == 0) {
                    return ['您的二哈没有狗粮可喂了~', '请立即投资赚狗粮'];
                } else if (this.popState == 1) {
                    return ['您的抽奖机会用完了~', '请立即投资获取'];
                } else if (this.popState == 3) {
                    return ['您的抽奖机会不足10次~', '请立即投资获取'];
                } else if (this.popState == 4) {
                    return ['恭喜抽中10个奖品', '请在中奖记录查看'];
                } else if (this.popState == 9) {
                    return this.error;
                }
            }
        },
        mounted(){
            T.setImgSize();
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
                if (this.parent) {
                    this.parent.isOnBusy = false;
                    this.parent.target = 0;
                }
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onMainBtn : function () {
                this.closePop(() => {
                    if (this.popState == 0 || this.popState == 1 || this.popState == 3) {
                        T.callApp.investment();
                    }
                });
            }
        }
    }
</script>