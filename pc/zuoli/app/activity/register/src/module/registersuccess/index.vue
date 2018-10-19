<style scoped>
    .main{ flex:1; overflow-y:auto;}
</style>
<template>
<article class='main child-transition'>
   <!--  <topbar v-bind:titleName="titleName"></topbar> -->
    <download></download>
    <success></success>
</article>
</template>
<script>

// import topbar from '../../components/topbar.vue';//顶部文字
import download from '../../components/download.vue';//浮层
import success from './success.vue';//浮层
export default {
    components : {
        download,
        // topbar,
        success
    },
    data (){
        return {
            titleName:"下载APP 完成最后几步",
        }
    },
    mounted(){
        document.title = '下载APP 完成最后几步';
        T.setImgSize();
    },
    methods : {
       
    }
}
</script>
