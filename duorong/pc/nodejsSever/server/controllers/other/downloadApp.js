const async = require('async') ,
	nunjucks = require('nunjucks'),
	g = require('../common/global'),
	T = require('../common/tool'),
	fs = require('fs');

let obj = {
	title : '多融财富-app下载'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/downloadApp.njk','../www/other/downloadApp.html');
};