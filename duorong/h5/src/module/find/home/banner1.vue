<style scoped>
	.img{
		margin:10px 0;
		text-align:center;
		background:#fff;
		img{ max-width:100%; }

	}
</style>
<template>
	<div class="img" v-if="data[0]" @click="link(data[0])">
		<img :src="data[0].imgUrl">
	</div>
</template>
<script>
	export default {
		props:{
			data : Array
		},
		mounted() {

		},
		methods:{
			link(obj){
				this.go().outside({
					url:obj.url,
					title:obj.title,
				})
			}
		}
	}
</script>
