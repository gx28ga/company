<style lang='sass' scoped>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/gift-pop.png");
        }
        .greeting{
            width: 100%;
            text-align: center;
            color: #7a4431;
        }
        .section{
            width: 100%;
            text-align: center;
            .col{
                display: inline-block;
                vertical-align: middle;
            }
            .caveat{
                @extend .col;
                color: #7a4431;
                text-align: left;
            }
            .guide{
                @extend .col;
                color: #7a4431;
                text-align: center;
                span{
                    color: #00F;
                }
            }
        }
        .section::after{
            display: inline-block;
            vertical-align: middle;
            width: 0;
            height: 100%;
            content: '';
        }
        .gift-name{
            @extend .section;
        }
        .gift-name{
            color: #ff5c00;
            font-weight: bold;
        }
        .extra-gift {
            color: #7a4431;
            span {
                color: #ff5c00;
            }
        }
        .medal{
            margin: 0 auto;
            @include contain("../images/medal.png");
        }
        .medal-name{
            width: 100%;
            color: #ff5c00;
            text-align: center;
        }
        .btn-ok {
            margin: 0 auto;
            @include contain("../images/ok.png");
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width="483" data-height="492" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='64' data-height='64' data-top='0' data-right='0' @click='onClose'></div>
                </slot>
                <div class="img-size greeting" data-marginTop="114" data-fontSize="24" data-lineHeight="24">恭喜您，获得</div>
                <div v-show="giftType != 5">
                    <div class="gift-name img-size" data-marginTop="42" data-fontSize="30" data-lineHeight="30">{{gift}}</div>
                    <div class="section img-size" data-height="107">
                        <div v-show="giftType > 0" class="caveat img-size" data-width="390" data-fontSize="24" data-lineHeight="36">{{caveat}}</div>
                        <div v-show="giftType == 0" class="img-size guide" data-width="390" data-fontSize="24" data-lineHeight="36">请前往<span @click="onGoMy">我的奖品</span>页查看详情</div>
                    </div>
                    <div v-if="medal > 0" class="img-size extra-gift" data-marginLeft="52" data-fontSize="24" data-lineHeight="74">额外赠送：<span>劳动勋章 {{medal}} 枚</span></div>
                </div>
                <div v-show="giftType == 5">
                    <div class="img-size medal" data-marginTop="16" data-width="109" data-height="114"></div>
                    <div class="img-size medal-name" data-fontSize="24" data-lineHeight="40">{{gift}}</div>
                </div>
                <div class="btn-ok img-size" :data-marginTop="medal > 0 ? 0 : 40" data-width="121" data-height="52" @click="onClose"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cGiftNames = ['10个奖品', '', '1%加息券', '1.5%加息券', '5元京东卡','劳动勋章1枚',  '10元京东卡', '星享卡', '2%加息券', '30元京东卡', ' 小米电饭煲(3L)'];
    const cTenGiftsMsg = ['恭喜您！获得10个奖品', '请前往我的奖品页查看详情'];
    export default {
        props : {
            transition : String,
            giftType : Number,
            giftName : String,
            medal : {
                type : Number,
                default : 0
            }
        },
        data(){
            return{
                showModal : true,
                waitTime : 500
            }
        },
        computed : {
            gift: function () {
                return this.giftType === 1 ? this.giftName : cGiftNames[this.giftType];
            },
            caveat : function () {
                switch (this.giftType) {
                    case 0:
                    case 5: return '';
                    case 1: return '积分已发放到您的账户，请注意查收并在有效期内使用';
                    case 2:
                    case 3:
                    case 8: return '加息券已发放到您的账户，请注意查收并在有效期内使用';
                    default : return '实物奖品将于活动结束后15个工作日内发放';
                }
            },
            msg : function () {
                return cTenGiftsMsg;
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
                    this.$emit("close-pop", true);
                });
            },
            onGoMy : function () {
                this.closePop(() => {
                    this.$emit("go-to-record");
                });
            }
        }
    }
</script>