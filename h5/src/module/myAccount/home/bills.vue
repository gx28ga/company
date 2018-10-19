/**
* 交易对帐
* created by bo.peng 2018/4/2
* email:spion@qq.com
*/
<style scoped>
.icon1{
    background:url("../../../images/account/ico_duizhang.png");
    background-size:contain;
}
.icon2{
    background:url("../../../images/account/ico_huikuanrl.png");
    background-size:contain;
}
</style>
<template>
    <section class="img-size" data-marginTop="20" data-paddingLeft="30">
        <ul>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click="goTransaction">
                <div class="icon">
                    <i class="img-size icon1" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    交易对帐
                </div>
                <aside>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click="goCalendar">
                <div class="icon">
                    <i class="img-size icon2" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    回款日历
                </div>
                <aside>
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
    export default {
        components:{
            arrow
        },
        methods:{
            goTransaction(){
                this.go().myAccount.transaction();
            },
            goCalendar(){
                this.go().myAccount.calendar();
               /* this.go().all({
                    returnUrl:"/about/lookForwardTo"
                })*/
            }
        }
    }
</script>
