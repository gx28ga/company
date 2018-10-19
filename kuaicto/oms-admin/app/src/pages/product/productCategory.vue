<template>
    <page>
        <el-row slot="header" :span="24">
            <el-col :span="14">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span @click="breadcrumbClicked(-1)">分类管理</span></el-breadcrumb-item>
                    <el-breadcrumb-item v-for="(item, index) in breadcrumbPaths" :key="item.categoryId"><span @click="breadcrumbClicked(index)">{{item.name}}</span></el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col class="header-btn-group" :span="10">
                <el-button type="primary" size="small" @click="gotoCreate(tableParams.parentId)">新增同级</el-button>
                <el-button type="primary" size="small" v-if="tableParams.parentId != 0" @click="breadcrumbClicked(-1)">返回</el-button>
            </el-col>
        </el-row>
        <el-table :data="list" width="100%" border>
            <el-table-column
                type="index"
                align="center"
                width="50">
            </el-table-column>
            <el-table-column label="编号" width="100" align="center">
                <template slot-scope="scope">
                    {{scope.row.code}}
                </template>
            </el-table-column>
            <el-table-column label="类目名称" header-align="center">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            
            <!-- <el-table-column label="关联商品类型" align="center">
                <template slot-scope="scope">
                    {{scope.row.level}}
                </template>
            </el-table-column> -->
           
            <el-table-column label="排序"  width="100" align="center">
                <template slot-scope="scope">
                    {{scope.row.displayOrder}}
                </template>
            </el-table-column>
            <el-table-column label="是否启用"  width="100" align="center">
                <template slot-scope="scope">
                    {{ scope.row.enabled | enable}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="200px">
                <template slot-scope="scope">
                    <div class="opreator-cell">
                        <el-button type="text" size="mini" @click="gotoCreate(scope.row.categoryId)">新增子级</el-button>
                        <el-button type="text" size="mini" @click="viewChildren(scope.row)">查看子级</el-button>
                        <el-button type="text" size="mini" @click="gotoEdit(scope.row.categoryId)">编辑</el-button>
                        <el-dropdown>
                            <el-button type="text" size="mini"><i class="el-icon-more-outline"></i></el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click.native="gotoRemove(scope.row)">作废</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </template>
            </el-table-column>
        </el-table>


        <!-- 新增/编辑 -->
        <el-dialog  title="分类" :visible.sync="dialogEditView" width="400px">
            <el-form labelPosition="right" :model="model" :rules="rules" ref="ruleForm" labelWidth="100px" size="small">
                <el-form-item label="类目编号">
                    <el-input style="width:90%" v-model="model.code"></el-input>
                </el-form-item>
                <el-form-item label="类目名称" prop="name">
                    <el-input style="width:90%" v-model="model.name"></el-input>
                </el-form-item>
                <!-- <el-form-item label="关联商品类型">
                    <el-select v-model="queryParams.type" filterable  size="small" placeholder="请选择">
                        <el-option  v-for="item in typeList" 
                                    :key="item.brandId" 
                                    :label="item.name" 
                                    :value="item.brandId">
                        </el-option>
                    </el-select>
                </el-form-item> -->
                
                
                <el-form-item label="排序">
                    <el-input-number style="width:60%"  v-model="model.displayOrder"></el-input-number>
                </el-form-item>

                <el-form-item label="状态">
                    <el-radio-group style="width:100%;" v-model='model.enabled'>
                        <el-radio :label="true">启用</el-radio>
                        <el-radio :label="false">禁用</el-radio>
                    </el-radio-group>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogEditView = false" size="small">取 消</el-button>
                <el-button type="primary" @click="save()" size="small">保 存</el-button>
            </span>
        </el-dialog>
    </page>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
import $config from '../../../../config.js'
import { mixin } from "../../mixins/seach";
import {categoryApi} from '../../api/goods-api.js'

export default {
    mixins: [mixin],
    mounted: function() {

    },
    methods: {
        breadcrumbClicked(index) {
            var vm = this;
            if (index < 0) {
                vm.tableParams.parentId = 0;
                vm.breadcrumbPaths = [];
            } else {
                for (var i = vm.breadcrumbPaths.length - 1; i > index; i--) {
                    vm.breadcrumbPaths.pop();
                }            
                vm.tableParams.parentId = vm.breadcrumbPaths[index].categoryId;
            }
            vm.getList(vm.tableParams);
        },
        viewChildren(row) {
          var vm = this;
          vm.breadcrumbPaths.push(row);
          vm.tableParams.parentId = row.categoryId;
          vm.getList(vm.tableParams);
          
        },
        gotoCreate(parentId) {
          if (!parentId) {
            parentId = 0;
          }
          var vm = this;
          vm.dialogEditView = true;
          vm.model = {
                parentId:parentId,
                enabled:true,
                displayOrder:1
            };
        },
        gotoEdit(id) {
          var vm = this;

          vm.dialogEditView = true;
          categoryApi.get(id).then(res => {
                vm.model = res;
                vm.model.hidden += "";
            })          
        },
        save() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    var vm = this;
                    vm.dialogEditView = false;

                    if (vm.model.categoryId) {
                        categoryApi.update(vm.model.categoryId, vm.model).then(res => {
                            vm.$message.success('已更新');
                            vm.getList(vm.tableParams);
                        })

                    } else {
                        categoryApi.create(vm.model).then(res => {
                            vm.$message.success('已创建');
                            vm.tableParams.page = 1;
                            vm.getList(vm.tableParams);
                        })
                    }
                }
            })
        },
        getList(params) {
            delete params.page;
            delete params.offset;
            params.limit = 999;
            if (! params) {
                params = {};
            }
            if (! params.parentId) {
                params.parentId = 0;
            }

            var vm = this;
            vm.tableParams = params;
            
            categoryApi.find(params).then(function(res) {
                vm.list = res.items;
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
                categoryApi.update(del.categoryId,del).then(function(data) {
                    vm.$message.success('作废成功');
                    vm.getList(vm.tableParams)
                }).catch(err => {
                    vm.$message({ message: err.response.data.message, type: 'error' });
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
            dialogEditView: false,
            list: [],
            currentPage: 1,
            total: 0,
            current:1,
            model: {},
            tableParams: {},
            breadcrumbPaths: [],
            typeList:[],
            queryParams:[],
            rules: {
                name: [
                    { required: true, message: '请输入类目名称', trigger: 'blur' },
                ]
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
.el-form-item--small.el-form-item {
    margin-bottom: 20px;
}
</style>