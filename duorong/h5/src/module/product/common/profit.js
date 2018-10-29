/**
 * 收益计算
 * created by bo.peng 2018/5/16
 * email:spion@qq.com
 */
import filter from "../../../mixin/filters";
export default{
    getProfit(self,obj){
        let data = self.cath,
            detail = data.productData,
            acount = data.productNum ,//投资金额
            rate = detail.rate, //利率
            deadline = detail.deadline , //天数
            activityRate = detail.activityRate;//活动利率
        if(obj){
            if(obj.raisedRates){
                rate = parseFloat(rate)+parseFloat(obj.raisedRates);
            }
            if(obj.acount){
                acount = obj.acount;
            }
        }
        return filter.methods._toFixed(acount * (rate/100 + activityRate/100 )/365 * deadline);
    }
}
