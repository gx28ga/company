/**
*@author bo.peng
*@createTime 10 2018/9/10
*@description
*/
<template>
    <article class="header-container">
        <div class="userInfo">
            <div class="imgHead">

            </div>
            <div class="name"></div>
        </div>
        <div class="logo" @click="goHome">
            <img src="../assets/images/header/logo.jpg">
        </div>
        <div class="menu">
            <ul>
                <li class="current">合发购</li>
                <li>全球家</li>
                <li>新零售</li>
                <li>财务管理</li>
                <li>系统管理</li>
            </ul>
        </div>
    </article>
</template>

<script>
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import router from "../router";
	@Component
	export default class headerSider extends Vue{
		data(){
			return{
				width:"220px"
			}
		}
		goHome(){
			router.push("/");
        }
	}
</script>

<style scoped>
.header-container{
    height:100%;
    padding:0 20px;
    .userInfo{
        float:right;
    }
    .logo{
        float:left;
        display:flex;
        height:100%;
        justify-items:center;
        align-items:center;
        cursor: pointer;
        img{
            display:block;
        }
    }
    .menu{
        padding-left:50px;
        height:100%;
        overflow:hidden;
        ul{
            height:100%;
        }
        li{
            float:left;
            display:flex;
            height:100%;
            padding:0 30px;
            justify-items: center;
            align-items: center;
            font-size: 18px;
            color:#fff;
            cursor: pointer;
            &.current{
                background:#fff;
                color:#409efe;
            }
        }
    }
}
</style>