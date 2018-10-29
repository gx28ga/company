/**
* describe 用户未登录，新用户 首页最上面
* Created by wangCuiqing
* Date: 2018/4/23
*/
<style scoped>
@import url("./style/home.css");
</style>
<template>
    <article  class="upper img-size" data-paddingBottom="40" data-marginBottom="20">
        <div class="upperTop img-size" data-height="270" data-paddingTop="70">
            <div class="logo img-size" data-width="220" data-height="70"></div>
            <div class="upperCon img-size" data-fontSize="24" data-marginTop="30" data-marginBottom="30">公司背景雄厚，资金银行存管</div>
            <div class="knowMore img-size" data-width="120" data-height="40" data-fontSize="24" data-lineHeight="40"  @click="knowMore">了解更多</div>
        </div>
        <div class="newGift img-size" data-width="710" data-height="420" data-marginTop="-50" data-paddingTop="26" >
            <div class="newGiftTitle img-size" data-fontSize="32" data-height="32" data-lineHeight="32">
                <em class="newGiftIcon img-size" data-width="30" data-height="30" data-marginRight="10"></em>新手壕礼
            </div>
            <div class="new1 img-size" data-width="590" data-height="176" data-marginTop="52" v-if="userStatus==-1" @click="goRegister"></div>
            <div class="new2 img-size" data-width="590" data-height="176" data-marginTop="52" v-if="userStatus==0" @click="goOpenAccount"></div>
            <div class="new3 img-size" data-width="590" data-height="176" data-marginTop="52" v-if="userStatus==1" @click="goProductList"></div>
            <div class="upperBtn img-size" data-width="550" data-height="80" data-lineHeight="80" data-marginTop="40" @click="gourl">{{btnValue}}</div>
        </div>
    </article>
</template>
<script>
    export default {
        props:[
            "user",
            "userStatus",
            "index"
        ],
        data(){
          return{
              btnValue:"立即注册领取1588红包"
          }
        },
        watch:{
            userStatus(){
                if(this.userStatus==-1){
                    this.btnValue="立即注册领取1588红包"
                }else if(this.userStatus==0){
                    this.btnValue="前去开户"
                }else if(this.userStatus==1){
                    this.btnValue="投资新手专享标"
                }
            }
        },
        mounted(){
            this.setImgSize();
            if(this.userStatus==-1){
                this.btnValue="立即注册领取1588红包";
            }else if(this.userStatus==0){
                this.btnValue="前去开户";
            }else if(this.userStatus==1){
                this.btnValue="投资新手专享标";
            }
        },
        methods:{
            goRegister(){//进入注册
                this.go().login.home();
            },
            goOpenAccount(){//开户
                this.go().openAccount.home();
            },
            goProductList(){//新手专享
                this.go().product.home();
            },
            gourl(){
                if(this.userStatus==-1){
                    this.goRegister();
                }else if(this.userStatus==0){
                    this.goOpenAccount();
                }else if(this.userStatus==1){
                   this.goProductList();
                }
            },
            knowMore(){//了解更多跳关于多融
                this.go().all({
                    returnUrl:"/about/dr"
                })
            }
        }
    }
</script>
