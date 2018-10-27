/**
* describe 积分商城首页顶部
* Created by wangCuiqing
* Date: 2018/4/28
*/
<style scoped>
@import url("../style/shopping.css");
   .shopping .shoppingContent .prompt{
        display: table;
    }
</style>
<template>
    <div class="shoppingContent img-size" data-paddingTop="66" data-paddingBottom="60">
        <div class="myCont img-size" data-fontSize="32">我的积分</div>
        <!--<div class="rules img-size" data-width="140" data-height="56" data-lineHeight="56" data-right="0" data-top="30" data-fontSize="24">积分规则</div>-->
        <div class="contNumber img-size" data-fontSize="72" data-linHeight="75">{{data.points}}
            <span class="mingxi img-size" data-width="40" data-height="40" data-marginTop="15" data-marginLeft="15" @click="goMingXi"></span>
        </div>
        <div>
            <span class="prompt img-size" data-paddingLeft="20" data-paddingRight="20" data-height="56" data-lineHeight="56" data-marginTop="60" v-if="data.willExpirePoints>0">有{{data.willExpirePoints}}点积分将于{{data.expireDateOfPoints}}到期，请及时使用！</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:["data"],
        mounted(){
            this.setImgSize();
        },
        methods:{
            goMingXi(){
                this.go().shopping.mingXi();
            }

        }
    }
</script>
