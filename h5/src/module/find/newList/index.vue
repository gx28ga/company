<style scoped>
	.loadding{
		width:100px;
		height:100px;
		margin:45% auto 0;
		background:url("../../../images/common/loading.gif");
		background-size:contain;
	}
	.news{
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
				margin-bottom:10px;
				padding:10px;
				border-bottom:1px solid #ececec;
				overflow:hidden;
				background:#fff;

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
				left:130px;
				right:0;
				color:#999;
				.views{
					float:right;
					padding-right:20px;
					i{
						background:url("../../../images/common/views.jpg") no-repeat;
						background-size:contain;
					}
				}
			}
			.banner{
				.img{
					float:none;
					width:auto;
					height:auto;
					overflow:hidden;
					img{
						display:block;
						width:100%;
						margin:0 auto;
					}
				}
				.text{
					padding-left:0;
					padding-top:5px;
				}
				.ft{
					padding-top:5px;
					position:initial;
					.views{
						padding-right:10px;
					}
				}
			}
		}
	}
	.more{
		padding:10px 0;
	i{ display:block; margin:0 auto; background:url(../../../images/common/loading.gif); background-size: contain; }
	}
</style>
<template>
	<article id="List" class="news">
		<div v-if="list.length">
			<div class="content">
				<ul v-if="list">
					<li v-for="obj in list" :key="obj.id"
					    :class="{banner:obj.appFindCode==1}"
					    @click="detail(obj)"
					>
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
				<div class='more' v-show='showMore'>
					<i class='img-size' data-width='100' data-height='100'></i>
				</div>
			</div>
		</div>
		<div v-else class="loadding"></div>
	</article>
</template>
<script>
	import mixin from '../../../mixin/find/index';
	import {mapGetters} from "vuex";
    import {LIST} from "../../../contant/urls/FIND";
	export default {
		mixins : [mixin],
		computed:{
				...mapGetters({
					userInfo:"getUserInfo",
				})
		},
		data() {
			return{
				list : [],
				showMore : true
			}
		},
		mounted() {
			this.setTitle({
				show : true,
				title : "发现",
				back : true,
			});
            this.setNav({
                show : false
            });
			let self = this ,
				page = 1 ,
				pageSize = 10 ,
				loading = true;

			/*function copingList(){
				let arr = [];
				self.allList.map(function( obj ){
					arr.push(obj);
				});
				return arr;
			}*/

			function getList(){
				if(loading==false) return;
				loading = false;
				self.showMore = true;
				self.ajax({
					url:LIST,
					data:{
						pageOn : page,
						pageSize : pageSize
					}
				}).then(data=>{
					let list = data.map.data;
					loading = true;
					self.showMore = false;
					if(!list || !list.length){
						loading = false;
						return;
					}
					self.list = self.list.concat(list);
					self.$nextTick(function(){
						T.setImgSize();
						let box = $('#List');
						if(!box.length) return;
						box.unbind().on('scroll',function(){
							let scrollHeight = box[0].scrollHeight ,
								height = window.innerHeight;
							if(!loading) return;
							let scrollTop = $(this).scrollTop()+height+100;
							if(scrollTop>scrollHeight){
								if(loading){
									loading = true;
									page++;
									getList();
								}
							}
						})
					});
				});
			}
			getList();
		},
		methods:{
			detail( obj ){
				if(obj.location.length>3){
					this.addview(obj.id,obj.appFindCode);
					let uid = this.userInfo?"?uid="+this.userInfo.member.uid:"";
					if(T.isApp){
                        window.location.href = obj.location;
                    }else{
                        this.go().outside({
                            url:obj.location+uid,
                            title:obj.title,
                        })
                    }
				}else{
					this.go().find.newsDetail({
                        query:{
                            detailId: obj.id ,
                            detailType : obj.appFindCode,
                            detailTitle:obj.title,
                        }
					});
				}
			}
		}
	}
</script>
