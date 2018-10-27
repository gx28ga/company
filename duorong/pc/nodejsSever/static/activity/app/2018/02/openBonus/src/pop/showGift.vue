<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/gift-pop.png");
            text-align: center;
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
                .ok-close{
                    @extend .btn;
                    @include contain("../images/btn-ok.png");
                }
                .go-counting{
                    @extend .btn;
                    @include contain("../images/btn-count.png");
                }
                .go-xchging{
                    @extend .btn;
                    @include contain("../images/btn-xchg.png");
                }
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='688' data-height='594' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='75' data-height='75' data-top='56' data-right='0' @click='onClose'></div>
                </slot>
                <div class="gift-name img-size" data-marginTop="175" :data-fontSize="popState == 15 ? 40 : 48" data-lineHeight="165">{{giftName}} <span v-show="giftAmount" class="img-size" data-fontSize="56">&times; {{giftAmount}}</span></div>
                <div class="section">
                    <div class="comment-wrapper img-size" data-width="504" data-height="98">
                        <div class="comment img-size" data-fontSize="24" data-lineHeight="36">{{comment}}</div>
                    </div>
                </div>
                <div class="section">
                    <div v-show="popState == 16" class="go-xchging img-size" data-width="266" data-height="86" data-marginRight="20" @click="onGoPage('xchg')"></div>
                    <div v-show="popState == 17" class="go-counting img-size" data-width="266" data-height="86" data-marginRight="20" @click="onGoPage('count')"></div>
                    <div class="ok-close img-size" data-width="246" data-height="86" @click="onClose"></div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,  // 11：积分；
                                // 12：1.5%加息券；
                                // 13：5元京东卡；
                                // 14：小米体脂称；
                                // 15：Kindle PaperWhite;
                                // 16：钞票
                                // 17：数钞票机会
            amount : {
                type : Number,
                default : 1
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
                let amt = this.amount;
                let name = {
                    "11" : amt + "积分",
                    "12" : "1.5加息券",
                    "13" : "5元京东卡",
                    "14" : "小米体脂称",
                    "15" : "Kindle Paperwhite",
                    "16" : amt + "钞票",
                    "17" : "数钞票机会"
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
            onGoPage : function (pgnm) {
                let evt = {'xchg' : 'go-xchg-event', 'count' : 'go-count-event'}[pgnm];
                this.closePop(() => {
                    this.$emit(evt);
                });
            }
        }
    }
</script>