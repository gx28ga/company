/**
*@author bo.peng
*@createTime 10 2018/9/10
*@description
*/
<template>
    <Aside :width="width" class="aside" v-if="currentData && currentData.length">
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
    </Aside>
</template>

<script lang="ts">
    import { Component, Prop, Vue , Watch } from 'vue-property-decorator';
    import {Action , Getter} from "vuex-class";
    import router from "../router";
    import AsideMenuDto from "../dto/AsideMenuDto";
    @Component
	export default class menuSider extends Vue{
	    // @ts-ignore
	    @Action("getCurrentMenu") getCurrentMenu:Function;
	    // @ts-ignore
	    @Getter("currentMenu") currentData:Array<AsideMenuDto>;
	    data(){
			return{
				width:"220px"
            }
        }
	    mounted(){
			this.getCurrentMenu();
        }
        go(item:object,item1:object){
	        // @ts-ignore
	        router.push("/"+item.path+"/"+item1.path);
        }
    }
</script>

<style scoped>

</style>