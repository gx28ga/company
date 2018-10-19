<style scoped>
    @import '../css/vue-pop.css';
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" v-bind:class='superClass' @click='closePop'>
        <div class="modal-body" @click='closePropagtion($event)' >
            <slot name="body"></slot>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            superClass : String,
            transition : String,
            closeCallback : Function,
        },
        data(){
            return {
                showModal : true,
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();  //
                //e.cancelBubble = true;  // 
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,100)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                this.closeCallback && this.closeCallback.call(this);
            }
        }
    }
</script>