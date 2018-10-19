<style scope>
    .dibu{
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
    <div class='dibu'>
         <router-link to="/main">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>返回首页</div>
         </router-link> 
         <router-link to="/register">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>注册步骤</div>
         </router-link>
          <router-link to="/open">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>开户步骤</div>
         </router-link> 
         <router-link to="/login">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>充值步骤</div>
         </router-link>
         <router-link to="/investment">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>投资步骤</div>
         </router-link> 
         <router-link to="/drawals">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>提现步骤</div>
         </router-link>
          <router-link to="/explain">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>名词解释</div>
         </router-link> 
         <router-link to="/problem">
             <div class='number img-size' data-height='80' data-lineHeight='80' data-width='185'>常见问题</div>
         </router-link>
        
    </div>
</template>
