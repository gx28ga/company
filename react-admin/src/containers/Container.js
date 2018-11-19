/**
 *  author : bo.peng
 *  createTime 2018-10-26 14:58
 *  description :
 */
import React from "react";
import {Layout,} from 'antd';
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
				<Layout>
					<Content style={{padding: 0, margin:0}}>
						<RouteChildren {...props}/>
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