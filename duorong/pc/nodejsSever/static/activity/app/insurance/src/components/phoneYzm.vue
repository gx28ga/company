<style>
.form{
    .edit{
        &.yzm-btn{
            color: #00C6A8;
            font-size:14px;
        }
        &.gray{ color:#999; }
    }
}
</style>
<template>
<div class='item img-size' data-paddingLeft='30' data-paddingRight='30' data-paddingTop='20' data-paddingBottom='20'>
    <h2 class='img-size' data-fontSize='28' data-height='40' data-lineHeight='40' data-paddingBottom='10'>手机号码</h2>
    <div class='cnt img-size' data-height='70' data-lineHeight='70'>
        <div class='tit'>
            <input placeholder='请输入手机号' class='img-size' maxlength='11' data-fontSize='34' v-model="telVal" type='text'>
        </div>
        <div class="edit yzm-btn" :class='{gray:yzmclass}' @click='yzmEvent($event)'>{{yzmMsg}}</div>
    </div>
</div>
</template>
<script>
    import requirePop from '../pop/requirePop.js'
    export default {
        props : {
            yzmTips : Function, //错误提示
            model : Function , //手机号码 填充
            callback : Function , //回调 smsId 短信ID
            type : String, //类型
            telYz : Boolean //是否需要验证手机号 有没有注册 
        },
        data(){
            return {
                telVal : '' ,
                yzmMsg : '获取验证码',
                time : 60,
                yzmclass : true,
                yz : true ,
            }
        },
        watch : {
            telVal : function( tel ){
                if(/^1[3|4|5|7|8][0-9]\d{8}$/.test(tel)){
                    this.yz && (this.yzmclass = false);
                }else{
                    this.yzmclass = true;
                }
                this.model(tel);
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            errorPop(cnt , callback , ok ){
                requirePop('yzmerror',{
                    props : {
                        transition : 'rotate3d',//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                        title : '错误',
                        content : cnt,
                        okTxt : ok||'确定',
                        closeCallback : callback || function(){}
                    }
                },"publicTips")
            },
            yzmEvent( e ){
                e.stopPropagation();
                if(!this.yz || this.yzmclass) return;
                let tel = this.telVal ,
                    self = this;
                self.yz = false;

                //手机号验证

                requirePop('yzmPop',{
                    props : {
                        transition : 'rotate3d',
                        callback : function(){
                            self.callback(self.telVal);
                            self.reSendYzm();
                            self.yz = false;
                        },
                        closeCallback : function(){
                            self.yz = true;
                        }
                    }
               });
            },
            reSendYzm(){
                this.time = this.time - 1;
                if(this.time>0){
                    this.yzmMsg = this.time+'s后重发';
                    setTimeout(this.reSendYzm,1000);
                    this.yzmclass = true;
                    this.yz = false;
                }else{
                    this.yzmclass = false;
                    this.yzmMsg = '获取验证码';
                    this.time = 60;
                    this.yz = true;
                }
            },
        }
    }
</script>