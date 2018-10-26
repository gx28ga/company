/**
 *  author : bo.peng
 *  createTime 2018-10-26 11:33
 *  description :
 */
var env = process.env.NODE_ENV;
module.exports = {
  name: 'sudao-oms',
  assetsPublicPath : "/",
  env: env,
  dev: {
	proxy:{
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
		target: 'http://test.zhongsai.sudaotech.com/api/oss/qiniu/upload',
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
	production: "/imgApi",
  },

  imageUrl: {
	development: 'http://pb9tpwgos.bkt.clouddn.com',
	testing: "http://pb9tpwgos.bkt.clouddn.com",
	production: "http://pb9tpwgos.bkt.clouddn.com",
  }
};