/**
* 风险测评没有完成弹框
* Created by wangcuiqing on 2018/4/4.
*/
<style scoped>
    .riskWrapper{
        border-radius:0 !important;
    }
    .content{
        position:relative ;
    }
    .riskTitle{
        font-family: PingFangSC-Light;
        color:#A0A0A0;
        text-align: center;
        width:100%;
        margin:0 auto;
    }
    .riskContent{
        color:#0F2443;
        text-align: justify;
    }
    .okBtn{
        background:#FE7634;
        color:#fff;
        text-align: center;
        position: absolute;
        border-radius:5px;
        display: inline-block;
        //float:right;
    }
    .cancleBth{
       color:#A0A0A0;
        text-align: center;
        background:#fff;
        display: inline-block;
        //float:right;
        position: absolute;

    }
</style>
<template>
    <article>
        <div class='content img-size' data-width='580' data-height="350">
            <div class='riskTitle img-size' data-fontSize='28' data-paddingTop='40' data-paddingBottom='40' data-width='400'>请完成风险测评后操作</div>
            <div class='riskContent img-size' data-fontSize='28' data-marginBottom='40' data-paddingLeft='60' data-paddingRight='60' data-lineHeight="40">为保障您的权益，购买风险匹配的产品
                请完成风险评测后继续操作</div>
            <div class='img-size' data-width="550" data-paddingRight="30">
                <span class='okBtn img-size' data-fontSize='28' @click='okCallback'   data-marginBottom="10"  data-paddingLeft='30' data-paddingRight='30' data-paddingTop='26' data-paddingBottom='26'  data-right="30" data-bottom="20">开始测试</span>
                <span class='cancleBth img-size' data-fontSize='28' @click='cancelCallback'  data-marginBottom="10"  data-paddingLeft='30' data-paddingRight='30' data-paddingTop='26' data-paddingBottom='26'  data-right="250" data-bottom="20">取消</span>
            </div>

        </div>
    </article>
</template>
<script>
    export default{
        mounted(){
            this.setImgSize();
        },
        methods:{
            okCallback(){
                this.$parent.close();
                this.go().myAccount.riskEvaluation();
            },
            cancelCallback(){
                this.$parent.close();
            }
        }
    }
</script>
