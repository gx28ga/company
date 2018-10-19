<style scoped>
    .main{ flex:1; overflow-y:auto;}
</style>
<template>
<article class='main child-transition'>
  <!--   <topbar v-bind:titleName="titleName"></topbar> -->
    <!--<download></download>-->
    <login></login>
</article>
</template>
<script>

// import topbar from '../../components/topbar.vue';//顶部文字
import download from '../../components/download.vue';//浮层
import login from './login.vue';//浮层
export default {
    components : {
        download,
        // topbar,
        login
    },
    data (){
        return {
            titleName:"设置登录密码",
        }
    },
    mounted(){
        document.title = '设置登录密码';
        T.setImgSize();
    },
    methods : {
       
    }
}
</script>
