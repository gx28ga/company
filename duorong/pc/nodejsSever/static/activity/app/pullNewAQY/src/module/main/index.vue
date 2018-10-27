<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
	.pullnewbody{ background: #101010;  }
	.banner{ width: 100%; background: url('../../images/banner.jpg') no-repeat; background-size: contain; }
	.haoli{ width: 100%; background: url('../../images/info.png') no-repeat; background-size: contain; }
	.rule{  width:100%; background: url('../../images/rule.png') no-repeat; background-size: contain; 
	}
	.lqbtn{ background: url('../../images/ljlq.png') no-repeat; background-size: contain; margin: auto;}
	.regbox{ position: relative; }
	.borrom{ background: -webkit-gradient(linear,0 100% , 0 0, from(#a758f5), to(#d19ce7)); }
	.guan {background: url('../../images/guan.png') no-repeat; background-size: contain;left:0; position: absolute;}
	.xu{letter-spacing: -0.5px; text-align: center; color: #fde900; border-bottom: 1px dashed #964ce2; margin:0 auto;}
	.di{letter-spacing: -0.5px; text-align: center; color: #6100cc; }
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import reg from './../html/reg.vue';
	import {regAndInvestCount} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
	    		peonum: 0,
	    		strs: '',
	    		regUser : null
	    	}
	  	},
	  	components : {
           reg
        },
	  	mounted(){
	  		T.setImgSize();
	  	},
	  	methods:{
	  		gotoReg () {//返回顶部
	  			$('.bg').scrollTop($('.haoli').offset().top);
			}
	  	}
	}
</script>
<template>
<div class="bg pullnewbody module-scroll">
    <div class="banner img-size" data-height='520'></div>
    <div class="borrom">
		<div class="lqbtn img-size" data-width="331" data-height="86" @click="gotoReg"></div>
	    <div class="haoli img-size" data-height='470' data-marginTop="26"></div>
		<div class="regbox">
			<div class="guan img-size" data-width="94" data-height="96" data-top="510"></div>
			<reg></reg>
		</div>
		<div class="rule img-size" data-height="686" data-marginTop="30"></div>
		<div class="xu img-size" data-width="645" data-lineHeight="36" data-paddingBottom="20" data-marginBottom="20" data-fontSize="18">
			<p>市场有风险 投资需谨慎</p>
			<p>平台建议的预期年化收益率仅供参考，不代表未来实际收益</p>
		</div>
		<div class="di img-size" data-lineHeight="36" data-fontSize="18" data-paddingBottom="30">
			<p>icp备案：沪ICP备15011207号</p>
			<p>公司名称：上海银砖金融信息服务有限公司</p>
		</div>
    </div>
</div>
</template> 