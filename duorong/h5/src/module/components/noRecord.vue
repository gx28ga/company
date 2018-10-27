/**
* describe 暂无记录
* Created by wangCuiqing
* Date: 2018/5/7
*/
<style scoped>
    .noRecord{
        margin: 100px auto;
        color:#D2D2D2;
        text-align: center;
        .record{
            margin:0 auto;
            background:url("../../images/shopping/no.png") no-repeat;
            background-size:contain;
        }
    }
</style>
<template>
    <div class="noRecord img-size">
        <div class="record img-size" data-width="100" data-height="100"></div>
        <p class="img-size" data-fontSize="34">暂无记录</p>
    </div>
</template>

<script>
    export default {
        name: "no-record",
        mounted(){
            this.setImgSize();
        }
    }
</script>
