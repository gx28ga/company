<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.how-get-chance{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/how-get.png");
        }
        .how-get-invest{
            position: absolute;
        }
        .close{
            color: #FFF;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask how-get-chance">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='711' data-height='756' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='64' data-height='64' data-top='60' data-right='36' @click='closePop'></div>
                </slot>
                <div class="how-get-invest img-size" data-top="628" data-left="215" data-width="280" data-height="70" @click="onInvest"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            boxType : Number,
            boxNum : Number
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
            },
            onInvest : function () {
                T.callApp.investment();
            }
        }
    }
</script>