/**
* describe  首页底部
* Created by wangCuiqing
* Date: 2018/4/23
*/
<style scoped>
@import url("./style/home.css");
</style>
<template>
    <article class="bottomSide" v-if="data">
        <!--服务用户数，累计交易额-->
        <div class="userAndAmount img-size" data-paddingTop="60" data-paddingBottom="60">
            <div class="flex1">
                <p class="img-size" data-fontSize="48">{{(data.regCount)|numercial}}</p>
                <p class="img-size" data-fontSize="24" data-marginTop="20">服务用户数</p>
            </div>
            <div class="flex1 bl">
                <!--<p class="img-size" data-fontSize="48">{{(data.investCumulative)|numerical}}</p>-->
                <p class="img-size" data-fontSize="48">{{(data.investCumulative)|numercial}}</p>
                <p class="img-size" data-fontSize="24" data-marginTop="20">累计交易额</p>
            </div>
        </div>
    </article>
</template>

<script>
    import filter from "../../mixin/filters";
    filter.filters = {
        numercial : filter.methods._numercial,
    };
    export default {
        mixins : [filter],
        props:{
            data:Object
        },
        mounted(){
        }
        // mixins : [filter],
    }
</script>
