<style scoped>
	@import '../../css/global.css';
	.form{color: #666666; margin: 0 auto; a{color: #c72839;}}
	input{ border-radius: 5px;color: #999999; border: 1px solid #ccc;box-shadow: inset 1px 1px 8px 0px #ccc ;
		&.check{ display: inline-block; display: -webkit-inline-block; }
		.shadow{box-shadow: 0 0 11px #86b4cf;}
	}
	.error{ color: #c20e0e; }
	input::-webkit-input-placeholder {color: #999999; font-size: 12px;}
	input:-ms-input-placeholder {color: #999999; font-size: 12px;}
	input:-moz-placeholder {color: #999999; font-size: 12px;}
	input::-moz-placeholder {color: #999999; font-size: 12px;}
	.tjr{ color: #004a6c; display: block; }
	.sjx{ width: 0;height: 0;display: inline-block;display: -webkit-inline-block;border-left: 50px solid transparent;border-right: 50px solid transparent; border-top: 100px solid #004a6c; 
	}
	.sjx2{ width: 0;height: 0;display: inline-block;display: -webkit-inline-block;border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid #004a6c;
	}
	.regbtn{ border-radius: 5px; color: #fff; text-align: center; width: 100%; 
		background:#d72f2f; background: -webkit-gradient(linear,0 100% , 0 0, from(#ad1c1c), to(#d72f2f)); 
		margin: 0 auto;}
	.box{ margin:0 auto; }
	span.again2{ border-radius: 5px;background: #ffdb13; background: -webkit-gradient(linear, 0 100%, 0 0, from(#ffdb13), to(#ffe96f)); color: #d72f2f; display: block; float: right; text-align: center; letter-spacing: 1px; }
</style>
<script>
	import {sendMsg,subReg} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
			  	items: {
			  	},
		   		agree: true,
		   		showref:false,
		   		picCode:'',
		   		countdown :60,
				timeDJS : true,
				phone : '',
				imgCode : '',
				msg : '',
				pass :'',
				phoneOK : false,
				imgOK : false
	    	}
	  	},
		ready:function(){
		},
		computed:{
		},
	  	watch:{
	   		items:{
	    		handler:function(val,oldval){
	    		},
	    		deep:true
	   		}
	  	},
	  	mounted(){
	  		T.setImgSize();
	  		T.getAppInfo();
			this.imgCode = this.$refs.imgCode.value;
			this.msg = this.$refs.msg.value;
			this.pass = this.$refs.pass.value;
	  	},
	  	methods:{
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
				var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
				var userphone = this.$route.query.phone;
				if(reg.test(this.items.pass)==false){
					$('.regErr')[0].innerHTML = "密码必须是6-18位数字和字母的组合";
				}else if(!this.agree){
                    $('.regErr')[0].innerHTML = "请勾选注册协议";
                }else if(this.$route.query.phone == "" || this.items.pass == "" || this.items.imgCode == "" || this.items.msg == "") {
                    $('.regErr')[0].innerHTML = "请输入完整的信息";
                }else{
                    T.ajax({ 
		                url : subReg , 
		                data : {
		                    mobilePhone: userphone,
                			passWord: this.items.pass,
                			picCode: this.items.imgCode,
                			smsCode: this.items.msg,
                			checkbox: this.agree,
                			toFrom: T.toFrom
		                },
		                callback:true,
		                success : function( _data ){
		                	if(_data.success){
		                		router.replace(
			                        { 
			                            path: 'regOK', 
			                            query: { phone: userphone , toFrom: T.toFrom }
			                        }
			                    )
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
                    $('.form img')[0].src += '?'+ new Date().getTime();
                }else{
                    if($('.form img')[0]!= undefined){
                        $('.form img')[0].src += '?'+ new Date().getTime();
                    }
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
					var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
					var reg2 = /^[0-9A-Za-z]{4}$/;
					if(reg.test(self.$route.query.phone)==true && reg2.test(self.items.imgCode)==true){
						T.ajax({ 
			                url : sendMsg , 
			                data : {
			                    mobilePhone : self.$route.query.phone,
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
<div class="form img-size" data-width='464'>
    <input class="img-size" data-fontSize="32" data-paddingLeft="22" data-width="258" data-height='70' type="text" v-model="items.imgCode" ref="imgCode" placeholder="请输入图片验证码" v-on:blur="imgCodeBlurFun"/>
	<img class="img-size" data-width="163" data-height="70" style="display: block;float: right;" @click='changeIMG(event)' src="/login/validateCode.do" alt="">
	<div class="imgErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <input class="img-size" data-fontSize="32" data-paddingLeft="22" data-marginTop="25" data-width="258" data-height='70' type="text" v-model="items.msg" ref="msg" placeholder="请输入短信验证码" v-on:input="msgInFun" v-on:blur="msgBlurFun"/>
	<span class="yzd again2 img-size" data-fontSize='24' data-width="163" data-lineHeight="70" data-marginTop="26" data-marginLeft="10" @click='sendCode(obj)'>获取验证码</span>
	<div class="msgErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <input class="img-size" data-fontSize="32" data-paddingLeft="22" data-marginTop="25" data-width="438" data-height='70' type="password" v-model="items.pass" ref="pass" placeholder="密码建议6-18位数字、字母组合" v-on:input="passInFun" v-on:blur="passBlurFun"/>
	<div class="passErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <input class="check tjr img-size" data-fontSize="32" data-marginTop="25" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b"  v-on:change="agreelocked"/>我已阅读并同意<a href="https://www.duorongcf.com/zc">《注册协议》</a>
	<div style="text-align: center;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'></div>

    <div class="regbtn img-size" data-width='460' data-height="70" data-lineHeight="70" data-marginTop="25" data-fontSize="32" @click='submit'>下一步 开始赚钱</div>
</div>
</template>