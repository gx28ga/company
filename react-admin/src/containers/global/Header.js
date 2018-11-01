/**
 *  author : bo.peng
 *  createTime 2018-10-31 20:38
 *  description :
 */
import React from "react";
import {Layout,Dropdown,Menu, Icon} from "antd";
const { Header } = Layout;
function update(e){

}
function exit(e){

}
const HeaderTop = (props)=>(
	<Header className="header">
		<div className="logo"/>
		<Dropdown overlay={
				<Menu>
					<Menu.Item onClick={update}>修改密码</Menu.Item>
					<Menu.Item onClick={exit}>退出</Menu.Item>
				</Menu>
			}
            className="top-silder">
				<span className="ant-dropdown-link">
					{props.user.data.userName} <Icon type="down" />
				</span>
		</Dropdown>
		<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={['2']}
			style={{lineHeight: '64px'}}
		>
			<Menu.Item key="1">nav 1</Menu.Item>
			<Menu.Item key="2">nav 2</Menu.Item>
			<Menu.Item key="3">nav 3</Menu.Item>
		</Menu>
	</Header>
);
export default HeaderTop;