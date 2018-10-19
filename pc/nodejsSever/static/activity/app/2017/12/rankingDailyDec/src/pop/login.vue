<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.login{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/login-pop.png");
        }
        .close{
            color: #FFF;
            text-align: center;
        }
        .btn{
            position: absolute;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask login">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='386' data-height='277' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' @click='closePop'></div>
                </slot>
                <div class="btn img-size" data-top="168" data-left="80" data-width="235" data-height="68" @click="onLogin"></div>
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
            onLogin : function () {
                bus.$emit("login-or-launch-app");
            }
        }
    }
</script>