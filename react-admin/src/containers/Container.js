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
const { Content, Sider} = Layout;

function Container(user){
	return (
		<Layout>
			<Header {...user}/>
			<Layout>
				<Sider width={200} style={{background: '#fff'}}>
					<SiderMenu/>
				</Sider>
				<Layout style={{padding: '0 24px 24px'}}>
					<Breadcrumb style={{margin: '16px 0'}}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
						Content
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}
export default connect(
	state=>{
		return {user:state.user}
	},
)(Container);