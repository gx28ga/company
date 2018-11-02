/**
 *  author : bo.peng
 *  createTime 2018-10-31 20:38
 *  description :
 */
import React from "react";
import {Layout,Dropdown,Menu, Icon} from "antd";
import {connect} from "react-redux";
import {action_currentUser} from "../../redux/actions";
import action_global from "../../redux/actions/global";
const { Header } = Layout;
class HeaderTop extends React.Component{
	constructor(props){
		super(props);
		this.exit= this.exit.bind(this);
	}
	componentDidMount(){
		this.props.dispatch(action_global.permission.menu.request("menu"));
	}
	update(){

	}
	exit(){
		this.props.dispatch(action_currentUser.exit.request(this.props.currentUser));
	};
	showChildren(item){
		this.props.dispatch(action_global.permission.menuChidren(item));
	}
	render(){
		return (
			<Header className="header">
				<div className="logo">SUDAO-OMS</div>
				<Dropdown overlay={
					<Menu>
						<Menu.Item onClick={this.update}>修改密码</Menu.Item>
						<Menu.Item onClick={this.exit}>退出</Menu.Item>
					</Menu>
				}
				          className="top-silder">
			<span className="ant-dropdown-link">
				{this.props.currentUser.data.userName} <Icon type="down" />
			</span>
				</Dropdown>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{lineHeight: '64px'}}
				>
					{
						this.props.menu.data && this.props.menu.data.menus.map((item,i)=>
							<Menu.Item onClick={this.showChildren.bind(this,item)} key={i}>{item.name}</Menu.Item>
						)
					}
				</Menu>
			</Header>
		);
	}
}
export default connect(state=>state.global.permission)(HeaderTop);