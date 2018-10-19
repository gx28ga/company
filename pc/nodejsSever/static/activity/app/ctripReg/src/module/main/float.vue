<style scoped>
	@import '../../css/global.css';
	.float{ width: 100%; background: #1a6284; position: fixed; }
    
</style>
<script>
	export default {
	    data(){
	    	return{
	    	}
	  	},
	  	components : {
        },
		ready:function(){
		    
		},
	  	watch:{
	  	},
	  	mounted(){
	  		T.setImgSize();
	  		function floatfun(){
	  			$('.float').css({top:$('body').height()});
	  		}	
	  		floatfun();
	  	},
	  	methods:{
	  	}
	}
</script>
<template>

	<div class="float img-size" data-height='100'></div>
</template>