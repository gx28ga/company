async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
const imghttp = 'https://www.duorongcf.com/images/home-partners';
const imgsrc='https://www.duorongcf.com/main/activity/web/insurance/images';
let obj={
    title:"公司简介_介绍,历程,文化-多融财富",
    keywords:"公司简介,公司介绍,公司历程,公司文化",
    description:"多融财富是上海银砖金融信息服务有限公司旗下互联网一个金融理财平台，多融财富风控团队由国内互联网金融企业创始人以及专业的金融服务机构管理层组成，具有丰富的金融产品研发与运营经验。多融财富一直专注“互联网+资产管理”的模式，解决银行、国企、上市公司等企业机构的资产管理问题。",
    staffImg:[//员工风采
        {linkPath: '../images/about/gsjj/staff-1.png'},
        {linkPath: '../images/about/gsjj/staff-2.png'},
        {linkPath: '../images/about/gsjj/staff-3.png'},
        {linkPath: '../images/about/gsjj/staff-4.png'},
        {linkPath: '../images/about/gsjj/staff-5.png'},
        {linkPath: '../images/about/gsjj/staff-6.png'}
    ],
    honorImg:[//公司荣誉
        {linkPath: imgsrc+'/zu1.png'},
        {linkPath: imgsrc+'/zu2.png'},
        {linkPath: imgsrc+'/zu3.png'},
        {linkPath: imgsrc+'/zu4.png'},
        {linkPath: imgsrc+'/zu5.png'},
        {linkPath: imgsrc+'/zu6.png'},
        {linkPath: imgsrc+'/zu7.png'},
        {linkPath: imgsrc+'/zu8.png'}
    ],
    partnerImg:[//合作单位
      {linkPath: imghttp+'/a.png'},
        {linkPath: imghttp+'/b.png'},
        {linkPath: imghttp+'/c.png'},
        {linkPath: imghttp+'/d.png'},
        {linkPath: imghttp+'/e.png'},
        {linkPath: imghttp+'/f.png'},
        {linkPath: imghttp+'/g.png'},
        {linkPath: imghttp+'/h.png'},
        {linkPath: imghttp+'/i.png'},
        {linkPath: imghttp+'/j.png'},
        {linkPath: imghttp+'/l.png'},
        {linkPath: imghttp+'/m.png'},
        {linkPath: imghttp+'/n.png'}
    ]
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
     require("../common/writeHTML")(res,obj,'./about/drgk.njk','../www/about/DRGK.html');
};
