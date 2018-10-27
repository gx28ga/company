/**
* 显示 大图
* created by bo.peng 2018/4/26
* email:spion@qq.com
*/
<style>
.pop{
    .content-wrapper {
        &.shpwBigpic{
            height:100%;
        }
    }
}
</style>
<style scoped>
.content-pic{
    height:100%;
    padding:30px;
    box-sizing:border-box;
}
.pic{
    overflow:auto;
    height:100%;
    img{
        width:100%;
        display:block;
        margin:0 auto;
    }
}
</style>
<template>
    <div class="content-pic">
	    <div class="pic"><img :src="src"/></div>
    </div>
</template>

<script>
	export default {
		props : {
		    src : String
        }
	}
</script>
