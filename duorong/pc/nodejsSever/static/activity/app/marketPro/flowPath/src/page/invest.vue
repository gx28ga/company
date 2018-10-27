<style scoped>
    @import './../css/main.css';
    .module-scroll{ background: #fff;
        .invest-info{ background: #fff;margin: 0 auto;
			.in-icon{ background: url('../images/billok.png') no-repeat; background-size: contain; margin: 0 auto; }
			p{ text-align: center; color: #333;}
			.invest-name{ border-bottom: 1px solid #ccc; border-top: 2px solid #ccc; color: #999; }
			.bill-info{ color: #666; span{ float: right; } }
        }
        .still{ background: #f6f6f6; 
			.still-title{ background: url('../images/stilltitle.png') no-repeat; background-size: contain; }
			.still-cp{ background: url('../images/stillcp.png') no-repeat; background-size: contain; margin: 0 auto;
				.still-info{ color: #fff; 
					p{
						span{ color: #ffff00; }
						&.shier{ border-bottom: 1px dashed #ffccff; display: inline-block;}
					}
					.shierinfo{ 
						span{ display: inline-block; &:nth-child(1){ border-right: 1px dashed #ffccff; }; 
							i{ color: #ffccff; }
						} 
					}
				}
			}
        }
		.float{ background: -webkit-gradient(linear,0 100% ,100% 100%, from(#ffcc33), to(#ff6600)); text-align: center; color: #fff; position: fixed;bottom: 0;width: 100%;}
    }
</style>
<script>
	export default {
	    data(){
	    	return{
	    		amount : '',
	    		prate : '',
	    		profit : '',
	    		pdeadline : '',
	    		pname : '',
	    	}
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
            this.amount = T.localStorage.getItem('amount');
            this.prate = T.localStorage.getItem('prate');
            this.profit = T.localStorage.getItem('profit');
            this.pdeadline = T.localStorage.getItem('pdeadline');
            this.pname = T.localStorage.getItem('pname');
	  	},
	  	methods:{
	  		downApp : function(){
	  			TDAPP.onEvent('DOWNApp');
	  		}
	  	}
	}
</script>
<template>
    <div class='module-scroll'>
	    <div class="invest-info img-size" data-width='686' data-paddingTop='38' data-paddingBottom='10'>
	    	<div class="in-icon img-size" data-width='112' data-height='119' data-marginBottom='18'></div>
	    	<p class="img-size" data-lineHeight='90'>投资成功</p>
	    	<div class="invest-name img-size" data-lineHeight='88' data-fontSize='36' data-marginBottom='10'>{{pname}}</div>
	    	<div class="bill-info img-size" data-lineHeight='80' data-fontSize='30'>投资金额<span>{{amount | currency}}</span></div>
	    	<div class="bill-info img-size" data-lineHeight='80' data-fontSize='30'>投资期限<span>{{pdeadline}}天</span></div>
	    	<div class="bill-info img-size" data-lineHeight='80' data-fontSize='30'>历史年化收益率<span>{{prate}}%</span></div>
	    	<div class="bill-info img-size" data-lineHeight='80' data-fontSize='30'>预计收益<span>{{profit}}元</span></div>
	    </div>
	    <div class="still img-size" data-paddingTop='32' data-paddingBottom='132'>
	    	<div class="still-title img-size" data-height='29' data-marginBottom='54'></div>
	    	<div class="still-cp img-size" data-width='700' data-height='411'>
	    		<!-- <div class="still-info img-size" data-paddingLeft='270' data-paddingTop='30' data-fontSize='30'>
	    			<p><span><i class="img-size" data-fontSize='60'>1588</i>元</span> 现金红包</p>
	    			<p>投资后可提现</p>
	    			<p class="shier img-size" data-paddingTop='56'><span><i class="img-size" data-fontSize='60'>12</i>%</span> 预期年化收益</p>
	    			<div class="shierinfo img-size" data-fontSize='24' data-paddingTop='18'><span class="img-size" data-paddingRight='30' data-marginRight='30'>28天起<br><i>投资期限</i></span><span>100元起<br><i>起投金额</i></span></div>
	    		</div> -->
	    	</div>
	    </div>
	    <a class="float img-size" data-lineHeight='120' data-fontSize='36' href="http://app.duorongcf.com/html/2weima.html" target="_blank" @click='downApp'>下载多融理财APP</a>
    </div>
</template>