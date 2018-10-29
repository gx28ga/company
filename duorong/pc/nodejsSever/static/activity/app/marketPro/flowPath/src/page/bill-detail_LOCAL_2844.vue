<style scoped>
    @import './../css/main.css';
    .module-scroll{ background: #f6f6f6; 
        .bill-top{ position: relative; color: #fff; background: url('../images/topbg.png') no-repeat; background-size: contain;
			p{ text-align: center; &:nth-child(1){ color:#333; text-align: left; span{ background:#ffebda ; color:#ff9a5e; border-radius: 5px; }} &.nh{ color: #ff681b;display: block;span{ font-family: 'Arial'; } }
				&.qt{margin:0 auto; display: table; border: 1px dashed #f96; border-radius: 30px;color: #ff995d; span{color: #ff681b;} }
			}
    	}
    	.bill-info{ background: #fff; color: #666;
			p{ color: #999; border-bottom: 1px solid #ccc; }
			span{ float: right; display: inline-block; }
    	}
    	a{ color: #0099ff; }
		.float{ background: -webkit-gradient(linear,0 100% ,100% 100%, from(#ffcc33), to(#ff6600)); text-align: center; color: #fff;  position: fixed; bottom: 0;width: 100%;
			input{ border-radius: 5px;color: #ccc;border:0;}
		    input::-webkit-input-placeholder {color: #ccc; font-size: 15px;}
		    input:-ms-input-placeholder {color: #ccc; font-size: 15px;}
		    input:-moz-placeholder {color: #ccc; font-size: 15px;}
		    input::-moz-placeholder {color: #ccc; font-size: 15px;}
		}
		.safe{background: #fff;display: inline-block;width: 100%;
			.safekuai{ display: inline-block;width: 32%;text-align: center;
				i{display: block; margin:0 auto; 
					&.cg{ background: url('../images/icon-cunguan.png') no-repeat; background-size: contain; } 
					&.bz{ background: url('../images/icon-bz.png') no-repeat; background-size: contain; } 
					&.aq{ background: url('../images/icon-safe.png') no-repeat; background-size: contain; } 
				}
				span{
					&.fi{color:#05172f;}
				}
			}
		}
		.question{ background: #fff; 
			.help{
				border-bottom:1px dashed #cccccc;
				&:nth-child(5){ border-bottom:none; };
				p{color:#666666;
					.kai{ display: block; float: right; background: url('../images/kai.png') no-repeat; background-size: contain; }
					.he{ display: block; float: right; background: url('../images/he.png') no-repeat; background-size: contain; }
				}
			}
		}
    }
</style>
<script>
    import floattop from '../html/floattop.vue';
    import requirePop from '../pop/requirePop.js';
	export default {
	    data(){
	    	return{
	    		info:{
	    			rate : '',
	    			extraRate : '',
	    			increasedAmount : '',
	    			leastPurchaseAmount : '',
	    			maxPurchaseAmount : '',
	    			isSetPassword : '',
	    			balance : '',
	    		},
	    		amount : '',
	    		amounterror : '',
	    		reg : null,
	    		agree : true,
	    		iskai1: false,
	    		iskai2: false,
	    		iskai3: false,
	    		iskai4: false,
	    		downTop: true,
	    	}
		},
		components:{
			floattop
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
            }
        },
		mounted(){
	  		T.setImgSize();
	  		var self=this;
	  		self.reg = /^[1-9]\d*00$/;
	  		if(T.localStorage.getItem('TZJE')){
		  		self.amount = T.localStorage.getItem('TZJE');
	  		}
	  		T.ajax({
	  			url:'/indexProduct',
	  			data : {time : new Date()},
	  			callback : true,
	  		}).then(data=>{
	  			this.info = data.map.rookieList[0];
	  		})
	  	},
	  	methods :{
			agreelocked : function(){
				this.agree = this.agree;
			},
	  		amountFun :function(){
	  			var self = this;
	  			if(self.amount>=0){
	                if(!self.reg.test(self.amount)){
	                    self.amounterror = '请输入100的整数金额';
	                }else{
	                	self.amounterror = '';
	                }
	  			}
	  		},
	  		toInvest : function(){
	  			var self = this;
	  			TDAPP.onEvent('TZBtn');
	  			if(self.reg.test(self.amount)&&self.amount<=50000){
		  			if(self.agree==true){
			  			if(self.info.isSetPassword == 1){
			  				if(self.amount<=self.info.balance){
			  					if(self.amount<=self.info.maxPurchaseAmount){
					                if(self.reg.test(self.amount)==true){
					  					T.localStorage.setItem('amount',self.amount);
					                	self.amounterror = ''; 
							  			requirePop('inputsd',{
							  				props: {
						                        title : '请输入交易密码',
						                        transition : 'rotate3d',
						                        btn :'确认投资',
						                        showclose : true,
						                        amount : this.amount,
						                    }
							  			},'inputpass')
					                }else{
					                    self.amounterror = '请输入100的整数金额';
					                }
					  			}
			  				}else{//余额不足
                                router.replace({path: 'recharge', query: { toFrom: T.toFrom }})
			  					T.localStorage.setItem('amount',self.amount-self.info.balance);
			  					T.localStorage.setItem('TZJE',self.amount);
			  				}
			  			}else{
                            router.replace({path: 'authentication', query: { toFrom: T.toFrom }})
		  					T.localStorage.setItem('amount',self.amount-self.info.balance);
		  					T.localStorage.setItem('TZJE',self.amount);
			  			}
		  			}else{
		  				requirePop('agreetrue',{
			  				props: {
		                        title : '提示',
		                        transition : 'rotate3d',
		                        btn :'我知道了',
		                        msg : '请勾选投资协议',
		                        showclose : false,
		                    }
			  			},'notice')
		  			}
	  			}else{
	  				requirePop('agreetrue',{
		  				props: {
	                        title : '提示',
	                        transition : 'rotate3d',
	                        btn :'我知道了',
	                        msg : '请输入正确的投资金额',
	                        showclose : false,
	                    }
		  			},'notice')
	  			}
	  		}
	  	}
	}
</script>
<template>
    <div class='module-scroll'>
    	<floattop></floattop>
	    <div class="bill-top img-size" data-paddingLeft='36' data-paddingRight='36' data-height='381'>
	    	<p class="img-size" data-lineHeight='106' data-fontSize='36' data-paddingLeft='90'>
                {{info.fullName}}
                <span class="img-size" data-fontSize='22' data-marginLeft='30' data-paddingLeft='10' data-paddingRight='10'>首投专享</span>
                <span class="img-size" data-fontSize='22' data-marginLeft='20' data-paddingLeft='10' data-paddingRight='10'>仅限一次</span>
            </p>
	    	<p class="nh img-size" data-fontSize='48' data-lineHeight='40' data-paddingTop='74'>
                <span style="float: left">
                    <span class="img-size" data-fontSize='120'>{{info.rate}}</span>
                    %
                    <i class="img-size" data-fontSize='72'>+</i>
                    <span class="img-size" data-fontSize='120'>{{info.activityRate}}</span>
                    % <br>
                    <span style="color: #a9a9a9" class="img-size" data-fontSize='32'>历史年化收益率</span>
                </span>
                <span style="float: right" class="img-size" data-paddingRight='50'>
                    <span class="img-size" data-fontSize='80'>{{info.deadline}}</span>
                    天<br>
                    <span style="color: #a9a9a9" class="img-size" data-fontSize='32'>产品期限</span>
                </span>
            </p>
	    </div>
	    <div class="bill-info img-size" data-paddingLeft='32' data-paddingRight='32' data-paddingBottom='60' data-marginTop='20' data-marginBottom='20'>
	    	<p class="img-size" data-fontSize='36' data-lineHeight='65' data-marginBottom='10'>产品介绍</p>
	    	<div class="img-size" data-lineHeight='78'>起投金额<span>{{info.leastaAmount | currency}}元，且以{{info.increasAmount | currency}}的倍数递增</span></div>
            <div class="img-size" data-lineHeight='78'>剩余可投<span>{{info.surplusAmount | currency}}</span></div>
	    	<div class="img-size" data-lineHeight='78'>产品总额<span>{{info.amount | currency}}</span></div>
	    	<div class="img-size" data-lineHeight='78'>计息方式<span>投资成功，次日计息</span></div>
	    </div>
	    <div class="safe img-size" data-marginBottom='10' data-paddingTop='29' data-paddingBottom='25'>
    		<div class="img-size" data-width='690' style="margin:0 auto;">
	    		<div class="safekuai " >
	    			<i class="cg img-size" data-width='64' data-height='64'></i>
	    			<span class="fi img-size" data-fontSize='30'>银行存管</span><br>
	    			<span class="img-size" data-fontSize='20'>银行资金存管</span>
	    		</div>
	    		<div class="safekuai">
	    			<i class="bz img-size" data-width='64' data-height='64'></i>
	    			<span class="fi img-size" data-fontSize='30'>国资委下属</span><br>
	    			<span class="img-size" data-fontSize='20'>事业单位控股</span>
	    		</div>
	    		<div class="safekuai" >
	    			<i class="aq img-size" data-width='64' data-height='64'></i>
	    			<span class="fi img-size" data-fontSize='30'>安全保障</span><br>
	    			<span class="img-size" data-fontSize='20'>如约兑付</span>
	    		</div>
    		</div>
	    </div>
		<!--常见问题-->
	    <!--<div class="question img-size" data-paddingLeft='33' data-paddingRight='26'>
	    	<p class="img-size" data-lineHeight='77' style="border-bottom:1px solid #cccccc;">常见问题</p>
	    	<div class="help img-size" data-fontSize='24' data-paddingTop='10' data-paddingBottom='10'>
	    		<p>1、什么是新手宝？<i class="img-size" :class="{true:'kai',false:'he'}[iskai1]" data-width='23' data-height='26' @click='iskai1=!iskai1'></i></p>
	    		<p v-show='iskai1'>　 新手宝是多融财富为兼顾投资者收益性和流动性的需求而特别推出的新手专享类活期理财产品。收益稳健，期限灵活，随时可退。</p>
	    	</div>
	    	<div class="help img-size" data-fontSize='24' data-paddingTop='10' data-paddingBottom='10'>
	    		<p>2、新手宝的收益如何计算？<i class="img-size" :class="{true:'kai',false:'he'}[iskai2]" data-width='23' data-height='26' @click='iskai2=!iskai2'></i></p>
	    		<div v-show='iskai2'>　 
	    			<p>　 • 关于收益：新手宝历史年化收益率5%，前7天享受5%的额外活动加息，即5%+5%，7天后如果继续持有，新手宝收益率恢复为5%。</p> 
	    			<p>　 • 关于计息：当日购买，次日起息，第三日收益到账。发起产品退出申请，当日不计息。</p> 
	    			<p>　 • 关于结算：每日产生利息，按日结算，收益直接转入账户余额。</p>
	    			<p>例如：</p>
	    			<p>　 以7月1日投资5万新手宝并于7月20日发起退出申请：<br>　 7月1日购买成功<br>　 7月2日起开始计息<br>　 7月3日上一日利息直接转入账户余额<br>　 7月2-8日，享受额外活动加息，按5%+5%计息<br>　 7月9-19日，恢复产品原始收益,按5%计息<br>　 7月20日，发起产品退出申请，当日不计息<br>收益=（5%+5%）*50000*7/365+5%*50000*11/365=171.23元</p>
    			</div>
	    	</div>
	    	<div class="help img-size" data-fontSize='24' data-paddingTop='10' data-paddingBottom='10'>
	    		<p>3、为什么无法再次购买新手宝？<i class="img-size" :class="{true:'kai',false:'he'}[iskai3]" data-width='23' data-height='26' @click='iskai3=!iskai3'></i></p>
	    		<p v-show='iskai3'>　 新手宝为新手专享产品，每位新用户只有一次购买机会。</p>
	    	</div>
	    	<div class="help img-size" data-fontSize='24' data-paddingTop='10' data-paddingBottom='10'>
	    		<p>4、新手宝退出（回款）注意事项：<i class="img-size" :class="{true:'kai',false:'he'}[iskai4]" data-width='23' data-height='26' @click='iskai4=!iskai4'></i></p>
	    		<div v-show='iskai4'>
	    			<p>　 • 关于退出时间：随时可退出，购买当日无法申请退出</p> 
	    			<p>　 • 关于退出金额：必须全额退出，无法选择部分退出</p> 
	    			<p>　 • 关于退出结息：发起产品退出申请，当日不计息</p>
	    			<p>　 • 关于退出方式：您于T日发起的退出申请（即点击“全额转出到余额”按钮进行转出），将于T+1日一次性本息全额退出到您的账户余额，例如：周一转出，周二到账；周五转出，下周一到账。以此类推，节假日顺延。如需提现到银行卡，可继续发起提现申请</p>
    			</div>
	    	</div>
	    </div>-->
		<div class="img-size" data-marginBottom='130' data-paddingLeft='30'>
		    <input class="check img-size" data-fontSize="32" data-marginTop="20" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b"  v-on:change="agreelocked"/>
		    <span class="img-size" data-fontSize='24'>我已阅读并同意<a href="http://www.duorongcf.com/other/protocol/loanProtocol.html ">《借款协议》、</a><a href="http://www.duorongcf.com/other/protocol/entrustProtocol.html ">《委托协议》</a></span>
		</div>
	    <div class="float img-size" data-lineHeight='120' data-fontSize='36'>
		    <input type="number" class="img-size" data-paddingLeft='23' placeholder="需为100的倍数" data-height='68' data-fontSize='36' data-lineHeight='68' data-width='489' data-borderRadius='8' data-marginRight='10' v-model="amount" ref="amount" v-on:input="amountFun">
		    <span @click='toInvest'>立即投资</span>
		    <p class="img-size" data-fontSize='20' data-lineHeight='32' data-paddingLeft='50' style="text-align:left;">{{amounterror}}</p>
	    </div>
    </div>
</template>