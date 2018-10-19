<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.result{
        .modal-container.pop-cnt{
            @include contain('../images/result-pop.png');
            position: relative;
            .detail, .forward-btn{
                position: absolute;
                text-align: center;
            }
            .detail{
                color: #EAFF00;
            }
            .forward-btn{
                color: #FFF;
                text-align: center;
            }
        }   
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <!--<div v-show='showModal' class="modal-mask result" @click='closePop'>-->
    <div v-show='showModal' class="modal-mask result">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='551' data-height='584' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="img-size detail" data-top="254" data-left="126" data-width="300" data-fontSize="30" data-lineHeight="50">{{detail}}</div>
                <div class="img-size forward-btn" data-top="465" data-left="85" data-width="368" data-height="78" data-fontSize="36" data-lineHeight="80" @click="onClickMain">{{{0: '我知道了', 1: '立即投资', 2: '关 闭'}[closeForward]}}</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            detail : String,
            closeForward : {
                type : Number,
                default : 0
            }
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
            onClickMain : function () {
                if (this.closeForward == 0 || this.closeForward == 2) {
                    this.closePop();
                } else if (this.closeForward == 1) {
                    T.callApp.investment();
                }
            }
        }
    }
</script>