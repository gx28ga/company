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
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">新用户福利</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                有哪些新用户福利？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                什么是新手福利产品？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                新手产品注意事项？
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
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>有哪些新用户福利？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>新用户注册成功后将会获得价值1588元的组合红包。<br/>新用户注册成功后还将获得一张2%的加息券。<br/>可以投资新注册用户专享的高息福利产品。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question2(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>什么是新手福利产品？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>关于年化：新手福利产品年化为产品基础利率+平台新手加息。<br />关于计息：当日购买，次日起息。<br />关于期限：新用户可购买的新手福利产品分为两种，一种为半月期左右，另一种为一月期左右。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question3(){
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
