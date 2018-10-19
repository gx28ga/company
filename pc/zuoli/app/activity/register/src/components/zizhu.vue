<style scoped>
   .zizhu{
        background:#fff;
        .liimg{
            background: url("../images/limoney/bao.png") no-repeat;
            background-size: contain;
            box-sizing: border-box;
        }
        .product{
            text-align: center;
            color:#333333;
        }
        .number{
            text-align: center;
            color:#ff4e6b;
        }
        .mobile{
            border:1px solid #dcdcdc;
            background: #fff;
            margin:0 auto;
            border-radius: 40px;
         .input{
            flex:1;
            input{
                display:block;
                width:100%;
                height:100%;
                border:none;
                box-sizing:border-box;
                border-radius: 40px;
                padding:0 10px;
                background:#fff;
                :-webkit-input-placeholder{
                    color:red;
                    font-size:30px;
                }
            }
        }
        }
        .tishi{ 
            margin:0 auto;
            color:#999;
        }
        .edu{
           .eduBtn{
                color:#ffffff;
                text-align: center;
                border-radius: 40px;
                margin:10px auto;
                 background:-webkit-gradient(linear, 0 0, 100% 0, from(#39d6c6), to(#3bb5dd));
           } 
        }
        .read{
            padding-top:10px;
            line-height:20px;
            color:#333333;
            margin: auto;
            .select{
                display:inline-block;
                margin:  0 30px;
            }
            .check{
                float:left;
                margin-top:5px;
                margin-right:5px;
                background:url("../images/limoney/check.png") no-repeat;
                background-size:contain;
                &.cur{
                     background-image:url("../images/limoney/checked.png");
                 }
            }
            .link{
               color:#0099ff; 
            }
            a:visited{
                text-decoration: none;
            }
        }
        }
</style>
<template>
<article class='zizhu img-size'>
    <div class='liimg img-size' data-height='617'></div>
    <div class="product img-size" data-fontSize='32' data-height='60' data-lineHeight='60' data-marginTop='10'>最高额度</div>
    <div class='number img-size' data-fontSize='60' data-height='70' data-lineHeight='70' data-marginBottom='80'>3,000.00</div>
    <div class='mobile img-size' data-width='546'>
        <div class='input img-size' data-height='86' data-lineHeight='86' >
            <input type="text" class='text' v-model='mobile' placeholder="请输入常用手机号" maxlength="11" v-on:blur='moblieBlur' v-on:input="mobileInput">
         </div>
    </div>
    <div class='tishi img-size' data-fontSize='24' data-width='546' data-height='60' data-lineHeight='60' v-show='isRight'>{{error}}</div>
    <div class='edu'>
        <div class='eduBtn img-size' data-fontSize='36' data-height='90' data-lineHeight='90' data-width='546' @click='isReg'>立即领取额度</div>
    </div>  
    <div class='read'>
        <div class='select img-size' data-fontSize='24' data-marginBottom='80'>
            <div class='check  img-size'  :class="{cur:checked}" data-width='26' data-height='25' @click='check'></div>
            开始使用即同意<a class='link' href='../protocol/zhuce.html'>《用户注册协议》</a>及<a class='link' href='../protocol/fuwu.html'>《用户服务协议》</a>
        </div>
    </div> 
</article>
</template>
<script>
import Verify from '../common/verifcation'
import requirePop from '../pop/requirePop.js';
import { mapState , mapGetters } from 'vuex';
export default {
    data (){
        return {
            mobile:"",
            checked:true,
            error:null,
            isRight:false
        }
    },
    computed : {
    },
    mounted(){
    },
    watch:{
        
    },
    methods : {
        enroll(){
            requirePop("tel",{
                props : {
                    transition : 'fadeIn'
                }
            })
          },
          moblieBlur(callback){
                let phone = Verify.mobile(this.mobile);
                if(phone==true){
                 this.isRight=false;
                }else{
                    this.isRight=true;
                   this.error="请输入正确的手机号";
                }
          },
        check(){
                this.checked = !this.checked;
            },
          mobileInput(callback){//输入手机号
                let phone = Verify.mobile(this.mobile);
                 if(phone==true){
                  this.isRight=false;
                }else{
                    this.isRight=true;
                   this.error="请输入正确的手机号";
                }
          },
          isReg(callback){//判断是否注册过
                let phone = Verify.mobile(this.mobile);
                let mobileLength=this.mobile.length;
                let che=this.checked;
                if(T.Iphone){
                    window.location.href="https://www.zuoli360.com/h5/webview/expect/qidai.html";
                }else{
                if(phone && che && mobileLength==11){
                     T.ajax({
                    url:"/api/user/isPhoneExists.htm",
                    data:{
                        phone:this.mobile
                    },
                    callback:true
                 }).then(data=>{
                    if(data.code==200){
                        if(data.data.isExists==10){ 
                        router.replace({ 
                            path: 'login',
                            query: { phone: this.mobile , toFrom: T.toFrom }
                        })
                        } else{
                          requirePop("tel",{
                            props : {
                                transition : 'fadeIn'
                                }
                             })
                    }
                    }
                   
                 })
             }else{
                if(che==false){
                this.isRight=true;
                this.error="请同意注册协义后，再领取额度"
                }else{
                        this.isRight=true;
                 this.error="请输入正确的手机号";    
                }   
             }
                }
                
          },
        
    }
}
</script>

