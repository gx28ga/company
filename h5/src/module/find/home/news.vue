<style scoped>
	.news{
		padding:10px 10px 0;
		background:#fff;
		.title{
			height:25px;
			color:#666;
			border-bottom:1px solid #ececec;
			h2{ float:left; padding-top:1px; }
			i{
				display:block;
				float:left;
				width:6px;
				height:15px;
				margin-top:3px;
				margin-right:10px;
				border-radius:5px;
				background: linear-gradient(#ff9c01, #fe7732);
			}
			.jian{
				float:right;
				width:8px;
				height:8px;
				margin-top:5px;
				margin-right:5px;
				border-top:2px solid #ececec;
				border-left:2px solid #ececec;
				transform: rotate(135deg);
			}
		}
		.content{
			padding:10px 0;
			.img{
				float:left;
				width:110px;
				height:70px;
				overflow:hidden;
				padding-bottom:5px;
				img{
					display:block;
					width:100%;
				}
			}
			li{
				position:relative;
				z-index:2;
				color:#333;
				padding:10px 0;
				border-bottom:1px solid #ececec;
				overflow:hidden;
				&:last-child{
					border-bottom:none;
				 }
			}
			.text{
				h2{
					color:#333;
				}
				padding-left:120px;
				color:#999;
			}
			.ft{
				position:absolute;
				bottom:15px;
				left:120px;
				right:0;
				color:#999;
				.views{
					float:right;
					i{
						background:url("../../../images/common/views.jpg") no-repeat;
						background-size:contain;
					}
				}
			}
		}
	}
</style>
<template>
	<article class="news">
		<div class="title">
			<div class="jian" @click="more"></div>
			<i></i>
			<h2 class="img-size" data-fontSize="30">多融资讯</h2>
		</div>
		<div class="content">
			<ul>
				<li v-if="data" v-for="obj in data" :key="obj.id" @click="detail(obj)">
					<div class="img">
						<img :src="obj.imgUrl">
					</div>
					<div class="text">
						<h2 class="img-size" data-fontSize="30">{{obj.title}}</h2>
					</div>
					<div class="ft img-size" data-fontSize="28">
						<!--<time>{{obj.addTime | timeToString}}</time>-->
						<time>{{new Date(obj.addTime).Format("yyyy-MM-dd hh:mm:ss")}}</time>
						<div class="views">
							<i class="img-size" data-width="26" data-height="14"></i>
							<span>{{obj.browseNum}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</article>
</template>
<script>
	import mixin from '../../../mixin/find/index';
	import {mapGetters} from "vuex";
	export default {
		mixins : [mixin],
		props:{
			data : Array
		},
		computed:{
				...mapGetters({
					userInfo:"getUserInfo",
				})
		},
		data() {
			return{}
		},
		mounted() {
			this.$nextTick(function(){
				T.setImgSize();
			})

		},
		methods:{
			more(){
				this.go().find.newsList();
			},
			detail( obj ){
				if(obj.location.length>3){
					let uid = this.userInfo?"?uid="+this.userInfo.member.uid:"";
					if(T.isApp){
                        window.location.href = obj.location;
                    }else{
                        this.go().outside({
                            url:obj.location+uid,
                            title:obj.title,
                        });
                    }
					this.addview(obj.id,obj.appFindCode);
					//window.location.href = obj.location;
				}else{
					this.go().find.newsDetail({
                        query:{
                            detailId: obj.id ,
                            detailType : obj.appFindCode,
                            detailTitle:obj.title
                        }
					});
				}
			}
		}
	}
</script>
