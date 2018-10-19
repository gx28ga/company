
<template>
    <Page>
        <el-row slot="header" :span="24">
            <el-col :span="20">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>角色管理</el-breadcrumb-item>
                    <el-breadcrumb-item>角色权限</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="4" class="text-right">
                <el-button  size="small" @click="$router.push({name:'角色创建', params:{}})" type="primary">创建</el-button>
            </el-col>
        </el-row>

        <el-tabs v-model="activeScope"
                 @tab-click="handleClick">
            <el-tab-pane label="平台角色"
                         name="PLATFORM">  
                <RoleListTab :scope="'PLATFORM'" v-model='activeScope'></RoleListTab>
            </el-tab-pane>
            <el-tab-pane label="项目角色"
                         name="PARTION">
                <RoleListTab :scope="'PARTION'" v-model='activeScope'></RoleListTab>
            </el-tab-pane>
        </el-tabs>
    </Page>
</template>
<script>
    import Page from '../../components/common/Page';
    
    import RoleListTab from '../../components/role/RoleListTab.vue';
   
    const method =
    {
        init : init,
        handleClick: handleClick,
        selectDefaultTab: selectDefaultTab
    }

    function init() {
        this.selectDefaultTab();
    }

    function handleClick(){
        this.$router.replace({query: {scope: this.activeScope}});
    }
    function selectDefaultTab() {
        var vm = this;
        if (!vm.$route.query.scope) {
            vm.$route.query.scope = 'PLATFORM';
        }
        vm.activeScope = vm.$route.query.scope;
    }
    
    export default {
        methods: method,
        computed: {
        },
        mounted:function () {
            this.init();
        },
        data(){
            return{
                activeScope:'PLATFORM',
                list:[],
                queryParams:{
                    companyId:'' ,
                    companyName:'',
                    areaName:'',
                    enableStatus:''
                },
//                tableParams:{
//                    limit:10,
//                    page:1,
//                },
                currentPage:1,
                total:0,


            }
        },
        components:{
            Page,
            RoleListTab
        },
        filters:{
            statu:function (data) {
                switch (data){
                    case 'ENABLE':
                        return '启用'
                        break;
                    case 'DISABLE':
                        return '禁用'
                        break;
                }
            },
            showStatu:function (data) {
                switch (data){
                    case true:
                        return 'Enable'
                        break;
                    case false:
                        return 'Disable'
                        break;
                }
            }

        }
    }

</script>
<style>
    .el-table .cell{
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
</style>

