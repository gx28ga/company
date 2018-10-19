<style scoped>
	.shoping{
		padding:10px;
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
			p{
				color:#666;
			}
			.text{
				float:left;
				padding-top:10px;
			}
			.time{
				li{
					float:left;
					height:16px;
					line-height:16px;
					padding:0 5px;
				}
				.bg{

					padding:0 2px;
					background:#666666;
					color:#fff;
				}
			}
			p{
				line-height:16px;
			}
			.rob{
				float:left;
				width:66%;
				padding-bottom:10px;
				.img{
					float:left;
					padding-left:20px;
					padding-top:20px;
					overflow:hidden;
					img{
						display:block;
						margin:0 auto;
					}
				}
			}
			.host{
				float:right;
				width:33%;
				padding-top:20px;
				padding-bottom:10px;
				text-align:center;
				.img{
					overflow:hidden;
					img{
						display:block;
						margin:0 auto 2px;
					}
				}

			}

		}

		.list,.roblist{
			clear:both;
			padding:10px 0;
			border-top:1px solid #ececec;
			overflow:hidden;
			li{
				float:left;
				width:33%;
				border-right:1px solid #ececec;
				&:last-child{
					border-right:none;
				 }
			}
			.money{
				text-align:center;
				em{
					color:#fe7736;
				}
			}
			.del{
				color:#999999;
				text-decoration:line-through;
			}
			.img{
				img{
					display:block;
					margin:0 auto;
				}
			}
		}
		.roblist{
			float:left;
			width:67%;
			clear:none;
			padding-top:20px;
			border-top:none;
			li{
				width:49%;
				&:last-child{
					 border-right:1px solid #ececec;
				 }
			}
		}
	}
</style>
<template>
	<article class="shoping" v-if="data">
		<div class="title">
			<div class="jian" @click="shopping"></div>
			<i></i>
			<h2 class="img-size" data-fontSize="30">积分商城</h2>
		</div>
		<div class="content">
			<div class="rob" v-show="data.status!=0">
				<div class="text img-size" data-fontSize="24">
					<h3 class="img-size" data-fontSize="32">限时兑换</h3>
					<p class="img-size" data-width="200"
					   data-paddingTop="10"
					   data-paddingBottom="10"
					   data-lineHeight="26"
					>
						{{data.xsList[0].xsCredits}}积分 {{data.xsList[0].xsName}}
					</p>
					<div class="time">
						<ul>
							<li class="bg">{{hh}}</li>
							<li>:</li>
							<li class="bg">{{mm}}</li>
							<li>:</li>
							<li class="bg">{{ss}}</li>
						</ul>
					</div>
				</div>
				<div class="img"
				     @click="shopingDetail(data.xsList[0])">
					<img :src="data.xsList[0].xsImgUrl"
					     class="img-size"
					     data-width="160" data-height="113">
				</div>
			</div>
			<ul  v-show="!data.status!=0" class="roblist">
				<li v-for="item in data.xsList" v-bind:key="item.id">
					<div class="img"
					     @click="shopingDetail(item)"
					>
						<img :src="item.xsImgUrl"
						     class="img-size"
						     data-width="199" data-height="113">
					</div>
					<div class="money">
						<em class="img-size" data-fontSize="24">{{item.xsCredits}} 积分</em>
						<span class="del img-size" data-fontSize="20">{{item.xsFactCredits}}</span>
					</div>
				</li>
			</ul>
			<div class="host">
				<div class="img"
				     @click="shopingDetail(data)"
				>
					<img :src="data.imgUrl"
					     class="img-size"
					     data-width="199" data-height="113">
				</div>
				<h3 class="img-size" data-fontSize="24">火爆新品</h3>
			</div>
			<ul class="list">
				<li v-for="item in data.spList" v-bind:key="item.id" @click="shopingDetail(item)">
					<div class="img">
						<img :src="item.xsImgUrl"
						     class="img-size"
						     data-width="199" data-height="113">
					</div>
					<div class="money">
						<em class="img-size" data-fontSize="24">{{item.xsCredits}} 积分</em>
						<span class="del img-size" data-fontSize="20">{{item.xsFactCredits}}</span>
					</div>
				</li>
			</ul>
		</div>
	</article>
</template>
<script>
	import '../../../common/time.js';
	export default {
		props:{
			data : Object
		},
		data() {
			return {
				hh : "00",
				mm : "00",
				ss : "00"
			}
		},
		watch:{
			data : function(val){
				//console.log(new Date(val).Format("yyyy/MM/dd hh:mm:ss"))
			}
		},
		mounted() {
			this.$nextTick(function(){
				T.setImgSize();
			});
			this.setTime();

		},
		methods:{
			shopping(){
			    if(T.isApp){
                    window.location.href="jump://page=34?"
                }else{
                    this.go().shopping.home();
                }
			},
			shopingDetail(obj){
			    if(T.isApp){
			        window.location.href="jump://page=43?id="+obj.pid;
                }else{
                    let id = obj.pid||obj.xsPid;
                    this.go().shopping.detail({query:{pid:id}});
                }
			},
			setTime(){
				let self = this;
				if(this.data.status==0) return;
				let startTime = new Date(parseInt(this.data.xsList[0].xsStartTime)).Format("yyyy/MM/dd hh:mm:ss") ,
					nowTime = new Date(parseInt(this.data.now)).Format("yyyy/MM/dd hh:mm:ss"),
					endTime = new Date(parseInt(this.data.xsList[0].xsEndTime)).Format("yyyy/MM/dd hh:mm:ss");

				new CountTime({
					startTime : startTime,
					endTime : endTime,
					nowTime : nowTime,
					updateTime : true,
					callback : function( obj ){
						self.hh = obj.hour;
						self.mm = obj.minute;
						self.ss = obj.second;
						if(self.hh==0&&self.mm==0&&self.ss==0){
							console.log("开始")
							//location.reload();
						}
					}
				})
			}
		}
	}
</script>
