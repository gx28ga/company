/**
* describe
* Created by wangCuiqing
* Date: 2018/5/6
*/
<style scoped>
    @import url("./style/help.css");
</style>
<template>
    <article class="help">
        <helptitle></helptitle>
        <div class="explain img-size">
            <div class="img-size navTab">
                <div class='navTab img-size' data-paddingLeft="30" data-height="28" data-paddingTop="27" data-paddingBottom="27" @click="goReg">
                    <div class="lib img-size" data-fontSize="28" data-height="28" data-lineHeight="28" data-paddingLeft="10">注册步骤</div>
                    <div class="arrow img-size" data-width="12" data-height="24"></div>
                </div>
                <div class='navTab img-size' data-paddingLeft="30" data-height="28" data-paddingTop="27" data-paddingBottom="27" @click="openStep">
                    <div class="lib img-size" data-fontSize="28" data-height="28" data-lineHeight="28" data-paddingLeft="10">开户步骤</div>
                    <div class="arrow img-size" data-width="12" data-height="24"></div>
                </div>
                <div class='navTab img-size' data-paddingLeft="30" data-height="28" data-paddingTop="27" data-paddingBottom="27" @click="rechargeStep">
                    <div class="lib img-size" data-fontSize="28" data-height="28" data-lineHeight="28" data-paddingLeft="10">充值步骤</div>
                    <div class="arrow img-size" data-width="12" data-height="24"></div>
                </div>
                <div class='navTab img-size' data-paddingLeft="30" data-height="28" data-paddingTop="27" data-paddingBottom="27" @click="investStep">
                    <div class="lib img-size" data-fontSize="28" data-height="28" data-lineHeight="28" data-paddingLeft="10">投资步骤</div>
                    <div class="arrow img-size" data-width="12" data-height="24"></div>
                </div>
                <div class='navTab img-size' data-paddingLeft="30" data-height="28" data-paddingTop="27" data-paddingBottom="27" @click="withdrawStep">
                    <div class="lib img-size" data-fontSize="28" data-height="28" data-lineHeight="28" data-paddingLeft="10">提现步骤</div>
                    <div class="arrow img-size" data-width="12" data-height="24"></div>
                </div>
                <div class='navTab img-size' data-paddingLeft="30" data-height="28" data-paddingTop="27" data-paddingBottom="27" @click="explain">
                    <div class="lib img-size" data-fontSize="28" data-height="28" data-lineHeight="28" data-paddingLeft="10">名词解释</div>
                    <div class="arrow img-size" data-width="12" data-height="24"></div>
                </div>
            </div>
            <div class="explainCon img-size" data-paddingTop="40" data-paddingLeft="50" data-paddingRight="50" data-paddingBottom="10">
                <div class="normalTitle img-size" data-fontSize="32">热点问题</div>
                <ul>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        提现什么时候到账？
                        <div class="answer img-size" data-fontSize="20" data-paddingLeft="30">提现将于存管银行收到申请后，工作日期间1-2天内到账，节假日顺延到下一个工作日审核到账。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        充值后，银行已扣款，平台余额没有增加？
                        <div class="answer img-size" data-fontSize="20" data-paddingLeft="30">可能由以下几种情况导致：</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>1、网络不稳定造成的显示不同步  →稍后刷新</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>2、因不同银行操作划账时间差异，可能导致实际到账时间有延迟 →建议半小时后再查看</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>3、银行系统问题导致的  →保留充值截图，联系客服{{phone}}，我们会在第二个工作日与银行对账后给予确认。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        充值不成功最主要的几个原因？
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>（1）您的银行卡未开通网银，请开通网银支付功能；</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>（2）您的银行卡余额不足；</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>（3）您的银行卡或已过期、作废、挂失；</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>（4）您输入的银行卡号或密码错误；</div> <div class="answer img-size" data-fontSize='20' data-paddingLeft='20'>（5）超过银行充值限额，请联系银行提供支付额度。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        一直收不到短信验证码，怎么办？
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>请检查手机是否出现停机、软件拦截短信接收、网络异常、手机号是否输入正确等问题；检查无误后，在60秒后，重新点击【获取验证码】。每个手机号每天可接收5次短信验证码。如还未收到，或已超过获取次数请联系客服{{phone}}。</div>
                    </li>
                    <li class="img-size questionT" data-fontSize="24" data-lineHeight="40" data-marginBottom="50">
                        新手产品注意事项？
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>○	新手专区中的产品，为新注册用户专享的福利产品，不同类型的产品用户只能购买一次。</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>○	投资过普通产品后将无法再投资新手产品。</div>
                        <div class="answer img-size" data-fontSize='20' data-paddingLeft='30'>○ 购买半月期新手产品后可购买新手月标，购买新手月标后无法购买新手半月期产品。</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="lookMore img-size" data-fontSize="32" data-height="90" data-lineHeight="90" data-marginTop="20" @click="question">查看更多问题&gt;</div>
        <help-bottom></help-bottom>
    </article>
</template>
<script>
    import GLOBAL from "../../contant/GLOBAL";
    import helptitle from "./common/helpTitle";
    import helpBottom from "./common/helpBottom";
    export default {
        components : {
            helptitle,
            helpBottom
        },
        data(){
            return {
                phone:""
            }
        },
        mounted(){
            this.setTitle({
                show:true,
                title:"帮助中心",
                back:true
            })
            this.setNav({
                show:false
            })
            this.phone=GLOBAL.sever.contactPhone;
            this.setImgSize();
        },
        methods:{
            goReg(){
                this.go().all({
                    returnUrl:"/help/register"});
            },
            openStep(){
                this.go().all({
                    returnUrl:"/help/openStep"
                });
            },
            rechargeStep(){
                this.go().all({
                    returnUrl:"/help/rechargeStep"
                });
            },
            investStep(){
                this.go().all({
                    returnUrl:"/help/investStep"
                });
            },
            withdrawStep(){
                this.go().all({
                    returnUrl:"/help/withdrawStep"
                });
            },
            explain(){
                this.go().all({
                    returnUrl:"/help/explain"
                });
            },
            question(){
                this.go().all({
                    returnUrl:"/help/question"
                });
            },
        }
    }
</script>
