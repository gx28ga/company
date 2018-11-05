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
		this.onOpenChange = this.onOpenChange.bind(this);
	}
	rootSubmenuKeys = [];
	state = {
		theme: 'dark',
		openKeys: ["0"],
	};
	onOpenChange = (openKeys) => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	};
	componentDidMount(){
		console.log(this.props.menuChidren)
	}
	componentDidUpdate(prevProps, prevState){
	}
	render() {
		let data = this.props.menuChidren.data;
		const child= (item,i)=> {
			let dom;
			if(item.children && item.children.length){ // 父类
				dom = (
					<SubMenu key={i} title={
						<span>
							{item.name}
						</span>}>
						{
							item.children.map((subitem,j)=>child(subitem,j+'-'+i))
						}
					</SubMenu>
				)
			}else{// 子类
				dom = (<Menu.Item key={i}>
					<Icon type="caret-right" theme="outlined" />
					{item.name}
				</Menu.Item>);
			}
			return dom;

		};
		return (
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
					{
						data && data.children && data.children.map((item,i)=>(child(item,i)))
					}
				</Menu>
			</>
		);
	}
}
export default connect(state=>state.global.permission)(SlideMenu);