<style scoped>
	@import '../../css/global.css';
	span{
		font-family: -apple-system, BlinkMacSystemFont,
		    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
		    "Fira Sans", "Droid Sans", "Helvetica Neue",
		    sans-serif;
		}
    .bg{ background: -webkit-gradient(linear,0 100% , 0 0, from(#84c3e5), to(#e2f0ff)); 
		.top{ width: 100%;position: relative;
	    	.yuna{ width: 100%; background:url('../../images/yun1.png') no-repeat; 
             background-size: contain;  position: absolute; top: 0;}
	    	.logo{ background:url('../../images/logo.png') no-repeat; 
             background-size: contain;  position: absolute; top: 0;}
            .banner{ height: 100%;width: 100%; background:url('../../images/banner.png') no-repeat;  background-size: contain;  position: absolute; top: 0;}
		}
		.tread{ width: 100%; background: url('../../images/tread.png') no-repeat; background-size: contain; }
		.yunb{ width: 100%; background: url('../../images/yun2.png') no-repeat; background-position: center 30%; background-size: contain; }
		.bag{ width: 100%; background: url('../../images/bag.png') no-repeat; background-size: contain; }
		.rule{ color: #004e66; 
			.title{ text-align: center; }
			span{font-weight: bold;}
		}
		.bottom{ width: 100%; background: url('../../images/bottom.png') no-repeat; background-position: bottom; background-size: contain; 
			.ys{ width: 100%; background: url('../../images/ys.png') no-repeat; background-size: contain; }
		}
    }
	.float{ width: 100%; background: rgba(26,98,132,0.9); position: fixed; bottom:0; 
		.btntop{ color: #700004; text-align: center; width: 100%; background: url('../../images/lqbg2.png') no-repeat; background-size: contain; margin :0 auto;
		}
	}
</style>
<script>
	import reg from './../reg/reg.vue';
	export default {
	    data(){
	    	return{
	    	}
	  	},
	  	components : {
            reg
        },
		ready:function(){
		    
		},
	  	watch:{
	  	},
	  	mounted(){
	  		T.setImgSize();
			$('.bg').on('scroll', function() {
		        var scrollTop = $('.bg').scrollTop();
		        if(scrollTop > $('.ys').offset().top) {
		            $('.float').show();
		            scrollTop = 0;
		        } else {
		            $('.float').hide();
		        }
		    });
	  		function show(){
			    $('.float').hide();
	  		}
	  		show();
	  	},
	  	methods:{
	  		gotoTop () {//返回顶部
	  			$('.bg').scrollTop(0);
			}
	  	}
	}
</script>
<template>
<div class="bg module-scroll">
	<div id="top" class="top img-size" data-height='744'>
		<div class="yuna img-size" data-height='348'></div>
		<div class="logo img-size" data-width='189' data-height='82'></div>
		<div class="banner"></div>
	</div>
	<div class="reg-box img-size" data-marginTop='-20'>
		<reg></reg>
	</div>
	<div class="tread img-size" data-height="543" data-marginTop="50"></div>
	<div class="yunb img-size" data-height="750">
		<div class="bag img-size" data-height="283" data-marginTop="80"></div>
		<div class="rule img-size" data-paddingLeft='42' data-paddingRight='42' data-fontSize='28' data-marginTop="20">
			<p class="title img-size" data-fontSize="36">活动介绍</p>
			<ul>
				<li><span>1.10M</span>流量将在注册成功后的<span>3</span>个工作日内发放至注册手机；</li>
				<li><span>2.</span>注册成功后，<span>10000元</span>体验金和<span>1588元</span>红包将同时发放到您的多融账户，可登录多融理财APP或官网查看；</li>
				<li><span>3.</span>首次投资再送最高<span>1000元</span>携程任我行卡；</li>
				<li><span>4.</span>每个手机号仅限参与一次；</li>
				<li><span>5.</span>如有疑问，请咨询客服热线：<span>400-690-8896</span>。</li>
			</ul>
		</div>
	</div>
	<div class="bottom img-size" data-paddingBottom="320">
		<div class="ys img-size" data-height="235"></div>
		<div class="img-size" data-fontSize='24' style="color:#4188af;text-align:center;">上海银砖金融信息服务有限公司 <br>icp备案号：沪ICP备10511207号-5</div>
		<div class="img-size" data-fontSize='24' data-lineHeight='50' style="color:#4188af;text-align:center;">市场有风险 投资需谨慎</div>
	</div>
	<div class="float img-size" data-height='100'>
		<div class="btntop img-size" data-height='100' data-lineHeight='100' data-width='354' @click='gotoTop'><span>立即领取10M流量</span></div>
	</div>
</div>
</template>