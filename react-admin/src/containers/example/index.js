/**
 *  author : bo.peng
 *  createTime 2018-11-15 14:28
 *  description : 代码规范  所有的页面都在该文件夹下开发
 */
import React from 'react';
import {RouteChildren} from "../../router";
import ExMenu from "./common/menu";
import {Layout} from "antd";
const { Content } = Layout;
export default class Example extends React.Component {
	state = {
		collapsed: false,
	};
	render(){
		return (
			<Layout>
				<ExMenu {...this.props} collapsed={this.state.collapsed}/>
				<Layout>
					<Content>
						<RouteChildren {...this.props}/>
					</Content>
				</Layout>
			</Layout>
		)
	}
};