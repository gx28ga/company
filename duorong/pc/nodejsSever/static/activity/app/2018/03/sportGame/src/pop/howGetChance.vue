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
            <div class="modal-container pop-cnt img-size" data-width='701' data-height='790' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='75' data-height='75' data-top='0' data-right='14' @click='closePop'></div>
                </slot>
                <div class="how-get-invest img-size" data-top="605" data-left="205" data-width="300" data-height="82" @click="onInvest"></div>
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