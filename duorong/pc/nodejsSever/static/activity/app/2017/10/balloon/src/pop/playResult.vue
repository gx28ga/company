<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.play-result{
        .modal-container.gift-one{
            position: relative;
            @include contain("../images/gift-one-pop.png");
            .icon-gift{
                width: 100%;
            }
            .icon-gift.jd-5{
                @include contain('../images/gift/jd-5.png');
                background-position: center;
            }
            .icon-gift.jd-30{
                @include contain('../images/gift/jd-30.png');
                background-position: center;
            }
            .icon-gift.jd-50{
                @include contain('../images/gift/jd-50.png');
                background-position: center;
            }
            .icon-gift.jd-100{
                @include contain('../images/gift/jd-100.png');
                background-position: center;
            }
            .icon-gift.jd-300{
                @include contain('../images/gift/jd-300.png');
                background-position: center;
            }
            .icon-gift.pnt-10{
                @include contain('../images/gift/pnt-10.png');
                background-position: center;
            }
            .icon-gift.flag{
                @include contain('../images/gift/flag.png');
                background-position: center;
            }
            .icon-gift.moon{
                @include contain('../images/gift/moon.png');
                background-position: center;
            }
        }
        .modal-container.gift-ten{
            position: relative;
            @include contain("../images/gift-ten-pop.png");
            .sole-btn{
                margin: 0 auto;
            }
        }
        .modal-container.not-enough{
            position: relative;
            @include contain("../images/not-enough.png");
            .msg
            .invest-btn{
                margin: 0 auto;
            }
        }
        .desc-box{
            text-align: center;
            div{
                display: inline-block;
                vertical-align: middle;
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
        .comment{
            @extend .desc-box;
            color: #FF72FD;
        }
        .exception{
            @extend .desc-box;
            margin: 0 auto;
            color: #FFF;
        }
        .close{
            color: #333;
            text-align: center;
        }
    }
</style>
<template>
<transition name="rotate3d">
    <div v-show='showModal' class="modal-mask play-result">
        <div class="modal-wrapper">
            <div v-show="popState == 0" class="modal-container gift-one img-size" data-width='500' data-height='541' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="icon-gift img-size" :class="{1:'flag', 2:'moon', 3:'jd-5', 4:'jd-30', 5:'jd-50', 6:'jd-100', 7:'jd-300', 8:'pnt-10'}[giftType]" data-marginTop="221" data-height="148"></div>
                <div class="comment img-size" data-marginTop="34" data-width="460" data-height="138" data-paddingLeft="20" data-paddingRight="20">
                    <div class="img-size" data-fontSize="24" data-lineHeight="30">{{comment}}</div>
                </div>
            </div>
            <div v-show="popState == 1" class="modal-container gift-ten img-size" data-width='500' data-height='541' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="sole-btn img-size" data-marginTop="433" data-width="315" data-height="78" @click="onMainBtn"></div>
            </div>
            <div v-show="popState == 2 || popState == 3" class="modal-container not-enough img-size" data-width='500' data-height='480' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="exception img-size" data-marginTop="184" data-width="364" data-height="134" data-fontSize="24" data-lineHeight="36"><div>{{msg}}</div></div>
                <div class="invest-btn img-size" data-marginTop="43" data-width="314" data-height="75" @click="onMainBtn"></div>
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
            giftType: Number,
            parent : Object,
            error: String
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            comment : function () {
                if (this.popState == 0) {
                    switch (this.giftType) {
                        case 3 :
                        case 4 :
                        case 5 :
                        case 6 :
                        case 7 : return '实物奖品将于活动结束后15个工作日内发放';
                        case 8 : return '积分已发放到您的账户可用来前往【积分商城】兑换各种奖品';
                        case 1 : return '国旗获得的越多，可兑换的奖品越多哦';
                        case 2 : return '月亮收集的数量最多的前10名可获得卡西欧自拍相机等超值大奖';
                    }
                }
            },
            msg : function () {
                if (this.popState == 2) {
                    return '您的机会用完了，请投资获取';
                } else if (this.popState == 3) {
                    return '您的剩余机会已不足10次，请投资获取';
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
                    if (this.popState == 1) {
                        window.location.replace(window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=play");
                    } else if (this.popState == 2 || this.popState == 3) {
                        T.callApp.investment();
                    }
                });
            }
        }
    }
</script>