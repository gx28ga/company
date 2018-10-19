module.exports = { //用户相关信息
    state: {
        id : 0 , 
        amount : 0 , //融资金额
        minAmount : 0 , //起投金额
        maxAmount : 0 , //最大投资金额
        surplus : 0 //剩余金额
    },
    mutations : {
        setProductData(state , obj ){
            $.extend(state,obj);
        }
    },
    actions : {},
    getters : {}
}