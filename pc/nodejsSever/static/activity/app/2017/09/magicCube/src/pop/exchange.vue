<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.exchange{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
        }
        .msg{
            color: #333;
        }
        .msg.center{
            text-align: center;
        }
        .close-btn{
            position: absolute;
            background: #F6852F;
            color: #FFF;
            margin: 0 auto;
            padding: 0;
            text-align: center;
        }
        .xchg-btn{
            display: inline-block;
            border: 1px solid #F6852F;
            background: #F6852F;
            color: #FFF;
            text-align: center;
        }
        .cancel-btn{
            display: inline-block;
            border: 1px solid #F6852F;
            background: #FFF;
            color: #F6852F;
            text-align: center;
        }
        .close{
            color: #333;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask exchange">
        <div class="modal-container pop-cnt img-size" data-width='430' data-height='290' data-borderRadius="15" @click='closePropagtion($event)'>
            <slot name="close">
                <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'>&otimes;</div>
            </slot>
            <div :class="['msg', 'img-size', {true: 'center', false : ''}[msg.length < 13]]" data-marginTop="60" data-marginLeft="50" data-marginRight="40" data-fontSize="24" data-lineHeight="48">{{msg}}</div>
            <div v-show="popState != 1" class="close-btn img-size" data-top="190" data-left="110" data-width="210" data-height="50" data-borderRadius="10" data-fontSize="26" data-lineHeight="52" @click="closePop">{{btnName}}</div>
            <div v-show="popState == 1" class="xchg-btn img-size" data-borderRadius="10" data-marginTop="30" data-marginLeft="26" data-width="154" data-height="48" data-fontSize="26" data-lineHeight="52" @click="onXchg">兑 换</div>
            <div v-show="popState == 1" class="cancel-btn img-size" data-borderRadius="10" data-marginTop="30" data-marginLeft="55" data-width="154" data-height="48" data-fontSize="26" data-lineHeight="52" @click="closePop">取 消</div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            parent : Object,
            popState: Boolean,
            error: String
        },
        data(){
            return{
                showModal : true,
                isClicked : false
            }
        },
        computed : {
            msg : function () {
                switch (this.popState) {
                    case 0 : return '抱歉，您的彩色魔方数量不足，无法兑换';
                    case 1 : return '兑换50元JD卡，将消耗您5个彩色魔方，确认兑换吗？';
                    case 2 : return '兑换成功！';
                    case 3 : return this.error;
                }
            },
            btnName : function () {
                switch (this.popState) {
                    case 0 : return '我知道了';
                    case 2 : return '确 定';
                    case 3 : return '我知道了';
                }
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
            onXchg : function () {
                if (this.isClicked) return;
                this.isClicked = true;
                this.closePop(this.parent.onConfirmXchg);
            }
        }
    }
</script>