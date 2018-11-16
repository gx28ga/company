/**
 *  author : bo.peng
 *  createTime 2018-11-08 17:04
 *  description :
 */
import React from "react";
import {Button, Form, Input} from 'antd';
const FormItem = Form.Item;

class RegistrationForm extends React.Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: [],
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	render() {
		return (
			<Form layout="inline" onSubmit={this.handleSubmit}>
				<FormItem>
					<Input addonBefore="订单号" placeholder='请输入'/>
				</FormItem>
				<FormItem>
					<Input addonBefore="状态" placeholder='请输入'/>
				</FormItem>
				<FormItem>
					<Input addonBefore="下单时间" placeholder='请输入'/>
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit">搜索</Button>
				</FormItem>
			</Form>
		);
	}
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;