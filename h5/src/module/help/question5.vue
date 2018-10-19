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
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">银行卡</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                如何绑定银行卡？绑定银行卡支持哪些银行？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                如果绑定的所绑定的银行卡丢失如何处理？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                提现银行卡可以更换吗？如何操作？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question4">
                如何修改提现手机号？
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
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>如何绑定银行卡？绑定银行卡支持哪些银行？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>绑定银行卡需提供银行卡号，对应银行卡的预留手机号，身份证号。请注意，绑定的银行卡的持卡人需与之前认证的姓名相符，否则将不能进行银行卡绑定。<br/>现支持的银行：工商-农业-建设-中国-邮储-招商-兴业-广发-平安-中信-华夏-光大-浦发-民生-交行</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question2(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>如果绑定的所绑定的银行卡丢失如何处理？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>请拨打官方电话"+GLOBAL.sever.contactPhone+"，联系客服人工处理。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question3(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>提现银行卡可以更换吗？如何操作？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>可以。请拨打官方电话"+GLOBAL.sever.contactPhone+"，联系客服人工处理。<br />请准备提供以下材料：<br />1、手持身份证+新卡照片<br />2、手持身份证+旧卡（流水单或挂失证明）照片</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question4(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>如何修改提现手机号？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>请拨打官方电话"+GLOBAL.sever.contactPhone+"，联系客服人工处理。<br/>如可接收旧手机验证码，请提供：<br>2、根据客服指示及时提供旧手机短信验证码（发起修改提现手机号操作时银行会发送验证码短信到原手机上）<br>如无法接收旧手机验证码，请根据客服指导，填写或提供：<br>1、多融变更信息表（银行卡所在省、市、新接收号码、开户行、姓名、卡号、身份证、身份证号码），并签名、手印<br>2、多融变更号码申请书（姓名、原号码、原号码、新号码），并签字、手印<br>3、自愿更换提现手机号，并自行承担责任视频</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
        }
    }
</script>
