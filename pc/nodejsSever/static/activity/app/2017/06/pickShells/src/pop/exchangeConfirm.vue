<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask{
        .modal-container.pop-cnt{
            position: relative;
            max-width:none;
            @include contain('../images/self/msg-pop-bg.png');
            @include box-sizing;
            @include transition-duration(0s);
            .note{
                position: absolute;
                top: 30%;
                left: 0;
                width: 100%;
                overflow-y: scroll;
                text-align: center;
                font-size: .8rem;
                color: #FF4A00;
                line-height: 1.6rem;
            }
            .prize-wrapper{
                position: absolute;
                top: 44.60966542750929%;
                left: 23.85714285714286%;
                width: 54.82142857142857%;
                height: 25.65055762081784%;
                @include contain('../images/self/prize-banner.png');
                .prize-name-wrapper{
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    margin: auto;
                    height: 2rem;
                    width: 100%;
                    line-height: 2rem;
                    font-size: .8rem;
                    color: #FFF;
                    text-align: center;
                }
            }
            .confirm-btn{
                position: absolute;
                top: 75.8364312267658%;
                left: 22.32142857142857%;
                width: 58.57142857142857%;
                height: 11.52416356877323%;
                @include contain('../images/self/pop-ok-btn.png');
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='560' data-height='538' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="note">您将兑换以下奖品，请确认</div>
                <div class="prize-wrapper">
                    <div class="prize-name-wrapper">{{prizeName}}</div>
                </div>
                <div class="confirm-btn" @click="onSubmit"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            prizeIndex : Number,
            prizeName : String,
            submitEvt : String
        },
        data(){
            return{
                showModal : true
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
                if (this.btnBackHome) {
                    T.callApp.home();
                }
            },
            onSubmit : function () {
                let self = this;
                this.closePop(function () {
                    bus.$emit(self.submitEvt, {index: self.prizeIndex, eventName: self.submitEvt});
                });
            }
        }
    }
</script>