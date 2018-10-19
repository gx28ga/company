/**
* 充值提现
* created by bo.peng 2018/4/2
* email:spion@qq.com
*/
<style scoped>
	.flexCenter{
		display:flex;
		justify-content:center;
		align-items: center;
		color: #102542;
	}
	.section{
		background:#fff;
	}
	.rechange,.withdrawals{
		flex:1;
		i{
			background: url("../../../images/account/chongzhi.png");
			background-size:contain;
		}
	}
	.withdrawals{
		i{
			background: url("../../../images/account/tixian.png");
			background-size:contain;
		}
	}
	.gap{
		display:flex;
		justify-content:center;
		align-items: center;
	}
	.line{
		width:1px;
		background: #D2D2D2;
	}
</style>
<template>
	<section class="flexCenter section img-size" data-height="104" data-fontSize="36">
			<div class="rechange flexCenter" @click="recharge">
				<i class="img-size" data-width="44" data-height="44" data-marginRight="20"></i>
				<span>充值</span>
			</div>
			<div class="gap flexCenter img-size" data-width="50" data-height="44">
				<div class="line img-size" data-height="44"></div>
			</div>

			<div class="withdrawals flexCenter" @click="withdrawCash">
				<i class="img-size" data-width="44" data-height="44" data-marginRight="20"></i>
				<span>提现</span>
			</div>
	</section>
</template>
<script>
	import {mapGetters} from "vuex";
	export default {
        computed : {
			...mapGetters({
				user : "getUserInfo",
				account : "getUserAccount"
			})
		},
		data() {
			return {}
		},
		mounted() {
			this.setImgSize();
		},
		methods:{
			recharge(){
				this.go().myAccount.recharge();
			},
			withdrawCash(){
				this.go().myAccount.withdrawCash();
			}
		}
	}
</script>
