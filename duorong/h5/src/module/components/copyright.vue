/**
* 底部说明
* created by bo.peng 2018/4/23
* email:spion@qq.com
*/
<style scoped>
.copyright{
    color: #A0A0A0;
    display:flex;
    justify-content:center;
    align-items:center;
    i{
        display:block;
        margin-right:5px;
        background: url("../../images/common/security.png") no-repeat;
        background-size:contain;
    }
}
</style>
<template>
	<div class="copyright img-size" :class="className" data-fontSize="24">
        <i class="img-size" data-width="32" data-height="40"></i>
        <p>您的资金将由银行提供存管服务，敬请放心！</p>
    </div>
</template>

<script>
	export default {
	    props:{
            className : String,
        },
		mounted(){
		    this.setImgSize();
        }
	}
</script>
