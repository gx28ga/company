/**
 *  author : bo.peng
 *  createTime 2018-10-31 20:34
 *  description :
 */
import {Icon, Menu, Spin} from "antd";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const {SubMenu} = Menu;

let privateselect = null;
const child= (item,i)=> {
	let dom;
	if(item.children && item.children.length){ // 父类
		dom = (
			<SubMenu key={i} title={
				<span>
					{item.name}
				</span>}>
				{
					item.children.map((subitem,j)=>child(subitem,i+'-'+j))
				}
			</SubMenu>
		)
	}else{// 子类
		dom = (<Menu.Item key={i} onClick={(e)=>privateselect(item)}>
				<Icon type="caret-right" theme="outlined" />
				{item.name}
			</Menu.Item>);
	}
	return dom;
};
class SlideMenu extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			rootSubmenuKeys : [],
			theme: 'dark',
			openKeys: ["0"],
		};
		this.onOpenChange = this.onOpenChange.bind(this);
		this.select = this.select.bind(this);
		privateselect = this.select;
	}
	select= (item)=> {
		this.props.history.replace(item.url);
	};
	onOpenChange = (openKeys) => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			let index=[];
			latestOpenKey.split("-").forEach(val=>{
				index.push(val);
			});
			index.pop();
			index.push(latestOpenKey);
			this.setState({
				openKeys: index,
			});
		}
	};
	static getDerivedStateFromProps(prevProps, prevState){
		let arr= [];
		let setKey;
		if(prevProps.menuChidren.data){
			setKey= (item,i)=> {
				arr.push(String(i));
				if(item.children && item.children.length){
					item.children.forEach((subitem,j)=>setKey(subitem,i+'-'+j))
				}
			};
			prevProps.menuChidren.data.children.forEach((item,i)=> {
				setKey(item,i);
			});
		}
		setKey= null;
		return Object.assign({},prevState,{
			rootSubmenuKeys: arr
		});
	}
	render() {
		let data = this.props.menuChidren.data;
		if(data) return(
			<>
				<div className='menuNav'>
					<div className='menuNav-jian'>&nbsp;</div>
					<Icon type="appstore" theme="outlined" />
					<span style={{paddingLeft:"5px"}}>
						{data && data.name}
					</span>
				</div>
				<Menu
					theme={this.state.theme}
					mode="inline"
					openKeys={this.state.openKeys}
					inlineCollapsed={true}
					onOpenChange={this.onOpenChange}
					style={{height: '100%', borderRight: 0}}
				>
					{data.children.map((item,i)=>(child(item,i)))}
				</Menu>
			</>
		);
		return (<Spin />);
	}
}
export default connect(state=>state.global.permission)(withRouter(SlideMenu));