/**
* describe 敬请期待
* Created by wangCuiqing
* Date: 2018/5/31
*/
<style scoped>
    html,body{
        margin:0;
        padding:0;
        background:#f2f2f2;
    }
    .wapper{
        margin-top:200px;
    }
    .img{
        width:90px;
        height:80px;
        margin:0 auto;
        background:url("../../images/about/pic.jpg") no-repeat;
        background-size:contain;
    }
    p{ text-align:center; }
</style>
<template>
<article>
    <div class="wapper">
        <div class="img"></div>
        <p>敬请期待</p>
    </div>
</article>
</template>

<script>
    export default {
        name: "look-forward-to",
        mounted(){
            this.setTitle({
                title:"敬请期待",
                show:true,
                back:true,
            })
        }
    }
</script>
