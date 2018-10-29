async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');

let obj = {
    title : '免责声明_法律声明-多融财富',
    keywords : '免责声明,法律声明',
    description : '本网站可能含有第三方内容或与第三方网站的链接。这些内容与链接仅为您提供方便，并供您参考。凡通过多融财富在上海银砖金融信息服务平台选择交易的均禁止委托多融财富代收现金，凡因代收现金所造成的一切损失由该用户自行承担，上海银砖金融信息服务有限公司不承担任何责任。',
};
Object.assign(obj,global.static);

module.exports = function( req, res , env){
    Object.assign(obj,{ });

    res.render('./help/MZSM',obj);
    let minify = require('html-minifier').minify ,
        content = minify(
            nunjucks.render('./help/MZSM.njk',obj),
            {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS:true,
                minifyCSS:true
            }
        );
    fs.writeFileSync('../www/help/MZSM.html', content);
};

