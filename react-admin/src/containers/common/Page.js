/**
 *  author : bo.peng
 *  createTime 2018-11-16 17:50
 *  description :
 */
import ComBreadcrumb from "./Breadcrumb";
import React from "react";
export default ({location, children})=> {
	return (<>
		<ComBreadcrumb {...location}/>
		{children}
	</>);
}