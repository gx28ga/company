/**
 *  author : bo.peng
 *  createTime 2018-11-19 14:51
 *  description :
 */
import React from "react";
import ComBreadcrumb from "../../common/Breadcrumb";
import {withRouter} from "react-router-dom";

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
			<>
				<ComBreadcrumb {...this.props.location} left={this.props.edit}/>
				<article style={{padding:'0 15px'}}>
					{this.props.children}
				</article>
			</>
		);
	}
}
export default withRouter(ExPage);