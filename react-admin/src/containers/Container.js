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
import {Link } from "react-router-dom";
import {routes} from "../router/router";

const { Content, Sider} = Layout;
const getName= (path)=>{
	let arr =[] ,
		paths= path.split('/');
	function getPath(router){
		router.forEach((route,i)=> {
			if(new RegExp(paths[0]+'$').test(route.path.replace(/\/:\w+$/,''))){
				paths.shift();
				arr.push(route);
				if(route.children){
					getPath(route.children);
				}
			}
		})
	}
	getPath(routes);
	return arr;
};
function Container(props){
	const names = getName(props.location.pathname);
	const length= names.length-1;
	return (
		<Layout>
			<Header {...props}/>
			<Layout>
				<Sider width={200}>
					<SiderMenu/>
				</Sider>
				<Layout>
					<Breadcrumb style={{height:45,lineHeight:'45px',padding:'0 15px',background:'#d6efff'}} separator=">">
						{
							names.map((item,i)=>
								<Breadcrumb.Item key={i}>
									{
										i!==length ?
											<Link to={item.path}>
												{item.name}
											</Link> :
											<span>{item.name}</span>
									}

								</Breadcrumb.Item>)
						}
					</Breadcrumb>
					<Content style={{padding: 0, margin:20}}>
						<RouteChildren parent={props.parent} children={props.children}/>
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