/**
 *  author : bo.peng
 *  createTime 2018-10-26 16:06
 *  description :
 */
import $config from '../../config/config';
import NProgress from 'nprogress'; // Progress 进度条
import axios from 'axios';
import { message} from 'antd';
const ax = axios.create({
  baseURL : $config.modulePrefix[$config.env],
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
} , (error) => {
  if (error.response.status === 404) {
	Promise.reject(error);
	return message.error(error.response.statusText);
  }
  message.error(error.response.data.message);
  return Promise.reject(error);
});
export default class Api {
  /**
   * 创建
   * @param name
   * @param params
   */
  static async create(name, params) {
	return ax.post(name, params).then((res) => res.data);
  }
  /**
   * 按ID获取
   * @param name
   * @param id
   * @param idx
   */
  static async get(name, id, idx) {
	const str = idx ? `/${idx}` : '';
	return ax.get(name + `/${id}` + str).then((res) => res.data);
  }

  static async post(name,params){
    return ax.post(name,params).then((res) => res.data);
  }
  /**
   * query
   * @param name
   * @param params
   */
  static async query(name, params) {
	return ax.post(name + '/query', params).then((res) => res.data);
  }
  /**
   * 按ID删除
   * @param name
   * @param id
   */
  static async delete(name, id) {
	return ax.delete(name + `/${id}`).then((res) => res.data);
  }
  /**
   * 更新
   * @param name
   * @param id
   * @param params
   */
  static async update(name, id, params) {
	return ax.put(name + `/${id}`, params).then((res) => res.data);
  }
  /**
   * 查找列表
   * @param name
   * @param params
   */
  static async find(name, params) {
	return ax.get(name, { params: { ...params } }).then((res) => res.data);
  }
}
