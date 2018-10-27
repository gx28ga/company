<style scoped>
	.error404{
		background:#fff;
		img{
			width:100%;
		}
	}
</style>
<template>
	<div class="error404">
		<img class='img' src='../images/404/404.jpg'>
	</div>
</template>
<script>
export default {
    data() {
        return {};
    },
    mounted() {
        this.setTitle({
            title : "404",
            show:true
        });
    }
};
</script>
