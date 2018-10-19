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
        <div class='name img-size' data-fontSize='32' data-height='150' data-lineHeight='150'>投资产品</div>
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan1' data-fontSize='30'>
            一直收不到短信验证码，怎么办？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan2' data-fontSize='30'>
           购买失败怎么办？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan3' data-fontSize='30'>
          投资后，如何查询交易详情？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan4' data-fontSize='30'>
          产品到期后资金回款到哪里？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan5' data-fontSize='30'>
         如何判断投资已经成功？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan6' data-fontSize='30'>
          理财项目到期以后多少天能收到回款？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan7' data-fontSize='30'>
          投资标的没有募集成功怎么办？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan8' data-fontSize='30'>
          如何计算理财项目的收益？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
         <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan9' data-fontSize='30'>
          交易密码为何会被锁定？锁定了该怎么办？
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
                    title:'一直收不到短信验证码，怎么办？',
                    content : '<div style="padding:10px;">请检查手机是否出现停机、软件拦截短信接收、网络异常、手机号是否输入正确等问题；检查无误后，在60秒后，重新点击【获取验证码】。每个手机号每天可接收5次短信验证码。如还未收到，或已超过获取次数请联系客服400-690-8896。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan2(){
            requirePop('question1',{
                props: {
                    title:'购买失败怎么办？',
                    content : '<div style="padding:10px;">由于网络或银行等问题产生购买失败的情况，我们会尽快退款。不影响你继续购买产品，您可以调整网络或银行卡再次尝试。如有问题，可即时联系客服400-690-8896。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan3(){
            requirePop('question2',{
                props: {
                    title:'投资后，如何查询交易详情？',
                    content : '<div style="padding:10px;">登录APP：【账户】→【投资记录】中查询投资信息。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }, 
            anquan4(){
            requirePop('question2',{
                props: {
                    title:'产品到期后资金回款到哪里？',
                    content : '<div style="padding:10px;">回款到账户余额，余额可提现或复投。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }, 
            anquan5(){
            requirePop('question2',{
                props: {
                    title:'如何判断投资已经成功？',
                    content : '<div style="padding:10px;">购买产品成功后次日起息，进入起息生效期，投资状态由“募集中”变为“计息中”。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }, 
            anquan6(){
            requirePop('question2',{
                props: {
                    title:'理财项目到期以后多少天能收到回款？',
                    content : '<div style="padding:10px;">产品到期后第二日回款至投资者的平台账户。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
             anquan7(){
            requirePop('question2',{
                props: {
                    title:'投资标的没有募集成功怎么办？',
                    content : '<div style="padding:10px;">根据协议，资金返还至投资者的平台账户。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
             anquan8(){
            requirePop('question2',{
                props: {
                    title:'如何计算理财项目的收益？',
                    content : '<div style="padding:10px;">理财项目收益=投资金额*项目期限*(预期年收益率+加息部分)/365。<br />项目期限=到期日-计息日+1 <br>计息部分=活动加息+加息券or特权</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }, 
            anquan9(){
            requirePop('question2',{
                props: {
                    title:'交易密码为何会被锁定？锁定了该怎么办？',
                    content : '<div style="padding:10px;">连续输错交易密码五次，交易密码将会被锁定一小时，无法进行投资。<br />您可以重设交易密码或是一小时之后再进行操作。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
        }
    }
</script>
