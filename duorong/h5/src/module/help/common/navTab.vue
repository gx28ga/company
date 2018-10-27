/**
* describe 底部切换
* Created by wangCuiqing
* Date: 2018/5/7
*/
<style scoped>
    .nav{
        background:#0087de;
        .number{
            background: #0075c0;
            color:#fff;
            text-align: center;
            border-bottom: 1px solid #0087de;
            border-right:1px solid #0087de;
            float: left;
        }
    }
</style>
<template>
    <div class="nav img-size" data-paddingTop="90">
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="goHome">返回首页</div>
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="goReg">注册步骤</div>
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="openStep">开户步骤</div>
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="rechargeStep">充值步骤</div>
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="investStep">投资步骤</div>
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="withdrawStep">提现步骤</div>
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="explain">名词解释</div>
         <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185' data-fontSize="32" @click="question">常见问题</div>
    </div>
</template>

<script>
    export default {
        name: "nav-tab",
        mounted(){
            this.setImgSize();
        },
        methods:{
            goReg(){
                this.go().all({
                    returnUrl:"/help/register"});
            },
            openStep(){
                this.go().all({
                    returnUrl:"/help/openStep"
                });
            },
            rechargeStep(){
                this.go().all({
                    returnUrl:"/help/rechargeStep"
                });
            },
            investStep(){
                this.go().all({
                    returnUrl:"/help/investStep"
                });
            },
            withdrawStep(){
                this.go().all({
                    returnUrl:"/help/withdrawStep"
                });
            },
            explain(){
                this.go().all({
                    returnUrl:"/help/explain"
                });
            },
            goHome(){
                this.go().all({
                    returnUrl:"/help/home"
                });
            },
            question(){
                this.go().all(
                    {returnUrl:"/help/question"});
            },
        }
    }
</script>
