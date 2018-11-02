/**
 *  author : bo.peng
 *  createTime 2018-10-26 20:03
 *  description :
 */
import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import { connect } from 'react-redux';
import {action_currentUser} from "../../redux/actions";
import "./login.scss";
import Util from "../../Utils/Util";

const FormItem = Form.Item;

class Login extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
			values.password = Util.pwdmd5(values.password);
			this.props.dispatch(action_currentUser.login.request(values));
		});
	};
	render() {
		const {getFieldDecorator} = this.props.form;
		return (
			<div className="login-contrainer">
				<div className="login-form">
					<div className="title">CMS系统</div>
					<Form onSubmit={this.handleSubmit} className="content">
						<FormItem>
							{getFieldDecorator('userName', {
								rules: [{required: true, message: '请输入用户名!'}],
							})(
								<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
								       placeholder="用户名"/>
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{required: true, message: '请输入密码!'}],
							})(
								<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
								       placeholder="密码"/>
							)}
						</FormItem>
						<FormItem>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}
export default connect()(Form.create()(Login));