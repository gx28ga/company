<style scope>
.question{
    font-family: "PingFangSC Light";
     color:#102542;
    .titlehot{
        text-align: center; 
        color:#0aa1e3;    
    }
    .questionList{
        border-top:1px solid #f2f2f2;
        background:#fff;
    }
    .rightLink{
        float: right;
        background:url("../../images/angular.png") no-repeat;
        background-size: contain;
    }
}
    
</style>
<template>
    <section class='question img-size'>
          <div class='titlehot img-size' data-fontSize='32' data-height='150' data-lineHeight='150' data-width='750'> 热点问题</div>
          <div class='questionList img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' data-fontSize='30' @click='open'>
              提现什么时候到账？
               <div class='rightLink img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
          </div> 
           <div class='questionList img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' data-fontSize='30' @click='open1'>
             充值后，银行已扣款，平台余额没有增加？
               <div class='rightLink img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
          </div> 
           <div class='questionList img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30 ' data-fontSize='30' @click='open2'>
             充值不成功最主要的几个原因？
               <div class='rightLink img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
          </div>  <div class='questionList img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' data-fontSize='30' @click='open3'>
            一直收不到短信验证码，怎么办？
               <div class='rightLink img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
          </div>  <div class='questionList img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' data-fontSize='30' @click='open4'>
             新手宝退出（回款）注意事项
               <div class='rightLink img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
          </div> 
    </section>
</template>
<script>
    import requirePop from "../../pop/requirePop.js";
    export default{
        data(){
            return{

            }
        },
        mounted:{
       
        },
        methods : {
            open(){
                requirePop('question',{
                props: {
                    title:'提现什么时候到账？',
                    content : '<div style="padding:10px;">提现将于上海华瑞银行收到申请后，工作日期间1-2天内到账，节假日顺延到下一个工作日审核到账</div>',
                    transition : 'slideOutDown'
                }
            },'publicTips');
            } ,
            open1(){
                requirePop('question1',{
                props: {
                    title:'充值后，银行已扣款，平台余额没有增加？',
                    content : '<div style="padding:10px;">可能由以下几种情况导致：<br />1、网络不稳定造成的显示不同步  →稍后刷新<br />2、因不同银行操作划账时间差异，可能导致实际到账时间有延迟 →建议半小时后再查看<br />3、银行系统问题导致的 →保留充值截图，联系客服400-690-8896，我们会在第二个工作日与银行对账后给予确认</div>',
                    transition : 'slideOutDown'
                }
            },'publicTips');
            } ,
            open2(){
                requirePop('question2',{
                props: {
                    title:'充值不成功最主要的几个原因？',
                    content : '<div style="padding:10px;">（1）您的银行卡未开通网银，请开通网银支付功能；<br />（2）您的银行卡余额不足；<br />（3）您的银行卡或已过期、作废、挂失；<br />（4）您输入的银行卡号或密码错误；<br />（5）超过银行充值限额，请联系银行提供支付额度。</div>',
                    transition : 'slideOutDown'
                }
            },'publicTips');
            }, 
            open3(){
                requirePop('question2',{
                props: {
                    title:'充值不成功最主要的几个原因？',
                    content : '<div style="padding:10px;">请检查手机是否出现停机、软件拦截短信接收、网络异常、手机号是否输入正确等问题；检查无误后，在60秒后，重新点击【获取验证码】。每个手机号每天可接收5次短信验证码。如还未收到，或已超过获取次数请联系客服400-690-8896。</div>',
                    transition : 'slideOutDown'
                }
            },'publicTips');
            },
              open4(){
                requirePop('question',{
                props: {
                    title:'新手宝退出（回款）注意事项',
                    content : '<div style="padding:10px;">关于退出时间：随时可退出，购买当日无法申请退出<br />关于退出金额：必须全额退出，无法选择部分退出<br />关于退出结息：发起产品退出申请，当日不计息<br />关于退出方式：您于T日发起的退出申请（即点击“全额转出到余额”按钮进行转出），将于T+1日一次性本息全额退出到您的账户余额，例如：周一转出，周二到账；周五转出，下周一到账。以此类推，节假日顺延。如需提现到银行卡，可继续发起提现申请。<br />如何申请退出：点击我的账户-投资记录-点进新手宝-转出到余额</div>',
                    transition : 'slideOutDown'
                }
            },'publicTips');
            },

        }
    }
</script>

