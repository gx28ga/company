<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
	.pullnewbody{ background: #101010;  }
	.banner{ width: 100%; background: url('../../images/banner.png') no-repeat; background-size: contain; }
	.haoli{ width: 100%; background: url('../../images/haoli.png') no-repeat; background-size: contain; }
	.regbox{ background: #101010; background: -webkit-gradient(linear,90% 100% , 0 0, from(#414241), to(#111111)); }
	.compare{color: #ffab28;
		.title{ width: 100%; background: url('../../images/title.png') no-repeat; background-size: contain; }
		.db{ width: 100%; background: url('../../images/db.png') no-repeat; background-size: contain; }
	}
	.abouta{  width:100%; background: url('../../images/obg.png');
		.abtitle{ width: 100%; background: url('../../images/abti.png') no-repeat; background-size: contain; }
	}
	.bottom{ letter-spacing: -0.5px; text-align: center; color: #666666; p:nth-child(1){ color:#d6a16e; border-bottom: 1px dashed #666666; } }
	.float{ position: fixed; bottom: 0; width: 100%; background: url('../../images/flobg.png') no-repeat; background-size: contain; 
		span{letter-spacing: -0.5px;}
		.btn{ background: #ffb400; text-align: center; color: #ff4f01; position: absolute; }
	}
	.yy{ box-shadow: 0 0 9px 1px rgba(226,199,144,.75); float: left; }
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
	  		var self = this;
	  		function init(){
		  		T.ajax({ 
	                url : regAndInvestCount , 
	                data : {},
	                callback:true,
	                success : function( _data ){
	                	if(_data.success){
		                    self.peonum = _data.map.regCount;
	                	}
	                }
	            });
	  		}
	  		init();
	  		$('.bg').on('scroll', function() {
		        var scrollTop = $('.bg').scrollTop();
		        if(scrollTop > $('.iconb').offset().top) {
		            $('.bannbox').show();
		            scrollTop = 0;
		        } else {
		            $('.bannbox').hide();
		        }
		    });
	  		function show(){
			    $('.bannbox').hide();
	  		}
	  		show();
	  	},
	  	methods:{
	  		gotoTop () {//返回顶部
	  			$('.bg').scrollTop(300);
			}
	  	}
	}
</script>
<template>
<div class="bg pullnewbody module-scroll">
    <div class="banner img-size" data-height='636'></div>
    <div class="haoli img-size" data-height='404'></div>
	<div class="regbox img-size" data-paddingTop='44' data-paddingBottom='60' >
		<reg></reg>
	</div>
	<div class="compare img-size" data-paddingTop='50' data-paddingBottom='75'>
		<div class="title img-size" data-height='44'></div>
		<p class="img-size" data-paddingTop='90' data-paddingLeft='35' data-fontSize='24'>投资金额：5万元 </p>
		<div class="db img-size" data-height='364' data-marginTop='55'></div>
	</div>
	<div class="abouta img-size" data-paddingTop="44" data-paddingBottom="40">
		<div class="abtitle img-size" data-height='44'></div>
		<div class="about-us img-size" data-paddingLeft="24" data-paddingRight="24" data-paddingTop="25">
		    <div class="about img-size" data-paddingTop="32" data-paddingBottom="32">
		    	<div class="yy img-size" data-width="106" data-height="106" data-borderRadius='10' data-marginTop='28' data-marginLeft='22' data-marginBottom='28' data-marginRight='32'>
			        <div class="icons icona img-size" data-width="74" data-height="72" data-marginTop="18" data-marginBottom="18" data-marginRight="18" data-marginLeft="18"></div>
		    	</div>
		        <!--<div class="text img-size" data-borderRadius='10' data-paddingTop='22' data-paddingLeft='12' data-paddingBottom='22'><p class="big img-size" data-fontSize='36'>公司背景</p><p class='img-size' data-fontSize='24'>大型国企中商沪深99%控股<br>（国资委下属商业网点建设开发中心旗下）</p></div>-->
				<div class="text img-size" data-borderRadius='10' data-paddingTop='22' data-paddingLeft='12' data-paddingBottom='22'><p class="big img-size" data-fontSize='36'>公司背景</p><p class='img-size' data-fontSize='24'>国资委旗下-沪深控股战略控股，占股比例为99%（商业网点建设开发中心旗下）</p></div>
		    </div>
		    <div class="about about1 img-size" data-paddingTop="32" data-paddingBottom="32">
		        <div class="iconsb img-size" data-height="365"></div>
		    </div>
		    <div class="about about1 img-size" data-height='116' data-paddingTop="32" data-paddingBottom="32" data-marginTop='50' data-marginBottom='50'>
		        <div class="yy img-size" data-width="106" data-height="106" data-borderRadius='10' data-marginTop='28' data-marginLeft='22' data-marginBottom='28' data-marginRight='32'>
			        <div class="icons iconb img-size" data-width="74" data-height="72" data-marginTop="18" data-marginBottom="18" data-marginRight="18" data-marginLeft="18"></div>
		    	</div>
		        <div class="text img-size" data-borderRadius='10' data-paddingTop='40' data-paddingLeft='12' data-paddingBottom='40'><p class="big img-size" data-fontSize='36'>合规运营</p><p class='img-size' data-fontSize='24'>银行资金存管、专业律所提供合规支持</p></div>
		    </div>
		    <div class="about about1 img-size" data-height='116' data-paddingTop="32" data-paddingBottom="32">
		        <div class="yy img-size" data-width="106" data-height="106" data-borderRadius='10' data-marginTop='28' data-marginLeft='22' data-marginBottom='28' data-marginRight='32'>
			        <div class="icons iconc img-size" data-width="74" data-height="72" data-marginTop="18" data-marginBottom="18" data-marginRight="18" data-marginLeft="18"></div>
		    	</div>
		        <div class="text img-size" data-borderRadius='10' data-paddingTop='40' data-paddingLeft='12' data-paddingBottom='40'><p class="big img-size" data-fontSize='36'>严格风控</p><p class='img-size' data-fontSize='24'>银行级别风控、上线503天、0逾期0坏账</p></div>
		    </div>
		</div>
	</div>
	<div class="bottom img-size" data-paddingTop='20' data-paddingBottom='140' data-paddingLeft='45' data-paddingRight='45' data-fontSize='18'>
		<!--<p class="img-size" data-paddingBottom='20' data-marginBottom='20'>市场有风险 投资需谨慎<br>平台建议的预期年化收益率仅供参考，不代表未来实际收益</p>-->
		<p class="img-size" data-paddingBottom='20' data-marginBottom='20'>市场有风险 投资需谨慎<br>平台建议的历史年化收益率仅供参考，不代表未来实际收益</p>
		<p>icp备案：沪ICP备15011207号<br>公司名称：上海银砖金融信息服务有限公司</p>
	</div>
	<div class="bannbox img-size" data-height="120" style="width: 100%;position: fixed;bottom: 0;">
		<div class="bga img-size" data-height="120"data-lineHeight="120" >
			<span class="img-size" data-paddingLeft="20">已有{{peonum}}用户领取新手福利</span>
			<div class="btn lqbtn img-size" data-width="230" data-lineHeight="80" data-right="20" data-top="20" data-borderRadius='16' data-fontSize="42" @click='gotoTop'>立即领取</div>
		</div>
	</div>
</div>
</template> 