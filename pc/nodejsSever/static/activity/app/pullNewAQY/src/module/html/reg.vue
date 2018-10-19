<style scoped>
	@import '../../css/global.css';
	.form{color: #fff; margin: 0 auto; a{color: #6300d2;}}
	input{ border-radius: 5px;color: #aeaeae; border: 2px solid #9853dc;box-shadow: inset 1px 1px 8px 0px #ccc ; background: #fff;
		&.check{ display: inline-block; ;display: -webkit-inline-block; }
		.shadow{box-shadow: 0 0 11px #86b4cf;}
	}
	.error{ color: #fdf000; }
	input::-webkit-input-placeholder {color: #aeaeae; font-size: 16px;}
	input:-ms-input-placeholder {color: #aeaeae; font-size: 16px;}
	input:-moz-placeholder {color: #aeaeae; font-size: 16px;}
	input::-moz-placeholder {color: #aeaeae; font-size: 16px;}
	.sjx{ width: 0;height: 0;display: inline-block;display: -webkit-inline-block;border-left: 50px solid transparent;border-right: 50px solid transparent; border-top: 100px solid #ffb400; 
	}
	.sjx2{ width: 0;height: 0;display: inline-block;display: -webkit-inline-block;border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid #ffb400;
	}
	.regbtn{ border-radius: 50px; color: #fff; text-align: center; width: 100%; text-shadow: 0.5px 1px 1px #adadad;  
		background:url('../../images/subbtn.png') no-repeat; background-size: contain;
		margin: 0 auto;}
	.box{ margin:0 auto; }
	span.again2{ border-radius: 5px;background: #ffb400; color: #942600; display: block; float: right; text-align: center; letter-spacing: 1px; }
	img{ border-radius: 5px;}
</style>
<script>
	import {userIsNew,sendMsg,subReg} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
			  	items: {
			   		phone:'',
			  	},
		   		agree: true,
		   		showref:false,
		   		userIsNew:false,
		   		picCode:'',
		   		countdown :60,
				timeDJS : true,
				phone : '',
				imgCode : '',
				msg : '',
				pass :'',
				phoneOK : false,
				imgOK : false,
				Phone : ''
	    	}
	  	},
		ready:function(){
		},
		computed:{
		},
	  	watch:{
	   		items:{
	    		handler:function(val,oldval){
	    			var wer = this.$refs.phone.value;
	    		 	var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
					if(reg.test(wer)==false){ //手机号校验提示
						$('.phonErr')[0].innerHTML = "请输入正确格式的手机号";
					}else{$('.phonErr')[0].innerHTML = "";}
	    		},
	    		deep:true
	   		}
	  	},
	  	mounted(){
	  		T.setImgSize();
	  		T.getAppInfo();
	  		TDAPP.onEvent('regPage');
			this.phone = this.$refs.phone.value;
			this.imgCode = this.$refs.imgCode.value;
			this.msg = this.$refs.msg.value;
			this.pass = this.$refs.pass.value;
	  	},
	  	methods:{
			phoneInFun : function(){
				var phone = this.$refs.phone.value;
			 	var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				if(reg.test(phone)==false){ //手机号校验提示
					$('.phonErr')[0].innerHTML = "请输入正确格式的手机号";
				}else{$('.phonErr')[0].innerHTML = "";this.phoneOK = true;}
			},
			phoneBlurFun: function(){ //失去焦点，调取"检验手机号是否已经注册"接口 
				var phone = this.$refs.phone.value;
				T.ajax({ 
	                url : userIsNew , 
	                data : {
	                    mobilePhone:phone
	                },
	                callback:true,
	                success : function( _data ){
	                	if(_data.success){
		                    if(_data.map.exists){
		                    	$('.phonErr')[0].innerHTML = "此号码已经注册";
		                    }
	                	}else{
	                		if(_data.errorCode == '9999'){
	                			//系统错误
	                		}
	                	}
	                }
	            });
			},
			imgCodeBlurFun: function(){ //图片验证码失去焦点(?![a-zA-Z]+$)(?![0-9]+$)
				var reg = /^[0-9A-Za-z]{4}$/;
				var imgCode = this.$refs.imgCode.value;
				if(imgCode!=''){
					if(reg.test(imgCode)==false){
						$('.imgErr')[0].innerHTML = "图片验证码格式错误";
					}else{$('.imgErr')[0].innerHTML = "";this.imgOK = true;}
				}
			},
			msgInFun: function(){ //短信验证码获取焦点，
			 	var reg = /^[0-9]{4}$/;
				var msg = this.$refs.msg.value;
				if(reg.test(msg)==true){ 
					$('.msgErr')[0].innerHTML = "";
				}
			},
			msgBlurFun: function(){ //短信验证码失去焦点，
			 	var reg = /^[0-9]{4}$/;
				var msg = this.$refs.msg.value;
				if(msg!=''){
					if(reg.test(msg)==false){
						$('.msgErr')[0].innerHTML = "验证码格式错误";
					}else{$('.msgErr')[0].innerHTML = "";}
				}
			},
			passInFun : function(){
				var pass = this.$refs.pass.value;
			 	var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
				if(reg.test(pass)==true){ //
					$('.passErr')[0].innerHTML = "";
				}
			},
			passBlurFun: function(){ 
				var pass = this.$refs.pass.value;
			 	var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
			 	if(pass!=''){
					if(reg.test(pass)==false){ //
						$('.passErr')[0].innerHTML = "密码必须是6-18位数字和字母的组合";
					}else{$('.passErr')[0].innerHTML = "";}
			 	}
			},
			agreelocked : function(){
				this.agree = !this.agree;
			},
			showreff : function(){
				var self = this;
				self.showref = !self.showref;
			},
			submit : function(){
				TDAPP.onEvent('regBtn');
				var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
				if(reg.test(this.items.pass)==false){
					$('.regErr')[0].innerHTML = "密码必须是6-18位数字和字母的组合";
				}else if(!this.agree){
                    $('.regErr')[0].innerHTML = "请勾选注册协议";
                }else if(this.items.phone == "" || this.items.pass == "" || this.items.imgCode == "" || this.items.msg == "") {
                    $('.regErr')[0].innerHTML = "请输入完整的信息";
                }else{
                	var self = this;
                	this.Phone = self.items.phone;
                    T.ajax({ 
		                url : subReg , 
		                data : {
		                    mobilePhone: self.items.phone,
                			passWord: self.items.pass,
                			picCode: self.items.imgCode,
                			smsCode: self.items.msg,
                			checkbox: self.agree,
                			toFrom: T.toFrom
		                },
		                callback:true,
		                success : function( _data ){
		                	if(_data.success){
								TDAPP.onEvent('getPage');
		                        router.replace({ 
		                            path: 'regOK',
		                            query: { toFrom: T.toFrom , phone: self.Phone }
		                        })
		                	}else{
								if(_data.errorCode == '1001'){$('.regErr')[0].innerHTML = "短信验证码为空";}
								if(_data.errorCode == '1002'){$('.regErr')[0].innerHTML = "短信验证码错误";}
								if(_data.errorCode == '1003'){$('.regErr')[0].innerHTML = "手机号为空";}
								if(_data.errorCode == '1004'){$('.regErr')[0].innerHTML = "图片验证码为空";}
								if(_data.errorCode == '1005'){$('.regErr')[0].innerHTML = "密码格式错误";}
								if(_data.errorCode == '1006'){$('.regErr')[0].innerHTML = "未勾选注册协议";}
								if(_data.errorCode == '1007'){$('.regErr')[0].innerHTML = "手机号已注册";}
								if(_data.errorCode == '1008'){$('.regErr')[0].innerHTML = "推荐人不存在";}
		                	}
		                }
		            });
                }
			},
			changeIMG: function(event){
                if(event != undefined){
                    $('img')[0].src += '?'+ new Date().getTime();
                }else{
                    if($('img')[0]!= undefined){
                        $('img')[0].src += '?'+ new Date().getTime();
                    }
                }
			},
			sendCode :function () {
				TDAPP.onEvent('YZMBtn');
				var self = this;
				function settime() { 
					if (self.countdown == 0) {
				        $('#yzd').css({'color':'#942600','background':'#ffb400'}); 
				        $('#yzd').html("获取验证码"); 
						clearTimeout(times);
				        self.countdown = 60;  
						self.timeDJS = true;
				        return;
					} else { 
						self.timeDJS = false;
				        $('#yzd').css({'color':'#675c56','background':'#b3b2b1'}); 
				        $('#yzd').html("重 发 (" + self.countdown + ")"); 
						self.countdown --;
					} 
					var times = setTimeout(function() { 
						settime() 
					},1000) 
				} 
				if(self.timeDJS){
					var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
					var reg2 = /^[0-9A-Za-z]{4}$/;
					if(reg.test(self.items.phone)==true && reg2.test(self.items.imgCode)==true){
						T.ajax({ 
			                url : sendMsg , 
			                data : {
			                    mobilePhone : self.items.phone,
			                    picCode : self.items.imgCode,
			                    type : 1
			                },
			                callback:true,
			                success : function( _data ){
			                	if(_data.success){ 
			                		settime();
			                		$('.msgErr')[0].innerHTML = "";
			                	}else{
			                		if(_data.errorCode=='1001'){$('.msgErr')[0].innerHTML = "图片验证码不正确";}
			                		if(_data.errorCode=='1002'){$('.msgErr')[0].innerHTML = "当天短信发送超过限制";}
			                		if(_data.errorCode=='1003'){$('.msgErr')[0].innerHTML = "短信发送失败";}
			                		if(_data.errorCode=='8888'){$('.msgErr')[0].innerHTML = "频繁操作";}
			                		if(_data.errorCode=='9999'){$('.msgErr')[0].innerHTML = "表示系统错误";}
			                	}
			                }
			            });
					}else{
						$('.msgErr')[0].innerHTML = "请正确填写手机号和图片验证码";
					}
				}
		    }
	  	}
	}
</script>
<template>
<div class="form img-size" data-width='564' data-fontSize='24'>
    <input class="img-size" data-fontSize="32" data-paddingLeft="22" data-marginTop="10" data-width="538" data-height='76' type="text" v-model="items.phone" ref="phone" placeholder="请输入手机号" v-on:input="phoneInFun" v-on:blur="phoneBlurFun"/>
	<div class="phonErr error img-size" data-marginTop='8' data-fontSize='24' ></div>

    <input class="img-size" data-fontSize="32" data-marginTop="25" data-paddingLeft="22" data-width="340" data-height='76' type="text" v-model="items.imgCode" ref="imgCode" placeholder="请输入图片验证码" v-on:blur="imgCodeBlurFun"/>
	<img class="img-size" data-width="182" data-marginTop="25" data-height="80" style="display: block;float: right;" @click='changeIMG(event)' src="/login/validateCode.do" alt="">
	<div class="imgErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <input class="img-size" data-fontSize="32" data-paddingLeft="22" data-marginTop="25" data-width="340" data-height='76' type="text" v-model="items.msg" ref="msg" placeholder="请输入短信验证码" v-on:input="msgInFun" v-on:blur="msgBlurFun"/>
	<span id="yzd" class="yzd again2 img-size" data-fontSize='30' data-width="182" data-lineHeight="80" data-marginTop="26" data-marginLeft="10" @click='sendCode(obj)'>获取验证码</span>
	<div class="msgErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <input class="img-size" data-fontSize="32" data-paddingLeft="22" data-marginTop="25" data-width="538" data-height='76' type="password" v-model="items.pass" ref="pass" placeholder="密码建议6-18位数字、字母组合" v-on:input="passInFun" v-on:blur="passBlurFun"/>
	<div class="passErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <input class="check tjr img-size" data-marginRight='16' data-fontSize="32" data-marginTop="25" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b"  v-on:change="agreelocked"/>我已阅读并同意<a href="https://www.duorongcf.com/zc">《注册协议》</a>
	<div style="text-align: center;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <div class="regbtn img-size" data-width='563' data-height="89" data-marginTop="25" data-fontSize="40"  @click='submit'></div>
</div>
</template>