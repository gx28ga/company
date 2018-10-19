/**
*
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
.product{
    .title{
        border-bottom:.5px solid #D2D2D2;
        background:#fff;
        .icon{
            float:left;
            margin-right:5px;
            background:url("../../../images/home/fireicons.png") no-repeat;
            background-size:contain;
        }
    }
    .more{
        border-top:.5px solid #D2D2D2;
        color: #0084D7;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#fff;
        span{
            margin-right:5px;
        }
    }
}
</style>
<template>
	<article v-if="index" class="product img-size" data-marginBottom="20">
        <section v-if="userStatus===-1 || userStatus===0 || userStatus===1">
            <!-- 新手宝 -->
            <novice :data="index.currentInfo" :rookie="index.rookie"></novice>
            <!-- end 新手宝 -->
            <!-- 新手专享 -->
            <noviceUse :list="index.rookie"></noviceUse>
            <!-- end 新手专享 -->
        </section>
        <!-- 已登录 已开户 已投资 -->
        <section v-if="userStatus===2">
            <div class="title img-size" data-height="68" data-lineHeight="68" data-paddingLeft="30">
                <div class="icon img-size" data-width="20" data-height="24" data-marginTop="22"></div>
                <h2 class="name img-size" data-fontSize="28">热门产品</h2>
            </div>
            <box :list="index.hotProducts"></box>
            <div class="more img-size" @click="go().product.home()" data-height="64" data-lineHeight="64">
                <span>查看更多产品</span> <arrow name="right" :width="10" :height="10" :borderWidth="3"></arrow>
            </div>
        </section>
        <!-- end 已登录 已开户 已投资 -->
    </article>
</template>

<script>
    import novice from "./novice";
    import box from "../../product/common/box";
    import noviceUse from "./noviceUse";
    import arrow from "../../components/arrow";
	export default {
	    components : {
	        box,
            novice,
            noviceUse,
            arrow
        },
		props:[
            "index",
            "userStatus"
        ]
	}
</script>
