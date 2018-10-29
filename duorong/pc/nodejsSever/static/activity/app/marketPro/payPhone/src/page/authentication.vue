<style scoped>
    @import './../css/main.css';
    .module-scroll{ background: #f2f2f2; color: #999; 
    	.floatTop{ background: #331e0a; position: fixed;top:0;z-index: 99;width: 100%;
	        .close{ height:100%; background:url('../images/close.png') no-repeat; background-size:contain;background-position: center; display: inline-block;}
	        .downlogo{ height:100%; display: inline-block; background: url('../images/downlogo.png') no-repeat; background-size: contain; }
	        .downBtn{ display: inline-block;float: right; background: #ff651a; color: #fff; text-align: center; }
	    }
        .bill-top{ position: relative; color: #fff; background: url('../images/topbg2.png') no-repeat; background-size: contain;
			p{ text-align: center;color:#fbfd00;}
			span.floicon{ position: absolute;background: #ff6600; border-radius: 3px; padding:0 3px; }
			span.floicon2{ position: absolute; border: 1px solid #fff; border-radius: 30px; padding:0 8px; }
    	}
    	.err{color: #ff8383;}
    	.bill-info{ background: #fff; color: #333;
			.pull{ border-bottom: 1px solid #ccc; }
			input{ border-radius: 5px;color: #ccc;border:0;}
		    input::-webkit-input-placeholder {color: #ccc; font-size: 15px;}
		    input:-ms-input-placeholder {color: #ccc; font-size: 15px;}
		    input:-moz-placeholder {color: #ccc; font-size: 15px;}
		    input::-moz-placeholder {color: #ccc; font-size: 15px;}
		    .open{ background: url('../images/open.png') no-repeat; background-size: contain; display: inline-block; }
		    .change{ display: inline-block; color: #ccc; }
    	}
    	a{color: #0099ff;}
    	.agree{ color: #333; }
    	.jindu{ background: url('../images/jindu.png') no-repeat; background-size: contain; margin: 0 auto; }
    	.deng{ background: url('../images/deng.png') no-repeat; background-size: contain; }
		.sub-info{ background: -webkit-gradient(linear,0 100% ,100% 100%, from(#ffcc33), to(#ff6600)); text-align: center; color: #fff;  margin: 0 auto; border-radius: 100px;
		}
		.mask { background-color: rgba(0, 0, 0, 0.5); position: fixed; z-index: 500; bottom: 0; right: 0; left: 0; top: 0; display: flex; -webkit-box-pack: center; justify-content: center; align-items: center; }
		.bank-box,.city-box{ position: fixed; bottom: 0; left: 0; width: 100%; height: 75%; z-index: 1000; background-color: #fff;transform: translate(0, 100%);transition: transform 0.3s;}
		.brouce-in{ transform: translate(0,0); }
    }
</style>
<script>
	import requireChange from '../pop/requireChange.js';
	import requirePop from '../pop/requirePop.js';
	export default {
		data(){
			return{
				name:'',
				regName : '',
				agree : true,
				IDCard : '',
				bankCard : '',
				tradersPass : '',
				nameErr : '',
				IDCardErr : '',
				bankCardErr : '',
				tradersPassErr : '',
				bankErr :'',
				cityErr : '',
				nameOK : false,
				IDCardOK : false,
				bankCardOK : false,
				tradersPassOK : false,
				parentBank : {
					parentBankId : '',
					bankId :'',
				},
				cityName : '',
				cityCode :0,
				openTimes : '',
			}
		},
		mounted(){
	  		T.setImgSize();
	  		this.regName = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
	  		this.regIDCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$|^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
	  		this.regtradersPass = /^\d{6}$/;
	  		this.openTimes = this.openTimes;
	  	},
	  	methods:{
	  		changeBank(){
	  			document.activeElement.blur();
	  			var self  = this; 
	  			requireChange('tochangeBank',{
	                props: {
	                	superClass : 'brouce-in',
	                	callback : function( obj ){
	                		self.parentBank = obj;
	                		self.bankErr = '';
	                	}
	                }
	            },'bank');
	  		},
	  		changeBankArea(){
	  			document.activeElement.blur();
	  			var self = this;
	  			requireChange('tochangecity',{
	                props: {
	                	superClass : 'brouce-in',
	                	callback : function( obj ){
	                		if(obj.province==undefined){
		                		self.cityName = obj.cityName + obj.cityName;
		                		self.cityCode = '2900';
	                		}else{
		                		self.cityName = obj.province + obj.cityName;
		                		self.cityCode = obj.cityCode;
	                		}
	                		self.cityErr = '';
	                	}
	                }
	            },'city');
	  		},
	  		nameInFun: function(){
	  			var self = this;
	  			if(self.name!=''){
		  			if(self.regName.test(self.name)==true){
		  				self.nameErr = '';
		  				self.nameOK = true;
		  			}else{
		  				self.nameErr = '请输入正确的姓名';
		  				self.nameOK = false;
		  			}
	  			}
	  		},
	  		IDCardInFun: function(){
	  			var self = this;
	  			if(self.IDCard!=''){
		  			if(self.regIDCard.test(self.IDCard)==true){
		  				self.IDCardErr = '';
		  				self.IDCardOK = true;
		  			}else{
		  				self.IDCardErr = '请输入正确格式的身份证号码';
		  				self.IDCardOK = false;
		  			}
	  			}
	  		},
	  		bankCardInFun: function(){
	  			var self = this;
	  			if(self.bankCard!=''){
		  			if(self.bankCard.length<15||self.bankCard.length>21){
		  				self.bankCardErr = '请输入正确格式的银行卡号';
		  				self.bankCardOK = false;
		  			}else{
		  				self.bankCardErr = '';
		  				self.bankCardOK = true;
		  			}
	  			}
	  		},
	  		tradersPassInFun: function(){
	  			var self = this;
	  			if(self.tradersPass!=''){
		  			if(!self.regtradersPass.test(self.tradersPass)){
		  				self.tradersPassErr = '交易密码为6位数字';
		  				self.tradersPassOK = false;
		  			}else{
		  				self.tradersPassErr = '';
		  				self.tradersPassOK = true;
		  			}
	  			}
	  		},
	  		agreelocked :function(){
	  			this.agree = this.agree;
	  		},
	  		authen : function(){
	  			if(this.name!=''&&this.IDCard!=''&&this.bankCard!=''&&this.tradersPass!=''&&this.parentBank.parentBankId!='' && this.cityName!=''){
		  			if(this.nameOK&&this.IDCardOK&&this.bankCardOK&&this.tradersPassOK){
		  				TDAPP.onEvent('LJRZBtn');
	  					var self = this;
	  					requirePop('confirmAuth',{
	  						props: {
			                    transition : 'rotate3d',
		  						infoObj : {
		  							bankCard : self.bankCard,
		  							IDCard : self.IDCard,
		  							cityName : self.cityName,
		  							name : self.name,
		  							bankName : self.parentBank.parentBankId,
		  							tradersPass : self.tradersPass,
		  							bankId : self.parentBank.bankId,
		  							cityCode : self.cityCode,
		  						},
		  						showNum : self.openTimes,
		  						callbacks : function(obj){
		  							self.openTimes = obj;
		  						}
			                }
	  					},'confirm')
	  				}
		  		}else if(this.name==''){
		  			this.nameErr = '请填写您的姓名';
		  		}else if(this.IDCard==''){
		  			this.IDCardErr = '请填写您的身份证号';
		  		}else if(this.bankCard==''){
		  			this.bankCardErr = '请填写您的银行卡号';
		  		}else if(this.tradersPass==''){
		  			this.tradersPassErr = '请填写您的交易密码';
		  		}else if(this.parentBank.parentBankId==''){
  					this.bankErr='请选择银行';
  				}else if(this.cityName==''){
  					this.cityErr='请选择开户行所在地';
  				}
	  		}
	  	}
	}
</script>
<template>
    <div class='module-scroll'>
	    <div class="bill-top img-size" data-paddingLeft='36' data-paddingRight='36' data-height='200'>
	    	<p class="img-size" data-lineHeight='90' data-fontSize='30'>体验三步曲</p>
	    	<div class="jindu img-size" data-width='600' data-height='49' data-marginTop='8'></div>
	    </div>
	    <p class="img-size" data-paddingLeft='32' data-fontSize='24' data-lineHeight='70'>友情提示：您的信息我们将保密，不会泄露给任何人，敬请放心！ </p>
	    <div class="bill-info img-size" data-paddingLeft='32' data-paddingRight='32' data-paddingTop='10' data-fontSize='30'>
	    	<div class="pull img-size" data-lineHeight='66' data-marginTop='16'>
	    		真实姓名：　
	    		<input type="text" class='img-size' data-height='50' data-width='460' data-lineHeight='55' data-fontSize='28' placeholder="须和身份证信息一致" v-model="name" ref="name" v-on:input="nameInFun">
	    	</div>
	    	<p class="err img-size" data-fontSize='26'>{{nameErr}}</p>
	    	<div class="pull img-size" data-lineHeight='66' data-marginTop='16'>
	    		身份证号：　
		    	<input type="text" class='img-size' data-height='50' data-width='460' data-lineHeight='55' data-fontSize='28' placeholder="请输入身份证号码" v-model="IDCard" ref="IDCard" v-on:input="IDCardInFun">
	    	</div>
	    	<p class="err img-size" data-fontSize='26'>{{IDCardErr}}</p>
	    	<div class="pull img-size" data-lineHeight='66' data-marginTop='16'>
	    		银行卡号：　
		    	<input type="number" class='img-size' data-height='50' data-width='460' data-lineHeight='55' data-fontSize='28' placeholder="绑定本人银行卡" v-model="bankCard" ref="bankCard" v-on:input="bankCardInFun">
	    	</div>
	    	<p class="err img-size" data-fontSize='26'>{{bankCardErr}}</p>
	    	<div class="pull img-size" data-lineHeight='66' data-marginTop='16'>
	    		交易密码：　
		    	<input type="password" class='img-size' data-height='50' data-width='460' data-lineHeight='55' data-fontSize='28' placeholder="6位数字组合" v-model='tradersPass' ref='tradersPass' :maxlength='6' :minlength='6' v-on:input='tradersPassInFun'>
	    	</div>
	    	<p class="err img-size" data-fontSize='26'>{{tradersPassErr}}</p>
	    	<div class="pull img-size" data-lineHeight='66' data-marginTop='16' @click='changeBank'>
	    		选择银行：　
		    	<input type="text" class='change img-size' data-height='50' readonly='readonly' v-model='parentBank.parentBankId' placeholder='请选择银行' data-width='460' data-lineHeight='55' data-fontSize='28'>
		    	<span class="open img-size" data-width='15' data-height='22'></span>
	    	</div>
	    	<p class="err img-size" data-fontSize='26'>{{bankErr}}</p>
	    	<div class="img-size" data-lineHeight='66' data-marginTop='16' @click='changeBankArea'>
	    		选择城市：　
		    	<input type="text" class='change img-size' data-height='50' data-width='460' data-lineHeight='55' data-fontSize='28' placeholder="请选择开户行所在地" v-model='cityName' readonly='readonly' >
		    	<span class="open img-size" data-width='15' data-height='22'></span>
	    	</div>
	    	<p class="err img-size" data-fontSize='26'>{{cityErr}}</p>
	    </div>
	    <div class="deng img-size" data-height='50' data-marginTop='10'></div>
	    <div class="img-size" data-fontSize='24' data-paddingLeft='32' data-paddingTop='10' data-lineHeight='40'>
		    <ul>
		    	<li>· 请确保您的信息真实有效，一经开户不可更改</li>
		    	<li>· 认证银行卡用户用户充值和提现，同卡进出保障资金安全</li>
		    	<li>· 如有疑问请致电400-690-8896</li>
		    </ul>
		    <input class="check img-size" data-fontSize="32" data-marginTop="25" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b" v-on:change="agreelocked">
	    	<span class="agree img-size" data-fontSize='24'>我已阅读并同意
		    	<a href="https://www.duorongcf.com/cgxy">《华瑞存管协议》</a>
	    	</span>
	    </div>
	    <div class="sub-info img-size" data-width='550' data-lineHeight='90' data-fontSize='36' data-marginTop='50' @click='authen'>立即认证</div>
    </div>
</template>