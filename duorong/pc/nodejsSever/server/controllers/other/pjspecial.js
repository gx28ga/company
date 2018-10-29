const async = require('async') ,
	nunjucks = require('nunjucks'),
	g = require('../common/global'),
	T = require('../common/tool'),
	fs = require('fs');

let obj = {
    title : '专业票据资产_多融财富票据理财项目_互联网理财-多融财富',
	keywords : '专业票据资产,多融财富票据理财,多融财富理财项目,互联网理财',
	description : '多融财富的商票系列，均以融资企业持有的商业承兑汇票作为质押，保证其借款到期归还本息，并由承兑机构出具保函对融资企业在多融财富平台发布的融资项目本息进行担保。多融财富票据理财项目主要以互联网为主，质押担保资产可靠，能有效减少投资者的风险。'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/pjspecial.njk','../www/other/pjspecial.html');
};