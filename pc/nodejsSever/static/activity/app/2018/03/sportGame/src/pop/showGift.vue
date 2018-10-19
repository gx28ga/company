<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/gift-pop.png");
            text-align: center;
            .btn, .note, .words, .sphere{
                position: absolute;
            }
            .note{
                color: #c0392b;
                width: 100%;
                text-align: center;
            }
            .words{
                color: #7a1f1f;
                span{
                    color: #55b500;
                    font-weight: bold;
                }
            }
            .sphere{
                @include contain("../images/sphere.png");
                color: #325201;
            }
            .gift-name{
                width: 100%;
                text-align: center;
                color: #ff5800;
                span{
                    color: #3c245e;
                    vertical-align: bottom;
                }
            }
            .section{
                width: 100%;
                .comment-wrapper{
                    display: inline-block;
                    .comment{
                        display: inline-block;
                        vertical-align: middle;
                        text-align: left;
                        color: #3c245e;
                    }
                }
                .comment-wrapper:after{
                    display: inline-block;
                    vertical-align: middle;
                    content: '';
                    width: 0;
                    height: 100%;
                }
                .btn{
                    display: inline-block;
                    vertical-align: top;
                }
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='701' data-height='789' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='75' data-height='75' data-top='0' data-right='12' @click='onClose'></div>
                </slot>
                <template v-if="!highest">
                    <div class="img-size words" data-top="300" data-left="135" data-fontSize="36" data-lineHeight="36">能量值获得：</div>
                    <div class="img-size sphere" data-top="267" data-left="380" data-width="98" data-height="98" data-fontSize="30" data-lineHeight="98">&plus;{{amount}}</div>
                </template>
                <template v-else>
                    <div class="img-size words" data-top="280" data-left="135" data-fontSize="36" data-lineHeight="36">能量值获得：</div>
                    <div class="img-size sphere" data-top="245" data-left="380" data-width="98" data-height="98" data-fontSize="30" data-lineHeight="98">&plus;{{amount}}</div>
                    <div class="img-size note" data-top="360" data-fontSize="24" data-lineHeight="24">WOW！您的手速已经突破了系统上限</div>
                </template>
                <div v-show="popState == 0" class="img-size words" data-top="455" data-left="135" data-fontSize="36" data-lineHeight="36">随机奖品：请至<span @click="onGoMy">我的奖品</span>查看</div>
                <div v-show="popState > 0" class="img-size words" data-top="455" data-left="135" data-fontSize="36" data-lineHeight="36">随机奖品：{{giftName}}</div>
                <div class="img-size btn" data-top="631" data-left="197" data-width="305" data-height="80" @click="onClose"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,
            amount : {
                type : Number,
                default : 1
            },
            highest : {
                type : Boolean,
                default : false
            }
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            giftName : function () {
                let st = this.popState;
                let name = {
                    "0" : "请至我的奖品查看",
                    "1" : "5积分",
                    "2" : "10积分",
                    "3" : "50积分",
                    "4" : "1.2%加息券",
                    "5" : "5能量值",
                    "6" : "10能量值",
                    "7" : "10元红包",
                    "8" : "10元京东卡",
                    "9" : "星享卡",
                    "10": "松下离子蒸汽美容仪",
                    "11": "Kindle paperwhite"
                }[st + ''];
                return name ? name : '';
            },
            giftAmount : function () {
                let st = this.popState;
                switch (st) {
                    case 12 :
                    case 13 :
                    case 14 :
                    case 15 :
                    case 17 :
                        return this.amount;
                    default :
                        return '';
                }
            },
            comment : function () {
                switch (this.popState) {
                    case 11:
                        return '积分已发放到您的账户，请注意查收并在有 效期内使用';
                    case 12 :
                        return '加息券已发放到您的账户，请注意查收并在有效期内使用';
                    case 13 :
                    case 14 :
                    case 15 :
                        return '实物奖品将于活动结束后15个工作日内发放';
                    case 16 :
                        return '* 可去【我的奖品-去兑换】兑换豪礼';
                    default :
                        return '';
                }
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
//                bus.$emit('closePopEvent');
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            },
            onGoMy : function () {
                this.closePop(() => {
                    this.$emit("go-my-event");
                });
            }
        }
    }
</script>