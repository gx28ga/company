/**
 * desc:
 * created by bo.peng 2018/11/21.
 * email:spion@qq.com
 */
import React from 'react';
import {RouteChildren} from "../router";
import Header from "./global/Header";
import {Layout} from "antd";
import SiderMenu from "./global/SiderMenu";
import {Link, withRouter} from "react-router-dom";
import {routeLink} from "../router/router";
import connect from "react-redux/es/connect/connect";
const { Content, Sider, Footer} = Layout;

const ContainerPage = (props) => {
	return <Layout>
		<Header {...props}/>
		<Layout>
			<Sider width={200}>
				<SiderMenu/>
			</Sider>
			<Layout>
				<Content style={{padding: '0 20px', margin:0}}>
					<RouteChildren {...props}/>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					@2018 by bo.peng <Link to={routeLink.example.path}>演示</Link>
				</Footer>
			</Layout>
		</Layout>
	</Layout>
};
const Container = connect(
	state=>{
		return {currentUser:state.currentUser}
	},
)(withRouter(ContainerPage));
export default (props) => {
	if(!props.location.pathname.includes('example')){
		return <Container {...props}/>;
	}
	return <RouteChildren {...props}/>
};