/**
* 定期投资和新手宝
* created by bo.peng 2018/4/2
* email:spion@qq.com
*/
<style scoped>
.investNovce{
    li{
        display:flex;
        flex-direction:row;
        align-items:center;
        &:not(:last-child){
            border-bottom:.5px solid #d2d2d2;
        }
    }

    i.inverst{
        background:url("../../../images/account/dingqi.png");
        background-size:contain;
    }
    i.novice{
        background:url("../../../images/account/xsb.png");
        background-size:contain;
    }
    .text{
        flex:1;
        display:flex;
        flex-direction:column;
        .name,i{
            float:left;
        }
        em{
            display:block;
            color: #FE7634;
        }
    }

    .yesterday{
        text-align:right;
        color: #A0A0A0;
        display:flex;
        align-items:center;
    }
}
</style>
<template>
    <section v-if="account" class="investNovce img-size" data-marginTop="20">
        <ul>
            <li class="img-size" @click="inverst" data-height="132" data-fontSize="28" data-paddingLeft="30" data-paddingRight="30">
                <div class="text">
                    <div class="title">
                        <i class="img-size inverst"
                           data-width="32" data-height="32"
                           data-marginRight="30" data-marginTop="4"></i>
                        <div class="name">定期投资(元)</div>
                    </div>
                    <em class="img-size" data-paddingLeft="62" data-fontSize="36" v-if="showPrice">{{(account.amount)|fixed|localeString}}</em>
                    <em class="img-size" data-paddingLeft="62" data-fontSize="36" v-else>{{hideVal}}</em>
                </div>
                <div class="yesterday img-size" data-fontSize="24">
                    <div v-if="showPrice">昨日收益：{{(account.profitYesterday)|fixed |localeString}}元</div>
                    <div v-else>昨日收益：{{hideVal}}元</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </div>
            </li>
            <li v-if="account.current.isShow>0" class="img-size" data-height="132" data-paddingLeft="30" data-paddingRight="30">
                <div class="text">
                    <div class="title">
                        <i class="img-size novice"
                           data-width="32" data-height="32"
                           data-marginRight="30" data-marginTop="4"></i>
                        <div class="name">新手宝(元)</div>
                    </div>
                    <em class="img-size" data-paddingLeft="62" data-fontSize="36">129,000</em>
                </div>
                <div class="yesterday img-size" data-fontSize="24">
                    <div>昨日收益：{{showPrice?account.current.yesterdayProfit:hideVal}}元</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </div>
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
            showPrice : Boolean
        },
        data(){
            return{
                hideVal : "***"
            }
        },
        methods:{
            inverst(){
                this.go().myAccount.myInverst.home();
            }
        }
    }
</script>
