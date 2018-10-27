<style scoped>
    @import './../css/main.css';
    .regOK{ 
        background: linear-gradient(to top,#5440be,#3e1691);
        .bg{
            background: url('../images/regOK.png') no-repeat;
            background-size: contain;
            margin: 0 auto;
        }
        p{
            color: #ffa129;
            text-align: center;
        }
        .cloud{
            background: url('../images/cloud.png') no-repeat;
            background-size: contain;
        }
        .btn{
            display: block;
            background: -webkit-gradient(linear,0 0 ,0 100% , from(#fee700), to(#fd8701));
            box-shadow: 1px 2px 5px #e56100;
            margin: 0 auto;
            border-radius: 100px;
            color: #fff;
            text-align: center;
            animation:fade 2000ms infinite;
        }

    }
    @keyframes fade {  
        from { opacity: 1.0; }  
        50% { opacity: 0.5; }  
        to { opacity: 1.0; }  
    }  
       
    @-webkit-keyframes fade {  
        from { opacity: 1.0; }  
        50% { opacity: 0.5; }  
        to { opacity: 1.0; }  
    }
</style>
<script>
    export default {
        mounted(){
            T.setImgSize();
        }
    }
</script>
<template>
    <div class="regOK">
        <div class="bg img-size" data-width='695' data-height='888'></div>
        <p class="img-size" data-fontSize='30' data-lineHeight='50' data-paddingTop='26'>国资+上市控股理财平台+资金银行存管+历史<br>100%如约兑付</p>
        <div class="cloud img-size" data-height='201' data-marginTop='17' data-paddingTop='104'>
            <a class="btn img-size" data-width='375' data-lineHeight='100' data-borderRadius='10' data-fontSize='36' href="http://www.duorongcf.com/html/activity/2weima.html" target="_blank" >下载APP领收益</a>
        </div>
    </div>
</template>