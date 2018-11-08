/**
 *  author : bo.peng
 *  createTime 2018-10-26 16:06
 *  description :
 */
import $config from '../../config/config';
import NProgress from 'nprogress'; // Progress 进度条
import axios from 'axios';
import {message} from 'antd';

const ax = axios.create({
	baseURL: $config.modulePrefix[$config.env],
});
ax.interceptors.request.use((config) => {
	NProgress.start();
	return config;
}, (error) => {
	return Promise.reject(error);
});
ax.interceptors.response.use((response) => {
	NProgress.done();
	return response;
}, (error) => {
	if (error.response.status === 404) {
		Promise.reject(error);
		return message.error(error.response.statusText);
	}
	message.error(error.response.data.message);
	return Promise.reject(error);
});
let paramData= {
	limit: 10,
	page: 1,
	offset: 0,
};
export default class Api {
	/**
	 * 创建
	 * @param name
	 * @param params
	 */
	static create(name, params) {
		return ax.post(name, Object.assign({},paramData,params)).then((res) => res.data);
	}

	/**
	 * 按ID获取
	 * @param name
	 * @param params
	 */
	static get(name, params) {
		return ax.get(name,{
			params: Object.assign({},paramData,params)
		}).then((res) => res.data);
	}

	static post(name, params) {
		return ax.post(name, Object.assign({},paramData,params)).then((res) => res.data);
	}

	/**
	 * query
	 * @param name
	 * @param params
	 */
	static query(name, params) {
		return ax.post(name + '/query', Object.assign({},paramData,params)).then((res) => res.data);
	}

	/**
	 * 按ID删除
	 * @param name
	 * @param params
	 */
	static delete(name,params) {
		return ax.delete(name,{
			params: Object.assign({},paramData,params)
		}).then((res) => res.data);
	}

	/**
	 * 更新
	 * @param name
	 * @param id
	 * @param params
	 */
	static update(name, id, params) {
		return ax.put(name + `/${id}`, params).then((res) => res.data);
	}

	/**
	 * 查找列表
	 * @param name
	 * @param params
	 */
	static find(name, params) {
		return ax.get(name, {params: {...params}}).then((res) => res.data);
	}
}
