/**
 * 产品相关
 * created by bo.peng 2018/5/9
 * email:spion@qq.com
 */
import jump from "./index";
let obj = jump.fn([
    "home", //首页
    "detail",//产品信息
],"/list");
[
    "detailInfo",//产品信息详情
    "investList",//投资记录
    "pay",//购买流程
    "coupon",//购买流程选择优惠券
    "payDone",//购买完成
].forEach(name=>{
    obj[name] = function(obj){
        if(!jump.catch.productData){
            return jump.self.go().product.home();
        };
        jump.go("/list/"+name,obj);
    }
});
export default obj;
