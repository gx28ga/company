<template>
    <page>
        <el-row slot="header" :span="24">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item>商品类型</el-breadcrumb-item>
                </el-breadcrumb>
        </el-row>
        <el-form :inline="true" :model="queryParams" ref="queryParams" size="small">
            <top-edit>
                <div slot="left">
                    <el-form-item>
                        <el-button type="primary" @click="$router.push({name:'商品类型新增'})">新增</el-button>
                    </el-form-item>
                </div>
                <div slot="right">
                    <el-form-item label="类型名称">
                        <el-input v-model="queryParams.name"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="btn-search" type="primary" @click="search">搜索</el-button>
                        <el-button class="btn-reset" type="default" @click="reset">重置</el-button>
                    </el-form-item>
                </div>
            </top-edit>

        </el-form>
        <el-table :data="list" width="100%" border>
            <el-table-column label="类型名称" align="center">
                <template slot-scope="scope">
                    {{scope.row.templateName}}
                </template>
            </el-table-column>
            <el-table-column label="分组" align="center">
                <template slot-scope="scope">
                    {{type(scope.row)}}
                </template>
            </el-table-column>
            <el-table-column label="规格" align="center">
                <template slot-scope="scope">
                    {{spec(scope.row)}}
                </template>
            </el-table-column>
            <el-table-column label="属性" align="center">
                <template slot-scope="scope">
                    <!-- {{attr(scope.row)}} -->
                </template>
            </el-table-column>
            <!-- <el-table-column label="是否启用" align="center">
                <template slot-scope="scope">
                    {{scope.row.displayOrder}}
                </template>
            </el-table-column> -->
            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <div class="opreator-cell">
                        <el-button type="text" size="mini" @click="$router.push({name:'商品类型编辑',params:{id:scope.row.attrTemplateId}})">编辑</el-button>
                        <!-- <el-button round size="mini" @click="">复制</el-button> -->
                        <el-button type="text" size="mini" @click="gotoRemove(scope.row)">作废</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <el-row type="flex">
            <el-col  v-if='total>0'>
                <el-pagination
                  class="text-right"
                  @current-change="handleCurrentChange"
                  :current-page="current"
                  layout="total, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
            </el-col>
        </el-row>
    </page>
</template>
<script type="text/ecmascript-6">
import $config from '../../../../config.js'
import { mixin } from "../../mixins/seach";
import {
    attrTemplateApi
    } from '../../api/goods-api.js'
import TopEdit from "../../components/common/topEdit";
export default {
  components: {TopEdit},
  methods:{
        
    },
    mixins: [mixin],
    methods: {
        type(data){
            return data.attrGroups.map(item=>{
                return item.groupName
            }).join(',')
        },
        spec(data){
            return data.attrItems.map(item=>{
                return item.label
            }).join(',')
        },
        getList(params) {
            var vm = this;
            attrTemplateApi.find(params).then(res=>{
                this.list = res.items
                this.total = res.total
            })
        },
        gotoRemove(data) {
            var vm = this;
            let del = JSON.parse(JSON.stringify(data))
            del.enabled = false
            this.$confirm('确定作废?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                attrTemplateApi.update(del.attrTemplateId,del).then(function(data) {
                    vm.$message.success('已作废');
                    vm.getList(vm.tableParams)
                }).catch(err => {
                    vm.$message({ message: res.response.data.message, type: 'error' });
                })
            }).catch(err => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        }
    },
    
    data() {
        return {
            list: [],
            current:1,
            currentPage: 1,
            total: 0,
            tableParams: {},
            queryParams:{
                name:''
            }
        }
    },
}
</script>
<style>
</style>
<style scoped lang="less">
.thumb {
    width: 70px !important;
    height: auto;
}

.thumb+.el-tag {
    position: absolute;
    left: 5px;
    top: 5px;
}

.category-icon-uploader {
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .el-upload:hover {
        border-color: #409EFF;
    }
}

.category-icon-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}

.category-icon {
    max-width: 100px;
    max-height: 100px;
    display: block;
}

.el-table__row td p {
    margin: 0;
    padding: 0;
}

.baseinfo p {
    font-size: 12px;
    color: #999;
}

.baseinfo h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 16px;
    color: #333;
    font-weight: normal;
}
</style>