/**
 *  author : bo.peng
 *  createTime 2018-11-16 17:50
 *  description :
 */
import ComBreadcrumb from "./Breadcrumb";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";

function Page(props){
	return (<>
		<ComBreadcrumb {...props.location} left={props.edit}/>
		<article className='article-content'>
			{props.children}
		</article>
	</>);
}
export default connect(
	state=>{
		return {currentUser:state.currentUser}
	},
)(withRouter(Page));