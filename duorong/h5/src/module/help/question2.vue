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
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">资金安全</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                银行存管如何保障用户资金安全？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                为什么选择多融财富？多融财富的优势是什么？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                什么是票据理财？
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
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>银行存管如何保障用户资金安全？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>用户资金由银行进行存管，与平台隔离，平台无权限触碰用户资金；只有用户下达资金交易指令后，资金才能进行划转。存管银行会对用户交易流程进行全程监管与核查，保障用户资金安全，保障双方债权关系清晰明确。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question2(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>为什么选择多融财富？多融财富的优势是什么？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>多融财富，拥有国资委下属事业单位及上市公司背景，背靠大型国有企业，拥有强大财力支撑，资金由银行存管；多融财富专注于大型国企供应链金融，项目均为国企签发的商票或银行承兑汇票，票据资产由银行或国企承诺100%无条件兑付。多融通过多方严格审核，确保票据真实、合规、有效。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question3(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>什么是票据理财？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>票据理财，是指借款企业以银行到期承兑汇票、企业到期承兑的商业汇票作为质押，投资人通过平台认购票据收益权，到期后由借款人支付借款本金和收益。<br />在多融的产品模式下，银行承兑汇票作为还款保证，到期后，若借款人无法按期清偿本息，则该银行承兑汇票由银行到期无条件承兑，兑付款项偿还至出借人。而多融的商业承兑汇票，则均是由资产规模达百亿以上的大型国企为商业承兑汇票到期足额兑付。整个投资过程清晰透明，投资人可以随时查询相关信息。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
        }
    }
</script>
