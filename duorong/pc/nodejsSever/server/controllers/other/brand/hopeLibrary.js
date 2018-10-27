const async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../../common/global'),
    T = require('../../common/tool'),
    fs = require('fs');

let obj = {
    title : '希望工程图书室--多融财富'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../../common/writeHTML")(res,obj,'./other/brand/hopeLibrary.njk','../www/other/brand/hopeLibrary.html');
};