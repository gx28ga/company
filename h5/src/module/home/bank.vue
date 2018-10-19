/**
* describe 老用户
* Created by wangCuiqing
* Date: 2018/4/25
*/
<style scoped>
.bankList{
    display:flex;
    background:#fff;
}
.bankIcon{
    flex:1;
    background:url("../../images/home/bank.png") no-repeat;
    background-size:contain;
}
 .sasacIcon{
     flex:1;
     background:url("../../images/home/national.png") no-repeat;
     background-size:contain;
 }
.insurance{
     flex:1;
     background:url("../../images/home/insurance.png") no-repeat;
    background-size:contain;
 }
</style>
<template>
    <div class="bankList img-size" data-paddingleft="18" data-paddingRight="18" data-paddingBottom="60">
        <div class="bankIcon img-size" @click="goBank" data-width="222" data-height="120" data-marginRight="12" data-marginLeft="12"></div>
        <div class="sasacIcon img-size" @click="gosas" data-width="222" data-height="120" data-marginRight="12" data-marginLeft="12"></div>
        <div class="insurance img-size" @click="goInsurance" data-width="222" data-height="120" data-marginRight="12" data-marginLeft="12"></div>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.setImgSize();
        },
        methods:{
            goBank(){
               this.go().all({
                   returnUrl:"/about/bankDepositManagement"
               })
            },
            gosas(){
                this.go().outside({
                    url: "https://www.duorongcf.com/html/activity/conference-app.html",
                    title: "国家事业单位控股"
                })
            },
            goInsurance(){
                this.go().all({
                    returnUrl:"/about/insurance"
                })
            }
        }
    }
</script>
