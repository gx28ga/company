<template>
  <el-container>
  <!-- 左侧 -->
    <el-aside>
      <el-form :label-position="labelPosition" label-width="120px" :model="list" style="padding-top:20px;">
          <img src="" alt="" class="img">
        <el-form-item label="商家类型">
          <!-- <span>{{list.traderType.name}}</span> -->
          <span>合伙人</span>
        </el-form-item>
        <el-form-item label="商家名称">
          <span>{{list.name}}</span>
        </el-form-item>
        <el-form-item label="加入时间">
          <span>{{list.createTime | datetimeFilter}}</span>
        </el-form-item>
        <el-form-item label="状态">
          <span class="info">{{list.enable}}</span>
        <el-button type="text" size="medium" class="colorRed pl">禁用</el-button>
        </el-form-item>
        <el-form-item label="专属BD">
          <span class="info">{{list.tagName}} </span>
          <el-button type="text" size="medium" class="pl" @click="tagEdit">修改</el-button>
        </el-form-item>
        <el-form-item label="账户余额">
          <span class="info">{{list.accountBalance}}</span>
        </el-form-item>
        <el-form-item label="授信额度">
          <span class="info">{{list.creditLine}}</span>
        </el-form-item>
        <el-form-item label="信用余额">
          <span class="info">{{list.creditBalance}}</span>
        </el-form-item>
        <el-form-item label="可用积分">
          <span class="info">{{list.pointsAvailable}}</span>
          <el-button type="text" size="medium" class="pl" @click="integraledit">修改</el-button>
        </el-form-item>
        <el-form-item label="等级">
          <span class="info">{{list.levelName}}</span>
          <el-button type="text" size="medium" class="pl" @click="classedit">修改</el-button>
        </el-form-item>
        <el-form-item label="成长值">
          <span class="info">{{list.growthValue}}</span>
          <el-button type="text" size="medium" class="pl" @click="growRateedit">修改</el-button>
        </el-form-item>
        <el-form-item label="备注">
          <span class="info">{{list.remark}}</span>
        </el-form-item>
      </el-form>
    </el-aside>
  
    <!-- BD -->
      <el-dialog :visible.sync="BDVisible" width="30%" size="mini">
        <el-form :model="list">
          <el-form-item label="专属BD">
            <el-input style="width:80%" v-model="list.tagName"></el-input>
          </el-form-item>
        </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="BDVisible = false">取 消</el-button>
            <el-button type="primary" @click="tagNameEdit">确 定</el-button>
          </div>
      </el-dialog>

    <!-- 可用积分 -->
      <el-dialog :visible.sync="integralVisible" width="30%" size="mini">
        <el-form :model="list">
          <el-form-item label="可用积分">
            <el-input style="width:80%" v-model="list.pointsAvailable"></el-input>
          </el-form-item>
        </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="integralVisible = false">取 消</el-button>
            <el-button type="primary" @click="pointsEdit">确 定</el-button>
          </div>
      </el-dialog>

    <!-- 等级 -->
      <el-dialog :visible.sync="classVisible" width="30%"  size="mini">
        <el-form :model="list">
          <el-form-item label="等级">
            <el-input style="width:80%" v-model="list.levelName"></el-input>
          </el-form-item>
        </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="classVisible = false">取 消</el-button>
            <el-button type="primary" @click="levelNameEdit">确 定</el-button>
          </div>
      </el-dialog>

    <!-- 成长值 -->
      <el-dialog :visible.sync="growRateVisible" width="30%"  size="mini">
        <el-form :model="list">
          <el-form-item label="成长值">
            <el-input style="width:80%" v-model="list.growthValue"></el-input>
          </el-form-item>
        </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="growRateVisible = false">取 消</el-button>
            <el-button type="primary" @click="growRateeditEdit">确 定</el-button>
          </div>
      </el-dialog>

  <!-- 右侧 -->
    <el-main>
    <!-- 基本信息 -->
      <div class="line">
        <span class="fz">基本信息</span>
        <el-button type="text" size="small" class="edit" @click="infoDialogEdit">编辑</el-button>
      </div>
      <el-form :label-position="labelPosition" label-width="180px" :model="list">
        <el-form-item label="商家名称">
          <span class="info">{{list.name}}</span>
        </el-form-item>
        <!-- <el-form-item label="商家性质">
          <span class="info">{{list.name}}</span>
        </el-form-item> -->
        <el-form-item label="联系人">
          <span class="info">{{list.contactName}}</span>
        </el-form-item>
        <el-form-item label="联系方式">
          <span class="info">{{list.phone}}</span>
        </el-form-item>
        <!-- <el-form-item label="所在地">
          <span class="info">{{list.provinceName}}/{{list.cityName}}/{{list.countyName}}</span>
        </el-form-item> -->
        <!-- <el-form-item label="详细地址">
          <span class="info">{{list.address}}</span>
        </el-form-item> -->
      </el-form>
      
      <!-- 编辑基本信息 -->
      <el-dialog title="基本信息" :visible.sync="infoVisible" width="40%" size="mini">
        <el-form :model="list" labelWidth="100px">
          <el-form-item label="商家名称">
            <el-input style="width:80%" v-model="list.name"></el-input>
          </el-form-item>
          <!-- <el-form-item label="商家性质">
            <el-select style="width:80%" v-model="list.creditBnamealance">
              <el-option 
              v-for="item in creditBalanceList" 
              :key="item.value" 
              :label="item.value" 
              :value="item.value" 
              >
                <span>{{ item.value }}</span>
              </el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="联系人">
            <el-input style="width:80%" v-model="list.contactName"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input style="width:80%" v-model="list.phone"></el-input>
          </el-form-item>
          <!-- <el-form-item label="所在地">
            <el-input style="width:80%" v-model="list.contactName"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="详细地址">
            <el-input style="width:80%" v-model="list.address"></el-input>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="infoVisible = false">取 消</el-button>
          <el-button type="primary" @click="infoEdit">确 定</el-button>
        </div>
      </el-dialog>

    <!-- 工商信息 -->
      <div class="line">
        <span class="fz">工商信息</span>
        <el-button type="text" size="small" class="edit" @click="ICDialogEdit">编辑</el-button>
      </div>
      <el-form :label-position="labelPosition" label-width="180px" :model="baseList">
        <el-form-item label="统一社会信用代码">
          <span class="info">{{baseList.socialCreditCode}}</span>
        </el-form-item>
        <el-form-item label="机构全称">
          <span class="info">{{baseList.corpName}}</span>
        </el-form-item>
        <el-form-item label="类型">
          <span class="info">{{baseList.type}}</span>
        </el-form-item>
        <!-- <el-form-item label="住所">
          <span class="info">{{baseList.address}}</span>
        </el-form-item> -->
        <el-form-item label="法定代表人">
          <span class="info">{{baseList.legalRepresentative}}</span>
        </el-form-item>
        <el-form-item label="注册资本">
          <span class="info">{{baseList.registeredCapital}}万</span>
        </el-form-item>
        <el-form-item label="成立日期">
          <span class="info">{{baseList.dateOfEstablishment | dateFilter}}</span>
        </el-form-item>
        <el-form-item label="营业期限">
          <!-- {{baseList.termOfValidity.slice(2,12)}} ~ {{baseList.termOfValidity }} -->
          <span class="info">{{baseList.termOfValidity }}</span>
        </el-form-item>
        <el-form-item label="经营范围">
          <span class="info">{{baseList.businessScope}}</span>
        </el-form-item>
      </el-form>

      <!-- 编辑工商信息 -->
      <el-dialog title="工商信息" :visible.sync="ICVisible" width="50%" size="mini">
        <el-form :model="baseList" labelWidth="150px">
          <el-form-item label="统一社会信用代码">
            <el-input style="width:80%" v-model="baseList.socialCreditCode"></el-input>
          </el-form-item>
          <el-form-item label="机构全称">
            <el-input style="width:80%" v-model="baseList.corpName"></el-input>
          </el-form-item>
          <!-- <el-form-item label="类型">
            <el-input style="width:80%" v-model="baseList.type"></el-input>
          </el-form-item> -->
          <el-form-item label="类型">
            <el-select size="small" v-model="baseList.type">
              <el-option 
              v-for="item in typeList" 
              :key="item.value" 
              :label="item.value" 
              :value="item.value" 
              >
                <span>{{ item.value }}</span>
              </el-option>
              </el-select>
          </el-form-item>
          <!-- <el-form-item label="住所">
            <el-input style="width:80%" v-model="baseList.address"></el-input>
          </el-form-item> -->
          <el-form-item label="法定代表人">
            <el-input style="width:80%" v-model="baseList.legalRepresentative"></el-input>
          </el-form-item>
          <el-form-item label="注册资本">
            <el-input style="width:80%" v-model="baseList.registeredCapital"></el-input>
          </el-form-item>
          <el-form-item label="成立日期">
            <el-date-picker
              v-model="baseList.dateOfEstablishment"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="营业期限">
                <el-date-picker
                  v-model="baseList.termOfValidity"
                  value-format="yyyy-MM-dd"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
          </el-form-item>
          <el-form-item label="经营范围">
            <el-input type="textarea" :rows="8" style="width:80%" v-model="baseList.businessScope"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="ICVisible = false">取 消</el-button>
          <el-button type="primary" @click="ICEdit">确 定</el-button>
        </div>
      </el-dialog>

    <!-- 结算账户 -->
      <div class="line">
        <span class="fz">结算账户</span>
        <el-button type="text" size="small" class="edit" @click="settlementDialogEdit">编辑</el-button>
      </div>
      <el-form :label-position="labelPosition" label-width="180px" :model="SettlementList">
        <el-form-item label="银行">
          <span class="info">{{SettlementList.bankName}}</span>
        </el-form-item>
        <el-form-item label="开户行">
          <span class="info">{{SettlementList.branchName}}</span>
        </el-form-item>
        <el-form-item label="账号">
          <span class="info">{{SettlementList.account}}</span>
        </el-form-item>
        <el-form-item label="账号名">
          <span class="info">{{SettlementList.accountName}}</span>
        </el-form-item>
      </el-form>

      <!-- 编辑结算账户 -->
      <el-dialog title="结算账户" :visible.sync="settlementVisible" width="40%" size="mini">
        <el-form :model="form" labelWidth="100px">
          <el-form-item label="银行">
            <el-input style="width:80%" v-model="SettlementList.bankName"></el-input>
          </el-form-item>
          <!-- <el-form-item label="开户城市">
            <el-select size="small" placeholder="Select" v-model="SettlementList.provinceName">
              <el-option 
              v-for="item in typeList" 
              :key="item.value" 
              :label="item.value" 
              :value="item.value" 
              >
                <span>{{ item.value }}</span>
              </el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="开户行">
            <el-input style="width:80%" v-model="SettlementList.branchName"></el-input>
          </el-form-item>
          <el-form-item label="账号">
            <el-input style="width:80%" v-model="SettlementList.account"></el-input>
          </el-form-item>
          <el-form-item label="账号名">
            <el-input style="width:80%" v-model="SettlementList.accountName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="settlementVisible = false">取 消</el-button>
          <el-button type="primary" @click="settlementEdit">确 定</el-button>
        </div>
      </el-dialog>

    <!-- 发票信息 -->
      <div class="line">
        <span class="fz">发票信息</span>
        <el-button type="text" size="small" class="edit" @click="invoiceDialogEdit">编辑</el-button>
      </div>
      <el-form :label-position="labelPosition" label-width="180px" :model="invoiceList">
        <el-form-item label="发票类型">
          <span class="info">{{invoiceList.type}}</span>
        </el-form-item>
        <el-form-item label="公司">
          <span class="info">{{invoiceList.corpName}}</span>
        </el-form-item>
        <el-form-item label="纳税人识别号">
          <span class="info">{{invoiceList.socialCreditCode}}</span>
        </el-form-item>
        <!-- <el-form-item label="工商注册地址">
          <span class="info">{{invoiceList.address}}</span>
        </el-form-item> -->
        <el-form-item label="固定电话">
          <span class="info">{{invoiceList.telephone}}</span>
        </el-form-item>
        <el-form-item label="开户行">
          <span class="info">{{invoiceList.branchName}}</span>
        </el-form-item>
        <el-form-item label="银行开户账号">
          <span class="info">{{invoiceList.bankAccount}}</span>
        </el-form-item>
      </el-form>
      
    <!-- 编辑发票信息 -->
      <el-dialog title="发票信息" :visible.sync="invoiceVisible" width="50%" size="mini">
        <el-form :model="invoiceList" labelWidth="150px">
          <el-form-item label="发票类型">
            <el-input style="width:80%" v-model="invoiceList.type"></el-input>
          </el-form-item>
          <el-form-item label="公司">
            <el-input style="width:80%" v-model="invoiceList.corpName"></el-input>
          </el-form-item>
          <el-form-item label="纳税人识别号">
            <el-input style="width:80%" v-model="invoiceList.socialCreditCode"></el-input>
          </el-form-item>
          <!-- <el-form-item label="工商注册地址">
            <el-input style="width:80%" v-model="invoiceList.address"></el-input>
          </el-form-item> -->
          <el-form-item label="固定电话">
            <el-input style="width:80%" v-model="invoiceList.telephone"></el-input>
          </el-form-item>
          <el-form-item label="开户行">
            <el-input style="width:80%" v-model="invoiceList.branchName"></el-input>
          </el-form-item>
          <el-form-item label="银行开户账号">
            <el-input style="width:80%" v-model="invoiceList.bankAccount"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="invoiceVisible = false">取 消</el-button>
          <el-button type="primary" @click="invoiceEdit">确 定</el-button>
        </div>
      </el-dialog>
    <!-- 收货地址 -->
      <div class="line">
        <span class="fz">收货地址</span>
        <el-button type="text" size="small" class="edit" @click="receiverDialogAdd">添加</el-button>
      </div>
      <el-table
        :data="traderAddressList"
        border
        style="width: 100%">
        <!-- <el-table-column label="所在地区" width="180" align="center">
          <template slot-scope="scope">{{scope.row.provinceName}}/{{scope.row.cityName}}/{{scope.row.countyName}}</template>
        </el-table-column> -->
        <el-table-column label="详细地址" width="300" header-align="center">
          <template slot-scope="scope">{{scope.row.address}}</template>
        </el-table-column>
        <el-table-column  label="收货人" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="联系电话" width="150" header-align="center" align="center">
          <template slot-scope="scope">{{scope.row.phone}}</template>
        </el-table-column>
        <!-- <el-table-column label="唯一" >
          <template slot-scope="scope">
            <el-button type="text" size="medium"><i class="el-icon-check"></i></el-button>
            <el-button type="text" size="medium"><i class="el-icon-close" v-if="check" ></i></el-button>
          </template>
        </el-table-column> -->
        <el-table-column label="默认" width="80" align="center">
          <template slot-scope="scope">
            <el-button v-if="scope.row.isDefault" type="text" size="medium"><i class="el-icon-check" ></i></el-button>
            <el-button v-else type="text" size="medium"><i class="el-icon-close" ></i></el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="100" 
          align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="edit" @click="receiverRemove(scope.row.addressId)">移除</el-button>
            <el-button type="text" size="small" class="edit" @click="receiverDialogEdit(scope.row.addressId)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-row type="flex">
        <el-col  v-if='total>0'>
            <el-pagination
              class="text-right"
              :current-page="current"
              layout="total, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
        </el-col>
      </el-row>
    
    <!-- 新增收货地址 -->
      <el-dialog title="新增收货地址" :visible.sync="receiverAddVisible" width="40%" size="mini">
        <el-form :model="receiverList" labelWidth="100px">
          <!-- <el-form-item label="所在地区">
            <el-input style="width:80%" v-model="receiverList.countyName"></el-input>
          </el-form-item> -->
          <el-form-item label="详细地址">
            <el-input style="width:80%" v-model="receiverList.address"></el-input>
          </el-form-item>
          <el-form-item label="收货人">
            <el-input style="width:80%" v-model="receiverList.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input style="width:80%" v-model="receiverList.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="receiverList.isDefault">设置为默认收货地址</el-checkbox>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="receiverAddVisible = false">取 消</el-button>
          <el-button type="primary" @click="receiverAdd">确 定</el-button>
        </div>

      </el-dialog>

    <!-- 编辑收货地址 -->
      <el-dialog title="编辑收货地址" :visible.sync="receiverVisible" width="40%" size="mini">
        <el-form :model="receiverList" labelWidth="100px">
          <el-form-item label="所在地区">
            <el-input style="width:80%" v-model="receiverList.countyName"></el-input>
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input style="width:80%" v-model="receiverList.address"></el-input>
          </el-form-item>
          <el-form-item label="收货人">
            <el-input style="width:80%" v-model="receiverList.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input style="width:80%" v-model="receiverList.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="receiverList.isDefault">设置为默认收货地址</el-checkbox>
          </el-form-item>
          <!-- <el-form-item label="唯一">
            <el-radio v-model="form.isUnique" label="true" checked><i class="el-icon-check"></i></el-radio>
            <el-radio v-model="form.isUnique" label="false"><i class="el-icon-close"></i></el-radio>
          </el-form-item> -->
          <!-- <el-form-item label="默认">
            <el-radio v-model="form.isDefault" label="true" checked><i class="el-icon-check"></i></el-radio>
            <el-radio v-model="form.isDefault" label="false"><i class="el-icon-close"></i></el-radio>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="receiverVisible = false">取 消</el-button>
          <el-button type="primary" @click="receiverEdit(receiverList.addressId)">确 定</el-button>
        </div>

      </el-dialog>

    <!-- 图片信息 -->
      <div class="line">
        <span class="fz">图片信息</span>
      </div>
      <el-form class="edit-form" style="margin-top:20px;" :label-position="labelPosition" label-width="180px" :model="images">
          <el-form-item label="门头照片">
              <Upload :limit="1" v-model="images.facadeMediaUrls">
                <i class="el-icon-plus"></i>
              </Upload>
            </el-form-item>
          <el-form-item label="营业执照">
              <Upload :limit="1" v-model="images.businessFileUrl">
                <i class="el-icon-plus"></i>
              </Upload>
            </el-form-item>
          <el-form-item label="负责人身份证">
            <Upload :multiple="true" :limit="2" v-model="images.idCardUrl">
                <i class="el-icon-plus"></i>
              </Upload>
            </el-form-item>
          <el-form-item label="室内照片">
            <Upload :multiple="true" :limit="8" v-model="images.indoorMediaUrls">
                <i class="el-icon-plus"></i>
              </Upload>
            </el-form-item>
      </el-form>

    </el-main>
  </el-container>
