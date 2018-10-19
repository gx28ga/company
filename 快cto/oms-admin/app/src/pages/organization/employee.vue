<template>
    <el-container>
      <el-header>成员管理</el-header>
      <el-container>
        <el-aside width="300px" class="aside">
          <el-row class="line">
            <span class="headerFs">组织架构</span>
          </el-row>
          <el-row class="line1">
            <el-col :span="18">
              <el-input v-model="filterText"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" icon="el-icon-search"></el-button>
            </el-col>
          </el-row>
          
          <el-tree
            class="filter-tree"
            :data="employeeList"
            :props="defaultProps"
            accordion
            :filter-node-method="filterNode"
            ref="tree2">
          </el-tree>
        </el-aside>
    
        <el-main>
          <el-row>
            <el-col :span="18">
              <el-form :model="queryParams" ref="queryParams" size="small">
                <el-form-item>
                  上海速道科技公司
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="6">
              <el-button type="text" >修改名称 |</el-button>
              <el-button type="text" > 添加子部门 |</el-button>
              <el-button type="text" > 添加成员 </el-button>
            </el-col>
          </el-row>
          <el-table :data="chooseList" width="100%" height="250" border>
              <el-table-column label="姓名" width="100">
                  <template slot-scope="scope">
                      {{scope.row.name}}
                  </template>
              </el-table-column>
              <el-table-column label="角色" width="100">
              <template slot-scope="scope">
                      {{item.row.role}}    
              </template>
              </el-table-column>
              <el-table-column label="部门" >
                  <template slot-scope="scope">
                      {{item.row.role}}    
                  </template>
              </el-table-column>
              <el-table-column label="登录账号">
                  <template slot-scope="scope">
                      {{item.row.role}}    
                  </template>
              </el-table-column>
              <el-table-column label="手机号码" >
                  <template slot-scope="scope">
                      {{item.row.role}}    
                  </template>
              </el-table-column>
              <el-table-column label="邮箱" >
                  <template slot-scope="scope">
                      {{item.row.role}}    
                  </template>
              </el-table-column>
              <el-table-column align="center" label="操作" width="100">
                  <template slot-scope="scope">
                      <div class="opreator-cell">
                          <el-button type="text" size="mini">编辑</el-button>
                      </div>
                  </template>
              </el-table-column>
          </el-table>

          <el-row type="flex">
            <el-col v-if='total>0'>
                <el-pagination class="text-right" @current-change="handleCurrentChange" :current-page="current" layout="total, prev, pager, next, jumper" :total="total">
                </el-pagination>
            </el-col>
        </el-row>
        </el-main>
      </el-container>
    </el-container>
</template>

<script type="text/ecmascript-6">

import Vue from 'vue';
import $config from '../../../../config.js'
import { mixin } from "../../mixins/seach";
import {employeeApi} from '../../api/goods-api.js'

export default {
    // watch: {
    //   filterText(val) {
    //     this.$refs.tree2.filter(val);
    //   }
    // },

  methods: {
      filterNode(value, data) {
        // if (!value) return true;
        // return data.label.indexOf(value) !== -1;
      },
      getList(params) {
      var vm = this;
      employeeApi.find(params).then(res => {
          this.list = res.items;
          this.total = res.total;
        })
    },
  },

  data() {
      return {
        total: 0,
        current: 1,
        chooseList: [],
        queryParams: {},
        filterText: '',
        employeeList: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          },{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
  }
};
</script>

<style scoped>
  html,body,.el-container,.el-container.is-vertical,.offset-left-menu,section,.layout-body,.main-layout,.el-tree-node,.el-tree,.el-tree-node__content,.app{
    height: 100%;
  }
  .el-header {
    background-color: #eff2f7;
    line-height: 60px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .el-aside {
    background-color: #fff;
    height: 100%;
    border: 1px solid #ccc;
    margin-left: 10px;
    padding-bottom: 10px;
  }
  .headerFs{
    font-size: 14px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
  }
  .el-main {
    background-color: #fff;
    /* height: 100%; */
    border: 1px solid #ccc;
  }
  .line{
    border-bottom: 1px solid #ccc;
    padding-left:10px;
    margin-bottom: 0;
  }
  .line1{
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    height: 60px;
    line-height: 60px;

  }



</style>
