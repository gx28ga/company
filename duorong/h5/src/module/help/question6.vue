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
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">账户安全</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                为何要进行实名认证？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                忘记密码怎么办？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                为何要进行实名认证？ 实名认证无法通过的原因？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question4">
                用户使用有年龄限制？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question5">
                同一个身份证可以绑定两个帐号吗？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
        </div>
    </article>
</template>

<script>
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
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>为何要进行实名认证？ </div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>实名认证的目的是验证您所绑定的账户是否属于您本人，并且相关操作由您本人发起。用于认证的手机号码应为您现在的常用号码，以方便您进行投资操作接受验证信息。 为了确保您的资金安全，您需要在首次投资前进行实名认证，您提现时只能提现至与您实名认证个人姓名（个人用户）或企业名称（企业用户）相一致的银行卡账户，以确保资金的安全。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question2(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>忘记密码怎么办？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>1) 点击登录页面的忘记密码。<br />2) 填写您注册时使用的手机号码，并点击【获取验证码】按钮。<br />3) 输入发送到您手机上的验证码及您新设的密码，完成密码重置。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question3(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>实名认证无法通过的原因？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>实名认证与公安系统联网，姓名与身份证号码不一致会导致认证无法通过。以下几种情况导致的实名认证不通过，建议更换投资人：<br />1、名字中带有繁体字<br />2、曾经改过名<br />3、军人专业、复员换的身份证<br />4、做过户籍变动</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question4(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>用户使用有年龄限制？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>用户必须持有有效身份证件的18—75周岁。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question5(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>同一个身份证可以绑定两个帐号吗？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>不可以</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
        }
    }
</script>
