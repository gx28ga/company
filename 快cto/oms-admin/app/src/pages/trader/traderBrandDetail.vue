<template>
    <page>
      <!-- 面包屑 -->
        <el-row slot="header" :span="24">
            <el-col :span="20">
                <el-breadcrumb separator=">">
                  <el-breadcrumb-item>运营平台管理</el-breadcrumb-item>
                  <el-breadcrumb-item>商家</el-breadcrumb-item>
                  <el-breadcrumb-item>合伙人列表</el-breadcrumb-item>
                  <el-breadcrumb-item>查看合伙人信息</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col class="header-btn-group" :span="4">
                <el-button @click="$router.go(-1)" size="small">返回</el-button>
            </el-col>
        </el-row>
      
      <!-- tab栏 -->
      <template>
        <el-tabs v-model="activeName" >
          <el-tab-pane label="资料" name="traderData">
            <traderData></traderData>
          </el-tab-pane>
          <el-tab-pane label="销售订单" name="salesOrder">
            <salesOrder></salesOrder>
          </el-tab-pane>
          <el-tab-pane label="退换货单" name="refundOrder">
            <refundOrder></refundOrder>
          </el-tab-pane>
          <el-tab-pane label="结算单" name="statements">
            <statements></statements>
          </el-tab-pane>
          <el-tab-pane label="下游客户" name="downstreamCustomers">
            <downstreamCustomers></downstreamCustomers>
          </el-tab-pane>
          <el-tab-pane label="规则和权限" name="regulation" >
            <regulation></regulation>
          </el-tab-pane>
          <el-tab-pane label="成员" name="tradermember">
            <tradermember></tradermember>
          </el-tab-pane>
        </el-tabs>
      </template>

    </page>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
import $config from '../../../../config.js'
import { mixin } from "../../mixins/seach";

import traderData from './traderDetail/traderData'
import tradermember from './traderDetail/tradermember'
import refundOrder from './traderDetail/refundOrder'
import statements from './traderDetail/statements'
import downstreamCustomers from './traderDetail/downstreamCustomers'
import regulation from './traderDetail/regulation'
import salesOrder from './traderDetail/salesOrder'

export default {
    props: {},
    components:{
        traderData,
        salesOrder,
        tradermember,
        refundOrder,
        statements,
        downstreamCustomers,
        regulation
    },
    methods: {
        // handleClick(tab) {
        //   this.$router.replace({query: {scope: this.activeName}});
        // }
    },
    
    data() {
        return {
            activeName: 'traderData'
        }
    },
}
</script>
<style>
</style>
<style scoped lang="less">
.el-main{
  padding: 0;
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