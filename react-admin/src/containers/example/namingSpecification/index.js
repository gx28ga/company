/**
 *  author : bo.peng
 *  createTime 2018-11-19 19:00
 *  description :
 */
import React from "react";
import {ExPage} from "../common";
import {ComBox} from "../../common";
import {Table} from 'antd';
import {paginationConfig} from "../../config";

export default (props) => {
	const Title = () => <div>
		<span style={{
			fontSize: '20px',
			paddingRight: '5px',
			color: '#333'
		}}>Naming specification</span>
		项目文件、变量、方法、等命名规范</div>;
	const columns = [{
		title: '名称',
		dataIndex: 'name',
	}, {
		title: '说明',
		dataIndex: 'value',
	}];
	const data = [{
		name: '目录',
		value: '小驼峰',
	}, {
		name: '组件',
		value: '大驼峰',
	}, {
		name: 'class',
		value: '大驼峰',
	},
		{
			name: '方法名',
			value: '动词+名词',
		},
		{
			name: '文件名',
			value: '名词+动词',
		},
		{
			name: '变量 & 方法',
			value: '均要注释',
		},
		{
			name: '默认缩进空格',
			value: '4',
		},
		{
			name: '函数',
			value: '一个函数控制在20行以内(一屏以内)',
		},
		{
			name: '注释',
			value: '行上注释',
		},
		{
			name: '引入',
			value: '尽量使用import ,不要用require',
		},
		{
			name: '复数',
			value: '名词+s',
		},
		{
			name: '自定义组件',
			value: 'Com命名开头',
		},
	];
	const data1 = [
		{
			name: '列表',
			value: 'List',
		},
		{
			name: '创建',
			value: 'Create',
		},
		{
			name: '添加',
			value: 'Add',
		},
		{
			name: '更新',
			value: 'Update',
		},
		{
			name: '详情',
			value: 'Detail',
		},
		{
			name: '弹出框组件',
			value: 'Dialog',
		},
		{
			name: 'tab切换组件',
			value: 'Tab(tab组件较多时文件夹加Tab后缀即可)',
		},
		{
			name: '编辑 & 添加 + 编辑',
			value: 'edit',
		},
		{
			name: '删除',
			value: 'delete',
		},
	];
	data.map((item,i)=>item.key=i);
	const page = Object.assign({},paginationConfig.pagination,{
		pageSize: 999,
	});
	return (
		<ExPage edit={<Title/>}>
			<section className="horizontal-box">
				<ComBox {...props} title='命名规范' className='gap'>
					<Table columns={columns} dataSource={data} pagination={page}/>
				</ComBox>
				<ComBox {...props} title='常用命名推荐'>
					<Table columns={columns} dataSource={data1} pagination={page}/>
				</ComBox>
			</section>
		</ExPage>
	)
};