<style scope>
    .question1{
        background: #fff;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
    }
    .rightIcon{
        float: right;
        background:url("../../images/angular.png") no-repeat;
        background-size: contain;
    }
      .name{
         text-align: center; 
        color:#0aa1e3;
        background: #fff;    
    }
</style>
<template>
    <section class='quest'>
         <div class='name img-size' data-fontSize='32' data-height='150' data-lineHeight='150'>优惠福利</div>
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan1' data-fontSize='30'>
            红包/加息券是什么？如何使用？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan2' data-fontSize='30'>
           红包什么时候能提现？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32' data-fontSize='30'></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan3' data-fontSize='30'>
           特权是什么？有什么用？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
         <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan4' data-fontSize='30'>
           如何获得红包/加息券/积分？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan5' data-fontSize='30'>
           关于邀请每日佣金/投资返现/邀请任务有哪些奖励
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>
    </section>
</template>
<script>
    import requirePop from "../../pop/requirePop.js";
    export default{
        mounted(){
            T.setImgSize()
        },
        methods:{
        anquan1(){
            requirePop('question',{
                props: {
                    title:'红包/加息券是什么？如何使用？',
                    content : '<div style="padding:10px;">红包：投资时勾选使用红包，在投资生效后，红包以现金形式发放到您的账户余额，可用于提现或复投。<br />加息券：加息券可在产品原有利率的基础上加息，根据加息利率、投资本金和加息期计算加息收益。<br />如何使用：在产品投资界面【确认信息】里，可勾选您想使用的加息券（或红包/特权），再确认投资即可</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan2(){
            requirePop('question1',{
                props: {
                    title:'红包什么时候能提现？',
                    content : '<div style="padding:10px;">投资生效当天，红包金额就能到客户账户余额，可提现也可复投</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan3(){
            requirePop('question2',{
                props: {
                    title:'特权是什么？有什么用？',
                    content : '<div style="padding:10px;">特权是根据不同的VIP会员等级对应的不同福利。比如加息特权，可在投资时进行不同幅度的产品加息。加息特权与加息券不能同时使用。更多特权多融将陆续推出，敬请期待。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan4(){
            requirePop('question2',{
                props: {
                    title:'如何获得红包/加息券/积分？',
                    content : '<div style="padding:10px;">红包/加息券的两种获取途径：<br />1、通过参加平台各项活动获得，可留意APP最新活动信息。如：天天大富翁活动。<br />2、通过积分兑换，可前往APP：【账户】→【积分商城】<br />积分的获取途径：<br />1、通过参加平台各项活动获得，可留意APP最新活动信息<br />2、通过完成平台的任务获得，前往APP：【账户】→【任务中心】</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan5(){
            requirePop('question2',{
                props: {
                    title:'关于邀请每日佣金/投资返现/邀请任务有哪些奖励',
                    content : '<div style="padding:10px;">邀请好友注册并投资任意产品（除新手宝），建立邀请关系，可获得以下福利：<br />1、首月返现奖励：被邀请人在注册成功当天起30天内（含第30天），成功投资（除新手标外）定期产品，邀请人就能获得一定比例的现金返利<br />2、邀请每日佣金：平台根据邀请人及被邀请人的总待收本金，计算并发放每日佣金奖励。每日发放上一日产生的佣金。计算公式：佣金利率X好友总待收/365<br />3、邀请任务奖励：活动期间完成邀请任务，按邀请成功人数发放不同的现金奖励。详见邀请好友活动介绍，以活动页面规则为准</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
        }
    }
</script>
