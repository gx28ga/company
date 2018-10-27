/**
* describe 存管操作指南弹框
* Created by wangCuiqing
* Date: 2018/5/31
*/
<style scoped>
.cunguan{
    background:url("../../../images/about/bankDepositManagement/trade-process.jpg") no-repeat;
    background-size:contain;
}
</style>
<template>
    <article>
        <div class="cunguan img-size" data-width="701" data-height="663" @click="closePop()"></div>
    </article>
</template>

<script>
    export default {
        name: "bank-deposit-management-pop",
        mounted(){
            this.setImgSize();
        },
        methods:{
            closePop(){
                this.$parent.close();
            }
        }
    }
</script>
