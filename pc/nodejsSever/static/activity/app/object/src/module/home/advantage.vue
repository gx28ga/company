<style scoped>
    .advantage{
        background:#fff; overflow:hidden; margin-bottom:10px;
        .title{ color:#444; padding-left:15px; border-bottom: 1px solid #ddd}
        .content{
            padding:15px; text-align:center;
            ul{
                display:flex; flex-direction:row; flex-wrap: wrap;
                li{ width:49%; color:#666; text-align:center; padding:10px 0; }
            }
        }
    }
</style>
<template>
<article class='advantage'>
    <div class='title img-size' data-height='90' data-lineHeight='90' data-fontSize='30'>优势</div>
    <div class='content'>
        <img src="/login/validateCode.do" :src="imgsrc" @click="getImg">
        <img src="http://106.15.181.92:80/login/validateCode.do">
    </div>
</article>
</template>
<script>
export default {
    props : {
        icons : Array
    },
    data(){
        return {
        	imgsrc : '/login/validateCode.do'
        }
    },
    mounted(){
        this.$nextTick(T.setImgSize);
    },
    methods : {
        link(obj){
            if(obj.linkUrl){
                window.location.href = obj.linkUrl;
            }
        },
	    getImg(){
        	T.ajax({
                url : '/login/validateCode.do'
            })
        	this.imgsrc='/login/validateCode.do'
        }
    }
}
</script>