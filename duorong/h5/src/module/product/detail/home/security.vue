/**
* 安全保障
* created by bo.peng 2018/4/26
* email:spion@qq.com
*/
<style scoped>
.security{
    background:#fff;
    ul{
        display:flex;
        li{
            display:flex;
            flex:1;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }
        h3{
            height:25px;
            line-height:25px;
            color: #102542;
        }
        p{
            color: #A0A0A0;
        }
        .icon{
            background:url("../../../../images/product/ico_cunguan.png") no-repeat;
            background-size:contain;
            &.icon2{
                background-image: url("../../../../images/product/ico_guozi.png");
            }
            &.icon3{
                background-image: url("../../../../images/product/ico_anquan.png");
            }
        }
    }
}
</style>
<template>
	<section class="security img-size" data-marginTop="20" data-padding="20">
        <ul>
            <li @click="goCunGuan">
                <div class="icon icon1 img-size" data-width="62" data-height="62"></div>
                <h3 class="img-size" data-fontSize="28">银行存管</h3>
                <p class="img-size" data-fontSize="24">银行资金存管</p>
            </li>
            <li @click="goKongGu">
                <div class="icon icon2 img-size" data-width="62" data-height="62"></div>
                <h3 class="img-size" data-fontSize="28">国资委下属</h3>
                <p class="img-size" data-fontSize="24">事业单位控股</p>
            </li>
            <li @click="goInsurance">
                <div class="icon icon3 img-size" data-width="62" data-height="62"></div>
                <h3 class="img-size" data-fontSize="28">安全保障</h3>
                <p class="img-size" data-fontSize="24">如约兑付</p>
            </li>
        </ul>
    </section>
</template>

<script>
	export default {
		name: "",
        methods:{
		    goCunGuan(){
                this.go().all({
                   returnUrl:"/about/bankDepositManagement"
                })
            },
            goKongGu(){
                this.go().outside({
                    url:"https://www.duorongcf.com/html/activity/conference-app.html",
                    title:"国家事业单位控股"
                })
            },
            goInsurance(){
		        this.go().all({
                    returnUrl:"/about/insurance"
                })
            }
        }
	}
</script>
