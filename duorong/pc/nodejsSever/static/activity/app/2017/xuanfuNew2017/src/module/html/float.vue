<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
	.tzgerror{ color: #fff; }
</style>
<script>
	import {userIsNew} from '../../common/URL.js';
    import requirePop from '../../pop/requirePop.js';
	export default {
	    data(){
	    	return{
			  	items: {
			   		phone:'',
			  	},
				phone : '',
				lqtan :false,
				lqerror : '',
				phoneOK : false
	    	}
	  	},
	  	watch:{
	   		items:{
	    		handler:function(val,oldval){
	    			//var wer = this.$refs.phone.value;
	    			//var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
					// if(reg.test(wer)==false){ //手机号校验提示
					// 	$('.phonErr')[0].innerHTML = "请输入正确格式的手机号";
					// }else{$('.phonErr')[0].innerHTML = "";}
	    		},
	    		deep:true
	   		}
	  	},
	  	mounted(){
	  		T.setImgSize();
	  		T.getAppInfo();
	  	},
	  	methods:{
	  		phoneInFun : function(){
				var phone = this.$refs.phone.value;
			 	var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				if(reg.test(phone)==false){ //手机号校验提示
					this.lqerror = '请填写正确的手机号';
				}else{this.lqerror = '';this.phoneOK = true;}
			},
			tzphone: function(){
				var self = this;
				var phone = self.$refs.phone.value;
			 	var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				if(reg.test(phone)==false){ //手机号校验提示
					self.lqerror = '请填写正确的手机号';
				}else{
					T.ajax({ 
		                url : userIsNew , 
		                data : {
		                    mobilePhone:phone
		                },
		                callback:true,
		                success : function( _data ){
		                	if(_data.success){
			                    if(_data.map.exists){
			                    	self.lqerror = '此号码已经注册';
			                    }else{
									self.lqerror = '';
					            	router.replace({ 
					                    path: 'register',
					                    query: { phone: phone , toFrom: T.toFrom }
					                })
			                    }
		                	}
		                }
		            });
				}
			}
	  	}
	}
</script>
<template>
<div>
	<div class="bannbox img-size" data-height="170" style="width: 100%;position: fixed;bottom: 0;">
		<div class="bga">
			<input class="phon img-size" data-fontSize="32" data-width="340" data-height="80" data-marginTop="40" data-marginLeft="36" data-paddingLeft="30" data-borderRadius='50' type="text" v-model="items.phone" ref="phone" placeholder="请输入手机号" v-on:input="phoneInFun" />
			<div class="btn lqbtn img-size" data-width="300" data-lineHeight="80" data-right="20" data-top="40" data-borderRadius='40' data-fontSize="32" @click="tzphone" style="letter-spacing: -0.5px;">领取1588元红包</div>
            <p id="tzerror" class="tzgerror img-size" data-lineHeight="48" data-fontSize='24' data-paddingLeft='50' style="text-align: left;">{{lqerror}}</p>
		</div>
	</div>
</div>
</template>