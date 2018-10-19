<style scoped>
	@import '../../css/global.css';
	span{
		font-family: -apple-system, BlinkMacSystemFont,
		    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
		    "Fira Sans", "Droid Sans", "Helvetica Neue",
		    sans-serif;
		}
    .bg{ background: #f2f2f2; color: #666; font-family: "微软雅黑";
		.iconjd{ background: url('../../images/ico.png') no-repeat; background-size: contain; margin: 0 auto;} 
		.icon{ background: url('../../images/newicon.png') no-repeat; background-size: contain; display: block; float: right; } 
		.top{ width: 100%; background: #fff; display: inline-block; border-bottom: 0.0625rem solid #dedede;
	    	.title{ border-bottom: 1px solid #dedede; .name{ color: #333; float: left; }
			}
			.biao{
				p{ text-align: center; &:nth-child(1){color:#787878;} &:nth-child(2){color:#fe7634;} &:nth-child(3){span{border-right: 1px solid #dfdfdf;}}}
			}
		}
		.top2{ width: 100%; background: #fff; display: inline-block; border-bottom: 0.0625rem;
			p{ color:#333;span{ color: #fc8146; }i{ background: url('../../images/dui.png') no-repeat; background-size: contain; display: block;float: right; }.huii{  background: url('../../images/hui.png') no-repeat;background-size: contain; }}
		}
		p.info{ color: #999;}
		.btn{ margin: 0 auto; text-align: center; color: #fff; background: #fe7634; border-radius: 10px; }
		.hui{ background: #a0a0a0; }
		span.red{color: #fc8146; }
    }
</style>
<script>
	import {isHaveChance,sendAward} from '../../common/URL';
	import requirePop from '../../pop/requirePop.js';
	export default {
	    data(){
	    	return{
	    		isCanbill : false,
	    		btninfo : '使用万元体验金',
	    		xs: true,
	    		pName: '',
	    		pType:'',
	    		pRookie : null,
	    		getThis :true,
	    	}
	  	},
	  	mounted(){
	  		T.setImgSize();
  			var self = this;
	  		function aja(){
	  			T.ajax({ 
	                url : isHaveChance , 
	                data : {
	                    uid:T.uid
	                },
	                callback:true,
	                success : function( _data ){
	                	if(_data.success){
				  			self.isCanbill = true;
		                    $('.btn').css({backgroundColor:'#fe7634'});
				  			self.btninfo = '使用万元体验金';
	                	}else{
	                		if(_data.errorCode == '9998'){
			                    T.login();
	                		}else if(_data.errorCode == '1016'){
	                			self.isCanbill = false;
			                    $('.btn').css({backgroundColor:'#a0a0a0'});
			                    self.btninfo = '已投资';
	                		}
	                	}
	                }
	            });
	  		}
	  		self.islogin = T.isLogin;
	        if(!self.islogin || !T.uid){
	        	$('.btn').css({backgroundColor:'#fe7634'});
	  			self.btninfo = '请登录';
	  		}else{
		  		aja();
	  		}
	  	},
	  	methods:{
	  		billSure: function(){
	  			var self = this;
  				if(!self.islogin || !T.uid){
	  				T.login();
		  		}else{
		  			if(self.xs == true && self.isCanbill==true && self.getThis){
		  				self.getThis = false;
			  			T.ajax({
			                url : sendAward , 
			                data : {
			                    uid:T.uid
			                },
			                callback:true,
			                success : function( _data ){
			                	if(_data.success){
			                		self.pName = _data.map.rookieList[0].id;
			                		self.pType = _data.map.rookieList[0].type;
			                		self.pRookie = _data.map.shouldRookie;
						        	$('.btn').css({backgroundColor:'#a0a0a0'});
					        		requirePop('aa',{
					                    props: {
					                        product : self.pName,
					                        type : self.pType,
					                        rookie : self.pRookie
					                    }
					                },'prize');
			                	}
			                }
			            });
			  		}
	  			}
	  		},
	  		donotUse:function(){
	  			if(this.xs == false){
	  				this.xs = true;
		        	$('.btn').css({backgroundColor:'#fe7634'});
		  			$('i').removeClass('huii');
	  			}else{
	  				this.xs = false;
		        	$('.btn').css({backgroundColor:'#a0a0a0'});
		  			$('i').addClass('huii');
	  			}
	  		}
	  	}
	}
</script>
<template>
<div class="bg module-scroll">
	<div class="top img-size" data-marginTop='28' data-paddingBottom='35'>
		<div class="title img-size" data-paddingLeft='39' data-height='88' data-lineHeight='88' data-paddingRight='39'>
			<span class="name img-size" data-fontSize='34'>新手体验标</span>
			<span class="icon img-size" data-height='35' data-width='138' data-marginTop='26'></span>
		</div>
		<div class="biao">
			<p class="img-size" data-fontSize='25' data-lineHeight='60'>预期年化</p>
			<p class="img-size" data-fontSize='116'>12<span class="img-size" data-fontSize='58'>%</span></p>
			<p class="img-size" data-fontSize='28'>仅新注册用户可领取一次</p>
		</div>
	</div>
	<div class="drcf img-size" data-marginTop='28' data-paddingBottom='102'>
		<div class="top2 img-size" data-paddingBottom='52'>
			<p class="img-size" data-fontSize='32' data-lineHeight='100' data-paddingLeft='28'>产品周期</p>
			<div class="iconjd img-size" data-width='691' data-height='113'></div>
		</div>
		<div class="top2 img-size" data-marginTop='28'>
			<p class="img-size" data-fontSize='32' data-lineHeight='100' data-paddingLeft='20'>投资金额：<span>	0元</span></p>
		</div>
		<div class="top2 img-size" data-marginTop='28'>
			<p class="img-size" data-fontSize='32' data-lineHeight='100' data-paddingLeft='20'>使用10000元体验金<i class="img-size" data-width="41" data-height="41" data-marginRight="40" data-marginTop="30" @click='donotUse'></i></p>
		</div>
		<p class="info img-size" data-fontSize='24' data-paddingLeft='20' data-paddingTop='24'>预期收益：<span class="red">	3.28元</span></p>
		<div class="btn img-size" data-width="630" data-lineHeight='90' data-fontSize='34' data-marginTop='124' @click='billSure'>{{btninfo}}</div>
	</div>
</div>
</template>