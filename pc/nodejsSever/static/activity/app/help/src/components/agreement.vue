<style scoped>
.quandan{
    background: #fff;
}
   .normaltitle{
      text-align: center;
      color:#0aa1e3;
      font-family: "PingFangSC Light";
   }
   .quT{
        list-style: none;
        color:#dea546;
   }
   .answer{
    color:#102542;
   }
   .lill{
    color:#333;
   }
   li:before{
      content:"●";
      color:#dea546;
      margin-right: 10px;
   }
</style>
<template>
<article>
    <div class='quandan img-size' data-paddingTop='40' data-paddingLeft='50' data-paddingRight='50' data-paddingBottom='10' data-marginBottom='10'>
        <div class="normaltitle img-size" data-fontSize='32'>常见问题</div>
            <ul>
                <li class='quT img-size' data-fontSize='24'  data-lineHeight='40' data-marginBottom='50'>提现什么时候到账？
                  <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>提现将于上海华瑞银行收到申请后，工作日期间1-2天内到账，节假日顺延到下一个工作日审核到账。</div>
                </li>
                <li class='quT img-size' data-fontSize='24'  data-lineHeight='40' data-marginBottom='50'>
                   充值后，银行已扣款，平台余额没有增加？
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>可能由以下几种情况导致：</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>1、网络不稳定造成的显示不同步  →稍后刷新</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>2、因不同银行操作划账时间差异，可能导致实际到账时间有延迟 →建议半小时后再查看</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>3、银行系统问题导致的 →保留充值截图，联系客服400-690-8896，我们会在第二个工作日与银行对账后给予确认。</div> 
                </li> 
                 <li class='quT img-size' data-fontSize='24'  data-lineHeight='40' data-marginBottom='50'>
                   充值不成功最主要的几个原因？
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>（1）您的银行卡未开通网银，请开通网银支付功能；</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>（2）您的银行卡余额不足；</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>（3）您的银行卡或已过期、作废、挂失；</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>（4）您输入的银行卡号或密码错误；</div> <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>（5）超过银行充值限额，请联系银行提供支付额度。</div> 
                </li>  
                  <li class='quT img-size' data-fontSize='24'  data-lineHeight='40' data-marginBottom='50'>
                  一直收不到短信验证码，怎么办？
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>请检查手机是否出现停机、软件拦截短信接收、网络异常、手机号是否输入正确等问题；检查无误后，在60秒后，重新点击【获取验证码】。每个手机号每天可接收5次短信验证码。如还未收到，或已超过获取次数请联系客服400-690-8896。</div> 
                </li>
                  <li class='quT img-size' data-fontSize='24'  data-lineHeight='40' data-marginBottom='50'>
                  新手宝退出（回款）注意事项
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>关于退出时间：随时可退出，购买当日无法申请退出</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>关于退出金额：必须全额退出，无法选择部分退出</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>关于退出结息：发起产品退出申请，当日不计息</div>
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>关于退出方式：您于T日发起的退出申请（即点击“全额转出到余额”按钮进行转出），将于T+1日一次性本息全额退出到您的账户余额，例如：周一转出，周二到账；周五转出，下周一到账。以此类推，节假日顺延。如需提现到银行卡，可继续发起提现申请。</div> 
                     <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>   如何申请退出：点击我的账户-投资记录-点进新手宝-转出到余额</div> 
                </li>  
            </ul>
    </div>
    
</article>
</template>
<script>
    import requirePop from '../pop/requirePop.js';
    export default {
        props : {
            data : Object,
        },
        data(){
            return {
                list : null
            }
        },
        mounted(){
            let arr = [];

            this.$nextTick(T.setImgSize);
        },
        methods : {
            more(){
                //T.go.relevantagreement();
            },
            showPic(obj){
            },
        }
    }
</script>
