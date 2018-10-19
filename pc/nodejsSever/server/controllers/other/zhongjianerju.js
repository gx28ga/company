async = require('async') ,
	nunjucks = require('nunjucks'),
	g = require('../common/global'),
	T = require('../common/tool'),
	fs = require('fs');
let obj={
	title : '多融财富-对中建二局业务进行回访及实地考察'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
	require("../common/writeHTML")(res,obj,'./other/zhongjianerju.njk','../www/other/zhongjianerju.html');
};
