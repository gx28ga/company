const async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');

let obj = {
    title : '银联开通,绑定-多融财富',
    keywords : '银联开通,银联绑定',
    description : '当投资者进行投资时，需要往投资平台转入一部分资金，这就要使用到银联卡，很多平台在注册账号时都会要求投资者绑定银联卡，目的就是便于转账，那么如何开通银联呢？如果投资者不知道如何操作，可以在银联开通页面查看相关教程，只要跟着教程操作即可。',
};
Object.assign(obj,global.static);

module.exports = function( req, res , env){
    Object.assign(obj,{ });

    res.render('./help/YLKT',obj);
    let minify = require('html-minifier').minify ,
        content = minify(
            nunjucks.render('./help/YLKT.njk',obj),
            {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS:true,
                minifyCSS:true
            }
        );
    fs.writeFileSync('../www/help/YLKT.html', content);
};

