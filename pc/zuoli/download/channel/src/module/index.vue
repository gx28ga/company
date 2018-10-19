<style scoped>
    .img{
        img{width:100%;}
    }
    .text{
        text-align: center;
        em{
            text-align: center;
            color: #ff4e6b;
        }
    }
</style>
<template>
<article>
    <div class="img">
        <img src="../images/bao.png">
    </div>
    <div class="text img-size" data-paddingTop="50">
        <p>最高额度</p>
        <em class="img-size" data-fontSize="60">3,000.00</em>
    </div>
    <div class="btn img-size" @click="submit" data-fontsize="36" data-height="90"  data-marginTop="50" data-lineheight="90" data-width="546" >
        立即下载
    </div>
</article>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            T.setImgSize();
        },
        methods:{
        	submit(){
        		T.downApp();
            }
        }
    }
</script>