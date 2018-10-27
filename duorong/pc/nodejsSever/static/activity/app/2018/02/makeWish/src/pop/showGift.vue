<style lang='sass' scoped>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/gift-info.png");
            color: #FFF;
        }
        .section{
            width: 100%;
            text-align: center;
            .col{
                display: inline-block;
                vertical-align: middle;
            }
            .btn{
                @extend .col;
            }
            .btn.ok{
                @include contain("../images/btn-ok.png");
            }
            .btn.my-gift{
                @include contain("../images/btn-my-gift.png");
            }
            .btn.not-go{
                @include contain("../images/btn-close.png");
            }
        }
        .title, .gift-name{
            @extend .section;
        }
        .title{
            font-weight: bold;
        }
        .gift-name{
            color: #ffde00;
        }
        .msg-wrapper{
            width: 100%;
            text-align: center;
            color: #FAC51F;
        }
        .msg-wrapper > div{
            display: inline-block;
            vertical-align: middle;
            width: 100%;
        }
        .msg-wrapper .comment{
            color: #FFF;
            text-align: left;
        }
        .msg-wrapper::after{
            content: '';
            height: 100%;
            width: 0;
            display: inline-block;
            vertical-align: middle;
        }
        .close{
            color: #FFF;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width="600" data-height="474" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='0' data-right='2' @click='onClose'></div>
                </slot>
                <div class="title img-size" data-height="115" data-fontSize="30" data-lineHeight="115">{{wishObject}} 许愿奖励</div>
                <div v-show="wishTen == false" class="gift-name img-size" data-height="150" data-fontSize="36" data-lineHeight="150">{{gift}}</div>
                <div v-show="wishTen == true" class="msg-wrapper img-size" data-height="150">
                    <div>
                        <div v-for="sub in msg" class="img-size" data-fontSize="32" data-lineHeight="48">{{sub}}</div>
                    </div>
                </div>
                <div v-show="wishTen == false" class="msg-wrapper img-size" data-height="105">
                    <div class="comment img-size" data-width="475" data-fontSize="24" data-lineHeight="36">{{comment}}</div>
                </div>
                <div v-show="wishTen == false" class="section">
                    <div class="btn ok img-size" data-width="205" data-height="71" @click="onClose"></div>
                </div>
                <div v-show="wishTen == true" class="section img-size" data-marginTop="105">
                    <div class="btn my-gift img-size" data-width="205" data-height="71" data-marginRight="45" @click="onGoMy"></div><!--
                     --><div class="btn not-go img-size" data-width="205" data-height="71" @click="onClose"></div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cGiftNames = ['', '10积分', '20积分', '1%加息券', '1.5%加息券', '10元京东卡', '50元京东卡', '100元京东卡', '300元京东卡', '500元京东卡'];
    const cTenGiftsMsg = ['恭喜您！获得10个奖品', '请前往我的奖品页查看详情'];
    export default {
        props : {
            transition : String,
            wishObject : {
                type : String,
                required : true
            },
            wishTen : {
                type : Boolean,
                default : false
            },
            giftType : Number
        },
        data(){
            return{
                showModal : true,
                waitTime : 500
            }
        },
        computed : {
            gift: function () {
                return this.wishTen ? '' : cGiftNames[this.giftType];
            },
            comment : function () {
                if (this.wishTen) {
                    return '';
                }
                switch (this.giftType) {
                    case 1:
                    case 2: return '积分已发放到您的账户，请注意查收并在有效期内使用';
                    case 3:
                    case 4: return '加息券已发放到您的账户，请注意查收并在有效期内使用';
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
                    this.$emit("go-to-rank");
                });
            }
        }
    }
</script>