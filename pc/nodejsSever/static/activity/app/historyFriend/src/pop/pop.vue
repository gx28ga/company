<style>
    @import '../style/vue-pop';
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" v-bind:class='superClass' @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container img-size" :data-width='width||600' :data-height='height||auto' @click='closePropagtion($event)'>
                <slot name="close" v-if='!close'>
                    <div class="close img-size" data-width='40' data-height='40' data-top='10' data-right='10' @click='closePop'></div>
                </slot>
                <div class="modal-header" v-if='!head'>
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer" v-if='!footer'>
                    <slot name="footer">
                    </slot>
                </div>
            </div>
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
            close : Boolean,
            head : Boolean,
            footer : Boolean,
            width : Number,
            height : Number
        },
        data(){
            return {
                showModal : false,
            }
        },
        mounted(){
            this.showPop();
        	T.setImgSize();
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation(); //
                //e.cancelBubble = true;  // 
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,500)
                }
            },
            closePop : function(){
                this.showModal = false;
                this.closeCallback && this.closeCallback();
                setTimeout(()=>{
                    $(this.$el).remove();
                },510)
            }
        }
    }
</script>