const async = require('async') ,
	nunjucks = require('nunjucks'),
	g = require('../common/global'),
	T = require('../common/tool'),
	fs = require('fs');

let obj = {
	title: '银行存管正式上线-操作流程'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/escrowAccount.njk','../www/other/escrowAccount.html');
};