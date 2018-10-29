<style lang='sass'>
    @import '../css/global.scss';
    @import "../css/pop-transition.scss";
    .modal-mask.all-coupon{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/pop-coupon.png');
            position: relative;
            .coupon-wrapper{
                overflow-y: scroll;
                .coupon-bg{
                    position: relative;
                    @include contain("../images/coupon-bg.png");
                    .coupon-detail,
                    .progress,
                    .grab-btn, .grab-disabled,
                    .vipget-disabled, .vipget-btn,
                    .grab-out, .gotten-mark
                    {
                        position: absolute;
                    }
                    .coupon-detail{
                        color: #FCF626;
                        div{
                            display: inline-block;
                            vertical-align: baseline;
                        }
                        .profit-val{
                            font-weight: bolder;
                        }
                        .type-name{
                            vertical-align: top;
                        }
                    }
                    .progress{
                        color: #FFF;
                    }
                    .grab-btn{
                        @include contain("../images/coupon-btn.png");
                        text-align: center;
                    }
                    .btn-disabled{
                        @include contain("../images/btn-disabled.png");
                        color: #6D5E90;
                        text-align: center;
                    }
                    .grab-disabled{
                        @extend .btn-disabled;
                    }
                    .vipget-btn{
                        text-align: center;
                        color: #FFF;
                        @include contain("../images/coupon-btn.png");
                    }
                    .vipget-disabled{
                        @extend .btn-disabled;
                    }
                    .grab-out{
                        @extend .btn-disabled;
                    }
                    .gotten-mark{
                        @include contain("../images/btn-gotten.png");
                    }
                }
                .coupon-bg:last-child{margin-bottom: 0!important;}
            }
        }   
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask all-coupon" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='562' data-height='946' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="coupon-wrapper img-size" data-marginTop="103" data-marginRight="16" data-marginBottom="14" data-marginLeft="16" data-width="530" data-height="830">
                    <div v-for="(item, i) in couponList" class="coupon-bg img-size" data-marginBottom="30" data-width="530" data-height="180">
                        <template>
                            <div class="coupon-detail img-size" data-top="30" data-left="140" data-width="150">
                                <div class="profit-val img-size" data-fontSize="64" data-lineHeight="64">{{item.raisedRates}}</div><!--
                             --><div class="img-size" data-fontSize="36" data-lineHeight="36">{{{2:"%", 1:"元"}[item.type]}}</div><!--
                             --><div class="type-name img-size" data-fontSize="40" data-lineHeight="40">{{{2:"加息券", 1:"红包"}[item.type]}}</div>
                            </div>
                        </template>
                        <div class="progress img-size" data-top="140" data-left="40" data-fontSize="20">剩余：{{item.left > 0 ? (Math.floor(item.left * 100) + "%") : '已抢完'}}</div>
                        <div v-show="item.state == 2 || (item.state == 3 && couponBegin == false)" class="grab-disabled img-size" data-top="23" data-left="337" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55"> 抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
                        <div v-show="item.state == 3 && couponBegin" class="grab-btn img-size" data-top="23" data-left="337" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55" @click="onGrab(i)"> 抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
                        <div v-show="item.state == 3 || item.state == 4 || ((item.state == 2 || item.state == 5) && couponBegin == false)" class="vipget-disabled img-size" data-top="102" data-left="337" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55"> 领取<span class="img-size" data-fontSize="18">（限VIP{{item.vip}}<span v-show="item.vip < maxVip">&plus;</span>）</span></div>
                        <div v-show="(item.state == 2 || item.state == 5) && couponBegin" class="vipget-btn img-size" data-top="102" data-left="337" data-width="190" data-heigth="55" data-fontSize="30" data-lineHeight="55" @click="onVipGet(i)"> 领取<span class="img-size" data-fontSize="18">（限VIP{{item.vip}}<span v-show="item.vip < maxVip">&plus;</span>）</span></div>
                        <div v-show="item.state == 6 && couponBegin == false" class="grab-disabled img-size" data-top="62" data-left="337" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55"> 抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
                        <div v-show="item.state == 6 && couponBegin" class="grab-btn img-size" data-top="62" data-left="337" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55" @click="onGrab(i)"> 抢<span class="img-size" data-fontSize="18">（手慢无）</span></div>
                        <div v-show="item.state == 7" class="grab-out img-size" data-top="62" data-left="337" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55">抢完了</div>
                        <div v-show="item.state == 4 || item.state == 5" class="grab-out img-size" data-top="23" data-left="337" data-width="190" data-height="55" data-fontSize="30" data-lineHeight="55">抢完了</div>
                        <div v-show="item.state == 1" class="gotten-mark img-size" data-top="20" data-left="330" data-width="184" data-height="146"></div>
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