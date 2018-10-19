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
    <section class='quest img-size' data-paddingBottom='30'>
      <div class='name img-size' data-fontSize='32' data-height='150' data-lineHeight='150'>新手宝</div>
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan1' data-fontSize='30'>
            什么是新手宝？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan2' data-fontSize='30'>
           新手宝的收益如何计算？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan3' data-fontSize='30'>
           为什么无法再次购买新手宝？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>
         <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan4' data-fontSize='30'>
           新手宝退出（回款）注意事项
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
                    title:'  什么是新手宝？',
                    content : '<div style="padding:10px;">新手宝是多融财富为兼顾投资者收益性和流动性的需求而特别推出的新手专享类活期理财产品。收益稳健，期限灵活，随时可退。<br>温馨提示：<br>新手宝为新手专享产品，仅限新用户首笔投资，且只能投资1次。假如注册成功后首笔投资了其他产品，则无法投资新手宝。<br>每人最高可购买额度为50000元</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan2(){
            requirePop('question1',{
                props: {
                    title:'新手宝的收益如何计算？',
                    content : '<div style="padding:10px;">关于收益：新手宝预期年化5%，前7天享受5%的额外活动加息，即5%+5%，7天后如果继续持有，新手宝预期收益恢复为5%。<br>关于计息：当日购买，次日起息，第三日收益到账。发起产品退出申请，当日不计息。<br>关于结算：每日产生利息，按日结算，收益直接转入账户余额。<br>以7月1日投资5万新手宝并于7月20日发起退出申请为例：<br>7月1日购买成功<br>7月2日起开始计息<br>7月3日上一日利息直接转入账户余额<br>7月2-8日，享受额外活动加息，按5%+5%计息<br>7月9-19日，恢复产品原始收益,按5%计息<br>7月20日，发起产品退出申请，当日不计息<br>收益=（5%+5%）*50000*7/365+5%*50000*11/365=171.23元</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan3(){
            requirePop('question2',{
                props: {
                    title:'为什么无法再次购买新手宝？',
                    content : '<div style="padding:10px;">新手宝为新手专享产品，每位新用户只有一次购买机会。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan4(){
            requirePop('question2',{
                props: {
                    title:'新手宝退出（回款）注意事项',
                    content : '<div style="padding:10px;">关于退出时间：随时可退出，购买当日无法申请退出<br>关于退出金额：必须全额退出，无法选择部分退出<br>关于退出结息：发起产品退出申请，当日不计息<br>关于退出方式：您于T日发起的退出申请（即点击“全额转出到余额”按钮进行转出），将于T+1日一次性本息全额退出到您的账户余额，例如：周一转出，周二到账；周五转出，下周一到账。以此类推，节假日顺延。如需提现到银行卡，可继续发起提现申请。<br>如何申请退出：点击我的账户-投资记录-点进新手宝-转出到余额</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },

        }
    }
</script>
