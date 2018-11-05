/**
 *  author : bo.peng
 *  createTime 2018-10-26 14:58
 *  description :
 */
import React from "react";
import {Layout, Breadcrumb,} from 'antd';
import Header from "./global/Header";
import SiderMenu from "./global/SiderMenu.js";
import connect from "react-redux/es/connect/connect";
import {RouteChildren} from "../router";
const { Content, Sider} = Layout;
function Container(props){
	return (
		<Layout>
			<Header {...props}/>
			<Layout>
				<Sider width={200}>
					<SiderMenu/>
				</Sider>
				<Layout style={{padding: '0 15px 15px'}}>
					<Breadcrumb style={{margin: '16px 0'}}>
						<Breadcrumb.Item>首页</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
						<RouteChildren routes={props.routes}/>
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
)(Container);