<style scoped>
    .article{
        background:#fff;
    }
	.bg{
		background:url("../../images/update/upgrade/imgbg.jpg") repeat-x;
		background-size:100% 100%;

	}
	.head{
		background:url("../../images/update/upgrade/img_02.jpg");
		background-size:contain;
	}
	.img2{
		background:url("../../images/update/upgrade/img_03.jpg");
		background-size:contain;
	}
	.text{
		color:#fff;
	}
	.title{
		color:#fff;
		i{
			float:left;
			margin-top:5px;
			background:url("../../images/update/upgrade/clock.png");
			background-size:contain;
		}
		h2{
			float:left;
			padding-left:5px;
		}
	}
	.box{
		border-radius:20px;
		background:rgba(255,255,255,.5);
		display:flex;
		flex-direction:row;
		p{
			padding-bottom:8px;
			word-break: break-all;
		}
		.red{
			color:#e60012;
		}

	}
	.codeh2{
		padding:10px 0;
		color:#fff;
		text-align:center;
	}
	.code{
		margin:0 auto 20px;
		background:url("../../images/code/weixin.png") no-repeat;
		background-size:100% auto;
	}
</style>
<template>
	<article class="article img-size" data-paddingBottom="50">
		<div class="head img-size" data-height="314"></div>
		<div class="img2 img-size" data-height="427"></div>
		<div class="bg img-size" data-height="592">
			<div class="text img-size" data-padding="50" data-lineHeight="40" data-fontSize="28">
				<p>
					由于业务发展需要，多融财富旗下APP，“多融理财”已于2018年2月正式更名为“多融财富"。iOS端后续版本更新将只在”多融财富“上进行。各位苹果手机用户可下载”多融财富“APP正常登录进行投资理财。
				</p>
			</div>
			<div class="title img-size" data-padding="30" >
				<i class="img-size" data-width="44" data-height="44"></i><h2 class="img-size" data-fontSize="48">更新方式如下</h2>
			</div>
			<div class="box img-size" data-margin="60" data-padding="30"
				data-lineHeight="30"
			>
				<div class="left img-size" data-fontSize="28">
					<p>◆打开App Store搜索“多融财富”进行下载</p>
					<p>◆复制以下网址并在safari中打开，也可下载</p>
					<p class="img-size red" data-fontSize="18">http://www.duorongcf.com/html/activity/2weima.html</p>
				</div>
			</div>
			<h2 class="codeh2 img-size" data-fontSize="28">扫描二维码进行下载</h2>
			<div class="code img-size" data-width="280" data-height="280"></div>
		</div>
	</article>
</template>
<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			this.setImgSize();
		}
	}
</script>
