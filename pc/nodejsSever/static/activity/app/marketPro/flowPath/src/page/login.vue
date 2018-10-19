<style scoped>
    @import '../css/main.css';
    @import '../css/index.css';
    .module-scroll{
        background: #fff;color: #333333;
	    .error{color: #ff8383;}
		.lang{ background: url('../images/lang.png') no-repeat; background-size: contain; color: #fff; text-align: center; span{color: #ffff00;}span.lan{color:#ccccff;} }
        .tian{ border-bottom: 1px solid #cccccc; }
		.text{ display: inline-block; }
	    input{ border-radius: 5px;color: #999999;border:0;}
	    input::-webkit-input-placeholder {color: #999999; font-size: 13px;}
	    input:-ms-input-placeholder {color: #999999; font-size: 13px;}
	    input:-moz-placeholder {color: #999999; font-size: 13px;}
	    input::-moz-placeholder {color: #999999; font-size: 13px;}
	    .lqbtn{background: -webkit-gradient(linear,0 100% ,100% 100%, from(#ffcc33), to(#ff6600));margin: 0 auto;border-radius: 100px;color: #fff;text-align: center; }
	    .forgetmm{ color: #0099ff; text-align: right; }
    }
</style>
<script>
    import requirePop from '../pop/requirePop.js';
	export default {
		data(){
			return {
				phone:'',
				dlPass:'',
				dlpasserror:'',
				canDL : false,
				reg : null,
			}
		},
		mounted(){
	  		T.setImgSize();
	  		this.phone = T.localStorage.getItem('phone');
	  		this.reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
	  	},
	  	methods:{
	  		dlPassInFun : function(){
	  			var self = this;
                if(self.reg.test(self.dlPass)==false){
                    self.dlpasserror = '密码为6-18位数字和字母组合';
                }else{self.dlpasserror = ''; }
	  		},
	  		tologin: function(){
	  			var self = this;
                if(self.reg.test(self.dlPass)==true){
                	TDAPP.onEvent('LJDL');
		  			T.ajax({
	                    url : '/doLogin',
	                    data : {
	                        mobilePhone : self.phone,
	                        passWord : self.dlPass
	                    },
	                    callback :true, 
	                }).then(data=>{
                		T.ajax({
                			url:'/v1/current/product/info.do',
                			data:{
                				time : new Date()
                			},
                			callback : true,
                		}).then(data=>{
		                	TDAPP.onEvent('DLcg');
                			if(data.map.currentInfo.isInvested==1||data.map.currentInfo.isPurchased==1){
	                            router.replace({path: 'sorry', query: { toFrom: T.toFrom }})
			                	TDAPP.onEvent('DLcgSorry');
                			}else{
	                            router.replace({path: 'billDetail', query: { toFrom: T.toFrom }})
			                	TDAPP.onEvent('DLcgTZ');
                			}
                		})
	                })
                }else{
                    self.dlpasserror = '密码为6-18位数字和字母组合';
                }
	  		},
	  		forgetDLPass : function(){
	  			TDAPP.onEvent('forgetPassWord');
	  			requirePop('forgetDLpass',{
	                props: {
	                    title : '提示',
	                    msg : '请登录多融app找回密码',
	                    btn : '去下载',
	                    transition : 'rotate3d',
	                    showclose : true,
	                    showDown :true,
	                }
	            },'notice');
	  		}	  	
	  	}
	}
</script>
<template>
    <div class='module-scroll'>
	    <div class="lang img-size" data-height='317'>
	    	<p class="img-size" data-fontSize='36' data-paddingTop='68'><span>1588元新手红包</span><br>已安全抵达您的多融理财账户<br><span class="lan img-size" data-fontSize='30'>可于投资产品（除新手标外）时使用</span></p>
	    </div>
    	<div class="regbox img-size" data-width='630' data-paddingLeft='62' data-fontSize='30'>
			<p class="img-size" data-lineHeight='148'>当前账户：{{phone}}</p>
			<!-- 登录密码 -->
			<div class="tian img-size" data-lineHeight='56' data-marginTop='30'>
				<span>登录密码：</span>
				<input type="password" class="img-size" data-lineHeight='55' data-paddingLeft='30' placeholder="请输入登录密码" v-model="dlPass" ref="dlPass" v-on:input="dlPassInFun" >
			</div>
			<p class="error img-size" data-fontSize='24'data-lineHeight='46'>{{dlpasserror}}</p>
			<div class="forgetmm img-size" data-fontSize='24' data-lineHeight='120' @click='forgetDLPass'>忘记密码</div>
		    <div class="lqbtn img-size" data-width='550' data-lineHeight='90' data-fontSize='36' data-marginTop='50' @click='tologin'>立即登录</div>
		</div>
    </div>
</template>