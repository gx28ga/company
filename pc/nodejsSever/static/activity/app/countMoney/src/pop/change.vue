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
            .content{ 
                margin-bottom:10px;margin-top:10px; color:#333; overflow-y: scroll;
                @include align-items(flex-start);
                @include justify-content(flex-start);
            }
        }   
        .ruletitle{ color: #650f2c; text-align: center; }
        .close{ border: 2px solid #650f2c; border-radius: 50%; color: #650f2c; text-align: center; font-weight: bold; }
        .pice{display: flex; border: 1px solid #dddddd; position: relative;
            .left{ display: block; float: left; }
            p{ color: #333333; font-size: 12px; &.name{ font-weight: bold; }}
            &.comm{ &.colors{border:0; background: #fbf6f2; } p.name{ color: #db4c5d;  } .right{ background:url('../images/comm.png') no-repeat; background-size: contain; } } 
            &.silver{ &.colors{border:0; background: #fbf6f2; } p.name{ color: #959595;  } .right{ background:url('../images/silver.png') no-repeat; background-size: contain; } } 
            &.gold{ &.colors{border:0; background: #fbf6f2; } p.name{ color: #f79910;  } .right{ background:url('../images/gold.png') no-repeat; background-size: contain; } } 
            .selected{ position: absolute; &.img{ background: url('../images/selected.png') no-repeat; background-size: contain; } }
            
        }
        .surebtn{ background: url('../images/surebtn.png') no-repeat; background-size: contain; color: #fff; line-height: 35px; text-align: center; margin: 0 auto;
        }
        p.ques{ color: #333; }
        p.answ{ color: #666; }
        .gray{ -webkit-filter: grayscale(100%);}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='25' data-paddingBottom='25' data-paddingLeft='33' data-paddingRight='33' data-width='630' data-height='979' @click='closePropagtion($event)'>
                <div class="ruletitle">请选择钞票，然后开始数钱</div>
                <div class="close img-size" data-width='31' data-height='31' data-lineHeight='31' data-fontSize="40" data-top='15' data-right='15' @click='closePop'>×</div>
                <div class="content img-size" data-width='626' data-fontSize="22">
                    <div class="pice comm colors img-size" data-width="570" data-paddingLeft="32" data-paddingRight="23" data-paddingTop="17" data-paddingBottom="17" @click='active(0)'>
                        <div class="left img-size" data-width="190" data-paddingTop="35">
                            <p class="name img-size" data-fontSize="30">普通钞票</p>
                            <p>面额：100元/张</p>
                            <p>剩余机会：{{userChance.chanceCommon}}次</p>
                        </div>
                        <div class="right img-size" data-width="400" data-height="182">
                            <div class="selected img img-size" data-top="5" data-right="5" data-width="44" data-height="44"></div>
                        </div>
                    </div>
                    <div class="pice silver img-size" data-width="570" data-paddingLeft="32" data-paddingRight="23" data-paddingTop="17" data-paddingBottom="17" data-marginTop="14" @click='active(1)'>
                        <div class="left img-size" data-width="190" data-paddingTop="35">
                            <p class="name img-size" data-fontSize="30">银钞</p>
                            <p>面额：188元/张</p>
                            <p>剩余机会：{{userChance.chanceSpecial}}次</p>
                        </div>
                        <div class="right img-size" data-width="400" data-height="182">
                            <div class="selected img-size" data-top="5" data-right="5" data-width="44" data-height="44"></div>
                        </div>
                    </div>
                    <div class="pice gold img-size" data-width="570" data-paddingLeft="32" data-paddingRight="23" data-paddingTop="17" data-paddingBottom="17" data-marginTop="14" @click='active(2)'>
                        <div class="left img-size" data-width="190" data-paddingTop="35">
                            <p class="name img-size" data-fontSize="30">金钞</p>
                            <p>面额：288元/张</p>
                            <p>剩余机会：{{userChance.chanceMultiple}}次</p>
                        </div>
                        <div class="right img-size" data-width="400" data-height="182">
                            <div class="selected img-size" data-top="5" data-right="5" data-width="44" data-height="44"></div>
                        </div>
                    </div>
                </div>
                <div class="surebtn img-size" data-width="290" data-height="114" @click='change'>确定</div>
                <p class="ques img-size" data-fontSize="28">Tips:如何获取数银钞/金钞机会？</p>
                <p class="answ img-size" data-fontSize="24">单笔投资≥80天产品，每满3万元额外获得一次数银钞机会</p>
                <p class="answ img-size" data-fontSize="24">单笔投资≥300天产品，每满3万元额外获得一次数金钞机会</p>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import {getlucky} from '../common/URL';
    export default {
        props : {
            transition : String,
        },
        data(){
            return{
                showModal : true , 
                isactive : 0 , 
                userChance : {}
            }
        },
        mounted(){
            var self = this;
            T.setImgSize();
            T.getAppInfo();
            this.islogin = T.isLogin;
            if(!this.islogin || !T.uid) return;
            T.ajax({  //抢排名
                url : getlucky , 
                data : {
                    uid : T.uid
                },
                success : function( _data ){
                    self.userChance = _data.map.userChance;
                }
            });
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
            hui : function(){
                var isactive = this.isactive;
                if(isactive == 0){
                    $('.pice').eq(0).addClass('colors');
                    $('.pice').eq(1).removeClass('colors');
                    $('.pice').eq(2).removeClass('colors');
                    $('.selected').eq(0).addClass('img');
                    $('.selected').eq(1).removeClass('img');
                    $('.selected').eq(2).removeClass('img');
                    $('.surebtn').removeClass('gray');
                    if(this.userChance.chanceCommon < 1){
                        this.isactive = -1;
                        $('.surebtn').addClass('gray');
                    }
                }else if(isactive == 1){
                    $('.pice').eq(1).addClass('colors');
                    $('.pice').eq(0).removeClass('colors');
                    $('.pice').eq(2).removeClass('colors');
                    $('.selected').eq(1).addClass('img');
                    $('.selected').eq(0).removeClass('img');
                    $('.selected').eq(2).removeClass('img');
                    $('.surebtn').removeClass('gray');
                    if(this.userChance.chanceSpecial < 1){
                        this.isactive = -1;
                        $('.surebtn').addClass('gray');
                    }
                }else if(isactive == 2){
                    $('.pice').eq(2).addClass('colors');
                    $('.pice').eq(0).removeClass('colors');
                    $('.pice').eq(1).removeClass('colors');
                    $('.selected').eq(2).addClass('img');
                    $('.selected').eq(0).removeClass('img');
                    $('.selected').eq(1).removeClass('img');
                    $('.surebtn').removeClass('gray');
                    if(this.userChance.chanceMultiple < 1){
                        this.isactive = -1;
                        $('.surebtn').addClass('gray');
                    }
                }
            },
            active : function(type){
                if(type == 0){
                    this.isactive = type;
                    this.hui();
                }else if(type == 1){
                    this.isactive = type;
                    this.hui();
                }else if(type == 2){
                    this.isactive = type;
                    this.hui();
                }
            },
            change : function(){
                var self = this;
                if(this.isactive<0){ return }
                this.closePop(function(){
                    router.replace(
                        { 
                            path: 'game', 
                            query: { uid: T.uid , wap : T.wap , type: self.isactive }
                        }
                    )
                    
                });
            }
        }
    }
</script>