import $config from "$config";
import Axios from "axios";
import { Loading } from 'element-ui';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
var API = Axios.create({
  baseURL: $config.modulePrefix[$config.env]
})

let instance = '';
API.interceptors.request.use(function (config) {
    // Do something before request is sent
    // instance =  Loading.service({ fullscreen: true,text:'请稍候...'});
    NProgress.start();
    return config;
}, function (error) {

    // Do something with request error
    return Promise.reject(error);
});
API.interceptors.response.use(function (response) {
           // instance.close()
    NProgress.done();
        // if(response.data.code == 401){
        //     window.$AppMain.$message({type:'error',message:'登录超时,请重新登录'})
        //     window.$AppMain.$router.push('/login')
        //     return Promise.reject(response.data.code);
        // }
    return response;
}, function (error) {
    NProgress.done();
    // instance.close()
        if (error.response.status == 404){
            Promise.reject(error);
          return window.$AppMain.$message({type:'error',message:error.response.statusText})
        }
    window.$AppMain.$message({type:'error',message:error.response.data.message})
    return Promise.reject(error);
});

/* 创建restapi: START */
function create(prefix) {
    return {
        // 创建
        create: function(data) {
          return API.post(prefix, data).then(res => res.data)
        },
        // 获取详情
        get: function(id) {
          return API.get(prefix + `/${id}`).then(res => res.data)
        },
        //获取特殊
        getx: function(id, x) {
          return API.get(prefix + `/${id}\/${x}`).then(res => res.data)
        },
        // 更新
        update: function(id, data) {
          return API.put(prefix + `/${id}`, data).then(res => res.data)
        },
        // 更新 PUT <prefix>/<id>/<x>
        updatex: function(id, x, data) {
          return API.put(prefix + `/${id}\/${x}`, data).then(res => res.data)
        },
        
        // 删除
        delete: function(id) {
          return API.delete(prefix + `/${id}`).then(res => res.data)
        },
        // 获取多个
        find: function(params) {
          return API.get(prefix, { params: { ...params } }).then(res => res.data)
        },
        // POST查询
        query: function(data) {
          return API.post(prefix + '/query', data).then(res => res.data)
        },
        // 特殊请求
        especially:function(path,id,data){
          return API.put(prefix + `${id}` + path, data).then(res => res.data)
        }
    }
}

/* 创建restapi: END */


export {
    API,
    create
}