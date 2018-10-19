<style scoped>
    .main{ flex:1; overflow-y:auto;}
</style>
<template>
<article class='main child-transition'>
 <!--    <topbar v-bind:titleName="titleName"></topbar> -->
    <!--<download></download>-->
    <zizhu></zizhu>
</article>
</template>
<script>

import topbar from '../components/topbar.vue';//顶部文字
import download from '../components/download.vue';//浮层
import zizhu from '../components/zizhu.vue';//浮层
export default {
    components : {
        download,
        topbar,
        zizhu
    },
    data (){
        return {
            titleName:"自助申请 神速放款",
        }
    },
    mounted(){
        this.panduan();
        document.title = '自助申请 神速放款';
        T.setImgSize();
 
    },
    methods : {
        panduan(){
             if(T.Iphone){
            window.location.href="https://www.zuoli360.com/h5/webview/expect/qidai.html";
            } 
        }
    }
}
</script>
