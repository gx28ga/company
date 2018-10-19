/**
*
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
.progress{
    background:#fff;
}
time{
    display:block;
    text-align:right;
    color: #A0A0A0;
}
.box{
    .top,.footer{
        display:flex;
    }
    .icon1{
        background:url("../../../../images/product/ico_jinri.png") no-repeat;
        background-size:contain;
    }
    .icon2{
        background:url("../../../../images/product/ico_ciri.png") no-repeat;
        background-size:contain;
    }
    .icon3{
        background:url("../../../../images/product/ico_daoqi.png") no-repeat;
        background-size:contain;
    }
    .line{
        display:flex;
        align-items:center;
        i{
            display:block;
            width:100%;
            height:1px;
            border-top:.5px solid #D2D2D2;
        }
    }
    .footer{
        text-align:center;
    }
}
.flex{
    flex:1;
}
</style>
<template>
	<section class="progress img-size" data-padding="20" data-marginBottom="20">
        <div class="box">
            <div class="top img-size" data-paddingLeft="50" data-paddingRight="50">
                <div class="icon icon1 img-size" data-width="56" data-height="56"></div>
                <div class="line img-size" data-width="100"><i></i></div>
                <div class="icon icon2 img-size" data-width="56" data-height="56"></div>
                <div class="line flex"><i></i></div>
                <div class="icon icon3 img-size" data-width="56" data-height="56"></div>
            </div>
            <div class="footer img-size" data-paddingTop="10" data-paddingBottom="10">
                <div class="img-size" data-width="150">今日投资</div>
                <div class="img-size" data-width="10"></div>
                <div class="img-size" data-width="150">次日计息</div>
                <div class="flex"></div>
                <div class="img-size" data-width="150">到期</div>
            </div>
        </div>
        <time class="img-size" data-paddingRight="50">{{data.expireDate | formatDate}}</time>
    </section>
</template>

<script>
    import filter from "../../../../mixin/filters";
	export default {
		props:{
		    data : Object
        },
        filters:{
            formatDate : filter.methods._formatDate,
        }
	}
</script>
