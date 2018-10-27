module.exports = {
    state : {
        //城市
        citys : null,
        //银行
        banks : null,
    },
    mutations:{
        setCitys( state ){
            if(!state.citys || !state.banks){
                const URL = require("../../contant/urls/OPENACCOUNT");
                VueParent.ajax({
                    type : "get",
	                dataType : "jsonp",
                    url : URL.PERSONAL_INDEX,
                }).then(data=>{
                	let map = data.map.cityAndBankVo;
                    state.citys = map.cityDtoList;
                    state.banks = map.bankInformationList;
                })
            }
        }
    },
    getters : {
        getCitys : state=>{
            return state.citys;
        },
        getBanks : state=>{
            return state.banks;
        }
    }
}
