/**
* 收益方式 计息方式等
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
    .list{
        background:#fff;
        padding:10px 0 5px;
        &.nopadding{
            padding:5px 0;
        }
        li{
            display:flex;
            line-height: 22px;
            padding:5px 0;
        }
        .title{
            color: #A0A0A0;
        }
        .text{
            flex:1;
            padding-left:10px;
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
            &.noborder{
                border-top:none;
            }
        }
    }

</style>
<template>
	<article class="list img-size" data-fontSize="28" :class="{nopadding:!data.extendTableList}">
        <ul>
            <li v-if="data.extendTableList" v-for="item in data.extendTableList" :key="item.id" class="img-size" data-paddingLeft="30" data-paddingRight="30">
                <div class="title">{{item.title}}</div>
                <div class="text">{{item.content}}</div>
            </li>
            <div class="more img-size" :class="{noborder:!data.extendTableList}" @click="info" data-height="64" data-lineHeight="64">
                <span>产品详情</span> <arrow name="right" :width="10" :height="10" :borderWidth="3"></arrow>
            </div>
        </ul>
    </article>
</template>

<script>
    import arrow from "../../../components/arrow";
    import {mapGetters} from "vuex";
	export default {
		components:{
            arrow
        },
        props :["data"],
        computed:{
            ...mapGetters({
                user : "getUserInfo"
            })
        },
        methods:{
		    info(){
                if(!this.user) {//未登录
                    return this.go().login.home();
                }
		        this.go().product.detailInfo();
            }
        }
	}
</script>
