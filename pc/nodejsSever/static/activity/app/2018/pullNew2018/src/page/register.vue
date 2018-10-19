<style scoped>
    @import './../css/main.css';
    @import './../css/index.css';
	a{ color: #0099ff; }
	.error{color: #ff8383;}
	.text{ display: inline-block; }
    .phone{input{  border:0; display: block; margin: 0 auto; }}
    input{ color: #999999;border:0;}
    input::-webkit-input-placeholder {color: #999999; font-size: 14px;}
    input:-ms-input-placeholder {color: #999999; font-size: 14px;}
    input:-moz-placeholder {color: #999999; font-size: 14px;}
    input::-moz-placeholder {color: #999999; font-size: 14px;}
</style>
<script>
    import requirePop from '../pop/requirePop.js';
	export default {
		data(){
	    	return{
		   		agree: true,
		   		showref:false,
		   		countdown :60,
				timeDJS : true,
				imgCode : '',
				msg : '',
				pass :'',
				imgOK : false,
				msgOK :false,
				imgCodeErr : '',
				msgErr : '',
				regErr : '',
	    	}
	  	},
	  	mounted(){
	  		T.setImgSize();
	  		T.getAppInfo();
	  		var self = this;
			this.imgCodeReg = /^[0-9A-Za-z]{4}$/;
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
			agreelocked : function(){
				this.agree = this.agree;
			},
			submit : function(){
				if(!this.agree){
                    this.regErr = "请勾选注册协议";
                }else if(!this.imgOK || !this.msgOK) {
                    this.regErr = "请输入完整的信息";
                }else{
                	this.pass = this.phone.substring(0,6);
                	T.ajax({
                		url:'/reg',
                		data:{
	                		mobilePhone: this.phone,
	            			passWord: this.pass,
	            			picCode: this.imgCode,
	            			smsCode: this.msg,
	            			checkbox: this.agree,
	            			toFrom: T.toFrom
                		},
                		callback:true
                	}).then(data=>{
                		if(data.success){
							//注册成功
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
		    }
	  	}
	}
</script>
<template>
<div class="regbox img-size" data-width='600' data-fontSize='30'>
    <p class="img-size" data-lineHeight='88' data-paddingLeft='40' style="text-align:left;color:#fff;">注册账户：{{phone}}</p>
    <!-- 图形验证码 -->
    <div class="img-size">
        <input type="text" class="img-size" data-borderRadius='10' data-width='600' data-paddingLeft='40' data-marginBottom='10' data-height='90' data-lineHeight='90' ref="imgCode" placeholder="请输入图片验证码" v-model="imgCode" v-on:blur="imgCodeBlurFun">

        <img class="img-size" data-width="136" data-height="60" data-borderRadius='14' data-marginTop='-86' data-marginRight='12' style="display: block;float: right;background:#333;" @click='changeIMG()' src="/login/validateCode.do" alt="">
    </div>
    <p class='error img-size' data-fontSize='26'>{{imgCodeErr}}</p>
    <!-- 验证码 -->
    <div class="img-size" data-marginTop='30'>
        <input type="text" class="img-size" data-borderRadius='10' data-width='600' data-paddingLeft='40' data-marginBottom='10' data-height='90' data-lineHeight='86' v-model="msg" ref="msg" placeholder="请输入短信验证码" v-on:input="msgInFun" v-on:blur="msgBlurFun">
        <span class="yzd img-size" data-fontSize='24' data-marginTop='-72' data-marginRight='20' style="display: block;float: right;color:#0099ff;text-decoration:underline;"  @click='sendCode'>获取验证码</span>
    </div>
    <p class='error img-size' data-fontSize='26'>{{msgErr}}</p>
    
    <!-- 协议 -->
    <div class="img-size" data-marginTop='20'>
        <input class="check img-size" data-fontSize="32" data-marginTop="25" style="display:inline-block;" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b"  v-on:change="agreelocked"/>
        <span class="img-size" data-fontSize='30' style="color:#fff;">我已阅读并同意<a href="https://www.duorongcf.com/zc" style="color:#9bddff;">《注册协议》</a></span>
        <div style="text-align: center;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'>{{regErr}}</div>
    </div>
    <!-- 注册按钮 -->
    <div class="lqbtn img-size" data-marginTop='30' data-width='600' data-lineHeight='90' data-fontSize='30' @click="submit">立即领取1588元现金红包+10000体验金</div>
</div>
</template>