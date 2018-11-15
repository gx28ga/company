/**
 *  author : bo.peng
 *  createTime 2018-10-19 15:40
 *  description :
 */
// @ts-ignore
import $config from '../../config';
/*import { Loading } from 'element-ui';*/
// @ts-ignore
import axios from 'axios';
// @ts-ignore
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';
import {PageConfig} from "@/views/config";
const pageParme: PageConfig = new PageConfig().response;

const ax = axios.create({
    baseURL : $config.modulePrefix[$config.env],
});
ax.interceptors.request.use((config: any) => {
    NProgress.start();
    return config;
}, (error: any) => {
    return Promise.reject(error);
});
ax.interceptors.response.use((response: any) => {
    NProgress.done();
    return response;
} , (error: any) => {
    NProgress.done();
    if (error.response.status === 404) {
        Promise.reject(error);
        return window.Main.$message.error(error.response.statusText);
    }
    window.Main.$message.error(error.response.data.message);
    return Promise.reject(error);
});
export class Api {
    /**
     * 按ID获取 非数组
     * @param name
     * @param params
     */
    public static get(name: string, params?: any) {
        return ax.get(name, {
            params,
        }).then((res: any) => res.data);
    }
    /**
     * 按ID获取 数组列表
     * @param name
     * @param params
     */
    public static getList(name: string, params?: any) {
        return ax.get(name, {
            params: Object.assign({}, pageParme, params),
        }).then((res: any) => res.data);
    }

    /**
     * post
     * @param name
     * @param params
     */
    public static post(name: string, params?: any) {
        return ax.post(name, params).then((res: any) => res.data);
    }
    /**
     * query
     * @param name
     * @param params
     */
    public static query(name: string, params: any) {
        return ax.post(name + '/query', params).then((res: any) => res.data);
    }
    /**
     * 按ID删除
     * @param name
     * @param params
     */
    public static delete(name: string, params: any) {
        return ax.delete(name, params).then((res: any) => res.data);
    }
    /**
     * 更新
     * @param name
     * @param params
     */
    public static update(name: string, params: any) {
        return ax.put(name, params).then((res: any) => {
            return res.data;
        });
    }
    /**
     * 查找列表
     * @param name
     * @param params
     */
    public static find(name: string, params: any) {
        return ax.get(name, { params: { ...params } }).then((res: any) => res.data);
    }
}