</template>

<style>
  .el-form-item>.el-form-item__label{
    font-size: 14px;
  }
</style>
<style scoped>
  html,body{
    height: 100%;
  }
  .el-container{
    height: 100%;
    /* border: 1px solid #eee; */
  }
  .el-main {
    padding: 0 20px;
  }
  .el-aside {
    width: 200px;
    color: #333;
    height: 100%;
    border: 1px solid #ccc;
  }
  .info{
    font-size: 14px;
  }

  .colorRed{
    color: red;
  }
  .pl{
    padding-left: 10px;
  }

  img{
    display: block;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    background-color:#f2f2f2;
  }
  .fl{
    float: left;
  }
  .edit{
    float: right;
    color: #0099ff;
    font-size: 14px;
    line-height: 20px;
    padding-right: 10px;
  }
  .line{
    background-color: #f2f2f2;
    height: 40px;
    line-height: 40px;
    border-left: 2px solid #0099ff;

  }
  .fz{
    font-size: 14px;
    font-weight: 700;
    padding-left: 10px;
  }
  .el-upload--picture-card{
    margin-bottom: 10px;
  }

</style>

<script type="text/ecmascript-6">
import Vue from 'vue';
import $config from '../../../../../config.js'
import {
    traderApi,
    corporationApi,
    traderBankAccountApi,
    traderInvoiceApi,
    traderAddressApi,
    tagApi
    } from '../../../api/goods-api.js'
  export default {
    created () {
      this.getList()
    },
    methods: {
      getList() {
        traderApi.get(this.traderId).then(res => {
          this.list = res
          this.baseList = this.list.corporation

          if(res.facadeMediaUrls){
            this.images.facadeMediaUrls = [{url:res.facadeMediaUrls}]
          }
          if(res.businessFileUrl){
            this.images.businessFileUrl = [{url:res.businessFileUrl}]
          }
          // this.images.businessFileUrl = [{url:res.businessFileUrl}]

          function buildImageUrl(uploaded) {
            // console.log(uploaded.response)
            if(uploaded.response){
              var url = Vue.options.filters.imageUrl(uploaded.response);
              return {
                mediaUrl:url,
                displayOrder:uploaded.displayOrder,
                mediaType:'STATIC_IMG'
              }
            }else{
              return {
                mediaUrl:uploaded.url,
                displayOrder:uploaded.displayOrder,
                mediaType:'STATIC_IMG'
              }
            }
              
          }

          // if(this.images.facadeMediaUrls.length>0){
          //   if(vm.images.facadeMediaUrls[0].response){
          //     vm.model.facadeMediaUrls = Vue.options.filters.imageUrl(vm.images.facadeMediaUrls[0].response)
          //   }else{
          //     vm.model.facadeMediaUrls = vm.images.facadeMediaUrls[0].url
          //   }
          // } 


          // res.productMedias.forEach(item => {
          //   this.productPic.push({url: item.media});
          // })
          // this.fromList.detailThumbs = []
          // this.coverImage.push({url:res.coverImage})
          // this.fromList.detailThumbs.push({url:res.bannerImageURL})

        })
        // corporationApi.find({traderId: this.traderId}).then(res => {
        //   // console.log(res);
        //   // console.log(this.baseList);
        //   if(res.items.length > 0) {
        //     this.baseList = res.items[0]
        //   }
        // })
        traderBankAccountApi.find({traderId: this.traderId}).then(res => {
          if(res.items.length > 0) {
            this.SettlementList = res.items[0]
          }
        })
        traderInvoiceApi.find({traderId: this.traderId}).then(res => {
          if(res.items.length > 0) {
            this.invoiceList = res.items[0]
          }
        })
        traderAddressApi.find({traderId: this.traderId}).then(res => {
          this.traderAddressList = res.items
          this.total = res.total
        })

      },
      pictureSuccessSwiper() {},
      pictureSuccessThumbnail(){},
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      getLeftEdit() {  //左侧修改模板
        traderApi.update(this.traderId, this.list).then(res => {
          this.list = res
          console.log(res);
        })
        traderApi.get(this.traderId).then(res => {
        })
      },
      getLeftDialogEdit() {  //左侧模态框模板
        traderApi.get(this.traderId).then(res => {
          this.list = res
        })
      },
      tagEdit() { //BD模态框
        this.BDVisible = true
        this.getLeftDialogEdit()
      },
      tagNameEdit() { // BD修改
        this.BDVisible = false
        this.getLeftEdit()
      },
      integraledit() { //可用积分模态框
        this.integralVisible = true
        this.getLeftDialogEdit()
      },
      pointsEdit() { // 可用积分修改
        this.integralVisible = false
        this.getLeftEdit()
      },
      classedit() { //等级模态框
        this.classVisible = true;
        this.getLeftDialogEdit()
      },
      levelNameEdit() {  //等级修改
        this.classVisible = false
        this.getLeftEdit()
      },
      growRateedit() { //成长值模态框
        this.growRateVisible = true;
        this.getLeftDialogEdit()
      },
      growRateeditEdit() {  //等成长值修改
        this.growRateVisible = false
        this.getLeftEdit()
      },
      infoDialogEdit() {  // 基本信息模态框
        this.infoVisible = true;
        this.getLeftDialogEdit()
      },
      infoEdit() {  // 基本信息修改
        this.infoVisible = false;
        this.getLeftEdit()
      },
      ICDialogEdit() {  // 工商信息模态框
        this.ICVisible = true;
      },
      ICEdit() { // 工商信息修改
        if(this.list.hasOwnProperty("corporation")){
          traderApi.get(this.traderId).then(res => {
            this.list = res
            this.baseList = this.list.corporation 
          })
        } else {
          corporationApi.create(this.baseList).then(res => {
          })
          let vm = this
          vm.getList()
          corporationApi.update(corpId, this.baseList).then(res => {
            console.log(this.list);
            console.log(this.baseList);
            this.list.corporation = this.baseList
            this.getList()
          })
        }
        this.ICVisible = false;
        
      },
      settlementDialogEdit() {  // 结算模态框
        this.settlementVisible = true;
        // traderBankAccountApi.get(this.traderId).then(res => {
        //   this.SettlementList = res
        // })
      
      },
      settlementEdit() { // 结算修改
        if(this.SettlementList.hasOwnProperty("bankAccountId")) {
          console.log(this.SettlementList);
          // traderBankAccountApi.find({traderId: this.bankAccountId}).then(res => {
          //   console.log(res);
          //   this.SettlementList = res.items[0]
          // })
          traderBankAccountApi.update(this.traderId, this.SettlementList).then(res => {
          })
        } else {
          traderBankAccountApi.create(this.SettlementList).then(res => {
            this.SettlementList = res
          })
          traderBankAccountApi.update(this.traderId, this.SettlementList).then(res => {
            console.log(res);
          })
          // traderBankAccountApi.get(this.traderId).then(res => {
          // })
        }
        this.settlementVisible = false;
       
      },
      invoiceDialogEdit() { // 发票模态框
        this.invoiceVisible = true;
        // traderInvoiceApi.get(this.traderId).then(res => {
        //   this.invoiceList = res
        // })
        // traderInvoiceApi.find({traderId: this.traderId}).then(res => {
        //   this.SettlementList = res.items[0]
        // })
      },
      invoiceEdit() { // 发票修改
        if(this.invoiceList.hasOwnProperty("invoiceId")) {
          traderInvoiceApi.update(this.traderId, this.invoiceList).then(res => {
            this.invoiceList = res
          })
        } else {
          traderInvoiceApi.create(this.invoiceList).then(res => {
          })
          traderInvoiceApi.update(this.traderId, this.invoiceList).then(res => {
            this.invoiceList = res
          })
        }
        this.invoiceVisible = false;
      },
      receiverDialogAdd() {
        this.receiverAddVisible = true
      },
      receiverAdd() {
        console.log(this.receiverList);
        let vm = this
        traderAddressApi.create(this.receiverList).then(res => {
          vm.getList()
        })
        this.receiverAddVisible = false
        this.receiverList = {}
      },
      receiverDialogEdit(addressId) { // 发货地址模态框
        this.receiverVisible = true;
        traderAddressApi.get(addressId).then(res => {
          this.receiverList = res
        })
      },
      receiverEdit(addressId) { // 发货地址修改
        traderAddressApi.update(addressId, this.receiverList).then(res => {
          this.receiverList = res
        })
        this.receiverVisible = false;
        this.getList()
      },
      receiverRemove(addressId) {
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            traderAddressApi.delete(addressId).then(res => {
              this.$message.success('已删除');
              this.getList()
            }).catch(err => {
                this.$message({ message: '删除失败', type: 'error' });
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
        traderId: this.$route.params.id,
        labelPosition: 'right',
        images: {
          cover: [],
          cerficate: [],
          identification: [],
          indoor: []
        },
        list: {
          name: '',
          tagName: '',
          traderType: {
            name: ''
          },
          enable: '',
          createTime: '',
          accountBalance: '',
          creditLine: '',
          creditBalance: '',
          pointsAvailable: '',
          levelName: '',
          growthValue: '',
          contactName: '',
          phone: '',
          provinceName: '',
          cityName: '',
          countyName: '',
          provinceName: '',
          address:'',
          corporation: {
            corpId: ''
          },
          facadeMediaUrls: []
        },
         baseList: {
          socialCreditCode:'',
          corpName:'',
          type:'',
          address:'',
          registeredCapital:'',
          dateOfEstablishment:'',
          termOfValidity:'',
          businessScope: '',
          businessFileUrl: []
        },
        receiverList: {
          countyName: '',
          address: '',
          name: '',
          phone: '',
          isDefault: 'true',
          traderId: this.$route.params.id,
        },
        tagList: {},
        form: {
          isUnique: 'true',
          isDefault: 'true',
          name: '',
          points: '',
          traderId: '',
          levelName: '',
          growRateedit: '',
          tagName: ''
        },
        ICList: {},
        SettlementList: {},
        invoiceList: {},
        picList: {},
        traderAddressList:[],
        dialogImageUrl: '',
        dialogVisible: false,
        BDVisible: false,
        integralVisible: false,
        classVisible: false,
        growRateVisible: false,
        infoVisible: false,
        ICVisible: false,
        settlementVisible: false,
        invoiceVisible: false,
        receiverVisible: false,
        receiverAddVisible: false,
        creditBalanceList: [
          {value: '个人',},
          {value: '个体户',},
          {value: '公司',},
          {value: '政府',},
          {value: '国营企业',},
          {value: '非营利企业',},
          {value: '外资企业',},
        ], 
        typeList: [
            {value: '合资'}, 
            {value: '独资'}, 
            {value: '国有'}, 
            {value: '私营'}, 
            {value: '全民所有制'},
            {value: '集体所有制'},
            {value: '股份制'},
            {value: '有限责任公司'},
        ],
        total: 0,
        current:1,
         
      }  
    }
  }
</script>