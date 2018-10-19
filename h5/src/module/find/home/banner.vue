<style>
	.swiper-container{
		position:relative;
		z-index:1;
		width:100%;
		height:300px;
		padding-bottom:40px;
		overflow:hidden;
	}
	.bannerSider{
		position: relative;
		width: 100%;
		z-index: 1;
		display:flex;
		flex-direction:row;
		-webkit-perspective: 1200px;

		li{
			flex-shrink: 0;
			text-align: center;
			font-size: 18px;
			background: #fff;
			display: flex;
			height:300px;
			overflow:hidden;
			justify-content: center;
			align-items: center;
		}
		img{
			display:block;
			width:100%;
		}
	}
	.swiper-pagination{
		position:absolute;
		z-index:2;
		left:0;
		bottom:5px;
		width:100%;
		height:30px;
		display:flex;
		flex-direction:row;
		align-items:center;
		justify-content:center;
	}
	.swiper-pagination-bullet{
		width:11px;
		height:11px;
		margin:0 3px;
		border-radius:100%;
		background:#bfbfbf;
		box-shadow:0 2px 4px rgba(0,0,0,.3) inset;
	}
	.swiper-pagination-bullet-active{
		background:#ff3f00;
	}
</style>
<template>
	<section class="swiper-container img-size" data-height="300" data-marginTop='10'>
		<ul class="swiper-wrapper bannerSider img-size" v-if="data" data-height="300">
			<li v-for="obj in data" :key="obj.id"
			    @click="goURL(obj)"
			    class="swiper-slide img-size" data-height="370">
				<img :src="obj.imgUrl">
			</li>
		</ul>
		<div class="swiper-pagination"></div>
	</section>
</template>
<script>
	import {mapGetters} from "vuex";
	import Swiper from "../../../../static/plug/swiper-3.4.2.jquery.min";
	export default {
		props:['data'],
		data() {
			return {}
		},
		computed:{
            ...mapGetters({
                userInfo:"getUserInfo",
            })
		},
		mounted() {
			this.$nextTick(function(){
				T.setImgSize();
				new Swiper('.swiper-container', {
					effect:"coverflow",
					slidesPerView: 1,
					centeredSlides: true,
					coverflow: {
						rotate: 60,
						stretch: 40,
						depth: 150,
						modifier: 1,
						slideShadows : true
					},
					pagination: '.swiper-pagination',
					speed:300,
					autoplay: 5000,//可选选项，自动滑动
				});
			})
		},
		methods:{
			goURL(item){
				if(item.location.length>3){
					let uid = this.userInfo?"?uid="+this.userInfo.member.uid:"";
					    if(T.isApp){
                            window.location.href = item.location;
                        }else{
                            this.go().outside({
                                url:item.location+uid,
                                title:item.title
                            })
                        }
				}else{
					/*router.push({ path: '/newDetail', query: {
						detailId: item.id ,
						detailType : 1,
						detailTitle:item.title
					}})*/
					this.go().find.newsDetail({
                        query:{
                            detailId: item.id ,
                            detailType : item.appFindCode,
                            detailTitle:item.title
                        }
					});
				}

			}
		}
	}
</script>
