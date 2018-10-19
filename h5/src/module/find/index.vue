<style scoped>
.home{
	flex:1;
	overflow-y:scroll;
}
</style>
<template>
<article>
	<div class="home" v-if="map">
		<banner :data="map.topBanner"></banner>
		<navbar :data="map.fixedModel"></navbar>
		<shopping :data="map.cmall"></shopping>
		<banner1 :data="map.taskBanner"></banner1>
		<news :data="map.news"></news>
	</div>
    <loadding v-else></loadding>
</article>
</template>
<script>
	import banner from './home/banner.vue';
	import navbar from './home/navbar.vue';
	import shopping from './home/shopping.vue';
	import banner1 from './home/banner1.vue';
	import news from './home/news.vue';
	import loadding from "../components/loading";
	import {mapGetters} from "vuex";
	export default {
		computed:{
			...mapGetters({
				map : "getFindIndex"
			})
		},
    	components:{
    	    banner,
		    navbar,
		    shopping,
		    news,
		    banner1,
            loadding
	    },
        mounted() {
			this.setTitle({
				show : true,
				title : "发现",
				back : false,
			});
    		this.$store.commit("getFindIndex",this);
            /*this.ajax({
	            url : '/appFind/index.do',
	            data : {
		            version : T.version,
		            channel : T.channel
	            }
            }).then(data=>{
            	self.map = data.map;
            	self.$nextTick(function(){
		            setTimeout(function(){
						self.setImgSize();
		            },150)
	            });

            })*/
        }
    }
</script>
