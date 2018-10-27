<style scoped>
    .downApp{
        position:relative; z-index:2;
        background: #333333;
        display:flex;
        padding:0 15px;
        align-items:center;
        .down{ color: #FF5658; border: 1px solid #FF5658; border-radius: 4px; text-align:center;
            &:hover{ background:#FF5658; color:#fff; }
         }
        .text{ flex:1; color:#fff; }
        h3{ font-weight:normal; }

        .close{ position:absolute; left:10px; top:3px; background:url(../images/close.png); background-size:contain;}
    }
</style>
<template>
<section v-if='isclose' class='downApp img-size' data-height='98'>
    <div class='close img-size' data-width='32' data-height='32' @click='close'></div>
    <i class='logo img-size' data-width='74' data-height='74'></i>
    <div class='text'>
        <h3 class='img-size' data-fontSize='32'>标题</h3>
        <p class='img-size' data-fontSize='24'>下载APP</p>
    </div>
    <a class='down img-size' @click='link' data-fontSize='26' data-width='180' data-height='58'  data-lineHeight='58'>立即下载</a>
</section>
</template>
<script>
export default {
    props:{
        closeDown : Function
    },
    data(){
        return {
            isclose : true
        }
    },
    mounted(){
        //this.isclose = T.getItem('downApp')?false:true;
    },
    methods : {
        close(){
            this.isclose = false;
            this.closeDown();
            //T.setItem('downApp',true);
        },
        link(){
            window.location.href = T.downApp;
        }
    }
}
</script>