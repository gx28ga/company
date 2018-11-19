/**
 *  author : bo.peng
 *  createTime 2018-11-19 15:06
 *  description :
 */
import React from "react";
import { Layout, Menu, Icon } from 'antd';
import config from '../../../router/example/index';

const { Sider } = Layout;
const {SubMenu} = Menu;

const Child= (props, item, i)=> {
	let dom;
	if(item.children && item.children.length){ // 父类
		dom = (
			<SubMenu key={i} title={
				<span>
					<Icon type={item.icon||"caret-right"} theme="outlined" />
					{item.name}
				</span>}>
				{
					item.children.map((subItem,j)=>{return Child(props,subItem,i+'-'+j)})
				}
			</SubMenu>
		)
	}else{// 子类
		dom = (<Menu.Item key={i} onClick={(e) => props.history.replace(item.path)}>
			<Icon type="caret-right" theme="outlined" />
			{item.name}
		</Menu.Item>);
	}
	return dom;
};
export default (props) => {
	const logo = {
		height: '32px',
		lineHeight: '32px',
		textAlign: 'center',
		background: 'rgba(255,255,255,.2)',
		margin: '16px',
		color: '#fff',
	};
	const {collapsed} = props;
	return <Sider
		trigger={null}
		collapsible
		collapsed={collapsed}
	>
		<div style={logo}>项目文档规范</div>
		<Menu
			theme="dark"
			mode="inline"
			defaultSelectedKeys={['1']}
		>
			{config.children.map((item, i)=>{return Child(props,item,i)})}
		</Menu>
	</Sider>
}