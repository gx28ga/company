async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
let obj={
    title : '多融财富-强大股东背景，国资+上市'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/powerfulShareholders.njk','../www/other/powerfulShareholders.html');
};
