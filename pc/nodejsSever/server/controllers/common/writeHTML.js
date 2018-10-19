let nunjucks = require('nunjucks') ,
	minify = require('html-minifier').minify,
	fs = require('fs');
module.exports = function( res , obj , src , output ){
	res && res.render(src,obj);
	try{
		let content = minify(
			nunjucks.render(src,obj),
			{
				removeComments: true,
				collapseWhitespace: true,
				minifyJS:true,
				minifyCSS:true
			}
		);
		fs.writeFileSync(output, content);
	}catch (e){
		console.log("代码异常：代码中含有未按完整格示编写的代码,来源："+output)
	}

	/*
	   removeComments 默认值false；是否去掉注释
collapseWhitespace 默认值false；是否去掉空格
minifyJS 默认值false；是否压缩html里的js（使用uglify-js进行的压缩）
minifyCSS 默认值false；是否压缩html里的css（使用clean-css进行的压缩）
		*/
};
