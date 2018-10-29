<style scoped>
    @import './../css/main.css';
	a{ color: #0099ff; }
	.error{color: #ff8383;}
	.tian{ border-bottom: 1px solid #cccccc; }
	.text{ display: inline-block; }
    .phone{input{  border:0; display: block; margin: 0 auto; }}
    input{ color: #999999;border:0;}
    input::-webkit-input-placeholder {color: #999999; font-size: 14px;}
    input:-ms-input-placeholder {color: #999999; font-size: 14px;}
    input:-moz-placeholder {color: #999999; font-size: 14px;}
    input::-moz-placeholder {color: #999999; font-size: 14px;}
    .lqbtn{background: -webkit-gradient(linear,0 100% ,100% 100%, from(#ffcc33), to(#ff6600));margin: 0 auto;border-radius: 100px;color: #fff;text-align: center; }
    .hide{ display: inline-block; background: url('../images/jianhe.png') no-repeat; background-size: contain; }
    .open{ display: inline-block; background: url('../images/jiankai.png') no-repeat; background-size: contain; }
    .tjr{ color: #666; }
</style>
<script>
    import requirePop from '../pop/requirePop.js';
	export default {
		data(){
	    	return{
	    		isshowtjr : false,
		   		agree: true,
		   		showref:false,
		   		countdown :60,
				timeDJS : true,
				phone : '',
				imgCode : '',
				msg : '',
				pass :'',
				referee : '',
				phoneOK : false,
				imgOK : false,
				passOK : false,
				msgOK :false,
				imgCodeErr : '',
				refereeErr : '',
				msgErr : '',
				passErr : '',
				regErr : '',
	    	}
	  	},
	  	mounted(){
	  		T.setImgSize();
	  		T.getAppInfo();
	  		var self = this;
	  		self.phone = T.localStorage.getItem('phone');
			this.imgCodeReg = /^[0-9A-Za-z]{4}$/;
			this.passReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
			this.msgReg = /^[0-9]{4}$/;
	  	},
	  	methods:{
			imgCodeBlurFun: function(){
				if(this.imgCode!=''){
					if(this.imgCodeReg.test(this.imgCode)==false){
						this.imgCodeErr = "图片验证码格式错误";
					}else{
						this.imgCodeErr = "";
						this.imgOK = true;
					}
				}
			},
			msgInFun: function(){
				if(this.msgReg.test(this.msg)==true){ 
					this.msgErr = "";
					this.msgOK = true;
				}
			},
			msgBlurFun: function(){ 
				if(this.msg!=''){
					if(this.msgReg.test(this.msg)==false){
						this.msgErr = "验证码格式错误";
						this.msgOK = false;
					}else{
						this.msgErr = "";
						this.msgOK = true;
					}
				}
			},
			passInFun : function(){
				if(this.passReg.test(this.pass)==true){ 
					this.passErr = "";
					this.passOK = true;
				}
			},
			passBlurFun: function(){ 
			 	if(this.pass!=''){
					if(this.passReg.test(this.pass)==false){
						this.passErr = "密码必须是6-18位数字和字母的组合";
						this.passOK = false;
					}else{
						this.passErr = "";
						this.passOK = true;
					}
			 	}
			},
			agreelocked : function(){
				this.agree = this.agree;
			},
			submit : function(){
				if(!this.passReg.test(this.pass)){
					this.regErr = "密码必须是6-18位数字和字母的组合";
				}else if(!this.agree){
                    this.regErr = "请勾选注册协议";
                }else if(!this.passOK || !this.imgOK || !this.msgOK) {
                    this.regErr = "请输入完整的信息";
                }else{
	    			TDAPP.onEvent('ZCBtn');
                	T.ajax({
                		url:'/reg',
                		data:{
	                		mobilePhone: this.phone,
	            			passWord: this.pass,
	            			picCode: this.imgCode,
	            			smsCode: this.msg,
	            			checkbox: this.agree,
	            			recommPhone: this.referee,
	            			toFrom: T.toFrom
                		},
                		callback:true
                	}).then(data=>{
                		if(data.success){
			    			TDAPP.onEvent('ZCcg');
							requirePop('forgetDLpass',{
				                props: {
				                    title : '提示',
				                    btn : '确认',
				                    transition : 'rotate3d',
				                    showclose : true,
				                    zccg :true,
				                    okCallback:function(){
				                    	router.replace({path: 'billDetail', query: { toFrom: T.toFrom }})
				                    }
				                }
				            },'notice');
	                	}else{
							if(data.errorCode == '1001'){this.regErr = "短信验证码为空";}
							if(data.errorCode == '1002'){this.regErr = "短信验证码错误";}
							if(data.errorCode == '1003'){this.regErr = "手机号为空";}
							if(data.errorCode == '1004'){this.regErr = "图片验证码为空";}
							if(data.errorCode == '1005'){this.regErr = "密码格式错误";}
							if(data.errorCode == '1006'){this.regErr = "未勾选注册协议";}
							if(data.errorCode == '1007'){this.regErr = "手机号已注册";}
							if(data.errorCode == '1008'){this.regErr = "推荐人不存在";}
	                	}
                	})
                }
			},
			changeIMG: function(){
                if($('img')[0]!= undefined){
                    $('img')[0].src += '?'+ new Date().getTime();
                }
			},
			sendCode :function () {
				var self = this;
				function settime() { 
					if (self.countdown == 0) {
				        $('.yzd')[0].style.color='#d72f2f'; 
				        $('.yzd')[0].innerHTML="获取验证码"; 
						clearTimeout(times);
				        self.countdown = 60;  
						self.timeDJS = true;
				        return;
					} else { 
						self.timeDJS = false;
				        $('.yzd')[0].style.color='#6a6b6b'; 
				        $('.yzd')[0].innerHTML="重 发 (" + self.countdown + ")"; 
						self.countdown --;
					} 
					var times = setTimeout(function() { 
						settime() 
					},1000) 
				} 
				if(self.timeDJS){
					if(self.imgCodeReg.test(self.imgCode)==true){
                		TDAPP.onEvent('ZCYZM');
						T.ajax({
							url :'/sendRegMsg',
							data : {
								mobilePhone : self.phone,
			                    picCode : self.imgCode,
			                    type : 1
							},
							callback :true,
						}).then(data=>{
		                	if(data.success){ 
		                		settime();
		                		TDAPP.onEvent('ZCYZMcg');
		                		this.msgErr = "";
		                	}else{
		                		if(data.errorCode=='1001'){this.msgErr = "图片验证码不正确";}
		                		if(data.errorCode=='1002'){this.msgErr = "当天短信发送超过限制";}
		                		if(data.errorCode=='1003'){this.msgErr = "短信发送失败";}
		                		if(data.errorCode=='8888'){this.msgErr = "频繁操作";}
		                		if(data.errorCode=='9999'){this.msgErr = "表示系统错误";}
		                	}
						})
					}else{
						this.msgErr = "请填写正确的图片验证码";
					}
				}
		    },
		    pullTJR : function(){
		    	this.isshowtjr = !this.isshowtjr;
		    }
	  	}
	}
</script>
<template>
<div class="regbox img-size" data-width='630' data-paddingLeft='62' data-fontSize='30'>
	<p class="img-size" data-lineHeight='148'>当前账户：{{phone}}</p>
	<!-- 图形验证码 -->
	<div class="tian img-size" data-height='56'data-marginTop='30'>
		<span class="text " data-width='220'>图形验证码：</span>
		<input type="text" class="img-size" data-width='270' data-lineHeight='55' ref="imgCode" placeholder="请输入图片验证码" v-model="imgCode" v-on:blur="imgCodeBlurFun">

		<img class="img-size" data-width="136" data-height="60" data-borderRadius='14' data-marginTop='-16' style="display: block;float: right;" @click='changeIMG()' src="/login/validateCode.do" alt="">
	</div>
	<p class='error img-size' data-fontSize='26'>{{imgCodeErr}}</p>
	<!-- 验证码 -->
	<div class="tian img-size" data-height='56' data-marginTop='30'>
		<span class="text " >验证码：</span>
		<input type="text" class="img-size" data-width='360' data-lineHeight='55' v-model="msg" ref="msg" placeholder="请输入短信验证码" v-on:input="msgInFun" v-on:blur="msgBlurFun">
		<span class="yzd img-size" data-fontSize='24' @click='sendCode'>获取验证码</span>
	</div>
	<p class='error img-size' data-fontSize='26'>{{msgErr}}</p>
	<!-- 登录密码 -->
	<div class="tian img-size" data-height='56' data-marginTop='30'>
		<span class="text">登录密码：</span>
		<input type="password" class="img-size" data-width="450" data-lineHeight='55' v-model="pass" ref="pass" placeholder="密码为6-18位数字与字母组合" v-on:input="passInFun" v-on:blur="passBlurFun">
	</div>
	<p class='error img-size' data-fontSize='26'>{{passErr}}</p>
	<!-- 推荐人 -->
	<div class="img-size" data-marginTop='30' data-fontSize='30'>
        <div class="tjr"><i @click='pullTJR' v-bind:class="{hide:isshowtjr,open:!isshowtjr}" class="img-size" data-width='28' data-height='28' data-marginRight="10"></i><span class="spantjr">推荐人（选填）</span></div>
    	<div class="tian img-size" data-height='56' v-show='isshowtjr'data-marginTop="20" >
    		<span class="text img-size" data-width='220'>推荐人手机号：</span>
            <input type="text" class=" img-size" data-lineHeight='55' data-width="350" data-paddingLeft="30" v-model="referee" ref="referee" placeholder="推荐人手机号(可不填)">
    	</div>
		<div class="refereeErr error img-size" data-marginTop='8' data-fontSize='24'>{{refereeErr}}</div>
	</div>
	
	<div class="img-size" data-marginTop='30'>
	    <input class="check img-size" data-fontSize="32" data-marginTop="25" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b"  v-on:change="agreelocked"/>
	    <span class="img-size" data-fontSize='24'>我已阅读并同意<a href="https://www.duorongcf.com/zc">《注册协议》</a>和<a href="https://www.duorongcf.com/fw">《投资服务协议》</a></span>
		<div style="text-align: center;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'>{{regErr}}</div>
	</div>
    <div class="lqbtn img-size" data-width='550' data-lineHeight='90' data-fontSize='36' data-marginTop='70' @click = 'submit'>立即注册</div>
</div>
</template>