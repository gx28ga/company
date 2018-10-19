
<template>
    <div>
        <el-table :data="list" border>
            <el-table-column
                    align="center"
                    width="180"
                    label="角色名称">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column align="center"
                             label="角色描述">
                <template slot-scope="scope">
                    {{scope.row.remark}}
                </template>
            </el-table-column>
            <el-table-column align="center"
                             width="150"
                             label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="$router.push({name:'角色编辑',params:{id:scope.row.roleId},query:{scope: scope.row.scope}})" size="mini">编辑</el-button>
                    <el-button type="text" @click="gotoRemove(scope.row.roleId)" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="text-center" v-if='total>0'>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="tableParams.page"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import {roleListApi, roleDeleteApi } from '../../api/api'
    import {mixin} from '../../mixins/seach';
    const method =
    {
        getList:getList,
        gotoRemove:gotoRemove,
    }

    function gotoRemove(id) {
        var vm = this;
        this.$confirm('是否删除该角色?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            roleDeleteApi(id).then(function (data) {
                vm.$message({
                    type:'success',
                    message:'删除成功'
                })
                vm.getList()
            })
            .catch(err => {
                    this.$message.error(err.message);
            })
        })
        .catch(() => {
                this.$message({
                type: 'info',
                message: '已取消'
            });
        });
    }

    function getList(params) {
        var vm = this;

        params = _.extend({},params,{scope: vm.scope})
        roleListApi(params).then(function (res) {
            // console.log(res)
            vm.list = res.items;
            vm.total = res.total;
        })
        
    }


    export default {
        props:['scope'],

        methods:method,
        mixins:[mixin],
//        mounted:function () {
//            this.getList(this.tableParams);
//        },
        computed: {
        },
        data(){
            return{
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

