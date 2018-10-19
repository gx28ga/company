const async = require('async');

let obj = {
	title : '票据理财_多融财富理财产品怎么样,收益如何,好不好,商票安选_银砖金融好吗-多融财富',
	keywords : "票据理财,多融财富理财产品怎么样,银砖金融理财产品好吗,多融财富理财收益如何,多融财富理财好不好,多融财富商票安选",
	description : "多融财富理财产品怎么样？银砖金融理财产品好吗？多融财富理财收益如何？这些都是投资者比较关注的话题，那么多融财富理财好不好？多融财富主要为投资者提供多种投资产品，主要以商票安选的形式来投资，投资者可根据自己中意的商票安选期进行选择。",

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
						"paramType":0,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//2=利率降序
					data : {
						"order":2,
						"pageOn":1,
						"pageSize":100,
						"paramType":0,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//2=利率升序
					data : {
						"order":1,
						"pageOn":1,
						"pageSize":100,
						"paramType":0,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//4=期限降序
					data : {
						"order":4,
						"pageOn":1,
						"pageSize":100,
						"paramType":0,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//4=期限升序
					data : {
						"order":3,
						"pageOn":1,
						"pageSize":100,
						"paramType":0,
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
			require("../common/writeHTML")(res,obj,'licai/pj.njk','../www/pj/index.html');
		}
	);
};

