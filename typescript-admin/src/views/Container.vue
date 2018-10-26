/**
*  author : bo.peng
*  createTime 2018-10-22 16:03
*  description : 主面板
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
    import Container from "@/controller/Container.ts";
    export default Container;
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