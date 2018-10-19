<style scoped>
    .problem{
        background: #fff;
    .questions{
        font-family: "PingFangSC Light";
        color:#102542;
        text-align: center;
        float: left;
        }
        .anquan{
            background: url("../../images/icon1.png") no-repeat;
            background-size: contain;
            margin: 0 auto;
        }
        .xinshou{
            background:url("../../images/icon2.png") no-repeat;
            background-size: contain;
             margin: 0 auto;
            
        }
        .fuli{
            background:url("../../images/icon3.png") no-repeat;
            background-size: contain;
             margin: 0 auto;
            
        }
        .card{
            background:url("../../images/icon4.png") no-repeat;
            background-size: contain;
             margin: 0 auto;
            
        }
        .acount{
            background:url("../../images/icon5.png") no-repeat;
             background-size: contain;
             margin: 0 auto;
            
        }
        .bill{
             background:url("../../images/icon6.png") no-repeat;
             background-size: contain;
             margin: 0 auto;
           
        }
        .riges{
            background:url("../../images/icon7.png") no-repeat;
             background-size: contain;
             margin: 0 auto;
            
        }
        .yijian{
            background:url("../../images/icon8.png") no-repeat;
             background-size: contain;
             margin: 0 auto;
            
        }
    }
   
</style>
<template>
<section class='problem left-sider img-size' data-height='350' data-width='750'>
    <router-link to='/question'>
    <div class='questions img-size' data-width='190' data-paddingTop='50' data-paddingBottom='40'>
        <div class='anquan img-size'data-width='50' data-height='51'></div>
        <div class='img-size' data-fontSize='24'>资金安全</div>
    </div>
</router-link>
 <router-link to='/question2'>
    <div class='questions img-size' data-width='180' data-paddingTop='50' data-paddingBottom='40'>
        <div class='xinshou img-size'data-width='50' data-height='50'></div>
        <div class='img-size' data-fontSize='24'>新手宝</div>
    </div>
</router-link> 

<router-link to='/question3'>
    <div class='questions img-size' data-width='180' data-paddingTop='50' data-paddingBottom='40'>
        <div class='fuli img-size'data-width='50' data-height='51'></div>
        <div class='img-size' data-fontSize='24'>优惠福利</div>
    </div>
</router-link> 
<router-link to='/question4'>
    <div class='questions img-size' data-width='190' data-paddingTop='50' data-paddingBottom='40'>
        <div class='card img-size'data-width='50' data-height='50'></div>
        <div class='img-size' data-fontSize='24'>银行卡</div>
    </div>
</router-link>
<div style='clear:both'></div> 
<router-link to='/question5'>
    <div class='questions img-size' data-width='190' data-paddingTop='50' data-paddingBottom='40'>
        <div class='acount img-size'data-width='50' data-height='50'></div>
        <div class='img-size' data-fontSize='24'>账户相关</div>
    </div>
</router-link>
 <router-link to='/question6'>
    <div class='questions img-size' data-width='180' data-paddingTop='50' data-paddingBottom='40'>
        <div class='bill img-size'data-width='50' data-height='50'></div>
        <div class='img-size' data-fontSize='24'>投资产品</div>
    </div>
</router-link>
  <router-link to='/question7'>
    <div class='questions img-size' data-width='180' data-paddingTop='50' data-paddingBottom='40'>
        <div class='riges img-size'data-width='50' data-height='50'></div>
        <div class='img-size' data-fontSize='24'>充值/回款/提现</div>
    </div>
</router-link>  
<!--  <router-link to='/login'>
   <div class='questions img-size' data-width='190' data-paddingTop='50' data-paddingBottom='40'>
       <div class='yijian img-size'data-width='50' data-height='50'></div>
       <div class='img-size' data-fontSize='24'>意见反馈</div>
   </div>
</router-link>  -->
</section>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    export default {
        components:{
          
        },
        data(){
            return {
               
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
        }
    }
</script>
