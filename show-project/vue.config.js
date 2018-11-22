/**
 *  author : bo.peng
 *  createTime 2018-11-22 19:30
 *  description :
 */
let config = require("./config");
module.exports = {
	devServer: {
		proxy: config.dev.proxyTable
	},
	/*configureWebpack: {
		module: {
			rules: [{
				test: /\.less$/,
				use: [
					{
					loader: 'less-loader',
					options: {
						modifyVars: {
							'primary-color': '#1DA57A',
							'link-color': '#1DA57A',
							'border-radius-base': '2px',
						},
						javascriptEnabled: true,
					},
				}],
			}],
		},
	}*/
};