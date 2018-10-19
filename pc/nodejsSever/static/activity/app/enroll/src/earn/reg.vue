<style lang='sass'>
	@import '../style/global.scss';
	  .login{
        background:#ff4313;
        border-radius:$s10;
        margin:0 auto;
       		input{
            background:#fff5dc;
            border:$s1 solid #d21917;
            border-radius:$s5;
            margin:0 auto;
            display:block;
            @include font-size(18px);
            color:#ccc;
            padding-left:$s10;
       }
       ::-webkit-input-placeholder{
            color:#ccc;
            @include font-size(18px);
       }
       .mobile{
        text-align:center;
       }
       .login-msm-box{
            @include font-size(28px);
           .smsCode{
            display:block;
            margin-right:$s10;
           }
           .msmBtn{
                display:block;
                border:$s1 solid #d83634;
                background:#fee86e;
                color:#c97200;
                border-radius:$s5;
                text-align:center;
                @include font-size(18px);
            }
            .fl{
                float: left;
            }
            .fr{
                float: right;
            }
       }
       .identify{
        .fl{
            float: left;
        }
        .fr{
            float: right;
        }
       }
       .login-recomm-box{
        color:#fff5dc;
       }
       .fastClick{
            text-align:center;
            background:#fee86e;
            color:#c07828;
            display:block;
            margin:0 auto;
            border-radius:$s10;
            @include font-size(20px);
       }
    }
