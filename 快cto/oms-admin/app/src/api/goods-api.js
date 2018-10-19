
import * as restapi from "./restapi.js";

//商品
export let productApi = restapi.create('/product'); // 商品管理
export let attrTemplateApi = restapi.create('/attrTemplate'); // 商品类型
export let brandApi = restapi.create('/brand'); // 品牌管理
export let categoryApi = restapi.create('/category'); // 分类管理

// 组织
export let departmentApi = restapi.create('/department');  //部门管理
export let employeeApi = restapi.create('/employee');  //成员管理

// 商家
  // 添加商家
export let traderTypeApi = restapi.create('/traderType');  //商家
  
  // 资料
export let traderApi = restapi.create('/trader');  //商家
export let corporationApi = restapi.create('/corporation');  //工商信息
export let traderBankAccountApi = restapi.create('/traderBankAccount');  //结算
export let traderInvoiceApi = restapi.create('/traderInvoice');  //发票
export let traderAddressApi = restapi.create('/traderAddress');  //收货地址
export let tagApi = restapi.create('/tag');  //BD

  //成员
export let traderUserApi = restapi.create('/traderUser');  //成员


//订单
export let orderApi = restapi.create('/order');
