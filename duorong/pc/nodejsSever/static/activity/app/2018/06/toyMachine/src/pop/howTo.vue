<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.how-to{
        .modal-container.pop-cnt{
            position: relative;
        }
        .get-chance{
            @include contain("../images/how-get.png");
        }
        .open-crazy{
            @include contain("../images/crazy-mode.png");
        }
        .amount{
            position: absolute;
            color: #ff0090;
            width: 100%;
            text-align: center;
        }
        .invest{
            margin: 0 auto;
            @include contain("../images/invest.png");
        }
        .close{
            color: #FFF;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask how-to">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" :class="bg" data-width='604' data-height='444' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='0' data-right='0' @click='closePop'></div>
                </slot>
                <div v-if="contentType > 0" class="img-size amount" data-top="270" data-fontSize="36" data-lineHeight="36">{{investAmount}}</div>
                <div class="invest img-size" data-marginTop="338" data-width="223" data-height="72" @click="onInvest"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            contentType : Number,
            investAmount: Number
        },
        data(){
            return{
                showModal : true
            }
        },
        computed: {
            bg(){
                return ['get-chance', 'open-crazy'][this.contentType];
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
//                bus.$emit('closePopEvent');
            },
            onClose : function () {
                this.closePop(()=>{});
            },
            onInvest(){
                this.closePop(() => {
                    T.callApp.investment();
                });
            }
        }
    }
</script>