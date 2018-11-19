/**
 *  author : bo.peng
 *  createTime 2018-11-15 14:28
 *  description : 代码规范  所有的页面都在该文件夹下开发
 */
import React from 'react';
import {ExPage} from "./common/index";
import Home from "./home/index";
export default ( props )=> {
	return (
		<ExPage edit='项目说明'>
			<Home/>
		</ExPage>
	)
};