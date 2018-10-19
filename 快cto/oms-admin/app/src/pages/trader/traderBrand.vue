<template>
    <page>
      <!-- 面包屑 -->
        <el-row slot="header" :span="24">
            <el-col :span="24">
                <el-breadcrumb separator=">">
                  <el-breadcrumb-item>运营平台管理</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{name: '品牌商'}">商家</el-breadcrumb-item>
                  <el-breadcrumb-item>合伙人列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
      <!-- 搜索栏 -->
        <el-form :inline="true" :model="queryParams" ref="queryParams" size="small" >
            <top-edit>
                <div slot="left">
                    <el-form-item>
                        <el-button type="primary" @click="$router.push({name:'添加合伙人',params:{}})">添加合伙人</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button>导出EXCEL</el-button>
                    </el-form-item>
                </div>
                <div slot="right">
                    <el-form-item label="名称">
                        <el-input v-model="queryParams.name" ></el-input>
                    </el-form-item>
                    <el-form-item label="地区">
                        <el-input v-model="queryParams.cityName" ></el-input>
                    </el-form-item>
                    <el-form-item label="负责人">
                        <el-input v-model="queryParams.contactName" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn-search" type="primary" @click="search">搜索</el-button>
                        <!--<el-button  type="default" @click="reset">高级todo?
                            <i class="el-icon-caret-bottom"></i>
                        </el-button>-->
                    </el-form-item>
                </div>
            </top-edit>
        </el-form>

      <!-- info -->
        <el-table :data="list" width="100%" border align="center">
            <el-table-column label="ID" width="150" align="center">
                <template slot-scope="scope">
                    {{scope.row.traderId}}
                </template>
            </el-table-column>
            <el-table-column label="名称" align="center">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <!-- <el-table-column label="地区" width="200">
                <template slot-scope="scope">
                    {{scope.row.provinceName}}/{{scope.row.cityName}}/{{scope.row.countyName}} 
                </template>
            </el-table-column> -->
             <el-table-column label="负责人"  align="center">
                <template slot-scope="scope">
                    {{scope.row.contactName}}
                </template>
            </el-table-column>
            <el-table-column label="联系电话" align="center">
                <template slot-scope="scope">
                    {{scope.row.phone}}
                </template>
            </el-table-column>
            <!-- <el-table-column label="平台等级" align="center">
                <template slot-scope="scope">
                    {{scope.row.levelName}}
                </template>
            </el-table-column> -->
            <el-table-column label="创建时间" width="200" align="center">
                <template slot-scope="scope">
                    {{scope.row.createTime | dateFilter}}
                </template>
            </el-table-column>
            <!-- <el-table-column label="状态" align="center">
                <template slot-scope="scope">
                    {{scope.row.enable}}
                </template>
            </el-table-column> -->
            <el-table-column align="center" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push({name:'合伙人详情',params:{id:scope.row.traderId}})">详情</el-button>
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
import Vue from 'vue';
import $config from '../../../../config.js'
import { mixin } from "../../mixins/seach";
import {
    traderApi
    } from '../../api/goods-api.js'
import TopEdit from "../../components/common/topEdit";

export default {
  components: {TopEdit},
  mixins: [mixin],
    methods: {
        getList(params) {
          // console.log(params);
          traderApi.find(params).then(res => {
            // console.log(res);
              this.list = res.items;
              this.total = res.total;
          })
        },
        // breadcrumbClicked(index) {
        //     var vm = this;

        //     if (index < 0) {
        //         vm.tableParams.parentId = 0;
        //         vm.breadcrumbPaths = [];
        //     } else {
        //         for (var i = vm.breadcrumbPaths.length - 1; i > index; i--) {
        //             vm.breadcrumbPaths.pop();
        //         }            
        //         vm.tableParams.parentId = vm.breadcrumbPaths[index].brandId;
        //     }
        //     vm.getList(vm.tableParams);
        // },
        // viewChildren(row) {
        //   var vm = this;

        //   vm.breadcrumbPaths.push(row);

        //   vm.tableParams.parentId = row.brandId;
        //   vm.getList(vm.tableParams);
        // },
        // gotoCreate(parentId) {
        //   if (!parentId) {
        //     parentId = 0;
        //   }
        //   var vm = this;
        //   vm.uploadedImages = []; //清除缓存
        //   vm.dialogEditView = true;
        //   vm.model = {parentId:parentId};
        // },
        // gotoEdit(id) {
        //   var vm = this;
        //   vm.uploadedImages = []; //清除缓存

        //   vm.dialogEditView = true;
        // //   brandApi.get(id).then(res => {
        // //         vm.model = res;
        // //         vm.model.hidden += "";
        // //         vm.uploadedImages = [{url:vm.model.icon}];
        // //     })          
        // },
        
        // save() {
        //   var vm = this;
        //   vm.dialogEditView = false;
          
        //   if (vm.uploadedImages && vm.uploadedImages.length > 0) {
        //     vm.model.icon = Vue.options.filters.imageUrl(vm.uploadedImages[0].response);
        //     vm.uploadedImages = []; //清除缓存
        //   }
        //     // console.log(vm.model.icon)
        //   if (vm.model.brandId) {
        //     brandApi.update(vm.model.brandId, vm.model).then(res => {
        //         vm.$message.success('已更新');
        //         vm.getList(vm.tableParams);
        //     })

        //   } else {
        //     brandApi.create(vm.model).then(res => {
        //         vm.$message.success('已创建');
        //         vm.tableParams.page = 1;
        //         vm.getList(vm.tableParams);
        //     })
        //   }
        // },
        
        // gotoRemove(id) {
        //     var vm = this;
        //     this.$confirm('确定删除?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //     }).then(() => {
        //         brandApi.delete(id).then(function(data) {
        //             vm.$message.success('已删除');
        //             vm.getList(vm.tableParams)
        //         }).catch(err => {
        //             vm.$message({ message: res.response.data.message, type: 'error' });
        //         })
        //     }).catch(err => {
        //         this.$message({
        //             type: 'info',
        //             message: '已取消'
        //         });
        //     });
        // }
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
            breadcrumbPaths: [],
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