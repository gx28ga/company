<style>
    @import "style/base.css";
</style>
<template>
    <article class="my-account" v-if="account">
        <header-top :user="user" :account="account" :showPrice="showPrice" :setPrice="setPrice"></header-top>
        <article>
            <recharge-and-withdrawals></recharge-and-withdrawals>
            <investment-and-novice :user="user" :account="account" :showPrice="showPrice"></investment-and-novice>
            <bills></bills>
            <list :user="user" :account="account"></list>
            <else-aside :user="user" :account="account"></else-aside>
        </article>
    </article>
</template>
<script>
    import {mapGetters} from 'vuex';
    import headerTop from "./home/header";
    import rechargeAndWithdrawals from "./home/rechargeAndWithdrawals";
    import investmentAndNovice from "./home/investmentAndNovice";
    import bills from "./home/bills";
    import list from "./home/list";
    import elseAside from "./home/aside";
    import {SHOW_MYACCOUNT_PRICE, RESULT_RETURNURL} from "../../contant/LOCALSTORAGE";
    export default {
        components: {
            headerTop,
            rechargeAndWithdrawals,
            investmentAndNovice,
            bills,
            list,
            elseAside
        },
        computed: {
            ...mapGetters({
                user: "getUserInfo",
                account: "getUserAccount"
            })
        },
        data() {
            return {
                showPrice: true,
            }
        },
        created() {
            this.$store.dispatch("getUserAccount");
            this.$pops.loadding();
        },
        watch:{
            account(){
                this.$pops.removeLoadding();
            }
        },
        mounted() {
            if (!this.loginJudge()) return;
            this.setTitle({
                title: "我的帐户",
            });
            //是否展示个人资产
            this.showPrice = T.getItem(SHOW_MYACCOUNT_PRICE);
            //当冲值或提现成功时要返回的页面
            T.setItem(RESULT_RETURNURL, {
                returnUrl: "/myAccount"
            });
            if(this.account){
                this.$pops.removeLoadding();
            }
        },
        methods: {
            setPrice() {
                this.showPrice = !this.showPrice;
                T.setItem(SHOW_MYACCOUNT_PRICE, this.showPrice);
            },
        }
    }
</script>
