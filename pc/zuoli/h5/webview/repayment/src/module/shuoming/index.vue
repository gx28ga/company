<style scoped>
@import '../../style/global';
.enrollBox{
    background: #fff;
    .title{
        color:#333;
    }
    .pictuer{
        margin:0 auto;
        .pic1{
            background: url("../../images/p1.png") no-repeat;
            background-size: contain;
        } 
         .pic2{
            background: url("../../images/p2.png") no-repeat;
            background-size: contain;
        } 
         .pic3{
            background: url("../../images/p3.png") no-repeat;
            background-size: contain;
        } 
         .pic4{
            background: url("../../images/p4.png") no-repeat;
            background-size: contain;
        }
    }
}
</style>
<template>
<div class='enrollBox img-size' data-paddingLeft='30' data-paddingTop='30'>
   <div class='title img-size' data-fontSize='28' data-height='50' data-lineHeight='50'>1、打开支付宝，选择转账</div>
   <div class='pictuer img-size' data-paddingLeft='30'><div class='pic1 img-size' data-width='273' data-height='224' ></div></div>
   <div class='title img-size' data-fontSize='28' data-height='50' data-lineHeight='50'>2、选择转到银行卡</div>
   <div class='pictuer img-size' data-paddingLeft='30'><div class='pic2 img-size' data-width='273' data-height='319' ></div></div>
   <div class='title img-size' data-fontSize='28' data-height='50' data-lineHeight='50'>3、填写转账信息以及转账金额</div>
   <div class='pictuer img-size' data-paddingLeft='30'><div class='pic3 img-size' data-width='273' data-height='296' ></div></div>
   <div class='title img-size' data-fontSize='28' data-height='50' data-lineHeight='50'>4、务必在备注上填写您的粒粒钱包账号手机</div>
   <div class='pictuer img-size' data-paddingLeft='30'><div class='pic4 img-size' data-width='273' data-height='317' ></div></div>
</div>
</template>
<script>
    export default {
        data(){
            return {
               
            }
        },
        components:{
      
        },
        mounted(){
            document.title = '转账说明';
            T.setImgSize();
        },
        methods:{
          
        }
    }
</script>
