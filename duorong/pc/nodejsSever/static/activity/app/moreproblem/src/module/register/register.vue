<style scoped>
    .progress{
        background: #0087de;
        .bigtitle{
            text-align: center;
            text-decoration: underline;
            color:#fff;
            font-family: "PingFangSC Regular";
        }
        .littleTitle{
            text-align: center;
            color:#fff;
            .lilltenumber{
                background: #fff;
                color:#0087de;
                border-radius: 50%;
                display: inline-block;
            }
        }
        .picture{
            margin: 0 auto ;
        }
    }
   
</style>
<template>
<section class='progress left-sider img-size' data-paddingBottom='70'>
    <div class='bigtitle img-size' data-fontSize='30'  >注册步骤</div>
    <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>1</span>步：输入您的手机号</div>
    <div class='picture img-size' data-height="638" data-width="601">
        <img src="../../images/register/register1.png"  alt="" class='picture img-size' data-height="638" data-width="601">
    </div> 
      <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45'  data-marginTop='90' data-marginBottom='50'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>2</span>步：输入图形验证码</div>
 
    <div class='picture img-size' data-height="841" data-width="601">
        <img src="../../images/register/register2.png"  alt="" class='picture img-size' data-height="841" data-width="601">
    </div>   
       <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>3</span>步：获取短信验证码</div> 
    <div class='picture img-size' data-height="740" data-width="600">
        <img src="../../images/register/register3.png"  alt="" class='picture img-size' data-height="740" data-width="600">
    </div>  
    <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>4</span>步：设置您的登录密码 </div> 
    <div class='littleTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（登录密码为6-18位数字字母组合）</div> 
    <div class='picture img-size' data-height="740" data-width="600">
        <img src="../../images/register/register4.png"  alt="" class='picture img-size' data-height="740" data-width="600">
    </div>   
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
            
        },
        methods : {
        }
    }
</script>
