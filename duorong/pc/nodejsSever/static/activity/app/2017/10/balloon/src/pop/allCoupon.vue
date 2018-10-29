<style lang='sass'>
    @import '../css/global.scss';
    @import "../css/pop-transition.scss";
    /*@import "../vendor/all-animation.min.css";*/
    .modal-mask.all-coupon{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/coupon-pop.png');
            position: relative;
            .coupon-area{
                overflow-y: scroll;
                .coupon-bg{
                    position: relative;
                    @include contain("../images/coupon-bg.png");
                    .coupon-detail,
                    .progress-bar,
                    .progress-comment,
                    .grab-btn, .grab-disabled,
                    .vipget-disabled, .vipget-btn,
                    .grab-out, .gotten-mark
                    {
                        position: absolute;
                    }
                    .coupon-detail{
                        color: #FFF;
                        .top{
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .top.bold{
                            font-weight: bold;
                        }
                    }
                    .progress-bar{
                        background-color: #9F2dFF;
                        .current{
                            background-color: rgb(241, 218, 180);
                        }
                    }
                    .progress-comment{
                        color: #FFF;
                        .pct{
                            color: #FFF600;
                        }
                    }
                    .grab-btn{
                        @include contain("../images/btn-grab.png");
                    }
                    .btn-disabled{
                        @include contain("../images/btn-disabled.png");
                        color: #6D5E90;
                        text-align: center;
                    }
                    .grab-disabled{
                        /*@include contain("../images/disabled-grab.png");*/
                        @extend .btn-disabled;
                    }
                    .vipget-btn{
                        text-align: center;
                        color: #FFF;
                        @include contain("../images/btn-vipget.png");
                    }
                    .vipget-disabled{
                        /*text-align: center;
                        color: #6A47BD;
                        @include contain("../images/disabled-vipget.png");*/
                        @extend .btn-disabled;
                    }
                    .grab-out{
                        /*@include contain("../images/btn-out.png");*/
                        @extend .btn-disabled;
                    }
                    .gotten-mark{
                        @include contain("../images/btn-gotten.png");
                    }
                }
            }
        }   
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <!--<div v-show='showModal' class="modal-mask all-coupon flip-top" @click='closePop'>-->
    <div v-show='showModal' class="modal-mask all-coupon" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='670' data-height='1128' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="coupon-area img-size" data-marginTop="115" data-marginRight="35" data-marginBottom="35" data-marginLeft="35" data-width="600" data-height="990">
                    <div v-for="(item, i) in couponList" class="coupon-bg img-size" data-marginBottom="10" data-width="600" data-height="235">
                        <template>
                            <!--<div class="coupon-detail img-size" data-top="55" data-left="135">-->
                            <div class="coupon-detail img-size" data-top="60" data-left="135">
                                <div class="top img-size" data-fontSize="60" data-lineHeight="60">{{item.raisedRates}}</div><!--
                             --><div class="top img-size" data-fontSize="24" data-lineHeight="28">{{{2:"加息券", 1:"红包"}[item.type]}}<br>{{{2:"%", 1:"元"}[item.type]}}</div>
                                <!--<div class="img-size" data-fontSize="24" data-lineHeight="36">（全场通用）</div>-->
                            </div>
                            <div class="progress-bar img-size" data-top="195" data-left="20" data-width="178" data-height="14" data-borderRadius="10">
                                <div class="current img-size" data-marginTop="1" data-marginBottom="1" :style="'width:' + item.left * 100 + '%'" data-height="12" data-borderRadius="10"></div>
                            </div>
                            <div class="progress-comment img-size" data-top="193" data-left="205" data-fontSize="20" data-lineHeight="20">{{item.left > 0 ? "还剩 " : "已抢完，快去抢其他的吧~"}}<span v-show="item.left > 0" class="pct">{{item.left * 100 + "%"}}</span><span v-show="item.left > 0">，限量发放</span></div>
                        </template>
                        <div v-show="item.state == 2 || (item.state == 3 && couponBegin == false)" class="grab-disabled img-size" data-top="32" data-left="375" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">立即抢券</div>
                        <div v-show="item.state == 3 && couponBegin" class="grab-btn img-size" data-top="32" data-left="375" data-width="205" data-height="60" @click="onGrab(i)"></div>
                        <div v-show="item.state == 3 || item.state == 4 || ((item.state == 2 || item.state == 5) && couponBegin == false)" class="vipget-disabled img-size" data-top="105" data-left="375" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">VIP{{item.vip}}<span v-show="item.vip < maxVip">&plus;</span>直接领取</div>
                        <div v-show="(item.state == 2 || item.state == 5) && couponBegin" class="vipget-btn img-size" data-top="105" data-left="375" data-width="205" data-heigth="59" data-fontSize="24" data-lineHeight="59" @click="onVipGet(i)">VIP{{item.vip}}<span v-show="item.vip < maxVip">&plus;</span>直接领取</div>
                        <div v-show="item.state == 6 && couponBegin == false" class="grab-disabled img-size" data-top="69" data-left="375" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">立即抢券</div>
                        <div v-show="item.state == 6 && couponBegin" class="grab-btn img-size" data-top="69" data-left="375" data-width="205" data-height="60" @click="onGrab(i)"></div>
                        <div v-show="item.state == 7" class="grab-out img-size" data-top="69" data-left="375" data-width="205" data-height="60" data-fontSize="24" data-lineHeight="60">抢完了</div>
                        <div v-show="item.state == 4 || item.state == 5" class="grab-out img-size" data-top="32" data-left="375" data-width="205" data-height="58" data-fontSize="24" data-lineHeight="58">抢完了</div>
                        <div v-show="item.state == 1" class="gotten-mark img-size" data-top="23" data-left="375" data-width="184" data-height="146"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import requirePop from '../pop/requirePop.js';
    export default {
        props : {
            transition : String,
            parent : Object,
            start : Boolean
        },
        data(){
            return{
                showModal : true,
                couponBegin : false
            }
        },
        computed : {
            couponList : function () {
                return this.parent.couponList;
            },
            maxVip : function () {
                return this.parent.maxVip;
            }
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy.M.d');
            }
        },
        mounted(){
            this.couponBegin = this.start;
            this.couponList = this.couponInit;
            setTimeout(() => {T.setImgSize();}, 20);
            bus.$on('coupon-grab-begin', () => {this.couponBegin = true;});
            bus.$on('pop-submit-failed', errorMsg => {
                this.closePop(() => {
                    this.parent.onEchoMsg(errorMsg);
                });
            });
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
                this.parent.isSubmitting = false;
            },
            onGrab : function (index) {
                if (this.parent.isSubmitting) return;
                this.parent.submitting = true;
                this.parent.onGrab.call(this.parent, index);
            },
            onVipGet : function (index) {
                if (this.parent.isSubmitting) return;
                this.parent.submitting = true;
                this.parent.onVipGet.call(this.parent, index);
            }
        }
    }
</script>