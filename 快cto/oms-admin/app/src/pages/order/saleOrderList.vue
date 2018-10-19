<template>
    <page>
        <el-row slot="header" :span="24">
            <el-col :span="14">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>交易</el-breadcrumb-item>
                    <el-breadcrumb-item>销售订单监控</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-form :inline="true" :model="queryParams" ref="queryParams" size="small">
            <el-form-item label="订单号">
                <el-input placeholder="请输入" v-model="queryParams.name"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-input placeholder="请输入" v-model="queryParams.name"></el-input>
            </el-form-item>
            <el-form-item label="下单时间">
                <el-date-picker
                  v-model="joinTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button class="btn-search" type="primary" @click="search">搜索</el-button>
                <el-button class="btn-reset" type="default" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="list" width="100%">
            <el-table-column label="单号">
                <template slot-scope="scope">
                    {{scope.row.orderNo}}
                </template>
            </el-table-column>
            <el-table-column label="卖家">
                <template slot-scope="scope">
                    <img :src="scope.row.icon" class="category-icon"/>
                </template>
            </el-table-column>
            <el-table-column label="买家">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column label="金额">
                <template slot-scope="scope">
                    {{scope.row.code}}
                </template>
            </el-table-column>
            <el-table-column label="时间" align="center">
                <template slot-scope="scope">
                    {{scope.row.displayOrder}}
                </template>
            </el-table-column>
            <el-table-column label="状态" align="center">
                <template slot-scope="scope">
                    {{ scope.row.enabled | enable}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <div class="opreator-cell">
                        <el-button text size="mini" @click="$router.push({name:'销售订单详情',params:{id:scope.row.orderId}})">详情</el-button>
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
import Vue from 'vue';
import $config from '../../../../config.js'
import { mixin } from "../../mixins/seach";
import {orderApi} from '../../api/goods-api.js'
export default {
    mixins: [mixin],
    methods: {
        getList(params) {
            var vm = this;
            orderApi.find(params).then(function(res) {
                vm.list = res.items;
                vm.total = res.total;
            })
        },

    },
    
    data() {
        return {
            joinTime:[],
            list: [],
            current:1,
            currentPage: 1,
            total: 0,
            tableParams: {},
            queryParams:{
                name:''
            },
           
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