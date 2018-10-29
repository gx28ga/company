<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.how-get-chance{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/about-cash.png");
        }
        .rule-detail,
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
            <div class="modal-container pop-cnt img-size" data-width='711' data-height='537' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='45' data-height='45' data-top='3' data-right='10' @click='closePop'></div>
                </slot>
                <div class="rule-detail img-size" data-top="167" data-left="420" data-width="170" data-height="35" @click="onRuleDetail"></div>
                <div class="rule-detail img-size" data-top="435" data-left="50" data-width="170" data-height="37" @click="onRuleDetail"></div>
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
            },
            onRuleDetail : function () {
                this.closePop(() => {
                    this.$emit("on-rule-detail", true);
                });
            }
        }
    }
</script>