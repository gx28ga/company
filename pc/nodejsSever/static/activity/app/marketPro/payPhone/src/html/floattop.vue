<style scoped>
    @import './../css/main.css';
    .floatTop{ background: #331e0a; 
        .close{ height:100%; background:url('../images/close.png') no-repeat; background-size:contain;background-position: center; display: inline-block;}
        .downlogo{ height:100%; display: inline-block; background: url('../images/downlogo.png') no-repeat; background-size: contain; }
        .downBtn{ display: inline-block;float: right; background: #ff651a; color: #fff; text-align: center; }
    }
</style>
<script>
    export default {
        data(){
            return{
                downTop: true,
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods :{
            closeTop :function(){
                this.downTop=false;
            },
        }
    }
</script>
<template>
    <div v-show='downTop' class="floatTop img-size" data-height='88'>
        <i class="close img-size" data-width='31' data-marginLeft='22' data-marginRight='50' @click='closeTop'></i>
        <i class="downlogo img-size" data-width='299'></i>
        <a href="http://www.duorongcf.com/html/activity/2weima.html" target="_blank" class="downBtn img-size" data-width='260' data-lineHeight='88' data-fontSize='36' data-borderTopLeftRadius='10' data-borderBottomLeftRadius='10'>立即下载</a>
    </div>
</template>