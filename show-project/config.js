/**
 *  author : bo.peng
 *  createTime 2018-11-22 19:31
 *  description :
 */
var env = process.env.NODE_ENV;
module.exports = {
	name: 'sudao-oms',
	env: env,
	dev: {
		proxyTable:{
			'/api': {
				target: 'http://oms.dev.sudaotech.com/api/admin',
				// target: '/api/admin',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				},
				cookieDomainRewrite: {
					'*': 'localhost'
				}
			},
			'/imgApi': { // 图片上传
				target: 'http://admin.oms.dev.sudaotech.com/api/image/single',
				changeOrigin: true,
				pathRewrite: {
					'^/imgApi': ''
				},
				cookieDomainRewrite: {
					'*': 'localhost'
				}
			}
		}

	},
	modulePrefix: {
		development: '/api',
		testing: '/api',
		production: '/api/admin',
		static: '/api/admin'
	},

	imageUploadUrl: {
		development: '/imgApi',
		testing: "/imgApi",
		production: "/api/image/single",
	},

	imageUrl: {
		development: 'http://admin.oms.dev.sudaotech.com/api/image/download',
		testing: "http://admin.oms.dev.sudaotech.com/api/image/download",
		production: "http://admin.oms.dev.sudaotech.com/api/image/download",
	}
};