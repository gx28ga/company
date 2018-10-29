const async = require('async') ,
    global = require('../common/global');
const title = '公司动态,活动-多融财富';
let obj = {
    keywords : "公司动态,公司活动",
    description : "你了解多融财富吗？你知道多融财富是干什么的吗？如果投资者想了解多融财富的活动，可以在公司动态栏目了解到公司参与的活动，还会有一些平台维护的通知。"
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    const requst = require('../common/request');
    require("../common/writeHTML")(res,obj,'./about/GSDT.njk','../www/about/GSDT.html');    
};
