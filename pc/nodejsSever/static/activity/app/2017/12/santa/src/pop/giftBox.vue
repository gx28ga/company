<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.gift-box{
        .modal-container{
            color: #E02023;
        }
        .modal-container.small-box{
            position: relative;
            @include contain("../images/smallbox-pop.png");
        }
        .modal-container.big-box{
            position: relative;
            @include contain("../images/bigbox-pop.png");
        }
        .modal-container.convert{
            position: relative;
            @include contain("../images/convert-pop.png");
        }
        .modal-container.gift-content{
            position: relative;
            @include contain("../images/gift-pop.png");
        }
        .box-num,
        .tear-one,
        .tear-ten,
        .convert-btn,
        .small-num-before,
        .big-num,
        .small-num-after,
        .cvt-all-btn,
        .gift-name,
        .ok-btn,
        .tear-next {
            position: absolute;
        }
        .big-num, .small-num-before, .small-num-after, .gift-name{
            text-align: center;
        }
        .gift-name{
            width: 100%;
            color: #FF5400;
        }
        .ok-btn, .tear-next{
            display: inline-block;
            width: 50%;
        }
        .tear-next{
            left: 50%;
        }
        .close{
            color: #FFF;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask gift-box">
        <div class="modal-wrapper">
            <div v-if="popType == 0" class="modal-container small-box img-size" data-width='501' data-height='700' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='33' data-right='2' @click='closePop'></div>
                </slot>
                <div class="box-num img-size" data-top="214" data-left="270" data-fontSize="47" data-lineHeight="47">&times; {{boxNum}}</div>
                <div class="tear-one img-size" data-top="345" data-left="50" data-width="410" data-height="116" @click="onTearOne('small')"></div>
                <div class="convert-btn img-size" data-top="480" data-left="50" data-width="410" data-height="116" @click="onConvert"></div>
                <div class="tear-ten img-size" data-top="628" data-left="150" data-width="200" data-height="50" @click="onTearTen('small')"></div>
            </div>
            <div v-if="popType == 1" class="modal-container big-box img-size" data-width='503' data-height='706' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='33' data-right='2' @click='closePop'></div>
                </slot>
                <div class="box-num img-size" data-top="215" data-left="290" data-fontSize="47" data-lineHeight="47">&times; {{boxNum}}</div>
                <div class="tear-one img-size" data-top="370" data-left="45" data-width="418" data-height="120" @click="onTearOne('big')"></div>
                <div class="tear-ten img-size" data-top="510" data-left="45" data-width="418" data-height="120" @click="onTearTen('big')"></div>
            </div>
            <div v-if="popType == 2" class="modal-container convert img-size" data-width='500' data-height='480' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' @click='closePop'></div>
                </slot>
                <div class="small-num-before img-size" data-top="215" data-left="27" data-width="122" data-fontSize="24" data-lineHeight="24">&times; {{boxNum}}</div>
                <div class="big-num img-size" data-top="212" data-left="324" data-width="65" data-fontSize="24" data-lineHeight="24">&times; {{convertedBig}}</div>
                <div class="small-num-after img-size" data-top="205" data-left="389" data-width="95" data-fontSize="24" data-lineHeight="24">&times; {{convertedSmall}}</div>
                <div class="cvt-all-btn img-size" data-top="280" data-left="62" data-width="365" data-height="70" @click="onConfirmConvert"></div>
            </div>
            <div v-if="popType == 3" class="modal-container gift-content img-size" data-width='500' data-height='395' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' @click='closePop'></div>
                </slot>
                <div class="gift-name img-size" data-top="182" data-fontSize="30" data-lineHeight="30">{{giftName}}</div>
                <div class="ok-btn img-size" data-top="315" data-height="80" @click="closePop"></div>
                <div class="tear-next img-size" data-top="315" data-height="80" @click="onTearNext"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popType : Number,       //0：小礼盒操作 1：大礼盒操作 2：转换小礼盒 3：礼品内容
            boxNum : Number,
            giftName : String
        },
        data(){
            return{
                showModal : true,
                times : 50
            }
        },
        computed : {
            convertedBig : function () {
                return Math.floor(this.boxNum / this.times);
            },
            convertedSmall : function () {
                return this.boxNum % this.times;
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
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onTearOne : function (type) {
                this.closePop(() => {
                    bus.$emit("tear-one-request", type);
                });
            },
            onTearTen : function (type) {
                this.closePop(() => {
                    bus.$emit("tear-ten-request", type);
                });
            },
            onTearNext : function () {
                this.closePop(() => {
                    bus.$emit("continue-to-tear");
                });
            },
            onConvert : function () {
                this.closePop(() => {
                    bus.$emit("ask-for-convert");
                });
            },
            onConfirmConvert : function () {
                this.closePop(() => {
                    bus.$emit("confirm-cvt-request", this.boxNum, this.convertedBig, this.convertedSmall);
                });
            }
        }
    }
</script>