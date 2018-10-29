<style scoped>
    @import '../css/vue-pop.css';
    .modal-mask.explain{
        li{
            @include box;
            margin-top: 5px;
        }
        .modal-container.pop-cnt{
             @include box-sizing;
             @include transition-duration(0s);
             background: #fff;
             border-radius: 5px;
            .content{ text-align: center;
                margin-bottom:10px;margin-top:10px; color:#333;
                @include align-items(flex-start);
                @include justify-content(flex-start);
            }
        }   
        .ruletitle{ color: #650f2c; text-align: center; }
        .close{ border: 2px solid #650f2c; border-radius: 50%; color: #650f2c; text-align: center; font-weight: bold; }
        .surebtn{ background: url('../images/surebtn.png') no-repeat; background-size: contain; color: #fff; line-height: 35px; text-align: center; margin: 0 auto;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='25' data-paddingBottom='25' data-paddingLeft='33' data-paddingRight='33' data-width='530' data-height='250' @click='closePropagtion($event)'>
                <div class="ruletitle">提示消息</div>
                <div class="close img-size" data-width='31' data-height='31' data-lineHeight='31' data-fontSize="40" data-top='15' data-right='15' @click='goHome'>×</div>
                <div class="content img-size" data-fontSize="42">
                    渠道用户不参加此次活动
                </div>
                <div class="surebtn img-size" data-width="290" data-height="114" @click='goHome'>确定</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
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
                e.stopPropagation();  //
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            goHome :function(){
                this.closePop(function(){
                    T.callApp.home();
                })
            }
        }
    }
</script>