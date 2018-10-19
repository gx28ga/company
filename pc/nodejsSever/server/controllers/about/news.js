const async = require('async') ,
	global = require('../common/global');
let obj = {
    title:'公司新闻,资讯_行业新闻-多融财富',
	keywords : "公司新闻,公司资讯,行业新闻,最新资讯",
	description : "你想了解多融财富的理财产品吗？你想知道多融财富公司资讯吗？投资者可以通过多融财富的公司新闻栏目来了解本公司的产品以及理财知识。在这里，投资者可以快速了解到产品的最新信息以及投资市场的行情。"
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
	const requst = require('../common/request');
	require("../common/writeHTML")(res,obj,'./about/NEWS.njk','../www/about/NEWS.html');	
};
