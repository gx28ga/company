<style scoped>
    .main{ flex:1; overflow-y:auto;}
</style>
<template>
<article class='main child-transition'>
 
</article>
</template>
<script>


export default {
    components : {
    },
    data (){
        return {
            titleName:"应用下载",
        }
    },
    mounted(){
        document.title = '应用下载';
        T.setImgSize();
        T.btnEvent();
    },
    methods : {
     
    }
}
</script>
