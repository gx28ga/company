/**
*  author : bo.peng
*  createTime 2018-10-23 15:51
*  description : 菜单栏目
*/
<template>
    <el-aside :width="width" class="aside" v-if="currentData && currentData.length">
        <el-menu node-key="id"
                 :collapse="false"
                 default-active="1-2"
                 class="el-menu-vertical-demo menu"
                 :highlight-current="true">
            <el-submenu v-for="(item,index) in currentData" :index="String(index)" :key="item.id">
                <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                <el-menu-item v-if="item.list && item.list.length"
                              v-for="(item1,index1) in item.list"
                              @click="go(item,item1)"
                              :index="index+'-'+index1"
                              :key="item1.id">
                    {{item1.name}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script lang="ts">
    import Menu from "@/controller/global/Menu.ts";
    export default Menu;
</script>

<style scoped>

</style>