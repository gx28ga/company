<style scope>
   .questions{
        font-family: "PingFangSC Light";
        color:#102542;
        text-align: center;
        float: left;
        .anquan{
            background: url("../images/icon1.png") no-repeat;
            background-size: contain;
        }
        .xinshou{
            background-size: contain;
            background:url("../images/icon2.png") no-repeat;
        }
        .fuli{
            background-size: contain;
            background:url("../images/icon3.png") no-repeat;
        }
   }
</style>
<template>
<div class='questionLib'>
<router-link to='/login'>
    <div class='questions img-size'>
        <div class='anquan img-size'data-width='50' data-height='51'></div>
        <div class='img-size' data-fontSize='24'>资金安全</div>
    </div>
</router-link>
 <router-link to='/login'>
    <div class='questions img-size'>
        <div class='anquan img-size'data-width='50' data-height='51'></div>
        <div class='img-size' data-fontSize='24'>资金安全</div>
    </div>
</router-link> 

<router-link to='/login'>
    <div class='questions img-size'>
        <div class='anquan img-size'data-width='50' data-height='51'></div>
        <div class='img-size' data-fontSize='24'>资金安全</div>
    </div>
</router-link> 
<router-link to='/login'>
    <div class='questions img-size'>
        <div class='anquan img-size'data-width='50' data-height='51'></div>
        <div class='img-size' data-fontSize='24'>资金安全</div>
    </div>
</router-link> 
<router-link to='/login'>
    <div class='questions img-size'>
        <div class='anquan img-size'data-width='50' data-height='51'></div>
        <div class='img-size' data-fontSize='24'>资金安全</div>
    </div>
</router-link> 
</div>
</template>
<script>
    export default {
        props : {
       
        },
        data(){
            return {
                
            }
        },
        watch : {
          
        },
        mounted(){
            T.setImgSize();     
        },
        methods : {
           
        }
    }
</script>
