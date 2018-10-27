const nunjucks = require('nunjucks'),
    fs = require('fs');
module.exports = function( req, res){
    res && res.render('browser/index',{});
    let minify = require('html-minifier').minify ,
        content = minify(nunjucks.render('browser/index.njk',{}),{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true});
    fs.writeFileSync('../www/browser.html', content);
};
