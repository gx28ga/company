<style scoped>
	.navbar{
		padding:10px 0;
		background:#fff;
		ul{
			display:flex;
			flex-direction:row;
		}
		li{
			flex:1;
			color:#666;
			.img{
				display:block;
				float:left;
				margin-left:10px;
				margin-right:5px;
			}
			img{
				display:block;
				background-size:100% auto;
			}
			&.first{
				i{

				}
			}
			&.last{
				i{
					background-size:100% auto;
				}
			}
		}
	}
</style>
<template>
	<article v-if="data && data.length" class="navbar img-size" data-marginBottom="20">
		<ul>
			<li class="first" v-if="data[0]" @click="goURL(data[0])">
				<div class="img img-size"
				     data-width="62" data-height="62">
					<img v-if="data[0].imgUrl.length" class="img-size" data-width="62" data-height="62" :src="data[0].imgUrl" />
				</div>
				<h2 class="img-size" data-fontSize="30">{{data[0].title}}</h2>
				<p class="img-size" data-fontSize="20">{{data[0].subtitle}}</p>
			</li>
			<li class="last" v-if="data[1]" @click="goURL(data[1])">
				<div class="img"
				     data-width="62" data-height="62">
					<img v-if="data[1].imgUrl.length" class="img-size" data-width="62" data-height="62" :src="data[1].imgUrl" />
				</div>
				<h2 class="img-size" data-fontSize="30">{{data[1].title}}</h2>
				<p class="img-size" data-fontSize="20">{{data[1].subtitle}}</p>
			</li>
		</ul>
	</article>
</template>
<script>
	import {mapGetters} from "vuex";
	export default {
		props:["data"],
		computed:{
				...mapGetters({
					userInfo:"getUserInfo",
				})
		},
		mounted() {
			this.$nextTick(function(){
				T.setImgSize();
			});
		},
		methods:{
			goURL(item){
				//let uid = T.uid?"?uid="+T.uid:"";
				let uid = this.userInfo?"?uid="+this.userInfo.member.uid:"";
				//window.location.href = item.url+uid;
				this.go().outside({
					url:item.url+uid,
					title:item.title,
				})
			}
		}
	}
</script>
