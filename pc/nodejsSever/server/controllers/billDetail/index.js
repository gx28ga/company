const async = require('async');
let obj = {};
Object.assign(obj,global.static);
module.exports = function( req, res){
    const requst = require('../common/request');
	async.parallel([
			function(callback){
				requst({
					data : {
						"order":0,//0=默认，1=利率降序，2=利率升序，3=期限降序，4=期限升序
						"pageOn":1,
						"pageSize":99,
						"paramType":6,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({//2=利率降序
					data : {//2=利率降序
						"order":0,
						"pageOn":1,
						"pageSize":19,
						"paramType":6,
						"statuses":[6,8,9]
					},
					url:'/productList'
				},callback)
			},
			function(callback){//票据
				requst({
					data : {
						"order":0,//0=默认，1=利率降序，2=利率升序，3=期限降序，4=期限升序
						"pageOn":1,
						"pageSize":9,
						"paramType":0,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){//票据历史
				requst({//2=利率降序
					data : {//2=利率降序
						"order":0,
						"pageOn":1,
						"pageSize":9,
						"paramType":0,
						"statuses":[6,8,9]
					},
					url:'/productList'
				},callback)
			},
			function(callback){//保理
				requst({
					data : {
						"order":0,//0=默认，1=利率降序，2=利率升序，3=期限降序，4=期限升序
						"pageOn":1,
						"pageSize":9,
						"paramType":5,
						"statuses":[5]
					},
					url:'/productList'
				},callback)
			},
			function(callback){//保理历史
				requst({
					data : {
						"order":0,//0=默认，1=利率降序，2=利率升序，3=期限降序，4=期限升序
						"pageOn":1,
						"pageSize":9,
						"paramType":5,
						"statuses":[6,8,9]
					},
					url:'/productList'
				},callback)
			},
			function(callback){
				requst({
					data:{},
					url:"/v1/current/product/info.do"
				},callback)
			}
		],
		function(err, results) {
			results.map((data,i)=>{
				if(i==6){
				//新手宝start
				let map=data.map;
				obj.map=map;
				Object.assign(obj,{
					type : 2,//新手宝
					title : '定期理财_多融线上理财,金融理财投资产品_如何投资理财_p2p融资平台-多融财富-',
					keywords : "定期理财,多融理财,线上理财,金融理财投资,如何投资理财,p2p融资平台,投资理财产品",
					description : "如何投资理财？多融理财为了满足广大新用户的投资需求，推出了多种金融理财投资产品，不仅有新手专享，还有商票、保理专享，用户可根据实际情况，选择适合自己的理财产品。多融理财产品收益高、风险低，能满足不同的投资者需求。"
				});
				require("../common/writeHTML")(
					false,
					obj,
					'./billDetail/index.njk',
					'../www/billDetail/newhand.html'
				);
				//新手宝end
				}else{
						data.map.page.rows.map(_obj=>{
							requst({
								url : "/detail",
								data : {
									id : _obj.id
                                }
					},function(  n , _data ){
							let map = _data.map;
							obj.map = map;

							obj.product = map.info;
							Object.assign(obj,{
								projectListData : false,//审核
								newHands : map.newHands,//wqq-接口新增字段--是否新手
								pics : map.picList,//图片
								file : map.textList,//文件
								table : map.extendTableList,//表格
								doc : map.extendTextList,//文档
							});

							if (map.projectList != undefined && map.projectList.length ) {
								obj.projectList = map.projectList; //审核
								obj.projectListData = true;
							} else {
								obj.projectListData = false;
							}

							if(obj.product.borrower){
								obj.product.borrower = obj.product.borrower.replace(/\^/g,"<br>");
							}
							if(obj.product.introduce){
								obj.product.introduce = obj.product.introduce.replace(/\^/g,"<br>");
							}
							if(obj.product.repaySource){
								obj.product.repaySource = obj.product.repaySource.replace(/\^/g,"<br>");
							}
							if(obj.product.windMeasure){
								obj.product.windMeasure = obj.product.windMeasure.replace(/\^/g,"<br>");
							}

							if(i==0 || i==1){
								//计息流程
								obj.map.info.expireDate = new Date(obj.map.info.expireDate-86400000).Format('yyyy年MM月dd日');
								Object.assign(obj,{
									type : 0,//定期
									title : '定期理财_多融线上理财,金融理财投资产品_如何投资理财_p2p融资平台-多融财富-'+map.info.fullName,
									keywords : "定期理财,多融理财,线上理财,金融理财投资,如何投资理财,p2p融资平台,投资理财产品",
									description : "如何投资理财？多融理财为了满足广大新用户的投资需求，推出了多种金融理财投资产品，不仅有新手专享，还有商票、保理专享，用户可根据实际情况，选择适合自己的理财产品。多融理财产品收益高、风险低，能满足不同的投资者需求。"
								});
								require("../common/writeHTML")(
									false,
									obj,
									'./billDetail/index.njk',
									'../www/billDetail/billDetal_html_'+_obj.id+'.html'
								);
							}
							if(i==2 || i==3 || i==4 || i==5){ //票据
								//计息流程
								let nowTimer = "";
								if(map.info.establish != undefined){
									let date3 = map.info.establish - Date.parse(new Date());
									let day = Math.floor(date3/(24*3600*1000));
									let hh= Math.floor(date3/(3600*1000));
									if(day > 0){
										nowTimer = day+'天';
									}else if(day == 0&& hh > 1){
										nowTimer = hh+'小时';
									}else if(day == 0&& hh < 1){
										nowTimer = '1小时内'
									}else if(hh < 0){
										nowTimer ='已结束';
									}
								}else{
									nowTimer ='已结束';
								};
								obj.map.info.nowTimer = nowTimer;
								obj.map.info.establish = new Date(obj.map.info.establish).Format('yyyy年MM月dd日');
								obj.map.info.expireDate = new Date(obj.map.info.expireDate).Format('yyyy年MM月dd日');
								Object.assign(obj,{
									type : 1,//票据
									title : '票据理财_多融财富理财产品怎么样,收益如何,好不好,商票安选_银砖金融好吗-多融财富-'+map.info.fullName,
									keywords : "票据理财,多融财富理财产品怎么样,银砖金融理财产品好吗,多融财富理财收益如何,多融财富理财好不好,多融财富商票安选",
									description : "多融财富理财产品怎么样？银砖金融理财产品好吗？多融财富理财收益如何？这些都是投资者比较关注的话题，那么多融财富理财好不好？多融财富主要为投资者提供多种投资产品，主要以商票安选的形式来投资，投资者可根据自己中意的商票安选期进行选择。"
								});
								require("../common/writeHTML")(
									false,
									obj,
									'./billDetail/index.njk',
									'../www/billDetail/pjDetal_html_'+_obj.id+'.html'
								);
							}
						});

					});
				}

			});
		}
	);

};
