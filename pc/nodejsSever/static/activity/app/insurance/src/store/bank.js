module.exports = {
	state: {
		bankcardNo:"",
		name:"",
		identityNumber:"",
		bankName:"",
		openBankCity:"",
		singleLimit:0,
		dayLimit:0,
		monthLimit:null,
		limitInfo:"",
		logoUrl:"",
		mobile:"",
		accountAmount:""
	},
	mutations : {
		getBankInfo(state , callback){
			T.ajax({},"M005").then(data=>{
				$.extend(state,data.data);
			});
		}
	}
}