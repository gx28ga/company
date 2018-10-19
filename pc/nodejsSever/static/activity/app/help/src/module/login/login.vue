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
    <div class='bigtitle img-size' data-fontSize='30'  >充值步骤</div>
    <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>1</span>步：在充值页面输入您希望充值的金额，<br>点击“下一步”</div>
    <div class='picture img-size' data-height="1066" data-width="600">
        <img src="../../images/recharge/chongzhi1.jpg"  alt="" class='picture img-size' data-height="1066" data-width="600">
    </div> 
      <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45'  data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>2</span>步：在确认充值页面确认您的信息，<br>确认预留手机号无误后点击“发送验证码”</div>
     <div class='littleTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（若预留手机号码错误可自行进行修改）</div>  
    <div class='picture img-size' data-height="925" data-width="613">
        <img src="../../images/recharge/chongzhi2.png"  alt="" class='picture img-size' data-height="925" data-width="613">
    </div>   
       <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>3</span>步：输入短信验证码，<br>确认无误点击“确认充值”</div> 
    <div class='picture img-size' data-height="939" data-width="613">
        <img src="../../images/recharge/chongzhi3.png"  alt="" class='picture img-size' data-height="939" data-width="613">
    </div>  
    <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>4</span>步：充值成功，<br>可以开始理财赚取收益啦</div> 
    <div class='picture img-size' data-height="1087" data-width="621">
        <img src="../../images/recharge/chongzhi4.png"  alt="" class='picture img-size' data-height="1087" data-width="621">
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
