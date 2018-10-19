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
            <div class="quesT img-size" data-height="150" data-lineHeight="150" data-fontSize="32">优惠福利</div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question1">
                优惠券有哪些？如何使用？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question2">
                红包什么时候能提现？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question3">
                特权是什么？有什么用？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question4">
                如何获得红包/加息券/积分？
                <div class="arrow img-size" data-width="12" data-height="24"></div>
            </div>
            <div class="questionList img-size" data-height="90" data-lineHeight="90" data-paddingLeft="30" data-fontSize="30" @click="question5">
                关于邀请每日佣金/投资返现/邀请任务有哪些奖励
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
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>优惠券有哪些？如何使用？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>红包：投资时勾选使用红包，在投资生效后，红包以现金形式发放到您的账户余额，可用于提现或复投。<br/>加息券：加息券可在产品原有利率的基础上加息，根据加息利率、投资本金和加息期计算加息收益。<br/>超级加息券：此加息券在产品原有利率的基础有加息范围，投资成功在加息范围内随机获得加息，有可能会获得高于平均水平的加息哦。<br/>N天加息券：此加息券在产品原有利率的基础上加息，收益提升的天数为N(例：30天加息券在投资成功后会提升30天的收益)。<br/>\t如何使用：在产品投资界面【确认信息】里，会自动帮您勾选收益最高的优惠券，同时您也可自由选择您想使用的优惠券/特权，再确认投资即可。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question2(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>红包什么时候能提现？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>投资生效当天，红包金额就能到客户账户余额，可提现也可复投。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question3(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>特权是什么？有什么用？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'> 特权是根据不同的VIP会员等级对应的不同福利。比如加息特权，可在投资时进行不同幅度的产品加息。加息特权与优惠券券不能同时使用。更多特权多融将陆续推出，敬请期待。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question4(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>如何获得红包/加息券/积分？</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>红包/加息券的两种获取途径：<br/>1、通过参加平台各项活动获得，可留意APP最新活动信息。如：天天大富翁活动。<br/>2、通过积分兑换，可前往APP：【账户】→【积分商城】<br/>积分的获取途径：<br/>1、通过参加平台各项活动获得，可留意APP最新活动信息<br/>2、通过完成平台的任务获得，前往APP：【账户】→【任务中心】</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
            question5(){
                this.$pop({
                    close : true,//是否显示关闭按钮
                    icon:false,
                    content : "<div style='border-bottom:1px solid #ccc;width:100%;height:30px;text-align:left'>关于邀请每日佣金/投资返现/邀请任务有哪些奖励</div><div style='text-align: left; color:#102542;padding-top: 10px;line-height:24px'>邀请好友注册并投资任意产品（除新手宝），建立邀请关系，可获得以下福利：<br />1、首月返现奖励：被邀请人在注册成功当天起30天内（含第30天），成功投资（除新手标外）定期产品，邀请人就能获得一定比例的现金返利<br />2、邀请每日佣金：平台根据邀请人及被邀请人的总待收本金，计算并发放每日佣金奖励。每日发放上一日产生的佣金。计算公式：佣金利率X好友总待收/365<br />3、邀请任务奖励：活动期间完成邀请任务，按邀请成功人数发放不同的现金奖励。<br />详见邀请好友活动介绍，以活动页面规则为准。</div>",
                    superClass : "questionPop",
                    width:'100%',
                    transition : "up"
                });
            },
        }
    }
</script>
