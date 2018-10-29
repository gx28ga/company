/**
* 功能列表
* created by bo.peng 2018/4/2
* email:spion@qq.com
*/
<style scoped>
    .icon1{
        background:url("../../../images/account/ico_wdjifen.png");
        background-size:contain;
    }
    .icon2{
        background:url("../../../images/account/ico_wodeyhq.png");
        background-size:contain;
    }
    .icon3{
        background:url("../../../images/account/ico_yihuikuan.png");
        background-size:contain;
    }
    .icon4{
        background:url("../../../images/account/ico_yaoq.png");
        background-size:contain;
    }
    .icon5{
        background:url("../../../images/account/ico_quanyi.png");
        background-size:contain;
    }
</style>
<template>
    <section v-if="account" class="img-size" data-marginTop="20" data-paddingLeft="30">
        <ul>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click="mall">
                <div class="icon">
                    <i class="img-size icon1" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    我的积分
                </div>
                <aside v-if="account.userAccountLevel">
                    <div class="text img-size" data-fontSize="24">{{account.userAccountLevel.points}}积分</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click="go().myAccount.myCoupon.home()">
                <div class="icon">
                    <i class="img-size icon2" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    我的优惠券
                </div>
                <aside>
                    <div class="text img-size" data-fontSize="24">{{account.unUseFavourable}}张</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click='goDailyCommission'>
                <div class="icon">
                    <i class="img-size icon3" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    每日佣金
                </div>
                <aside>
                    <div class="text img-size" data-fontSize="24">昨日佣金{{(account.commissionYesterday)|fixed|localeString}}元</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click='goFirstMonthReturn'>
                <div class="icon">
                    <i class="img-size icon4" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    邀请投资返现
                </div>
                <aside>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click="VIP">
                <div class="icon">
                    <i class="img-size icon5" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    会员权益
                </div>
                <aside v-if="account.userAccountLevel">
                    <div class="text img-size" data-fontSize="24" v-if="account.userAccountLevel.vipLevelNum !=0 && account.userAccountLevel.vipLevelNum !=null">VIP{{account.userAccountLevel.vipLevelNum}}特权</div>
                    <div class="text img-size" data-fontSize="24" v-else>暂无特权</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
        </ul>
    </section>
</template>

<script>
    import arrow from "../../components/arrow";
    import filter from "../../../mixin/filters";
    filter.filters = {
        fixed : filter.methods._toFixed,
        localeString(val){
            return filter.methods._localeString(val,true);
        }
    };
    export default {
        mixins : [filter],
        components:{
            arrow
        },
        props:{
            user : Object,
            account : Object,
        },
        methods:{
            goFirstMonthReturn(){//邀请好友首月投资返现
                this.go().myAccount.inviteFriend.firstMonthReturn();
            },
            goDailyCommission(){//每日佣金
                this.go().myAccount.inviteFriend.dailyCommission();
            },
            VIP(){//会员权益
                this.go().myAccount.userInfo.vip();
                //this.go().myAccount.feedBack();
            },
            mall(){//积分商城
                this.go().shopping.home();
            }
        }
    }
</script>
