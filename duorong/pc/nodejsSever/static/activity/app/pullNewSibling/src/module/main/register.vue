<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
</style>
<script>
	import about from './../html/about.vue';
	import reg from './../reg/reg.vue';
	import {regAndInvestCount} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
			  	phone:'',
			  	peonum : 0,
			  	investCumulative: 0
	    	}
	  	},
	  	components : {
            about,
            reg
        },
        filters: {
        	money: function(n){
	        	return parseFloat(n).toLocaleString();
        	}
        },
	  	mounted(){
	  		T.setImgSize();
	  		var self = this;
	  		self.phone = self.$route.query.phone;
	  		T.ajax({ 
	            url : regAndInvestCount , 
	            data : {},
	            callback:true,
	            success : function( _data ){
	                self.peonum = _data.map.regCount;
                    self.investCumulative = _data.map.investCumulative;
	            }
	        });
	  	}
	}
</script>
<template>
<div>
	<div class="bannbox img-size" data-height="435">
	    <div class="bga">
		    <div class="bannerc img-size" data-width="595" data-height="395" data-marginLeft="78" data-marginTop="20"></div>
	    </div>
	</div>
	<div class="hl hl1 img-size" data-paddingTop="2" style="height:auto;">
	    <div class="success regi img-size" data-marginTop="39" data-lineHeight="58"><i class="img-size" data-height="58" data-width="58" data-marginLeft="90" data-marginRight="17" ></i><span>存入账户：</span><span>{{phone}}</span></div>
	    	<div class="box2">
			    <div class="register img-size" data-width="570" data-marginTop="30" data-paddingTop="50" data-paddingBottom="25" data-borderTopLeftRadius='30' data-borderTopRightRadius='30' data-fontSize='30'>
				    <reg></reg>
			    </div>
			    <div class="bottbgg img-size" data-width="594" data-height="130">
			        <p class="img-size" data-fontSize='24'>已有<span class="img-size" data-fontSize='30'>{{peonum}}</span>用户选择多融财富</p>
			        <p class="img-size" data-fontSize='24'>累计完成投资<span class="img-size" data-fontSize='30'>{{investCumulative | money}}</span>元</p>
			    </div>
	    	</div>
	    <p class="notice img-size" data-lineHeight="100" data-fontSize='24'>操作中如有任何疑问请致联系客服：400-690-8896</p>
	</div>
	<!--<about></about>-->
</div>
</template>