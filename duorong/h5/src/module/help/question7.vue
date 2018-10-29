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
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">投资产品</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                一直收不到短信验证码，怎么办？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                购买失败怎么办？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                投资后，如何查询交易详情？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question4">
                产品到期后资金回款到哪里？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question5">
                如何判断投资已经成功？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question6">
                理财项目到期以后多少天能收到回款？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question7">
                投资标的没有募集成功怎么办？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question8">
                如何计算理财项目的收益？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question9">
                交易密码为何会被锁定？锁定了该怎么办？
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
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>一直收不到短信验证码，怎么办？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>请检查手机是否出现停机、软件拦截短信接收、网络异常、手机号是否输入正确等问题；检查无误后，在60秒后，重新点击【获取验证码】。每个手机号每天可接收5次短信验证码。如还未收到，或已超过获取次数请联系客服"+GLOBAL.sever.contactPhone+"。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question2(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>购买失败怎么办？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>由于网络或银行等问题产生购买失败的情况，我们会尽快退款。不影响你继续购买产品，您可以调整网络或银行卡再次尝试。如有问题，可即时联系客服"+GLOBAL.sever.contactPhone+"。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question3(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>投资后，如何查询交易详情？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>登录APP：【账户】→【投资记录】中查询投资信息。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question4(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>产品到期后资金回款到哪里？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>回款到账户余额，余额可提现或复投。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question5(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>如何判断投资已经成功？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>购买产品成功后次日起息，进入起息生效期，投资状态由“募集中”变为“计息中”。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question6(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>理财项目到期以后多少天能收到回款？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>产品到期后第二日回款至投资者的平台账户。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question7(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>投资标的没有募集成功怎么办？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>根据协议，资金返还至投资者的平台账户。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question8(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>如何计算理财项目的收益？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>理财项目收益=投资金额*项目期限*预期年收益率/365+额外收益。<br />项目期限=到期日-计息日+1<br />额外收益=活动加息收益+加息券收益</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question9(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>交易密码为何会被锁定？锁定了该怎么办？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>连续输错交易密码五次，交易密码将会被锁定一小时，无法进行投资。<br />您可以重设交易密码或是一小时之后再进行操作。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
        }
    }
</script>
