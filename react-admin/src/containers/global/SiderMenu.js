/**
 *  author : bo.peng
 *  createTime 2018-10-31 20:34
 *  description :
 */
import {Icon, Menu} from "antd";
import React from "react";
import {connect} from "react-redux";
const {SubMenu} = Menu;
class SlideMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			theme : "dark",
		}
	}
	state = {
		theme: 'dark'
	};
	render() {
		return (
			<>
				<div style={{
					height:"45px",
					lineHeight:"45px",
					color:"#fff",
					paddingLeft:"25px",
					fontSize:"16px",
					backgroundColor:"#d20000",
				}}>
					<div style={{
						float:"right",
						width: "0px",
						height: "0px",
						marginTop:"9px",
						borderTop:"12px solid transparent",
						borderBottom:"12px solid transparent",
						borderRight:"20px solid #f0f2f5"
					}}>&nbsp;</div>
					<Icon type="user"/>
					<span style={{paddingLeft:"5px"}}>首页</span>
				</div>
				<Menu
					theme={this.state.theme}
					mode="inline"
					style={{height: '100%', borderRight: 0}}
				>

					<SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
						<Menu.Item key="1">option1</Menu.Item>
						<Menu.Item key="2">option2</Menu.Item>
						<Menu.Item key="3">option3</Menu.Item>
						<Menu.Item key="4">option4</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
						<Menu.Item key="5">option5</Menu.Item>
						<Menu.Item key="6">option6</Menu.Item>
						<Menu.Item key="7">option7</Menu.Item>
						<Menu.Item key="8">option8</Menu.Item>
					</SubMenu>
					<SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
						<Menu.Item key="9">option9</Menu.Item>
						<Menu.Item key="10">option10</Menu.Item>
						<Menu.Item key="11">option11</Menu.Item>
						<Menu.Item key="12">option12</Menu.Item>
					</SubMenu>
					<SubMenu key="sub55" title={<span><Icon type="laptop"/>subnav 2</span>}>
						<Menu.Item key="51">option5</Menu.Item>
						<Menu.Item key="61">option6</Menu.Item>
						<Menu.Item key="71">option7</Menu.Item>
						<Menu.Item key="81">option8</Menu.Item>
					</SubMenu>
				</Menu>
			</>
		);
	}
}
export default connect(state=>state.global.permission)(SlideMenu);