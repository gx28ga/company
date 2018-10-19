<style scoped>
    @import './../css/main.css';
    .module-scroll{
        background: #fff;color: #333333;
		.lang{ background: url('../images/lang.png') no-repeat; background-size: contain; color: #fff; text-align: center; span{color: #ffff00;} }
        .zctop{ background: url('../images/zctop.png') no-repeat; background-size: contain; float: right; }
    }
</style>
<script>
	import reg from '../html/reg.vue';
	export default {
	    components:{
			reg
		},
		mounted(){
	  		T.setImgSize();
	  	} 
	}
</script>
<template>
    <div class='module-scroll'>
	    <div class="lang img-size" data-height='317'>
	    	<p class="img-size" data-fontSize='36' data-paddingTop='100'>立即注册即可体验<br><span class="img-size" data-fontSize='42' data-lineHeight='80'>12%新手高息月标</span></p>
	    </div>
    	<reg></reg>
    </div>
</template>