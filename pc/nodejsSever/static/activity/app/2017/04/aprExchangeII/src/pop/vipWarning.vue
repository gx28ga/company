<style lang='sass'>
    @import '../css/global.scss';
    $sjianwidth : $s17;
    .modal-mask.select-prize{
        span{height:$sjianwidth; width:$sjianwidth; display:block; position:relative;}
        li{
            @include box;
            padding:$s1 0;
            .text{ @include box-flex; line-height:$s16;}
        }
        table{
            margin-top:$sjianwidth/1.8;
            margin-left:$sjianwidth/1.8;
            color: #FFFF99;
            td{
                height: $s20;
            }
        }

        .modal-container.pop-cnt{ max-width:none; @include contain('../images/new/pop/select_prize/select-pop.png');
             @include box-sizing;
             @include transition-duration(0s);
            .content{
                margin-top: 33%; margin-bottom:$s10; color:#FFF;
                @include align-items(flex-start);
                @include justify-content(flex-start);
                @include font-size(8px);
                @include size(padding-top, 10px);@include size(padding-bottom, 10px);
                @include size(padding-left, 5px);@include size(padding-bottom, 5px);
                overflow-y: scroll;
                .title{width: 100%; text-align:center; color: rgb(254, 244, 135); @include font-size(24px); @include size(margin-bottom, 20px)}
                .desc{color: #FFF; @include font-size(16px);}
                .home-btn{
                    @include box; @include boxCenter; @include boxMiddle;
                    margin-top: $s16;
                }
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask select-prize" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='619' data-height='1107' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content img-size" data-width='510' data-height='330'>
                    <p class="title">敬请谅解!</p>
                    <p class="desc">由于您是渠道VIP用户，所以不能参与此次活动</p>
                    <div class="home-btn" data-height="69" data-width="400">
                        <img src="../images/new/pop/home-btn.png" width="100%" @click="closePop">
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            selectedIndex : Number
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
                T.callApp.home();
            }
        }
    }
</script>