<style>
    .tab{
        background: #fff;
        .number{
            border-bottom:1px solid #dddddd;
            position: relative;
        }
        .lib{
            font-family: "PingFangSC Light";
            color:#102542;
            border-left:4px solid #fe7634;
        }
        .jian{
            background: url("../images/angular.png") no-repeat;
            background-size:contain;
            position: absolute;
            top:12px;
            right: 10px;
        }

    }
</style>
<template>
    <div class='tab'>
        <router-link to='/register'>
            <div class='number img-size' data-height='28' data-paddingLeft='30' data-paddingTop='27' data-paddingBottom='27'>
               <div class="lib img-size" data-fontSize='28' data-height='28' data-lineHeight='28' data-paddingLeft='10'>注册步骤</div>
               <div class='jian img-size' data-width='12' data-height='24'></div>
            </div>
        </router-link> 
         <router-link to='/open'>
            <div class='number img-size' data-height='28' data-paddingLeft='30' data-paddingTop='27' data-paddingBottom='27'>
               <div class="lib img-size" data-fontSize='28' data-height='28' data-lineHeight='28' data-paddingLeft='10'>开户步骤</div>
               <div class='jian img-size' data-width='12' data-height='24'></div>
            </div>
        </router-link> 
         <router-link to='/login'>
            <div class='number img-size' data-height='28' data-paddingLeft='30' data-paddingTop='27' data-paddingBottom='27'>
               <div class="lib img-size" data-fontSize='28' data-height='28' data-lineHeight='28' data-paddingLeft='10'>充值步骤</div>
               <div class='jian img-size' data-width='12' data-height='24'></div>
            </div>
        </router-link> 
         <router-link to='/investment'>
            <div class='number img-size' data-height='28' data-paddingLeft='30' data-paddingTop='27' data-paddingBottom='27'>
               <div class="lib img-size" data-fontSize='28' data-height='28' data-lineHeight='28' data-paddingLeft='10'>投资步骤</div>
               <div class='jian img-size' data-width='12' data-height='24'></div>
            </div>
        </router-link> 
         <router-link to='/drawals'>
            <div class='number img-size' data-height='28' data-paddingLeft='30' data-paddingTop='27' data-paddingBottom='27'>
               <div class="lib img-size" data-fontSize='28' data-height='28' data-lineHeight='28' data-paddingLeft='10'>提现步骤</div>
               <div class='jian img-size' data-width='12' data-height='24'></div>
            </div>
        </router-link> 
         <router-link to='/explain'>
            <div class='number img-size' data-height='28' data-paddingLeft='30' data-paddingTop='27' data-paddingBottom='27'>
               <div class="lib img-size" data-fontSize='28' data-height='28' data-lineHeight='28' data-paddingLeft='10'>名词解释</div>
               <div class='jian img-size' data-width='12' data-height='24'></div>
            </div>
        </router-link>
    </div>
</template>
