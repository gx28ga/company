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
            <div class="modal-container pop-cnt img-size" data-width='688' data-height='523' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='75' data-height='75' data-top='56' data-right='0' @click='closePop'></div>
                </slot>
                <div class="how-get-invest img-size" data-top="364" data-left="214" data-width="247" data-height="87" @click="onInvest"></div>
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