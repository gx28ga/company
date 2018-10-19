<template>
    <page>
        <el-row slot="header" :span="24">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item>品牌管理</el-breadcrumb-item>
                </el-breadcrumb>
        </el-row>
        <el-form :inline="true" :model="queryParams" ref="queryParams" size="small">
            <top-edit>
                <div slot="left">
                    <el-form-item >
                        <el-button type="primary" @click="addBrand">新增</el-button>
                    </el-form-item>
                </div>
                <div slot="right">
                    <el-form-item label="品牌:">
                        <el-input placeholder="请输入品牌" v-model="queryParams.name"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="btn-search" type="primary" @click="search">搜索</el-button>
                        <el-button class="btn-reset" type="default" @click="reset">重置</el-button>
                    </el-form-item>
                </div>
            </top-edit>
        </el-form>
        <el-table :data="list" width="100%" border>
            <el-table-column label="ID" header-align="center">
                <template slot-scope="scope">
                    {{scope.row.brandId}}
                </template>
            </el-table-column>
            <el-table-column label="缩略图" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.icon" class="category-icon"/>
                </template>
            </el-table-column>
            <el-table-column label="品牌名称" align="center">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column label="CODE" align="center">
                <template slot-scope="scope">
                    {{scope.row.code}}
                </template>
            </el-table-column>
            <el-table-column label="排序" align="center">
                <template slot-scope="scope">
                    {{scope.row.displayOrder}}
                </template>
            </el-table-column>
            <el-table-column label="是否显示" align="center">
                <template slot-scope="scope">
                    {{ scope.row.enabled | enable}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="120px">
                <template slot-scope="scope">
                    <div class="opreator-cell">
                        <el-button type="text" size="mini" @click="brandEdit(scope.row.brandId)">编辑</el-button>
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

        <!-- 新增/编辑 -->
        <el-dialog title="品牌" :visible.sync="dialogEditView" width="400px">
            <el-form labelPosition="right" :model="model" :rules="rules" ref="ruleForm" class="dialog-form" labelWidth="100px" size="small">
                <el-form-item label="编号">
                    <el-input style="width:90%" v-model="model.code"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <Upload :limit="1" v-model="uploadedImages">
                      <i class="el-icon-plus"></i>
                    </Upload>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input style="width:90%" v-model="model.name"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input-number style="width:60%"  v-model="model.displayOrder"></el-input-number>
                </el-form-item>

                <el-form-item label="是否显示">
                    <el-radio-group style="width:100%;" v-model='model.enabled'>
                        <el-radio :label="true">显示</el-radio>
                        <el-radio :label="false">隐藏</el-radio>
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
import {brandApi} from '../../api/goods-api.js'
import TopEdit from "../../components/common/topEdit";
export default {
  components: {TopEdit},
  mixins: [mixin],
    methods: {
        getList(params) {
            if (! params) {
                params = {};
            }
            if (! params.parentId) {
                params.parentId = 0;
            }

            var vm = this;
            vm.tableParams = params;
            brandApi.find(params).then(function(res) {
                vm.list = res.items;
                vm.total = res.total;
            })
        },
        addBrand(){
            this.dialogEditView = true;
            this.uploadedImages = []
            this.model = {
                displayOrder:1,
                enabled:true,
            }
        },
        brandEdit(id){
            let vm = this;
            vm.uploadedImages = []
            this.dialogEditView = true;
            brandApi.get(id).then(function(res) {
                vm.model = res
                if(res.icon){
                    vm.uploadedImages.push({url:res.icon})
                }
            })

        },
        save() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    var vm = this;
                    vm.dialogEditView = false;
                    
                    if (vm.uploadedImages && vm.uploadedImages.length > 0) {
                        vm.model.icon = Vue.options.filters.imageUrl(vm.uploadedImages[0].response);
                        vm.uploadedImages = []; //清除缓存
                    }
                        // console.log(vm.model.icon)
                    if (vm.model.brandId) {
                        brandApi.update(vm.model.brandId, vm.model).then(res => {
                            vm.$message.success('已更新');
                            vm.getList(vm.tableParams);
                        })

                    } else {
                        brandApi.create(vm.model).then(res => {
                            vm.$message.success('已创建');
                            vm.tableParams.page = 1;
                            vm.getList(vm.tableParams);
                        })
                    }
                }
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
                brandApi.update(del.brandId,del).then(function(data) {
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
            dialogEditView: false,
            list: [],
            current:1,
            currentPage: 1,
            total: 0,
            uploadedImages:[],
            model: {},
            tableParams: {},
            queryParams:{
                name:''
            },
            breadcrumbPaths:[],
            rules: {
                name: [
                    { required: true, message: '请输入品牌名称', trigger: 'blur' },
                ]
            }
        }
    },
}
</script>
<style>
</style>
<style scoped lang="less">
.category-icon{
  max-width: 50px !important;
  max-height: 50px !important;
  display: inline-block !important;
}



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