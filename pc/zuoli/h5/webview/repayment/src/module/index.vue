<style scoped>
@import '../style/global';
.enrollBox{
    input::-webkit-input-placeholder{
        color:#cbcbcb;
        font-size: 15px;
    }
    .logobox{
        position: relative;
        .logo{
            background: url("../images/logo.png") no-repeat;
            background-size: contain;
            position: absolute;
        }
    }
    .item{
            display:flex;
            flex-direction:row;
            margin-bottom:2px;
        }
    .tishi{
        color:red;
    }
    .input{
            flex:1;
            background: #fff;
            position: relative;
            .mobile{
                background: url("../images/mobile.png") no-repeat;
                background-size: contain;
                position: absolute;
            }
            .pwd{
                background: url("../images/pwd.png") no-repeat;
                background-size: contain;
                position: absolute;
            }
            input{
                display:block;
                width:100%;
                height:100%;
                padding:0  50px;
                border:none;
                box-sizing:border-box;
                border-radius:5px;
                background:#fff;
            }
        }
    .loginBtn{
        background: #3ea6d8;
        text-align: center;
        color:#fff;
        margin:0 auto;
        border-radius: 10px;

    }
}
</style>
<template>
<div class='enrollBox' >
   <div class='logobox img-size' data-height='600'>
       <div class='logo img-size' data-width='216' data-height='216' data-top='158' data-left='268'></div>
   </div>
   <div class='formBox' @click='clearEvent'>
      <div class='item'>
           <div class="input img-size" data-height='100'>
                <div class='mobile img-size' data-width='44' data-height='51'  data-top='25' data-left='20'></div>
                <input type="text" v-model="mobilephone" class="text" placeholder="请输入手机号" maxlength="11">
            </div>
        </div> 
        <div class='item'>
           <div class="input img-size" data-height='100'>
                <div class='pwd img-size' data-width='38' data-height='49' data-top='25' data-left='20'></div>
                <input type="password" v-model="pwd" class="text" placeholder="请输入密码">
            </div>
        </div> 
        <div class='tishi img-size' data-fontSize='24' data-width='546' data-height='60' data-lineHeight='60'  v-show='error'>{{errorMsg}}</div>
   </div>
   <div class='loginBtn img-size' data-width='680' data-height='80' data-lineHeight='80' data-fontSize='32' data-marginTop='100' @click='gologoin'>登录</div>
</div>

</template>
<script>
import Verify from "../common/verifcation.js";
import {gologin} from "../common/URL.js";
    export default {
        data(){
            return {
                mobilephone:"",
                pwd:"",
                error:false,
                errorMsg:""
            }
        },
        components:{
      
        },
        mounted(){
            document.title = '登录';
            T.init();
            T.setImgSize();
        },
        methods : {
            clearEvent:function(){
                this.error=false;
            },
            gologoin:function(){
                const self=this;
                 let phone = Verify.mobile(this.mobilephone);
                 let password=Verify.pwd(this.pwd);
                 const pwd=md5(self.pwd);
                let appkey="oQIhAP24Kb3Bsf7IE14wpl751bQc9VAPsFZ+lql4riBgg2TDAiEAsSomOO1v8mK2VWhEQh6mttgN";
                const sign=appkey+"blackBox=h5|loginName="+self.mobilephone+"|loginPwd="+pwd+"|versionNumber=1.0.1";
                const signMassage=md5(sign);
                 this.verMobile(()=>{
                    this.verPwd(()=>{
                        $.ajax({
                            url:gologin,
                            beforeSend: function(request) {
                                request.setRequestHeader("signMsg", signMassage);
                            },
                             type : 'POST',
                            dataType : 'json',
                            accept: "application/json; text/plain",
                            contentType:'application/x-www-form-urlencoded',
                            data:{
                                blackBox:"h5",
                                loginName:this.mobilephone,
                                loginPwd:pwd,
                                versionNumber:"1.0.1"
                            },
                            success:function(data){
                            if(data.code==200){
                                let uid=data.data.userId;
                                router.replace({ 
                                path: 'pay',
                                query: { userId: uid }
                                })
                                }else if(data.code==400){
                                    self.showError(data.msg);
                                }
                            }
                        })
                    })
                 })
            },
            showError:function(val){
                this.error=true;
                this.errorMsg=val;
            },
            verMobile(callback){ //手机验证
                let val = Verify.mobile(this.mobilephone);
                if(val === true){
                    callback();
                }else{
                    return this.showError(val);
                }
            },
            verPwd(callback){
                let val=Verify.pwd(this.pwd);
                if(val ===true){
                    callback();
                }else {
                    return this.showError(val);
                }
            },
        }
    }
</script>
