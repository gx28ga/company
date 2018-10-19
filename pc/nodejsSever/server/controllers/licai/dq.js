const async = require('async');

let obj = {
	title : '定期理财_多融线上理财,金融理财投资产品_如何投资理财_p2p融资平台-多融财富',
	keywords : "定期理财,多融理财,线上理财,金融理财投资,如何投资理财,融资平台,投资理财产品",
	description : "如何投资理财？多融理财为了满足广大新用户的投资需求，推出了多种金融理财投资产品，不仅有新手专享，还有商票、保理专享，用户可根据实际情况，选择适合自己的理财产品。多融理财产品收益高、风险低，能满足不同的投资者需求。",

};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
	const requst = require('../common/request');
	async.parallel([
			function(callback){
				requst({
					data : {
						"order":0,//0=默认，1=利率降序，2=利率升序，3=期限降序，4=期限升序
						"pageOn":1,
						"pageSize":100,
						"paramType":6,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//2=利率降序
					data : {
						"order":1,
						"pageOn":1,
						"pageSize":100,
						"paramType":6,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//2=利率升序
					data : {
						"order":2,
						"pageOn":1,
						"pageSize":100,
						"paramType":6,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//4=期限降序
					data : {
						"order":3,
						"pageOn":1,
						"pageSize":100,
						"paramType":6,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//4=期限升序
					data : {
						"order":4,
						"pageOn":1,
						"pageSize":100,
						"paramType":6,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			}
		],
		function(err, results) {
			//0=默认，1=利率降序，2=利率升序，3=期限降序，4=期限升序
			["listDatas","rateDown","rateUp","termDown","termUp"].map((name,i)=>{
				obj[name] = results[i].map.page.rows;
				obj[name].total = results[i].map.page.total;

			});
			require("../common/writeHTML")(res,obj,'licai/dq.njk','../www/dq/index.html');
		}
	);
};

