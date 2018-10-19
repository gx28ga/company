<template>
    <page>
      <!-- 面包屑 -->
        <el-row slot="header" :span="24">
            <el-col :span="14">
                <el-breadcrumb separator=">">
                  <el-breadcrumb-item>运营中心</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{name: '品牌商'}">商家</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{name: '品牌商'}">合伙人列表</el-breadcrumb-item>
                  <el-breadcrumb-item>查看合伙人信息</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col class="header-btn-group" :span="10">
                <el-button @click="$router.go(-1)" size="small">返回</el-button>
                <el-button @click='save' type="primary" size="small">保存</el-button>
            </el-col>
        </el-row>

        <!-- 添加合伙人-->
          
            <el-form labelPosition="right" labelWidth="150px" size="small" :model="list">
                <el-form-item label="商家类型">
                    <!-- <el-input style="width:50%" v-model="list.traderType.name"></el-input> -->
                    <span>合伙人</span>
                </el-form-item>
                <el-form-item label="商家名称">
                    <el-input style="width:50%" v-model="list.name"></el-input>
                </el-form-item>
                <el-form-item label="商家编号">
                    <el-input style="width:50%" v-model="list.id"></el-input>
                </el-form-item>
                <el-form-item label="性质">
                  <el-select v-model="list.properties" placeholder="请选择">
                      <el-option
                        v-for="item in property"
                        :key="item.value"
                        :value="item.value">
                        <span>{{ item.value }}</span>
                      </el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="所在地">
                    <el-select v-model="list.value6" placeholder="请选择">
                      <el-option
                        v-for="item in cities"
                        :key="item.value"
                        :value="item.value">
                        <span>{{ item.value }}</span>
                      </el-option>
                    </el-select>
                </el-form-item> -->
                <el-form-item label="详细地址">
                    <el-input style="width:50%" v-model="list.address"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                    <el-input style="width:50%" v-model="list.contactName"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input style="width:50%" v-model="list.phone"></el-input>
                </el-form-item>
                <el-form-item label="身份证号">
                    <el-input style="width:50%" v-model="list.idCardNo"></el-input>
                </el-form-item>
                <!-- <el-form-item label="身份证照片">
                    <Upload :limit="2" v-model="detailThumbs">
                      <i class="el-icon-plus"></i>
                    </Upload>
                </el-form-item> -->
                <el-form-item label="备注">
                    <el-input 
                    type="textarea"
                    :rows="5" 
                    style="width:50%" 
                    v-model="list.status">
                    </el-input>
                </el-form-item>

            </el-form>
    </page>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
import $config from '../../../../config.js'
import {
    traderApi
    } from '../../api/goods-api.js'

export default {
    methods: {
      save() {
        // console.log(this.list);
        traderApi.create(this.list).then(res => {
          this.list = res
          // console.log(res);
        })
        this.$router.go(-1)
      },
    },
    
    data() {
        return {
            list: {
              // traderType: {name: '合伙人'},
              // value6: '',
              properties: '个人'
            },
            current:1,
            currentPage: 1,
            total: 0,
            uploadedImages:[],
            model: {},
            tableParams: {},
            breadcrumbPaths: [],
            queryParams:{
                name:''
            },
            detailThumbs:[],
            property: [{value: '个人'}, {value: '个体户'}, {value: '公司'}, {value: '政府'}, {value: '国营企业'},{value: '外资企业'}],
            cities: [{value: '北京'}, {value: '上海'}, {value: '南京'}, {value: '成都'}, {value: '深圳'}, {value: '广州'}],
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