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
    <div v-show='showModal' class="modal-mask explain" @click='goHome'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='30' data-paddingBottom='30' data-paddingLeft='33' data-paddingRight='33' data-width='530' data-height='250' @click='closePropagtion($event)'>
                <div class="ruletitle">活动提示</div>
                <div class="close img-size" data-width='31' data-height='31' data-lineHeight='31' data-fontSize="40" data-top='15' data-right='15' @click='goHome'>×</div>
                <div class="content img-size" data-fontSize="42">
                    {{status=='-1'?'活动未开始':'活动已结束'}}
                    
                </div>
                <div class="surebtn img-size" data-width="308" data-height="114" @click='goHome'>确定</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import {status} from '../common/URL';
    export default {
        props : {
            transition : String,
        },
        mounted() {
            var self = this;
            T.setImgSize();
            T.getAppInfo();
            self.islogin = T.isLogin;
            if(!self.islogin || !T.uid) return;
            /*T.ajax({
                url : status , 
                callback : true,
                data : {
                    channel : 'H5',
                    uid : T.uid
                },
                success : function( _data ){
                    self.status = _data.map.status;
                }
            })*/
        },
        data(){
            return{
                showModal : true ,
                status : info.status
            }
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