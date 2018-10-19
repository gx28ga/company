<style scoped>
   .download{
        background:#144466;
        position: relative;
        overflow:hidden;
        .close{
            background: url("../images/limoney/close.png") no-repeat;
            background-size:contain;
            float: left;
        }
        .logo{
            background: url("../images/limoney/icon.png") no-repeat;
            background-size: contain;
            float: left;
        }
        .name{
           color:#ffffff; 
        }
        .downloadBtn{
            background: #ff4e6b;
            text-align: center;
            color:#fff;
            border-radius: 5px;
            position: absolute;
            top:0;
            right:-3px;
        }
   }
</style>
<template>
<article class='download img-size' data-height='90' v-show='showModal'>
    <div class='close img-size' data-width='25' data-height='25' data-marginTop='33' data-marginLeft='14' @click='close'></div>
    <div class='logo img-size' data-width='75' data-height='75' data-marginLeft='17' data-marginTop='8' data-marginRight='24'></div>
    <div class='name img-size' data-paddingTop='10'>
            <div class='appName img-size' data-fontSize='30' data-height='40' data-lineHeight='40'>粒粒钱包</div>
            <div class='downapp img-size' data-fontSize='20' data-height='30' data-lineHeight='30'>下载APP，轻松体验</div>
    </div>
    <div class='downloadBtn img-size' data-width='260' data-height='90' data-lineHeight='90' data-fontSize='36' @click='download'>立即下载</div>
</article>
</template>
<script>
import { mapState , mapGetters } from 'vuex';
export default {
    props : ["titleName"],
    data (){
        return {
            titleName:"",
            showModal:true
        }
    },
    computed : {
        ...mapState([
            'user'
        ]),
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted(){
        const self = this;
    },
    methods : {
        close(){
            this.showModal=false;
             setTimeout(()=>{
                    $(this.$el).remove();
                },510);
        },
        download(){
            T.btnEvent();
        }
    }
}
</script>
