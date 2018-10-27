<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.bet{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            .mid-align{
                text-align: center;
            }
            .section{
                width: 100%;
                div{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .title{
                color: #333;
                text-align: center;
                .deco-line{
                    border-top: 1px solid #333;
                }
            }
            .winner, .left-point{
                width: 100%;
                color: #333;
                span{
                    color: #0942a4;
                    font-weight: bold;
                }
            }
            .amt-btn{
                border: 1px solid #DDD;
                color: #333;
                font-weight: bold;
            }
            .bet-num{
                border: 1px solid #DDD;
                vertical-align: middle;
            }
            .bet-all{
                border: 1px solid #DDD;
                color: #0942a4;
                font-weight: bold;
            }
            .disabled{
                background: #888!important;
                background-image: none!important;
            }
            .section.rt-shift{
                margin-left: 24%;
                width: 75%;
            }
            .ok{
                margin: 0 auto;
                @include contain("../images/main-btn.png");
                color: #FFF;
                text-align: center;
            }
            .input-error{
                position: absolute;
                color: #F24637;
                z-index: 5;
            }
        }
        .close{
            color: #222;
        }
    }
</style>
<template>
<!--<transition :name="transition">-->
<transition>
    <div v-show='showModal' class="modal-mask bet">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size animated fadeInUpBig" data-width='520' data-height="415" data-borderRadius="16" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='20' data-height='20' data-top='0' data-right='18' data-fontSize="40" data-lineHeight="40" @click='onClose' onclick="this.parentNode.classList.add('fadeOutRightBig')">&times;</div>
                </slot>
                <div class="img-size section title" data-marginTop="15" data-height="24">
                    <div class="img-size deco-line" data-width="50" data-height="0"></div><!--
                 --><div class="img-size" data-marginLeft="15" data-marginRight="15" data-fontSize="24" data-lineHeight="24">投注积分</div><!--
                 --><div class="img-size deco-line" data-width="50" data-height="0"></div>
                </div>
                <div class="img-size winner mid-align" data-marginTop="55" data-fontSize="24" data-lineHeight="24">我要投注：<span>{{betResult}}</span></div>
                <div class="img-size section mid-align" data-marginTop="40" data-marginBottom="40">
                    <div class="img-size amt-btn" :class="betNum < 10 ? 'disabled' : ''" data-marginRight="20" data-width="55" data-height="55" data-fontSize="36" data-lineHeight="55" @click="betNum < 10 || onAmount(-10)">&minus;</div><!--
                 --><input type="number" class="img-size bet-num mid-align" data-marginRight="20" data-width="150" data-height="55" v-model="betNum" min="10"><!--
                 --><div class="img-size amt-btn" :class="leftPoint < 10 ? 'disabled' : ''" data-marginRight="40" data-width="55" data-height="55" data-fontSize="36" data-lineHeight="55" @click="leftPoint < 10 || onAmount(10)">&plus;</div><!--
                 --><div class="img-size bet-all" data-width="85" data-height="55" data-fontSize="24" data-lineHeight="55" @click="betNum = accountPoint">全部</div>
                </div>
                <div class="img-size input-error" data-top="220" data-left="125" data-fontSize="20" data-lineHeight="28">{{inputError}}</div>
                <div class="img-size left-point mid-align" data-marginBottom="40" data-fontSize="24" data-lineHeight="24">您剩余积分：{{leftPoint}}</div>
                <div class="img-size ok" :class="betNumOk ? '' : 'disabled'" data-width="260" data-height="65" data-borderRadius="28" data-fontSize="30" data-lineHeight="65" @click="!betNumOk || onSubmit()">提交并投注</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
//            transition : String,
            betResult : String
        },
        data(){
            return{
                showModal : true,
                waitTime: 500,
                accountPoint : bus.$data.point,
                betNum: 0
            }
        },
        computed : {
            leftPoint(){
                return this.accountPoint - this.betNum;
            },
            inputError(){
                return this.betNum < 10 ? '投注不能少于10积分' :
                       this.leftPoint < 0 ? '投注不能大于您账户积分' :
                       "";
            },
            betNumOk(){
                return this.betNum >= 10 && this.leftPoint >= 0;
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
                    this.$emit("close-only-event");
                });
            },
            onAmount(num){
                this.betNum = Number(this.betNum) + num;
            },
            onSubmit(){
                this.closePop(() => {
                    this.$emit('submit-bet-event', this.betNum);
                });
            }
        }
    }
</script>