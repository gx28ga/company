<style scope>
    .question1{
        background: #fff;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
    }
    .rightIcon{
        float: right;
        background:url("../../images/angular.png") no-repeat;
        background-size: contain;
    }
       .name{
         text-align: center; 
        color:#0aa1e3;
        background: #fff; 
    }
</style>
<template>
    <section class='quest'>
     <div class='name img-size' data-fontSize='32' data-height='150' data-lineHeight='150'>充值/回款/提现</div>
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan1' data-fontSize='30'>
            充值有没有限额？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan2' data-fontSize='30'>
           充值/提现，收费吗？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan3' data-fontSize='30'>
          充值后，银行已扣款，平台余额没有增加？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan4' data-fontSize='30'>
          网上银行重复多次付款了，该怎么办？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan5' data-fontSize='30'>
      充值不成功最主要的几个原因？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan6' data-fontSize='30'>
         提现什么时候到账？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan7' data-fontSize='30'>
          提现是否有金额或次数限制？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
    </section>
</template>
<script>
    import requirePop from "../../pop/requirePop.js";
    export default{
        methods:{
        anquan1(){
            requirePop('question',{
                props: {
                    title:'充值有没有限额？',
                    content : '<div style="padding:10px;">不同银行限额不同，具体情况请参照充值页面“限额”说明。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan2(){
            requirePop('question1',{
                props: {
                    title:'充值/提现，收费吗？',
                    content : '<div style="padding:10px;">充值：投资者充值免费，多融财富不收取手续费。<br>提现：投资过的用户每天可免费提现一次。超出次数后，需向第三方支付公司支付3元/次的手续费。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan3(){
            requirePop('question2',{
                props: {
                    title:'充值后，银行已扣款，平台余额没有增加？',
                    content : '<div style="padding:10px;">可能由以下几种情况导致：<br />1、网络不稳定造成的显示不同步  →稍后刷新<br />2、因不同银行操作划账时间差异，可能导致实际到账时间有延迟 →建议半小时后再查看<br />3、银行系统问题导致的 →保留充值截图，联系客服400-690-8896，我们会在第二个工作日与银行对账后给予确认。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }, 
            anquan4(){
            requirePop('question2',{
                props: {
                    title:'网上银行重复多次付款了，该怎么办？',
                    content : '<div style="padding:10px;">请保留充值截图，联系客服400-690-8896，我们会在第二个工作日与银行对账后给予确认，确认您的汇款后，重复支付款项会直接充值到您的账户中。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }, 
            anquan5(){
            requirePop('question2',{
                props: {
                    title:'充值不成功最主要的几个原因？',
                    content : '<div style="padding:10px;">（1）您的银行卡未开通网银，请开通网银支付功能；<br />（2）您的银行卡余额不足；<br />（3）您的银行卡或已过期、作废、挂失；<br />（4）您输入的银行卡号或密码错误；<br />（5）超过银行充值限额，请联系银行提供支付额度。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }, 
            anquan6(){
            requirePop('question2',{
                props: {
                    title:'提现什么时候到账？',
                    content : '<div style="padding:10px;">提现将于上海华瑞银行收到申请后，工作日期间1-2天内到账，节假日顺延到下一个工作日审核到账。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
             anquan7(){
            requirePop('question2',{
                props: {
                    title:'提现是否有金额或次数限制？',
                    content : '<div style="padding:10px;">根据第三方支付公司的相关规则，个人单笔最高金额50万元整，单日无上限。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
        }
    }
</script>
