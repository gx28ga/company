/**
* 开通银行存管提示
* created by bo.peng 2018/4/8
* email:spion@qq.com
*/
<style scoped>
    .openbrank{
        background:#fff;
        .tel{
            margin:0 auto;
            background:url("../../../images/openAccount/zhuceicon.png");
            background-size:contain;
        }
        .text{
            color:#666;
        }
        .link {
            color:#0084D7;
        }
        .aside-btn{
            text-align:center;
            color:#0084D7;
        }
        .submit{

        }
    }
</style>
<template>
    <article class="openbrank img-size" data-paddingLeft="60" data-paddingRight="60">
        <div class="tel img-size" data-width="220" data-height="220" data-marginTop="80" data-marginBottom="60"></div>
        <div class="text img-size" data-fontSize="28" data-lineHeight="60" data-marginBottom="60">
            多融财富已接入银行资金存管系统，您需要先开通银行资金存管账户，才能进行充值、提现、投资等操作！
            <!--<p class="link" @click="info">了解详情></p>-->
        </div>
        <div class="submit">
            <div class="btn img-size" @click="openAccount" data-height="80" data-lineHeight="80" data-fontSize="32">立即开通银行存管账户</div>
        </div>
        <div class="aside-btn img-size" data-fontSize="28" data-marginTop="30" @click="back">暂时跳过</div>
    </article>

</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        coumputed:{
            ...mapGetters({
                user : "getUserInfo"
            })
        },
        mounted(){
            let title = this.$route.query.title;
            title = title || "开通银行存管";
            this.setTitle({
                title : title,
                show : true
            });
            this.setImgSize();
        },
        methods : {
            info(){
                this.go().openAccount.home();
            },
            openAccount(){
                this.go().openAccount.home();
            },
            back(){
                this.go().myAccount.home();
            }
        }
    }
</script>
