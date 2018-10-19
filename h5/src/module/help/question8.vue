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
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">充值/回款/提现</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                充值有没有限额？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                充值/提现，收费吗？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                充值后，银行已扣款，平台余额没有增加？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question4">
                网上银行重复多次付款了，该怎么办？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question5">
                充值不成功最主要的几个原因？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question6">
                提现什么时候到账？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question7">
                提现是否有金额或次数限制？
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
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>充值有没有限额？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px;line-height:24px'>不同银行限额不同，具体情况请参照充值页面“限额”说明。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question2(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>充值/提现，收费吗？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>充值：投资者充值免费，多融财富不收取手续费。<br />提现：投资过的用户每天可免费提现一次。超出次数后，需向第三方支付公司支付3元/次的手续费。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question3(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>充值后，银行已扣款，平台余额没有增加？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>可能由以下几种情况导致<br />1、网络不稳定造成的显示不同步  →稍后刷新<br />2、因不同银行操作划账时间差异，可能导致实际到账时间有延迟 →建议半小时后再查看<br />3、银行系统问题导致的  →保留充值截图，联系客服"+GLOBAL.sever.contactPhone+"，我们会在第二个工作日与银行对账后给予确认。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question4(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>网上银行重复多次付款了，该怎么办？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>请保留充值截图，联系客服"+GLOBAL.sever.contactPhone+"，我们会在第二个工作日与银行对账后给予确认，确认您的汇款后，重复支付款项会直接充值到您的账户中。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question5(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>充值不成功最主要的几个原因？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>（1）您的银行卡未开通网银，请开通网银支付功能；<br />（2）您的银行卡余额不足；<br />（3）您的银行卡或已过期、作废、挂失；<br />（4）您输入的银行卡号或密码错误；<br />（5）超过银行充值限额，请联系银行提供支付额度。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question6(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>提现什么时候到账？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>提现将于存管银行收到申请后，工作日期间1-2天内到账，节假日顺延到下一个工作日审核到账。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question7(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>提现是否有金额或次数限制？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>根据第三方支付公司的相关规则，个人单笔最高金额50万元整，单日无上限。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
        }
    }
</script>
