<style scoped>
	@import '../../css/global.css';
	span{
		font-family: -apple-system, BlinkMacSystemFont,
		    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
		    "Fira Sans", "Droid Sans", "Helvetica Neue",
		    sans-serif;font-weight: bold;
		}
    .bg{ background: -webkit-gradient(linear,0 100% , 0 0, from(#84c3e5), to(#e2f0ff)); 
		.top{ width: 100%; background:url('../../images/yun3.png') no-repeat; 
             background-size: contain; background-position: top;  
	    	.lucky{ width: 100%; background:url('../../images/lucky.png') no-repeat; 
             background-size: contain;}
            .table{ width: 100%; background:url('../../images/table.png') no-repeat;  background-size: contain;}
		}
		p{color: #004e66; text-align: center;}
		.downbtn{ color: #700004; text-align: center; width: 100%; background: url('../../images/lqbg.png') no-repeat; background-size: contain; background-position: center; }
		.rule{ color: #004e66; 
			.title{ text-align: center; }
		}
		.luckyb{ width: 100%; background: url('../../images/bottom.png') no-repeat; background-position: bottom; background-size: contain;
		}
    }
</style>
<script>
	export default {
	    data(){
	    	return{
	    	}
	  	},
	  	components : {

        },
		ready:function(){
		    
		},
	  	watch:{
	  	},
	  	mounted(){
	  		T.setImgSize();
	  	},
	  	methods:{
	  		downApp: function(){
	  			window.location.href="http://app.duorongcf.com/html/2weima.html";
	  		}
	  	}
	}
</script>
<template>
<div class="bg">
	<div class="top img-size" data-height='766'>
		<div class="lucky img-size" data-height='396'></div>
		<p class="img-size" data-fontSize="24" data-marginTop="35" data-marginBottom="20">下载多融理财APP,投资赚收益，最高领<span>1000元携程任我行卡</span></p>
		<div class="table img-size" data-height='286'></div>
	</div>
	<div class="downbtn img-size" data-height="107" data-lineHeight="90" data-marginTop="55" data-fontSize="44" @click='downApp'><span>立即下载</span></div>
	<div class="luckyb img-size" data-paddingBottom="320">
		<div class="rule img-size" data-paddingLeft='42' data-paddingRight='42' data-fontSize='28' data-marginTop="20">
			<p class="title img-size" data-fontSize="44" data-marginBottom="15">你旅游，我出钱</p>
			<p class="title img-size" data-fontSize="36">活动介绍</p>
			<ul>
				<li><span>1.</span>新用户首次投资（除新手标外）：</li>
				<li>投资<span>5000元30天</span>以上标期，赠送<span>50元</span>携程任我行卡投资<span>15000元90天</span>以上标期，赠送<span>400元</span>携程任我行卡投资<span>20000元180天</span>以上标期，赠送<span>1000元</span>携程任我行卡；</li>
				<li><span>2.</span>携程任我行卡兑换码每个手机号仅限领取一次，兑换码将在投资成功后7个工作日内以短信形式发放；</li>
				<li><span>3.</span>活动解释权在法律允许的范围内归多融财富所有；</li>
				<li><span>4.</span>如有疑问，请咨询客服热线：<span>400-690-8896</span>。</li>
			</ul>
		</div>
	</div>
</div>
</template>