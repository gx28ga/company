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
        <el-row>
            <el-col :span="5" class="order-left">
                <div class='left-content'>
                    <p class="type">主状态：交易完成</p>
                    <p class="form-p"><span class="form">单据编号</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">商品总额</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">订单总额</span><span>12345678</span></p>
                </div>
                <div class='left-content'>
                    <p>状态信息</p>
                    <p class="form-p"><span class="form">付款状态 </span><span>12345678</span></p>
                    <p class="form-p"><span class="form">审核状态</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">物流状态</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">申诉状态</span><span>12345678</span></p>
                </div>
                <div class='left-content'>
                    <p>卖家信息</p>
                    <p class="form-p"><span class="form">商家名称 </span><span>12345678</span></p>
                    <p class="form-p"><span class="form">联系人</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">联系方式</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">地区</span><span>12345678</span></p>
                </div>
                <div class='left-content'>
                    <p>买家信息</p>
                    <p class="form-p"><span class="form">商家名称 </span><span>12345678</span></p>
                    <p class="form-p"><span class="form">联系人</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">联系方式</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">地区</span><span>12345678</span></p>
                </div>
                <div class='left-content'>
                    <p>收货信息</p>
                    <p class="form-p"><span class="form">收货地区 </span><span>12345678</span></p>
                    <p class="form-p"><span class="form">详细地址</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">收货人</span><span>12345678</span></p>
                    <p class="form-p"><span class="form">联系电话</span><span>12345678</span></p>
                </div>
                <div class='left-content' style="border-bottom:none;">
                    <p>优惠信息</p>
                    <p class="form-p"><span class="form">首单立减 </span><span>12345678</span></p>
                    <p class="form-p"><span class="form">积分抵扣</span><span>12345678</span></p>
                </div>
            </el-col>
            <el-col :span="19" class="order-tab">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="商品信息" name="product">
                        <el-form :inline="true" :model="queryParams" ref="queryParams" size="small">
                            <el-form-item>
                                <el-input placeholder="请输入" v-model="queryParams.name"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="btn-search" @click="search">快速查找</el-button>
                            </el-form-item>
                        </el-form>
                        <el-table :data="list" width="100%" border>
                            <el-table-column label="商品名称" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="规格" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="原价" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="成交价" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="订购数量" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="小计" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="未发货数量" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="发货单" name="invoice">
                        <el-table :data="list" width="100%" border>
                            <el-table-column label="发货单号" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="发货时间" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="物流/快递公司" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="物流/快递单号" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="状态" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="总件数" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="付款流水" name="payment">
                        <el-form :inline="true" :model="queryParams" ref="queryParams" size="small">
                            <el-form-item>
                                <el-input placeholder="请输入" v-model="queryParams.name"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="btn-search" @click="search">快速查找</el-button>
                            </el-form-item>

                            <div style="float:right;line-height:33px;font-size:12px;">
                                <span style="margin-right:5px;">累计支付金额：</span><span style="margin-right:20px;">￥10000.00</span>
                                <span style="margin-right:5px;">剩余金额：</span><span>￥10000.00</span>
                            </div>
                        </el-form>
                        <el-table :data="list" width="100%" border>
                            <el-table-column label="流水单号" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="发起时间" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="支付时间" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="支付方式" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="状态" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="支付金额" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="退换货" name="exchange">
                        <el-table :data="list" width="100%" border>
                            <el-table-column label="单据编号" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="类型" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="总件数" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="申请时间" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="状态" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column label="换货关联新订单" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.name}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- <el-tab-pane label="操作日志" name="journal">操作日志</el-tab-pane> -->
                </el-tabs>
            </el-col>
        </el-row>

        
    </page>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
import $config from '../../../../config.js'
import {orderApi} from '../../api/goods-api.js'
export default {
    methods: {
        getDetail() {
            var vm = this;
            orderApi.find().then(function(res) {
               
            })
        },
        search(){}
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
            activeName:'product'
        }
    },
}
</script>
<style>
</style>
<style scoped lang="less">
    .order-left{
        padding-top:20px;
        border-right:1px solid #CCCCCC;
        padding-right:10px;
        .left-content{
            padding-bottom:10px;
            border-bottom:1px solid #E4E4E4;
            font-size:15px;
            .type{
                font-weight:bold;
                font-size:23px;
                color:#666;
                margin-top:0;
                margin-bottom:10px;
            }
            .form-p{
                margin-bottom:10px;
                .form{
                    color:#999;
                    margin-right:20px;
                }
                
            }
        }
    }
    .order-tab{
        padding-left:20px;
        .el-tabs--top{
            .el-tabs__header{
                margin:0 0 10px;
            }
        }
        
    }
</style>