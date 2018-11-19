/**
 *  author : bo.peng
 *  createTime 2018-11-19 19:00
 *  description :
 */
import React from "react";
import ExPage from "../common/exPage";
export default ( props )=> {
	const Title = ()=> <div>命名规范</div>;
	return (
		<ExPage edit={<Title/>}>
			我是命名规范
		</ExPage>
	)
};