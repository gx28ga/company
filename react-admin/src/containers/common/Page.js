/**
 *  author : bo.peng
 *  createTime 2018-11-16 17:50
 *  description :
 */
import ComBreadcrumb from "./Breadcrumb";
import React from "react";
import {Layout} from "antd";
import Header from "../global/Header";
import SiderMenu from "../global/SiderMenu";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
const { Content, Sider} = Layout;

function Page(props){
	return (
		<Layout>
			<Header {...props}/>
			<Layout>
				<Sider width={200}>
					<SiderMenu/>
				</Sider>
				<Layout>
					<Content style={{padding: 0, margin:0}}>
						<ComBreadcrumb {...props.location} left={props.edit}/>
						{props.children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}
export default connect(
	state=>{
		return {currentUser:state.currentUser}
	},
)(withRouter(Page));