/**
* describe
* Created by wangCuiqing
* Date: 2018/5/7
*/
<style scoped>
@import url("./style/help.css");
</style>
<style>
    .content{
        div{
            padding:0;
        }
    }
</style>
<template>
    <article class="help">
        <div class="questionHelp">
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">热点问题</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                提现什么时候到账？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                充值后，银行已扣款，平台余额没有增加？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                充值不成功最主要的几个原因？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question4">
                一直收不到短信验证码，怎么办？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question5">
                新手产品注意事项？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
        </div>
    </article>
</template>

<script>
    import GLOBAL from "../../contant/GLOBAL";
    export default {
        name: "question1",
        mounted(){
            this.setImgSize();
        },
        methods:{
            question1(){
                 this.$pop({
               title:false,
               close : true,//是否显示关闭按钮
               icon:false,
               content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>提现什么时候到账？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>提现将于存管银行收到申请后，工作日期间1-2天内到账，节假日顺延到下一个工作日审核到账。</div>",
               footer:false,
               superClass : "questionPop",
               width:'100%',
               transition : "up"
           });
            },
            question2(){
                 this.$pop({
               close : true,//是否显示关闭按钮
               icon:false,
               content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>充值后，银行已扣款，平台余额没有增加？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px''>可能由以下几种情况导致：<br />1、网络不稳定造成的显示不同步  →稍后刷新<br />2、因不同银行操作划账时间差异，可能导致实际到账时间有延迟 →建议半小时后再查看<br />3、银行系统问题导致的 →保留充值截图，联系客服"+GLOBAL.sever.contactPhone+"，我们会在第二个工作日与银行对账后给予确认</div>",
               superClass : "questionPop",
               width:'100%',
               transition : "up"
           });
            },
            question3(){
                 this.$pop({
               close : true,//是否显示关闭按钮
               icon:false,
               content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>充值不成功最主要的几个原因？</div><div style='text-align: left; color:#102542;padding-top: 10px;;line-height:24px'>（1）您的银行卡未开通网银，请开通网银支付功能；<br />（2）您的银行卡余额不足；<br />（3）您的银行卡或已过期、作废、挂失；<br />（4）您输入的银行卡号或密码错误；<br />（5）超过银行充值限额，请联系银行提供支付额度。</div>",
               superClass : "questionPop",
               width:'100%',
               transition : "up"
           });
            },
            question4(){
                 this.$pop({
               close : true,//是否显示关闭按钮
               icon:false,
               content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>一直收不到短信验证码，怎么办？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>请检查手机是否出现停机、软件拦截短信接收、网络异常、手机号是否输入正确等问题；检查无误后，在60秒后，重新点击【获取验证码】。每个手机号每天可接收5次短信验证码。如还未收到，或已超过获取次数请联系客服"+GLOBAL.sever.contactPhone+"。</div>",
               superClass : "questionPop",
               width:'100%',
               transition : "up"
           });
            },
            question5(){
                 this.$pop({
               close : true,//是否显示关闭按钮
               icon:false,
               content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>新手产品注意事项？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>新手专区中的产品，为新注册用户专享的福利产品，不同类型的产品用户只能购买一次。<br />投资过普通产品后将无法再投资新手产品。<br />购买半月期新手产品后可购买新手月标，购买新手月标后无法购买新手半月期产品。</div>",
               superClass : "questionPop",
               width:'100%',
               transition : "up"
           });
            },
        }
    }
</script>
