<style lang='sass'>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.play-result{
        .modal-container.pop-cnt{
            position: relative;
            background: #5C0399;
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
            .btn.invest{
                background-color: #F44180;
            }
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
    <div v-show='showModal' class="modal-mask play-result">
        <div class="modal-wrapper">
            <div v-show="popState > 0" class="modal-container pop-cnt img-size" data-width='490' data-height='390' data-borderRadius="15" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'>&otimes;</div>
                </slot>
                <div class="msg-wrapper img-size" data-height="300">
                    <div>
                        <div v-for="sub in msg" class="img-size" data-fontSize="32" data-lineHeight="48">{{sub}}</div>
                    </div>
                </div>
                <div class="section img-size">
                    <div class="btn invest img-size" data-borderRadius="10" data-width="250" data-height="50" data-fontSize="24" data-lineHeight="50" @click="onInvest">立即投资</div>
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
            popState : Number
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            msg : function () {
                switch (this.popState) {
                    case 1:
                        return ['您的机会用完了，请投资获取'];
                    case 2:
                        return ['您的机会已不足10次，', '请投资获取'];
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
                bus.$emit('closePopEvent');
            },
            onInvest : function () {
                T.callApp.investment();
            }
        }
    }
</script>