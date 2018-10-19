<style lang='sass'>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask{
        .modal-container.pop-cnt{
            position: relative;
            max-width:none;
            @include contain('../images/msg-pop-bg.png');
            @include box-sizing;
            @include transition-duration(0s);
            .content{
                position: absolute;
                top: 30%;
                left: 15%;
                width: 70%;
                margin: auto;
                overflow-y: scroll;
                text-align: center;
                font-size: 1.1rem;
                .title{width: 100%; color: #FF4A00; font-weight: bold; line-height: 3.2rem;}
                .desc{width: 100%; color: #000; font-size: .8rem; line-height: 1.3rem;}
            }
            .main-btn{
                position: absolute;
                top: 75.8364312267658%;
                left: 22.32142857142857%;
                width: 58.57142857142857%;
                height: 11.15241635687732%;
                @include contain('../images/i-see-btn.png');
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='560' data-height='538' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content">
                    <div class="title">{{title}}</div>
                    <div class="desc">{{detail}}</div>
                </div>
                <div class="main-btn" @click="closePop"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            title : String,
            detail : String,
            btnBackHome : Boolean
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
                if (this.btnBackHome) {
                    T.callApp.home();
                }
            }
        }
    }
</script>