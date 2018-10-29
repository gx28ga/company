<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
</style>
<script>
	import newbill from './../html/newbill.vue';
	export default {
	    data(){
	    	return{
			  	phone:'',
	    	}
	  	},
	  	components : {
            newbill
        },
	  	mounted(){
	  		T.setImgSize();
	  		this.phone = this.$route.query.phone;
	  	}
	}
</script>
<template>
<div class="module-scroll">
	<div class="banntitle img-size" data-paddingTop='30'  data-paddingBottom='30'>
	    <div class="title img-size" data-width="475" data-height="61">
			<p class="prti"><span class="titlebga img-size" data-width="246" data-height="30" data-marginTop="10"></span></p>
		</div>
	</div>
	<div class="hl hl1 img-size" data-paddingTop="2" data-paddingBottom="55" style="height:auto;">
	    <div class="success regi img-size" data-marginTop="39" data-fontSize='36' data-lineHeight="58" style="text-align:center;">
	    	<span>当前账户：</span><span>{{phone}}</span>
    	</div>
	    <div class="box">
			<div class="register img-size" data-width="570" data-marginTop="30" data-borderTopLeftRadius='30' data-borderTopRightRadius='30' data-fontSize='30' data-paddingTop='40'>
				<div class="success regi img-size" data-width='530' data-paddingBottom="39" data-lineHeight="58" style="border-bottom: 1px solid #dddddd;margin:0 auto;"><i class="img-size" data-height="58" data-width="58" data-marginLeft="180" data-marginRight="17" data-fontSize='32'></i><span>体验成功</span></div>
		        <p class="name2 img-size" data-fontSize='32' data-lineHeight='90' data-paddingLeft='37'>账户可提现金额：　　　<span>3.28元</span></p>
		        <p class="red2 img-size" data-fontSize='22' data-lineHeight='50' data-paddingLeft='37' style="text-align:left;">下载多融理财app即可提现！</p>
			    <div class="dlbtn downloadbtn img-size" data-width="500" data-lineHeight="70" data-marginTop="30" data-fontSize='38' data-borderRadius='50'>
			        <i class="img-size" data-width="55" data-height="55" data-marginTop="9" data-marginLeft="60" data-marginRight="4"></i>
			        <a href="http://app.duorongcf.com/html/2weima.html">下载多融理财APP</a>
			    </div>
		    </div>
		    <div class="bottbgg img-size" data-width="594" data-height="130">
		    </div>
		</div>
    </div>
	<newbill></newbill>
	<div class="bannbox img-size" data-height="120" style="width: 100%;position: fixed;bottom: 0;">
		<div class="bga" style="background:rgba(0,0,0,0.5);color:#fff;">
			<div class="img-size" data-paddingLeft="30" data-fontSize='28' data-lineHeight='120' style="">下载多融理财APP 更多惊喜等你来</div>
			<div class="btn lqbtn img-size" data-width="180" data-lineHeight="60" data-right="30" data-top="30" data-borderRadius='40' data-fontSize="30"><a href="http://app.duorongcf.com/html/2weima.html" style="color:#ac1c1c;">立即下载</a></div>
		</div>
	</div>
</div>
</template>