/**
 *  author : bo.peng
 *  createTime 2018-10-19 15:40
 *  description :
 */
// @ts-ignore
import $config from '../../config';
import { Loading } from 'element-ui';
import axios from 'axios';
// @ts-ignore
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';
const ax = axios.create({
    baseURL : $config.modulePrefix[$config.env.NODE_ENV],
});
console.log($config);
export default class Api {
    /**
     * 创建
     * @param name
     * @param params
     */
    public static async  create(name: string, params: object) {
        return ax.post(name, params).then((res) => res.data);
    }
    /**
     * 按ID获取
     * @param name
     * @param id
     * @param idx
     */
    public static async get(name: string, id: string, idx: string) {
        const str = idx ? `/${idx}` : '';
        return ax.get(name + `/${id}` + str).then((res) => res.data);
    }
    /**
     * query
     * @param name
     * @param params
     */
    public static async query(name: string, params: object) {
        return ax.post(name + '/query', params).then((res) => res.data);
    }
    /**
     * 按ID删除
     * @param name
     * @param id
     */
    public static async delete(name: string, id: string) {
        return ax.delete(name + `/${id}`).then((res) => res.data);
    }
    /**
     * 更新
     * @param name
     * @param id
     * @param params
     */
    public static async update(name: string, id: string, params: object) {
        return ax.put(name + `/${id}`, params).then((res) => res.data);
    }
    /**
     * 查找列表
     * @param name
     * @param params
     */
    public static async find(name: string, params: object) {
        return ax.get(name, { params: { ...params } }).then((res) => res.data);
    }
}
