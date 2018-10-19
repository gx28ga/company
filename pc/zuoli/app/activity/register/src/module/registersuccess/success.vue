<style scoped>
    .success{
        .successimg{
            background: url("../../images/limoney/success.png") no-repeat;
            background-size: contain;
            box-sizing: border-box;
        }
        .appBtn{
             color:#ffffff;
            text-align: center;
            border-radius: 45px;
            margin:10px auto;
            background:-webkit-gradient(linear, 0 0, 100% 0, from(#39d6c6), to(#3bb5dd)); 
        }
        .appContent{
            color:#333333;
            text-align: center;
        }
    }
</style>
<template>
<section class='success left-sider img-size' data-paddingBottom='180'>
   <div class='successimg img-size' data-height='744' data-marginBottom='80'></div>
   <div class='appBtn img-size' data-width='540' data-height='90' data-fontSize='36' data-lineHeight='90' @click='down'>下载APP</div>
   <div class='appContent img-size' data-fontSize='36'>下载APP，完成最后几步</div>
</section>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    export default {
        components:{
          
        },
        data(){
            return {
               
            }
        },
        mounted(){
            
        },
        methods : {
            down(){
                T.btnEvent();
            }
        }
    }
</script>
