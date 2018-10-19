<style scoped>
    @import './../css/main.css';
    .module-scroll{
        background: #fff;color: #333333;
		.lang{ background: url('../images/lang.png') no-repeat; background-size: contain; color: #fff; text-align: center; span{color: #ffff00;}span.lan{color:#ccccff;} }
        .sorry{ text-align: center; span{ color: #999999; } }
	    .lqbtn{background: -webkit-gradient(linear,0 100% ,100% 100%, from(#ffcc33), to(#ff6600));margin: 0 auto;border-radius: 100px;color: #fff;text-align: center; }
		.downloadbtn{ text-align: left; letter-spacing: 1px; margin:0 auto;
			i{ background: url('../images/down.png'); background-size: contain; display: inline-block; float: left; }
			a{ color: #ffffff; }
		}
	    
    }
</style>
<script>
	export default {
		mounted(){
	  		T.setImgSize();
	  	} 
	}
</script>
<template>
    <div class='module-scroll'>
	    <div class="lang img-size" data-height='317'>
	    	<p class="img-size" data-fontSize='36' data-paddingTop='98'>您已是多融用户，可以下载多融财富APP<br>参与更多精彩活动</p>
	    </div>
    	<div class="sorry img-size" data-paddingTop='132' data-fontSize='24'>
    		<span class="img-size" data-fontSize='36' data-lineHeight='90'>很遗憾 /(ㄒoㄒ)/~~</span><br>您已参加过类似新手优惠活动所以无法再次参加本活动<br>还有更多其他精彩活动请下载app即可参与
		    <div class="lqbtn downloadbtn img-size" data-width="550" data-lineHeight="90" data-marginTop="150" data-fontSize='36' data-borderRadius='50'>
		        <i class="img-size" data-width="55" data-height="55" data-marginTop="20" data-marginLeft="90" data-marginRight="10"></i>
		        <a href="http://app.duorongcf.com/html/2weima.html" target="_blank">下载多融理财APP</a>
		    </div>
		</div>
    </div>
</template>