/**
* describe 关于多融页面
* Created by wangCuiqing
* Date: 2018/5/15
*/
<style scoped>
    .bg1{
        background:url("../../images/about/aboutUs/ico_aboutus_01.png") no-repeat;
        background-size:contain;
    }
    .bg2{
        background:url("../../images/about/aboutUs/ico_aboutus_02.png") no-repeat;
        background-size:contain;
    }
    .bg3{
        background:url("../../images/about/aboutUs/ico_aboutus_03.png") no-repeat;
        background-size:contain;
    }
    .bg4{
        background:url("../../images/about/aboutUs/ico_aboutus_04.png") no-repeat;
        background-size:contain;
    }
    .bg5{
        background:url("../../images/about/aboutUs/ico_aboutus_05.jpg") no-repeat;
        background-size:contain;
    }

</style>
<template>
    <article>
        <div class="img-size bg1" data-width="750" data-height="379"></div>
        <div class="img-size bg2" data-width="750" data-height="540"></div>
        <div class="img-size bg3" data-width="750" data-height="445"></div>
        <div class="img-size bg4" data-width="750" data-height="650"></div>
        <div class="img-size bg5" data-width="750" data-height="484"></div>
    </article>
</template>

<script>
    export default {
       mounted(){
           this.setImgSize();
           this.setTitle({
               title:"关于多融",
               show:true,
               back:true,
               share:true,
               shareConfig:{
                   title:"关于多融",
                   link:window.location.href,
                   desc:"关于多融",
                   imgUrl:'',
                   type:'',
                   dataUrl:''
               }
           })
           this.setNav({
               show:false
           })
       }
    }
</script>