</style>
<script>
	import {userIsNew,sendMsg,subReg} from '../common/URL.js';
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
				referee : '',
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
			this.phone = this.$refs.phone.value;
			this.imgCode = this.$refs.imgCode.value;
			this.msg = this.$refs.msg.value;
			this.pass = this.$refs.pass.value;
            this.referee = this.$refs.referee.value;
            this.items.referee = T.recommCode;
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
	                 callback : true
	            }).then(data=>{
	            	if(data.success){
	            		if(data.map.exists){
	            			$('.phonErr')[0].innerHTML = "此号码已经注册";
	            		}
	            	}else{
	            		if(data.errorCode='9999'){
	            		}
	            	}
	            })
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
			refereeInFun : function(){
				var referee = this.$refs.referee.value;
				if(referee.length>11){
					$('.refereeErr')[0].innerHTML = "请输入正确格式的推荐人手机号";
				}else {
                    $('.refereeErr')[0].innerHTML = "";
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
				if(reg.test(this.items.pass)==false){
					$('.regErr')[0].innerHTML = "密码必须是6-18位数字和字母的组合";
				}else if(!this.agree){
                    $('.regErr')[0].innerHTML = "请勾选注册协议";
                }else if(this.items.phone == "" || this.items.pass == "" || this.items.imgCode == "" || this.items.msg == "") {
                    $('.regErr')[0].innerHTML = "请输入完整的信息";
                }else{
                    T.ajax({ 
		                url : subReg , 
		                data : {
		                    mobilePhone: this.items.phone,
                			passWord: this.items.pass,
                			picCode: this.items.imgCode,
                			smsCode: this.items.msg,
                			checkbox: this.agree,
                			recommPhone: this.items.referee,
                			toFrom: T.toFrom
		                },
		                callback:true
		            }).then(data=>{
		            	if(data.success){
		            	   window.location.href='http://www.duorongcf.com/activity/app/pullNew/#/regok?phone='+this.items.phone;
		            	}else{
		            		if(data.errorCode == '1001'){$('.regErr')[0].innerHTML = "短信验证码为空";}
							if(data.errorCode == '1002'){$('.regErr')[0].innerHTML = "短信验证码错误";}
							if(data.errorCode == '1003'){$('.regErr')[0].innerHTML = "手机号为空";}
							if(data.errorCode == '1004'){$('.regErr')[0].innerHTML = "图片验证码为空";}
							if(data.errorCode == '1005'){$('.regErr')[0].innerHTML = "密码格式错误";}
							if(data.errorCode == '1006'){$('.regErr')[0].innerHTML = "未勾选注册协议"}
							if(data.errorCode == '1007'){$('.regErr')[0].innerHTML = "手机号已注册";}
							if(data.errorCode == '1008'){$('.regErr')[0].innerHTML = "推荐人不存在";}
		            	}
		            })
                }
			},
			changeIMG: function(event){
                if(event != undefined){
                    $('.img-box img')[0].src += '?'+ new Date().getTime();
                }else{
                    if($('.img-box img')[0]!= undefined){
                        $('.img-box img')[0].src += '?'+ new Date().getTime();
                    }
                }
			},
			sendCode :function () {
				var self = this;
				function settime() { 
					if (self.countdown == 0) {
				        $('#yzd')[0].style.color='#004a6c'; 
				        $('#yzd')[0].innerHTML="获取验证码"; 
						clearTimeout(times);
				        self.countdown = 60;  
						self.timeDJS = true;
				        return;
					} else { 
						self.timeDJS = false;
				        $('#yzd')[0].style.color='#6a6b6b'; 
				        $('#yzd')[0].innerHTML="重 发 (" + self.countdown + ")"; 
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
			                 callback : true
			            }).then(data=>{
			                	if(data.success){
			                		settime();
			                	}else{
			                		if(data.errorCode=='1001'){$('.msgErr')[0].innerHTML = "图片验证码不正确";}
			                		if(data.errorCode=='1002'){$('.msgErr')[0].innerHTML = "当天短信发送超过限制";}
			                		if(data.errorCode=='1003'){$('.msgErr')[0].innerHTML = "短信发送失败";}
			                		if(data.errorCode=='8888'){$('.msgErr')[0].innerHTML = "频繁操作";}
			                		if(data.errorCode=='9999'){$('.msgErr')[0].innerHTML = "表示系统错误";}
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
 <div class='login img-size'   data-width='720' data-marginTop='90' data-marginBottom='70' data-paddingTop='50' data-paddingBottom='40'>
   <!-- <input  type="text" minlength="11" maxlength="11"  class='img-size phone' data-width='625' data-height='105' data-lineHeight='105' data-marginBottom='35'  v-model="items.phone" ref="phone" placeholder="请输入手机号" v-on:input="phoneInFun" v-on:blur="phoneBlurFun"/>
    	<div class="phonErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
    	<div class="box img-size" data-width="618">
    	    <input  ng-model="login.picCode" class="fl img-size" data-width='405' data-height='105' data-lineHeight='105' type="text" required  v-model="items.imgCode" ref="imgCode" placeholder="请输入图片验证码" v-on:blur="imgCodeBlurFun"/>
    		<div class="img-box img-size" data-height="100" data-paddingLeft='10' data-paddingRight='10'><img class='img-size' data-marginLeft='15' data-height='100' @click='changeIMG(event)' src="/login/validateCode.do" alt=""></div>
    	</div>
    	<div class="imgErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
    	<div class="box img-size" data-width="618">
    	    <input   class="fl img-size smsCode" type="text"  data-width='405' data-height='105' data-lineHeight='105' data-marginBottom='35' v-model="items.msg" ref="msg" placeholder="请输入短信验证码" v-on:input="msgInFun" v-on:blur="msgBlurFun">
    		<span  class="fl msmBtn img-size" data-width='200' data-height='105' data-lineHeight='105' data-marginBottom='35'id="yzd" @click='sendCode(obj)'>获取验证码</span>
    	</div>
    	<div class="msgErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
   <input autocomplete="off"  v-model="items.pass" ref="pass" placeholder="密码建议6-18位数字、字母组合" v-on:input="passInFun" v-on:blur="passBlurFun"  name="passWord"  class='img-size' data-width='625' data-height='105' data-lineHeight='105' data-marginBottom='35'>
    	<div class="passErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
    	<div class="tjr img-size" data-marginLeft="66" data-fontSize="32" @click='showreff'><span class="sjx img-size" data-borderLeftWidth="12" data-borderRightWidth="12" data-borderTopWidth="24" data-marginRight='5' v-show='showref==false'>►</span><span class="sjx2 img-size" data-borderLeftWidth="12" data-borderRightWidth="12" data-borderBottomWidth="24" data-marginRight='5' v-show='showref==true'>▼</span>推荐人（选填）</div>
   <input class="img-size" data-fontSize="32" data-paddingLeft="22" data-marginTop="25" data-width="596" data-height='82' v-show="showref==true" type="text" v-model="items.referee" ref="referee" placeholder="请输入推荐人手机号/推荐码" v-on:input="refereeInFun"/>
    	<div class="refereeErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
    	<div style="text-align: center;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'></div>
   <a  class='fastClick img-size' data-width='625' data-height='105' data-lineHeight='105' @click='submit'>立即领取10,000元</a> -->
    <div class='img-size mobile'>
                    <input  name="mobilePhone" type="text" minlength="11" maxlength="11" required class='img-size phone' data-width='625' data-height='105' data-lineHeight='105' data-marginBottom='35'  v-model="items.phone" ref="phone" placeholder="请输入手机号" v-on:input="phoneInFun" v-on:blur="phoneBlurFun">
                </div>
                <div class="phonErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
               <!--   图文验证 -->
                <div class="identify clearfix marT2 img-size" data-paddingLeft='40' data-marginBottom='35'>
                    <input name="picCode" ng-model="login.picCode" class="fl img-size" data-width='405' data-height='105' data-lineHeight='105' type="text" required  v-model="items.imgCode" ref="imgCode" placeholder="请输入图片验证码" v-on:blur="imgCodeBlurFun">
                   <div class="img-box img-size" data-height="100" data-paddingLeft='10' data-paddingRight='10'><img class='img-size' data-marginLeft='15' data-height='100' @click='changeIMG(event)' src="/login/validateCode.do" alt=""></div>
                </div>
                <div class="imgErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
                <div style='clear:both'></div>
           <!--      短信 -->
                <div class="login-msm-box img-size" data-paddingLeft='40' data-marginBottom='35'>         
                    <input   class="fl img-size smsCode" type="text"  data-width='405' data-height='105' data-lineHeight='105' data-marginBottom='35' v-model="items.msg" ref="msg" placeholder="请输入短信验证码" v-on:input="msgInFun" v-on:blur="msgBlurFun">
                    <span  class="fl msmBtn img-size" data-width='200' data-height='105' data-lineHeight='105' data-marginBottom='35'id="yzd" @click='sendCode(obj)'>获取验证码</span>
                </div>
            
                <div style='clear:both'></div>
                <div class="msgErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66' style='color:#fff'></div>
               
                <div class='img-size'>
                    <label  ng-click="showPassword(passwordText)" ><i ng-class="{true:'icon icon-eye huang',false:'icon icon-eye'}[passwordText]"  ></i></label>
                    <input autocomplete="off" type='passWord' v-model="items.pass" ref="pass" placeholder="密码建议6-18位数字、字母组合" v-on:input="passInFun" v-on:blur="passBlurFun"  name="passWord"  class='img-size' data-width='625' data-height='105' data-lineHeight='105' data-marginBottom='35'>
                </div>
                <div class="passErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66' ></div>
                <div class="login-recomm-box img-size" data-paddingLeft='40' @click='showreff'>
                    <p v-show='showref==false'>► 推荐人（选填）</p>
                    <p v-show='showref==true'>▼ 推荐人（选填）</p>
                </div>
            <!--     推荐 -->
                <div  class='img-size' data-paddingLeft='30' data-marginBottom='35'  v-show='showref==true'>
                    <input type="text"  placeholder="推荐人手机号（可不填）"class='img-size' data-width='625' data-height='105' data-lineHeight='105'  v-model="items.referee" ref="referee"  v-on:input="refereeInFun">
                </div>
                <div class='xieyi' style='color:#fff'>
                        <input class="check tjr img-size" data-marginLeft="66" data-fontSize="32" data-marginTop="25" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b"  v-on:change="agreelocked" style='display:inline-block'>我已阅读并同意<a href="https://www.duorongcf.com/zc" style='color:#9933ff'>《注册协议》</a>
                </div>
                 <div style="text-align: center;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'></div>
                <div class="refereeErr error img-size" data-marginTop='8' data-fontSize='24' data-paddingLeft='66'></div>
                <div style="text-align: center;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'></div>
                <a  class='fastClick img-size' data-width='625' data-height='105' data-lineHeight='105' @click='submit'>立即领取1588元</a>
 </div>

</template>

