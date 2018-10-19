/**
*@author bo.peng
*@createTime 10 2018/9/10
*@description 主面版
*/
<template>
    <el-container>
        <el-header class="header">
            <header-sider></header-sider>
        </el-header>
        <el-container>
            <menu-sider></menu-sider>
            <el-main class="view">
                <transition name="bounce">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
	import menuSider from "./menu.vue"
	import headerSider from "./header.vue"
	import { Component, Prop, Vue } from 'vue-property-decorator';
	@Component({
		components:{
			menuSider,
			headerSider
		}
	})
	export default class Container extends Vue{
	}
</script>

<style scoped>
    .header{
        position:relative;
        z-index: 998;
        height:70px;
        padding:0;
        background:#3b81fa;
        box-shadow:0 3px 5px rgba(0,0,0,.2);
    }
</style>