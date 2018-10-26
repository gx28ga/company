<style scoped>
	@import "detail.css";
</style>
<template>
	<div  v-if="data">
	<article class="detial img-size" data-fontSize="24" data-lineHeight="35">
		<div class="container">
			<h1 class="img-size" data-fontSize="36">{{data.title}}</h1>
			<div class="about img-size" data-fontSize="20">
				<div class="views">
					<i class="img-size" data-width="26" data-height="14"></i>
					<span>{{data.browseNum}}</span>
				</div>
				<time>{{new Date(data.addTime).Format("yyyy-MM-dd hh:mm:ss")}}</time>
				<span v-if="data.toFrom.length" class="source">来源：{{data.toFrom}}</span>
				<span v-if="data.writer.length" class="author">作者：{{data.writer}}</span>
			</div>
			<h2 class="title-info img-size" data-fontSize="30" data-lineHeight="40">
				<i class="left img-size" data-width="24" data-height="23"></i>
				<p>{{data.remark}}</p>
				<i class="right img-size" data-width="24" data-height="23"></i>
			</h2>
			<div class="content img-size" v-html="data.content" data-fontSize="24" data-lineHeight="40">
			</div>
		</div>
		<!--<div class="copright img-size" data-fontSize="18">
			<h2>免责声明：</h2>
			<p>
				文章版权归原作者及原出处所有。内容为作者个人观点，并不代表本栏目赞同其观点和
				对其真实性负责，本栏目只提供参考并不构成任何投资及应用建议。本栏目部分文章为
				转载，并不用于任何商业目的，如若侵权请及时联系我们，我们将根据著作权人的要求，
				立即更正或者删除有关内容。本平台拥有对此声明的最终解释权。
			</p>

		</div>-->
	</article>
	</div>
	<div v-else class="loadding"></div>
</template>
<script>
	import {DETAIL} from "../../../contant/urls/FIND";
	export default {
		data() {
			return {
				data : null,
				id : null,
			}
		},
		mounted() {
			let self = this ,
				id = T.getQueryString("detailId"),
				type = T.getQueryString("detailType"),
				title = T.getQuery("detailTitle");
          let detailTitle=title.length>12?title.substring(0,12)+"...":title;
			this.setTitle({
				show : true,
				title : detailTitle,
				back : true,
				share:true,
				shareConfig:{
					title:"多融财富",
					link:window.location.href,
					desc:title,
					imgUrl:'',
					type:'',
					dataUrl:''
				}
			});
            this.setNav({
                show : false
            });
			self.id = id;
			self.ajax({
				url:DETAIL,
				data : {
					id : id,
					type : type
				}
			}).then(data=>{
				self.data = data.map.findDetails;
				self.$nextTick(function(){
					T.setImgSize();
				});
			});

		}
	}
</script>
