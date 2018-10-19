/**
* describe
* Created by wangCuiqing
* Date: 2018/5/7
*/
<style scoped>
@import url("./style/help.css");
</style>
<template>
    <article class="help">
        <question></question>
        <div class="explain">
            <div class="explainCon img-size" data-paddingTop="40" data-paddingLeft="50" data-paddingRight="50" data-paddingBottom="10">
                <div class="changjianTitle img-size" data-fontSize="32">常见问题</div>
                <ul>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        红包
                        <div class="answer img-size" data-fontSize="20" data-paddingLeft="30">投资时可使用，获得返现。有一定的使用条件，投资成功，立刻获得返现。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        加息券
                        <div class="answer img-size" data-fontSize="20" data-paddingLeft="30">投资时可使用，增加收益。有一定的使用条件，投资成功，回款时获得额外收益。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        超级加息券
                        <div class="answer img-size" data-fontSize="20" data-paddingLeft="30">此加息券在产品原有利率的基础有加息范围，投资成功在加息范围内随机获得加息，有可能会获得高于平均水平的加息哦。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        N天加息券
                        <div class="answer img-size" data-fontSize="20" data-paddingLeft="30">此加息券在产品原有利率的基础上加息，收益提升的天数为N(例：30天加息券在投资成功后会提升30天的收益)。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        计息日
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>投资成功，次日开始计息，产生收益。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        到期日
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>产品到期日，投资产品最后一天，当天有收益。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        回款日
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>投资本金以及收益回到账户的日期，一般为产品到期后1-2天。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        募集中
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>该笔投资产品投资成功，正在确认中。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        计息中
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>该笔投资已成功，已开始计息。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        历史年化收益率
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>年化收益率仅是把当前收益率（日收益率、周收益率、月收益率）换算成年收益率来计算的，是一种理论收益率，并不是真正的已取得的收益率。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        登录密码
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>您注册时设置的6位及以上数字、字母组合密码，用来登录多融平台</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        交易密码
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>投资前设置的6位数字密码，用于投资时确认投资意愿。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        提现密码
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>未更改过之前默认与您的交易密码一致，修改后则为您设置的8位及以上数字、字母组合密码。用于在存管银行进行提现。</div>
                    </li>
                </ul>
            </div>
        </div>
        <help-bottom></help-bottom>
    </article>
</template>

<script>
    import helpBottom from "./common/helpBottom";
    import question from "./common/questionTitle";
    export default {
        name: "explain",
        components:{
            question,
            helpBottom
        },
        mounted(){
            this.setImgSize();
            this.setTitle({
                show:true,
                title:"帮助中心",
                back:true})
            this.setNav({
                show:false,
            })
        }

    }
</script>
