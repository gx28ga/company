/**
* 注册功能
* created by bo.peng 2018/3/31
* email:spion@qq.com
*/
<style scoped>
    .banner{
        img{
            width:100%;
        }
    }
</style>
<template>
    <article class="banner">
        <img @click="bannerEvent" :src="banner"/>
    </article>
</template>

<script>
    export default {
        data(){
            return{
                banner : require('../../../images/login/banner.png'),
            }
        },
        methods:{
            bannerEvent(){
                //alert("暂时没有链接")
            },
        }
    }
</script>
