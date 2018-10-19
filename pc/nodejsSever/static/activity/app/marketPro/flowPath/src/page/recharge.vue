<style scoped>
    @import './../css/main.css';
    .module-scroll{ background: #f2f2f2; color: #999; 
    	.floatTop{ background: #331e0a; position: fixed;top:0;z-index: 99;width: 100%;
	        .close{ height:100%; background:url('../images/close.png') no-repeat; background-size:contain;background-position: center; display: inline-block;}
	        .downlogo{ height:100%; display: inline-block; background: url('../images/downlogo.png') no-repeat; background-size: contain; }
	        .downBtn{ display: inline-block;float: right; background: #ff651a; color: #fff; text-align: center; }
	    }
        .bill-top{ position: relative; color: #fff; background: url('../images/topbg2.png') no-repeat; background-size: contain;
			p{ text-align: center;&:nth-child(1){color:#fbfd00;}}
			span.floicon{ position: absolute;background: #ff6600; border-radius: 3px; padding:0 3px; }
			span.floicon2{ position: absolute; border: 1px solid #fff; border-radius: 30px; padding:0 8px; }
    	}
    	p.yue{color: #333;}
    	.bill-info{ background: #fff; color: #333;
			.pull {border-bottom: 1px solid #ccc; span{display: inline-block;&.yzm{ color: #0099ff; }}i.ts{background: url('../images/tsicon.png') no-repeat; background-size: contain;display: inline-block;position: absolute;} }
			.pull2{span{display: inline-block;} }
			input{ border-radius: 5px;color: #ccc;border:0;}
		    input::-webkit-input-placeholder {color: #ccc; font-size: 15px;}
		    input:-ms-input-placeholder {color: #ccc; font-size: 15px;}
		    input:-moz-placeholder {color: #ccc; font-size: 15px;}
		    input::-moz-placeholder {color: #ccc; font-size: 15px;}
    	}
    	a{color: #0099ff;}
    	.agree{ color: #333; }
    	.jindu{ background: url('../images/jindu_2.png') no-repeat; background-size: contain; margin: 0 auto; }
    	.deng{ background: url('../images/deng.png') no-repeat; background-size: contain; }
		.sub-info{ background: -webkit-gradient(linear,0 100% ,100% 100%, from(#ffcc33), to(#ff6600)); text-align: center; color: #fff;  margin: 0 auto; border-radius: 100px;
		}
		ul{li{ span{ color: #ff651b; } }}
		.bankbox{  background: #fff;
			img{ display: block;float: left; }
			i{color: #333;
				&.huarui{ display:block; float: left; background: url('../images/huarui.png') no-repeat; background-size: contain; }
				&.jin{ display:block; float: left; background: url('../images/jin.png') no-repeat; background-size: contain; }
			}
			span{ display:block; float: left; }
		}
		.TS{position:absolute;color:#ccc;background:#fff;border:1px solid #ccc;border-radius:5px;}
		.yin{display: none;}
		i.jian{background: url('../images/jian.png') no-repeat; background-size: contain;display: block;position: absolute;}
		.dun{margin: 0 auto; display: table; i{background: url('../images/dun.png');background-size: contain;display: block;float: left; margin-right: 5px;}span{ display: block;float: left; } }
    }
</style>
<script>
	import requirePop from '../pop/requirePop.js';
	export default {
		data(){
			return{
				number : '',
				XEInfo :{
					dayQuota : '',
					funds :0,
					quota:'',
				},
				bankInfo :{
					bankNum : '',
					thumbnail : '',
					bankMobile :'',
					bankName :'',
				},
				bankPhone : '',
				amount: '',
				serialNum:'',
				msgCode:'',
				countdown :60,
				timeDJS : true,
				getText :'获取验证码',
				djs:true,
				phoneOK :false,
				bankPhonePlace : '',
				chufaChangePhone : false,
				GHTPHONE:'',
			}
		},
		mounted(){
	  		T.setImgSize();
	  		this.getInfo();
	  		if(T.localStorage.getItem('amount')!=null){
		  		this.amount = T.localStorage.getItem('amount');
		  		this.amountDian();
	  		}else{
	  			this.amount = this.amount;
	  		}
	  		setTimeout(function() {$('.TS').addClass('yin')}, 3000);
	  	}, 
	  	filters: {
	  		currency:function (num) {
				var result = '', counter = 0;
			    num = (num || 0).toString();
			    for (var i = num.length - 1; i >= 0; i--) {
			        counter++;
			        result = num.charAt(i) + result;
			        if (!(counter % 3) && i != 0) { result = ',' + result; }
			    }
			    return result;
            },
	  	},
	  	methods : { 
	  		getInfo : function(){
	  			T.ajax({
		  			url : '/withdrawals',
		  			data : {
		  				time : new Date()
		  			},
		  			callback : true,
		  		}).then(data=>{
					var reg = /^(\d{3})\d{4}(\d{4})$/;
		  			this.bankInfo = data.map;
			  		this.bankPhonePlace = this.bankInfo.bankMobile.replace(reg, "$1****$2");
			  		this.GHTPHONE = this.bankInfo.bankMobile; 
			  		this.bankPhonePlaceBlur();
		  		});
		  		T.ajax({
		  			url : '/recharge',
		  			data : {
		  				time : new Date()
		  			},
		  			callback : true,
		  		}).then(data=>{
		  			this.XEInfo = data.map;
		  		});
	  		},
	  		chanphone : function(){
	  			this.chufaChangePhone = true;
	  			this.GHTPHONE = this.bankPhone;
	  		},
	  		phoneInput:function(){
	  			var regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
	  			if(regPhone.test(this.bankPhone)){
	  				this.phoneOK = true; 
	  				this.GHTPHONE = this.bankPhone;
	  			}else{
	  				this.phoneOK = false;
	  			}
	  		},
	  		phoneBlur:function(){
	  			var regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
	  			if(regPhone.test(this.bankPhone)){
	  				this.phoneOK = true; 
	  				this.GHTPHONE = this.bankPhone;
	  			}else{
	  				this.phoneOK = false;
	  			}
	  		},
	  		bankPhonePlaceBlur:function(){
	  			var regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
	  			if(regPhone.test(this.bankInfo.bankMobile)){
	  				this.phoneOK = true;
	  			}else{
	  				this.phoneOK = false;
	  			}
	  		},
	  		amountDian :function(){
	  			/*var f = parseFloat(x);    
		        if (isNaN(f)) {    
		            return false;    
		        }    
		        var f = Math.round(x*100)/100;    
		        var s = f.toString();    
		        var rs = s.indexOf('.');    
		        if (rs < 0) {    
		            rs = s.length;    
		            s += '.';    
		        }    
		        while (s.length <= rs + 2) {    
		            s += '0';    
		        }    
		        return s;    */
		        var regAmount = /^[1-9]\d*00$/;
		        if(regAmount.test(this.amount)==true){
		        	this.amountOK = true;
		        }else{
		        	this.amountOK = false;
		        }
	  		},
	  		getYZM : function(){
				var self = this; 
				function settime() { 
					if (self.countdown == 0) {
				        self.getText="获取验证码"; 
				        self.djs = true;
						clearTimeout(times);
				        self.countdown = 60;  
						self.timeDJS = true;
				        return;
					} else { 
						self.timeDJS = false;
				        self.djs = false;
				        self.getText="重 发 (" + self.countdown + ")"; 
						self.countdown --;
					} 
					var times = setTimeout(function() { 
						settime() 
					},1000) 
				} 
				if(self.timeDJS){
	  				var regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
	  				if(this.phoneOK==true){
		  				if(this.amountOK==true&&this.amount!=''){
			  				T.ajax({
					  			url : '/v3/pc/crush/send-sms.do',
					  			data : {
					  				amount : this.amount,
					  				mobilePhone : this.GHTPHONE,
					  			},
					  			callback : true,
					  		}).then(data=>{
					  			if(data.success){
						  			settime();
						  			this.serialNum = data.map.serialNum;
					  			}else{
				  					requirePop('yzmerr',{
				                        props: {
				                            title : '提示',
				                            msg : data.errorMsg,
				                            btn : '我知道了',
				                            transition : 'rotate3d',
				                            showclose : false,
				                        }
				                    },'notice');
					  			}
					  		});
		  				}else{
		                    requirePop('amountErr',{
		                        props: {
		                            title : '提示',
		                            msg : '充值金额必须为100的整数倍',
		                            btn : '我知道了',
		                            transition : 'rotate3d',
		                            showclose : false,
		                        }
		                    },'notice');
		  				}
		  			}else{
		  				requirePop('getmm',{
	                        props: {
	                            title : '提示',
	                            msg : '请填写正确的手机号',
	                            btn : '我知道了',
	                            transition : 'rotate3d',
	                            showclose : false,
	                        }
	                    },'notice');
		  			}
				}
	  		},
	  		sublime : function(){
	  			if(this.amountOK==true&&this.phoneOK==true&&this.serialNum!=''){
	  				TDAPP.onEvent('LJCZBtn');
		  			T.ajax({
			  			url : '/v3/pc/crush/pay.do',
			  			data : {
			  				mobilePhone : this.GHTPHONE,
				  			captcha:this.msgCode,
				  			serialNum:this.serialNum,
			  			},
			  			callback : true,
			  		}).then(data=>{
			  			if(data.success){
			  				var zonge = this.XEInfo.funds+parseInt(this.amount);
			  				TDAPP.onEvent('CZcg');
			  				requirePop('yzm',{
		                        props: {
		                            title : '充值结果',
		                            msg : "您成功充值"+this.amount+"元，现账户余额"+zonge+"元",
		                            btn : '立即投资',
		                            transition : 'rotate3d',
		                            showclose : true,
		                            okCallback(){
			                            router.replace({path: 'billDetail', query: { toFrom: T.toFrom }})
	  								}
		                        }
		                    },'notice');
			  			}else{
			  				requirePop('yzm',{
		                        props: {
		                            title : '提示',
		                            msg : data.errorMsg,
		                            btn : '我知道了',
		                            transition : 'rotate3d',
		                            showclose : false,
		                        }
		                    },'notice');
			  			}
			  		});
	  			}else{
	  				requirePop('yzm',{
                        props: {
                            title : '提示',
                            msg : '请检查信息是否正确',
                            btn : '我知道了',
                            transition : 'rotate3d',
                            showclose : false,
                        }
                    },'notice');
	  			}
	  		},
	  		showTS : function(){
	  			$('.TS').removeClass('yin');
	  			setTimeout(function() {$('.TS').addClass('yin');}, 3000);
	  		},
	  		hideTS : function(){
	  			this.isshowTS = false;
	  		}
	  	}
	}
</script>
<template>
    <div class='module-scroll'>
	    <div class="bill-top img-size" data-paddingLeft='36' data-paddingRight='36' data-height='180' data-paddingTop='20' data-fontSize='24'>
	    	<p>恭喜您认证成功！</p>
	    	<p>离体验新手宝只有一步之遥</p>
	    	<div class="jindu img-size" data-width='600' data-height='49' data-marginTop='20'></div>
	    </div>
	    <div class="bankbox img-size" data-height='88' data-paddingTop='46' data-paddingBottom='46' data-marginBottom='20' data-paddingLeft='40' data-fontSize='26'>
	    	<img class="img-size" data-width='88' data-height='88' data-marginRight='33' :src="bankInfo.thumbnail" alt="">
	    	<span class="img-size" data-width='200'><i class='img-size' data-fontSize='30'>{{bankInfo.bankName}}</i><br>尾号{{bankInfo.bankNum}}</span>
	    	<i class="jin img-size" data-width='40' data-height='31' data-marginTop='26' data-marginLeft='30' data-marginRight='30'></i>
	    	<i class="huarui img-size" data-width='88' data-marginRight='33' data-height='88'></i>
	    	<span><i class='img-size' data-fontSize='30'>华瑞银行</i><br>资金存管户</span>
	    </div>
	    <div class="bill-info img-size" data-paddingLeft='32' data-paddingRight='32' data-paddingTop='10' data-fontSize='30'>
	    	<div class="pull img-size" data-lineHeight='66' data-marginTop='16' style="position: relative;">
	    		<span class="img-size" data-width='250'>手机号码：</span>
	    		<input v-show='chufaChangePhone == false' type="tel" v-model="bankPhonePlace" v-on:blur= 'bankPhonePlaceBlur' v-on:input= 'chanphone'>
	    		<input v-show='chufaChangePhone == true' class="img-size" data-lineHeight='55' type="tel" v-model="bankPhone" v-on:blur= 'phoneBlur' v-on:input= 'phoneInput' maxlength="11" minlength="11">
	    		<i class="ts img-size" data-width='25' data-height='25' data-right='48' data-top='20' @click='showTS'></i>
	    		<div class="TS img-size" data-top='-50' data-right='0' data-fontSize='20' data-lineHeight='36' data-paddingLeft='8' data-paddingRight='8'><span>银行预留手机号不一致可修改</span><i class="jian img-size" data-width='40' data-height='28' data-right='50'></i></div>
	    	</div>
	    	<div class="pull img-size" data-lineHeight='66' data-marginTop='16'>
	    		<span class="img-size" data-width='250'>充值金额（元）：</span>
		    	<input type="number" class="img-size" data-lineHeight='55' v-model = 'amount' placeholder="请输入充值金额" v-on:blur= 'amountDian'>
	    	</div>
	    	<div class="pull2 img-size" data-lineHeight='66' data-marginTop='16'>
	    		<span class="img-size" data-width='250'>验证码：</span>
		    	<input type="text" placeholder="输入短信验证码" class="img-size" data-width='290' data-lineHeight='55' v-model = 'msgCode'>
		    	<span class="yzm img-size" data-fontSize='24' @click='getYZM'><i v-show='djs'>{{getText}}</i><i v-show='!djs' style='color:#333;'>{{getText}}</i></span>
	    	</div>
	    </div>
	    <p class="yue img-size" data-paddingLeft='30' data-paddingTop='30'>可用余额：{{XEInfo.funds}}元</p>
	    <div class="deng img-size" data-height='50' data-marginTop='10'></div>
	    <div class="img-size" data-fontSize='24' data-paddingLeft='32' data-paddingTop='10' data-lineHeight='40'>
		    <ul>
		    	<li>· 充值金额最少为<span>3</span>元</li>
		    	<li>· 银行充值单笔限额<span>{{XEInfo.quota | currency}}</span>元</li>
		    	<li>· 银行充值单日限额<span>{{XEInfo.dayQuota | currency}}</span>元</li>
		    	<li>· 如有疑问请致电<span>400-690-8896</span></li>
		    </ul>
	    </div>
	    <div class="sub-info img-size" data-width='550' data-lineHeight='90' data-fontSize='36' data-marginTop='50' @click='sublime'>
		    立即充值
	    </div>
	    <div class="dun img-size" data-fontSize='24' data-marginTop='60'>
	    	<i class="img-size" data-width='32' data-height='38'></i>
	    	<span>您的资金将由华瑞银行提供存管服务，敬请放心！</span>
	    </div>
    </div>
</template>