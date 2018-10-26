/**
 *  author : bo.peng
 *  createTime 2018-10-19 15:30
 *  description :
 */
let config = require("./config");
module.exports = {
	devServer: {
		proxy:config.dev.proxyTable
	}
};