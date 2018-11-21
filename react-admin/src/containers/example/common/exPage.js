/**
 *  author : bo.peng
 *  createTime 2018-11-19 14:51
 *  description :
 */
import React from "react";
import { Layout} from 'antd';
import ExMenu from "./menu";
import ComBreadcrumb from "../../common/Breadcrumb";
import {withRouter} from "react-router-dom";
const { Content } = Layout;

class ExPage extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout>
				<ExMenu {...this.props} collapsed={this.state.collapsed}/>
				<Layout>
					{/*<Header style={{ background: '#fff', paddingLeft: '15px' }}>
						<Button type="primary" size="small" onClick={this.toggle}>
							<Icon type="bars" />
						</Button>
					</Header>*/}
					<Content>
						<ComBreadcrumb {...this.props.location} left={this.props.edit}/>
						<article style={{padding:'0 15px'}}>
							{this.props.children}
						</article>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default withRouter(ExPage);