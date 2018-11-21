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
import { Link } from 'react-router-dom';
import {routeLink} from "../../router/router";
const { Content, Sider, Footer} = Layout;

function Page(props){
	return (
		<Layout>
			<Header {...props}/>
			<Layout>
				<Sider width={200}>
					<SiderMenu/>
				</Sider>
				<Layout>
					<Content style={{padding: '0 20px', margin:0}}>
						<ComBreadcrumb {...props.location} left={props.edit}/>
						<article className='article-content'>
							{props.children}
						</article>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						@2018 by bo.peng <Link to={routeLink.example.path}>演式</Link>
					</Footer>
				</Layout>
			</Layout>
		</Layout>
	);
}
export default connect(
	state=>{
		return {currentUser:state.currentUser}
	},
)(withRouter(Page));