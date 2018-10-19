<template>
    <page>
        <el-row slot="header" :span="24">
            <el-col :span="14">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item>商品列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col class="header-btn-group" :span="10">
              <!-- <el-button size="small" @click="">标签(？)</el-button>
              <el-button size="small" @click="">禁用(？)</el-button>
              <el-button size="small" @click="">启用(？)</el-button> -->

            </el-col>
        </el-row>
        <el-form :inline="true" :model="queryParams" ref="queryParams" size="small">
            <top-edit>
                <div slot="left">
                    <el-form-item >
                        <el-button type="primary" @click="$router.push({name:'商品新增'})">添加商品</el-button>
                    </el-form-item>
                </div>
                <div slot="right">
                    <el-form-item label="商品名称">
                        <el-input placeholder="输入关键词" style="width:130px;" v-model="queryParams.title"></el-input>
                    </el-form-item>
                    <el-form-item label="商品编号">
                        <el-input placeholder="输入商品编号" style="width:130px;" v-model="queryParams.orderByType"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="品牌">
                        <el-select v-model="queryParams.brandId" filterable  size="small" placeholder="请选择" style="width:120px;">
                            <el-option  v-for="item in brandsClass"
                                        :key="item.brandId"
                                        :label="item.name"
                                        :value="item.brandId">
                            </el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="类目" >
                        <el-cascader
                                v-model = 'classification'
                                clearable
                                @change="secondChange"
                                placeholder="请选择分类"
                                :options="categoryList"
                                @active-item-change="getGoodsClassSecond"
                                style="width:130px;"
                        ></el-cascader>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="btn-search" type="primary" @click="search">搜索</el-button>
                        <!-- <el-button class="btn-reset" type="default" @click="reset();heavy()">重置</el-button> -->
                        <!-- <el-button  type="default" @click="reset">高级(?)
                          <i class="el-icon-caret-bottom"></i>
                        </el-button> -->
                    </el-form-item>
                </div>
            </top-edit>

        </el-form>
        <el-table :data="list" width="100%" border>
            <el-table-column
              type="selection"  align="center"
              width="55">
            </el-table-column>
            <el-table-column label="缩略图" align="center">
                <template slot-scope="scope">
                    <img v-bind:src="scope.row.coverImage" class="thumb">
                </template>
            </el-table-column>
            <el-table-column label="商品编号" align="center">
              <template slot-scope="scope">
                  {{scope.row.productNo}}
              </template>
            </el-table-column>
            <el-table-column label="商品名称" align="center" width="300">
                <template slot-scope="scope">
                    <div class="baseinfo">
                        <h3>{{scope.row.name}}</h3>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="品牌" align="center">
                <template slot-scope="scope">
                    {{scope.row.brandName}}
                </template>
            </el-table-column>
            <el-table-column label="基础类目" align="center">
                <template slot-scope="scope">
                    {{scope.row.categoryName}}
                </template>
            </el-table-column>
            <el-table-column label="商品类型" align="center">
                <template slot-scope="scope">
                    {{scope.row.productType}}
                </template>
            </el-table-column>
            <el-table-column label="是否启用" align="center">
                <template slot-scope="scope">
                    {{scope.row.enabled | enable}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="120">
                <template slot-scope="scope">
                    <div class="opreator-cell">
                        <el-button type="text" size="mini" @click="$router.push({name:'商品编辑',params:{id:scope.row.productId}})">编辑</el-button>
                        <!-- <el-button round size="mini">复制</el-button> -->
                        <el-button type="text" size="mini" @click.native="gotoRemove(scope.row)">作废</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-row type="flex">
            <el-col v-if='total>0'>
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
import { mixin } from "../../mixins/seach";
import $config from "../../../../config.js";

import {
    productApi
    } from '../../api/goods-api.js'
import TopEdit from "../../components/common/topEdit";

export default {
  components: {TopEdit},
  mixins: [mixin],
  created() {
    // this.getGoodsClassFirst(this.parentId);
  },
  methods: {
    getList(params) {
      var vm = this;
      productApi.find(params).then(res => {
          this.list = res.items;
          this.total = res.total;
        })
    },

    getGoodsClassFirst: function(id) {
      // 获取一级类目列表

      getGoodsClassAll({limit:999,parentId:0}).then(res => {
        let categoryList = res.items.map((k, i) => {
          return {
            label: k.name,
            value: i+1,
            categoryId: k.categoryId,
            children:[]
          };
        });
        categoryList.unshift({ 
            label: '全部',
            value: 0,
            categoryId: ''})
        this.categoryList = categoryList
        // console.log(this.categoryList);
      });
    },
    getGoodsClassSecond: function(id) {
      this.queryParams.categoryId = this.categoryList[id].categoryId
      this.classification = id
      // 获取二级类目列表
      getGoodsClass(this.categoryList[id].categoryId).then(res => {
        let categoryListSecond = res.items.map((k, i) => {
          return {
            label: k.name,
            value: i+1,
            categoryId: k.categoryId,
          };
        });
        this.categoryListSecond = categoryListSecond
        // console.log(this.categoryListSecond);
        this.categoryList[id].children = this.categoryListSecond
        
      });
    },

    gotoRemove(data) {
      var del = JSON.parse(JSON.stringify(data));
      del.enabled = false;
      var vm = this;
      this.$confirm("是否作废该商品?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          productApi.update(del.productId,del).then(function(data) {
              vm.$message.success("作废成功");
              vm.getList(vm.tableParams)
            })
          //   .catch(err => {
          //     vm.$message({
          //       message: err.response.data.message,
          //       type: "error"
          //     });
          //   });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },

 


    heavy(){
      this.classification=[];
    },


    secondChange(val){
      try {
        this.queryParams.categoryId=this.categoryListSecond[val[1]-1].categoryId
      } catch(err){
        this.queryParams.categoryId=''
      }
    }
  },
  
  data() {
    return {
      classification:[],
      categoryId:[],
      brandsClass: [],
      list: [],
      value: "",
      categoryList: [],
      categoryListSecond:[],
      queryParams: {},
      total: 0,
      current: 1,
      parentId:0,
    };
  }
};
</script>
<style>
</style>
<style scoped lang="less">
.thumb {
  width: 70px !important;
  height: auto;
}

.thumb + .el-tag {
  position: absolute;
  left: 5px;
  top: 5px;
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