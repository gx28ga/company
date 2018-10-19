<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/gift-pop.png");
            .mid-align{
                text-align: center;
            }
            .section{
                div{
                    display: inline-block;
                    vertical-align: middle;
                }
                .gift-box{
                    height: 100%;
                    color: #FFE4C4;
                    font-weight: bold;
                }
                .gift-box::after{
                    display: inline-block;
                    vertical-align: middle;
                    content: '';
                    width: 0;
                    height: 100%;
                }
                .ellipsis{
                    color: #FFE4C4;
                    font-weight: bold;
                    span{
                        color: #7FFFD4;
                    }
                }
                .note{
                    color: #FFF;
                    span{
                        color: #00F;
                        font-weight: bold;
                    }
                }
            }
            .section.rt-shift{
                margin-left: 24%;
                width: 75%;
            }
            .ok, .continue{
                position: absolute;
            }
            .continue{
                color: #fbef49;
                text-align: center;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='701' data-height='729' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='90' data-height='90' data-top='0' data-right='0' @click='onClose'></div>
                </slot>
                <template v-if="openQty > 2">
                    <div class="img-size section rt-shift" data-marginTop="180" data-height="180">
                        <div class="img-size gift-box" data-fontSize="50" data-lineHeight="90"><div>{{giftEty}}</div></div>
                    </div>
                    <div class="img-size section rt-shift" data-marginTop="30">
                        <div class="img-size ellipsis" data-fontSize="40" data-lineHeigh="56">......<span>（共有{{openQty}}个红包奖品）</span></div>
                    </div>
                    <div class="img-size section rt-shift">
                        <div class="img-size note" data-fontSize="32" data-lineHeight="48">更多奖品请前往<span @click="onGoMy">我的奖品</span>查看</div>
                    </div>
                </template>
                <template v-else>
                    <div class="img-size section mid-align" data-width="701" data-height="354" data-marginTop="140">
                        <div class="img-size gift-box" data-fontSize="50" data-lineHeight="90"><div>{{giftEty}}</div></div>
                    </div>
                    <div class="img-size section" data-width="540" data-marginLeft="100" data-fontSize="32" data-lineHeight="48">{{giftComment[realGift]}}</div>
                </template>
                <div class="img-size ok" data-top="610" data-left="80" data-width="260" data-height="70" @click="onClose"></div>
                <div class="img-size continue" data-top="610" data-left="380" data-width="247" data-height="70" data-fontSize="34" data-lineHeight="70" @click="onContinue">{{continueLabel[popState]}}</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cGiftComment = ['积分/加息券将即时发放到您的账户，请注意查收', '实物奖品将于活动结束后15个工作内发放，请知晓'];
    const cContinueLabel = ['继续开启红包雨', '再连续10次'];
    export default {
        props : {
            transition : String,
            popState : Number,
            openQty : {
                type : Number,
                default : 1
            },
            highest : {
                type : Boolean,
                default : false
            },
            gift1 : String,
            gift2 : String
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            giftEty(){
                const {gift1 : g1, gift2: g2} = this;
                return g1 + (g2 ? '%%' + g2 : '');
            },
            giftComment(){
                return cGiftComment;
            },
            realGift(){
                const gift = this.giftEty;
                return gift.indexOf("积分") == -1 && gift.indexOf("加息") == -1 ? 1 : 0;
            },
            continueLabel(){
                return cContinueLabel;
            }
        },
        mounted(){
            T.setImgSize();
            this.$nextTick(()=>{
                let el = document.querySelector(".gift-box");
                el.innerHTML = el.innerHTML.replace(/%%/g, '<br>');
            });
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
            onContinue(){
                this.closePop(()=>{
                    this.$emit("replay-event");
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