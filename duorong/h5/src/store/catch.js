module.exports = {
    state : {
        data : {
            changeTradType : { //交易对账
                type : 0,
            },
        }
    },
    mutations:{
	    setCatch(state , obj){
	        $.extend(state.data , obj);
        }
    },
    actions:{} ,
    getters:{
	    getCatch: state=>{
	        return state.data;
        }
    }
};
