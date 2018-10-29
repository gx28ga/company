/**
* describe
* Created by wangCuiqing
* Date: 2018/5/7
*/
<style scoped>
@import url("../style/help.css");
</style>
<template>
    <article class="help">
        <div class="nav1">
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40" @click="isShow('1')">
                <img src="../../../images/help/icon1.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>资金安全</p>
            </div>
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40" @click="isShow('2')">
                <img src="../../../images/help/icon2.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>新用户福利</p>
            </div>
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40" @click="isShow('3')">
                <img src="../../../images/help/icon3.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>优惠福利</p>
            </div>
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40" @click="isShow('4')">
                <img src="../../../images/help/icon4.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>银行卡</p>
            </div>
        </div>
        <div class="nav1">
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40" @click="isShow('5')">
                <img src="../../../images/help/icon5.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>账户安全</p>
            </div>
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40" @click="isShow('6')">
                <img src="../../../images/help/icon6.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>投资产品</p>
            </div>
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40" @click="isShow('7')">
                <img src="../../../images/help/icon7.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>充值/回款/提现</p>
            </div>
            <div class="img-size" data-width="190" data-paddingTop="50" data-paddingBottom="40">
                <!--<img src="../../../images/help/icon1.png" alt="" class="img-size" data-width="50" data-height="50">
                <p>资金安全</p>-->
            </div>
        </div>
            <question1 v-if="show1"></question1>
            <question2 v-if="show==1"></question2>
            <question3 v-if="show==2"></question3>
            <question4 v-if="show==3"></question4>
            <question5 v-if="show==4"></question5>
            <question6 v-if="show==5"></question6>
            <question7 v-if="show==6"></question7>
            <question8 v-if="show==7"></question8>
    </article>
</template>

<script>
    import question1 from "../question1";
    import question2 from "../question2";
    import question3 from "../question3";
    import question4 from "../question4";
    import question5 from "../question5";
    import question6 from "../question6";
    import question7 from "../question7";
    import question8 from "../question8";
    export default {
        components:{
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
        },
        mounted(){
            this.setImgSize();
        },
        data(){
            return{
                show1:true,
                show:null,
            }
        },
        methods:{
            isShow(item){
                this.show=item;
                this.show1=false;
            }
        }
    }
</script>
