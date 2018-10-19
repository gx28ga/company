/**
* describe 积分说明
* Created by wangCuiqing
* Date: 2018/5/16
*/
<style scoped>
    .pointExplanation{
        background: #fff;
        .pointTitle{
            color:#333;
            position: relative;
            .pointIcon{
                display:inline-block;
                width:0;
                height:0;
                border-left:6px solid #FC8146;
                border-top:6px solid transparent;
                border-bottom:6px solid transparent;
            }
            .pointOpen{
                border-left:2px solid #A0A0A0;
                border-top:2px solid #A0A0A0;
                transform: rotate(-135deg);
                display: inline-block;
                position: absolute;
            }
            .pointClose{
                border-right:2px solid #A0A0A0;
                border-top:2px solid #A0A0A0;
                transform: rotate(45deg);
                display: inline-block;
                position: absolute;
            }
        }
        .pointContent{
            background:#fff;
            border-top:1px solid #DDD;
            color:#A0A0A0;
            transition-duration: .3s;
        }
    }
</style>
<template>
<article>
    <div class="pointExplanation img-size" data-marginBottom="20">
        <div class="pointTitle img-size" data-height="36" data-lineHeight="36" data-paddingLeft="40" data-paddingTop="40" data-paddingRight="40" data-paddingBottom="40" @click="toggle1">
            <span class="pointIcon"></span>
            <span class="img-size" data-fontSize="28">什么是积分?</span>
            <span class="img-size" data-width="24" data-height="24" data-right="40" :class="{'pointClose':!showItem1,'pointOpen':showItem1}"></span>
        </div>
        <div class="img-size pointContent" data-paddingLeft="40" data-paddingRight="40" data-paddingTop="40" data-paddingBottom="40" data-fontSize="28" data-lineHeight="48" v-show="showItem1" :class="{'cur':showItem1}">
            积分是多融财富为答谢广大用户长期以来的支持与厚爱推出的专属奖励计划。用户通过参与各种任务和活动获取积分，用于兑换优惠券或其他精美实物奖品。“积分”计划将随着平台的发展及用户需求的变化进行不定期的调整与优化。
        </div>
    </div>
    <div class="pointExplanation img-size" data-marginBottom="20">
        <div class="pointTitle img-size" data-height="36" data-lineHeight="36" data-paddingLeft="40" data-paddingTop="40" data-paddingRight="40" data-paddingBottom="40" @click="toggle2">
            <span class="pointIcon"></span>
            <span class="img-size" data-fontSize="28">积分如何获取?</span>
            <span class="img-size" :class="{'pointClose':!showItem2,'pointOpen':showItem2}" data-width="24" data-height="24" data-right="40"></span>
        </div>
        <div class="img-size pointContent" data-paddingLeft="40" data-paddingRight="40" data-paddingTop="40" data-paddingBottom="40" data-fontSize="28" data-lineHeight="48" v-show="showItem2">

            我们会通过多种方式向您发放积分。完成积分任务、参与制定活动等都可以获得一定数量的积分。积分任务的具体领取条件及可获得的积分奖励，参见【账户】→【任务中心】

        </div>
    </div>
    <div class="pointExplanation img-size" data-marginBottom="20">
        <div class="pointTitle img-size" data-height="36" data-lineHeight="36" data-paddingLeft="40" data-paddingTop="40" data-paddingRight="40" data-paddingBottom="40" @click="toggle3">
            <span class="pointIcon"></span>
            <span class="img-size" data-fontSize="28">积分如何兑换?</span>
            <span class="img-size" :class="{'pointClose':!showItem3,'pointOpen':showItem3}" data-width="24" data-height="24" data-right="40"></span>
        </div>
        <div class="img-size pointContent" data-paddingLeft="40" data-paddingRight="40" data-paddingTop="40" data-paddingBottom="40" data-fontSize="28" data-lineHeight="48" v-show="showItem3">
            1、您可以使用积分在【账户】→【积分商城】中兑换相应的优惠卡券帮助您的财富进一步增值，或兑换精美的实物奖励。<br>
            2、兑换的优惠券（红包、加息券等），将即时发放到您的账户，请注意查收并在有效期内使用；<br>
            3、本月兑换的实物奖品将统一于下月月初前15个工作日内发放，请注意及时填写核对收货地址。<br>
            4、更多积分兑换奖品，后续陆续开放，敬请期待。
        </div>
    </div>
    <div class="pointExplanation img-size" data-marginBottom="20">
        <div class="pointTitle img-size" data-height="36" data-lineHeight="36" data-paddingLeft="40" data-paddingTop="40" data-paddingRight="40" data-paddingBottom="40" @click="toggle4">
            <span class="pointIcon"></span>
            <span class="img-size" data-fontSize="28">积分会过期吗?</span>
            <span class="img-size" :class="{'pointClose':!showItem4,'pointOpen':showItem4}" data-width="24" data-height="24" data-right="40"></span>
        </div>
        <div class="img-size pointContent" data-paddingLeft="40" data-paddingRight="40" data-paddingTop="40" data-paddingBottom="40" data-fontSize="28" data-lineHeight="48" v-show="showItem4">
            1、积分兑换遵循“先进先出”原则，兑换时优先扣除获取时间靠前的积分。积分的有效期为3个月，到期未兑换的积分，将在到期月月底最后一天23:59:59被清零。
            例如：5月1日至5月31日期间获取的积分，若在8月31号未兑换完，将在8月31号23:59:59清零，依次类推。<br>
            2、即将过期的积分，以系统最终核算为准，可登录您的多融账户 ，在【账户】→【积分商城】中查看
        </div>
    </div>
    <div class="pointExplanation img-size" data-marginBottom="20">
        <div class="pointTitle img-size" data-height="36" data-lineHeight="36" data-paddingLeft="40" data-paddingTop="40" data-paddingRight="40" data-paddingBottom="40" @click="toggle5">
            <span class="pointIcon"></span>
            <span class="img-size" data-fontSize="28">声明</span>
            <span class="img-size" :class="{'pointClose':!showItem5,'pointOpen':showItem5}" data-width="24" data-height="24" data-right="40"></span>
        </div>
        <div class="img-size pointContent" data-paddingLeft="40" data-paddingRight="40" data-paddingTop="40" data-paddingBottom="40" data-fontSize="28" data-lineHeight="48" v-show="showItem5">
            1、如发现用户通过不正当行为恶意获取积分，多融财富有权扣除、清零或拒绝发放及兑换。<br>
            2、“积分”计划的最终解释权归多融财富所有
        </div>
    </div>
</article>
</template>

<script>
    export default {
        mounted(){
             this.setImgSize();
             this.setTitle({
                 title:"积分说明",
                 back:true,
                 show:true
             })
            this.setNav({
                show:false
            })
        },
        data(){
            return{
                    showItem1:true,
                    showItem2:false,
                    showItem3:false,
                    showItem4:false,
                    showItem5:false,

            }
        },
        methods:{
            toggle1(){
                this.showItem1=!this.showItem1;
            },
            toggle2(){
                this.showItem2=!this.showItem2;
            },
            toggle3(){
                this.showItem3=!this.showItem3;
            },
            toggle4(){
                this.showItem4=!this.showItem4;
            },
            toggle5(){
                this.showItem5=!this.showItem5;
            }
        }
    }
</script>
