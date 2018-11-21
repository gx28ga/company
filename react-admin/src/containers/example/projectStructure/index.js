import paginationConfig from "../../config/pagination";
import ExPage from "../common/exPage";
import ComBox from "../../common/Box";
import {Table} from "antd";
import React from "react";
import ComTable from "../../common/ComTable";

/**
 * desc:
 * created by bo.peng 2018/11/21.
 * email:spion@qq.com
 */
export default (props) => {
	const Title = () => <div>
		<span style={{
			fontSize: '20px',
			paddingRight: '5px',
			color: '#333'
		}}>projectStructuren</span>
		项目结构推荐</div>;
	const columns = [{
		title: '名称',
		dataIndex: 'name',
	}, {
		title: '说明',
		dataIndex: 'value',
	}];
	const data = [
		{
			name: 'api',
			value: '接口相关',
			children:[
				{
					name: 'urls',
					value: '接口地址'
				},
				{
					name: 'Api.js',
					value: '调用封装'
				}
			]
		},
		{
			name: 'assets',
			value: '静态文件',
		},
		{
			name: 'components',
			value: '公共组件',
		},
		{
			name: 'common',
			value: '常用组件、常用功能',
		},
		{
			name: 'filter',
			value: '过滤',
		},
		{
			name: 'constants',
			value: '常量',
			children:[
				{
					name: 'storage',
					value: '本地缓存'
				},
				{
					name: 'tips',
					value: '常用提示，如错误提示，正确提示，友情提示等'
				}
			]
		},
		{
			name: 'mixin',
			value: '混入',
		},
		{
			name: 'mock',
			value: '数据模拟',
		},
		{
			name: 'controller',
			value: '控制层',
		},
		{
			name: 'plugins',
			value: '常用插件',
		},
		{
			name: 'router',
			value: '路由',
		},
		{
			name: 'redux、vuex、mobx等',
			value: '数组状态管理',
		},
		{
			name: 'router',
			value: '路由',
		},
		{
			name: 'style',
			value: '样式',
		},
		{
			name: 'test',
			value: '试例',
		},
		{
			name: 'utils',
			value: '工具类',
		},
		{
			name: 'views、containers、pages',
			value: '视图层',
			children:[
				{
					name: 'config',
					value: '常用表单、分页、form等配置',
				},
				{
					name: 'common',
					value: '自定义组件',
				},
				{
					name: 'global',
					value: '栏目、头部、底部等公共页面',
				},
			]
		},
	];
	function setKey(item,i){
		item.key=i;
		if(item.children){
			item.children.map((subItem,j)=>setKey(subItem,i+'-'+j));
		}
		return item;
	}
	data.map((item,i) => setKey(item,i));
	const page = Object.assign({},paginationConfig.pagination,{
		pageSize: 999,
	});
	return (
		<ExPage edit={<Title/>}>
			<ComBox {...props}>
				<ComTable table={
					<Table columns={columns} dataSource={data} pagination={page}/>
				}/>
			</ComBox>
		</ExPage>
	)
};