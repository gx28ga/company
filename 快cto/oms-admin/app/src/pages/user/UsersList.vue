<template>
    <Page>
        <el-row slot="header" :span="24">
            <el-col :span="16">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>平台用户管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-form :inline="true" :model="queryParams" ref="queryParams">
            <top-edit>
                <div slot="left">
                    <el-form-item >
                        <el-button type="primary" @click="$router.push({name:'用户创建',params:{}})">创建</el-button>
                    </el-form-item>
                </div>
                <div slot="right">
                    <el-form-item label="用户名:">
                        <el-input  placeholder="请输入" v-model="queryParams.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="电话:">
                        <el-input  placeholder="请输入" v-model="queryParams.tel"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">搜索</el-button>
                        <el-button type="default" @click="reset">重置</el-button>
                    </el-form-item>
                </div>
            </top-edit>
        </el-form>
    <div style="min-height:350px">
          <el-table :data="list" border >
            <el-table-column
                    label="ID"
                    align="center">
                <template slot-scope="scope">
                    {{scope.row.userId}}
                </template>
            </el-table-column>
                <el-table-column align="center"
                             label="姓名">
                <template slot-scope="scope">
                    {{scope.row.nickname}}
                </template>
            </el-table-column>
            <el-table-column align="center"
                             label="用户名">
                <template slot-scope="scope">
                    {{scope.row.userName}}
                </template>
            </el-table-column>
            <el-table-column align="center"
                             label="电话">
                <template slot-scope="scope">
                    {{scope.row.tel}}
                </template>
            </el-table-column>
            <el-table-column align="center"
                             label="邮箱">
                <template slot-scope="scope">
                    {{scope.row.email}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="创建时间">
                <template slot-scope="scope">
                    <span class="time">
                        {{scope.row.createTime|dateFilter}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="最后登录时间">
                <template slot-scope="scope">
                    <span class="time">
                       {{scope.row.lastUpdate|dateFilter}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="状态">
                <template slot-scope="scope">
                    {{scope.row.userStatus|statu}}
                </template>
            </el-table-column>
            <el-table-column align="center" width="150px" label="操作">
                <template slot-scope="scope">
                    <div class="opreator-cell">
                        <el-button type="text" @click="$router.push({name:'用户编辑',params:{id:scope.row.userId},query:$route.query})" size="mini">编辑</el-button>
                        <el-button type="text" @click="gotoRemove(scope.row.userId)" size="mini">删除</el-button>
                        <SetRole style="margin-left: 10px" :id="scope.row.userId" :name="scope.row.userName"></SetRole>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
      
        <div class="text-center"  v-if='total>0'>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="tableParams.page"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </Page>
</template>
<script>
    import Page from '../../components/common/Page';
    import SetRole from './SetRole.vue';
    import {userListApi,roleListApi,userDeleteApi} from '../../api/api'
    import {mixin} from '../../mixins/seach';
    import { formatDate } from '../../filter/date-format.js';
    import topEdit from "../../components/common/topEdit.vue";
    export default{
        mixins:[mixin],
        methods:{
            getList(params) {
                var vm = this;
                _.extend(params,{userType:'PLATFORM_MANAGER'})
                userListApi(params).then(function (res) {
                    vm.list = res.items;
                    vm.total = res.total;
                })
            },


            gotoRemove(id){
                var vm = this
                this.$confirm("此操作将永久删除用户,是否继续?","提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(()=>{
                    userDeleteApi(id).then(function (data) {
                        vm.$message({
                            type:'success',
                            message:'删除成功'
                        })
                        vm.getList()
                    }).catch(err => {
                        this.$message.error(err.message);
                    })
                }).catch(()=>{
                    this.$message({
                        message:"取消删除"
                    });
                });
            }
        },

        components:{
            Page,
            SetRole,
		  topEdit
        },
        data(){
            return{
                roleList:[],
                list:[],
                queryParams:{
                    userName:"",
                    tel:"",
                },
                currentPage:1,
                total:0,
            }

        },
        filters:{
            dateFilter,
            statu:function (data) {
                switch (data){
                    case 'NORMAL':
                        return '启用'
                        break;
                    case 'FORBIDDEN':
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
    function dateFilter(time) {
        if (!time){
          return '-'
        }
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
</script>
<style scoped lang="less">
    .time{ font-size:12px;}
</style>