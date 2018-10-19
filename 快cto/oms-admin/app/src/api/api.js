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
    NProgress.start();
    return config;
}, function (error) {
    return Promise.reject(error);
});
API.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
}, function (error) {
    NProgress.done();
        if (error.response.status == 404){
            Promise.reject(error);
          return window.$AppMain.$message({type:'error',message:error.response.statusText})
        }
    window.$AppMain.$message({type:'error',message:error.response.data.message})
    return Promise.reject(error);
});

function loginApi (data) {
    return API.post('/portal/auth/login', data).then(res =>res.data)
}

function permissionsApi() {
    return API.get(`/portal/permission/menu`).then(res => res.data)
}

function getRoleAuth(id) { //获取区当前登录用户的信息
    return API.get(`/portal/auth/profile`).then(res => res.data)
}
function updatePasswordApi(data) { //密码重置
    return API.put(`/portal/auth/password`,data).then(res => res.data)
}
function setRoleApi(id,data) { //角色关联用户
    return API.put(`/portal/userRole/${id}/roleIds`,data).then(res => res.data)
}
function roleListApi(data) {
    return API.get('/portal/role', {
        params: data
    }).then(res => res.data)
}
function getRoleIdsApi(id) { //根据角色关联用户
    return API.get(`/portal/userRole/${id}/roleIds`).then(res => res.data)
}
function passwordResetApi(id,data) { //重置当前密码
    return API.put(`/portal/user/${id}/password`,data).then(res => res.data)
}
function userCreateApi(data) {
    return API.post('/portal/user',data).then(res => res.data)
}
function getUserRoleApi(userId) {
    return API.get(`/portal/userRole?userId=${userId}`).then(res => res.data)
}
function userDetailApi(id) {
    return API.get(`/portal/user/${id}`).then(res => res.data)
}
function userEditApi(id,data) { 
    return API.put(`/portal/user/${id}`,data).then(res => res.data)
}
function userListApi(data) {
    return API.get('/portal/user', {
        params: data
    }).then(res => res.data)
}
function userDeleteApi(id) {
    return API.delete(`/portal/user/${id}`).then(res => res.data)
}
function roleDetailApi(id) {
    return API.get(`/portal/role/${id}`).then(res => res.data)
}
function queryMenuList(data) {
    return API.post('/portal/menu/query', data).then(res => res.data)
}
function roleEditApi(id,data) {
    return API.put(`/portal/role/${id}`,data).then(res => res.data)
}
function getMenuList(data) {
    return API.get('/portal/menu', {
        params: data
    }).then(res => res.data)
}
function deleteMenuApi(id) {
    return API.delete(`/portal/menu/${id}`)
}
function detailMenuApi(id) {
    return API.get(`/portal/menu/${id}`).then(res => res.data)
}
function editMenuApi(id,data) {
    return API.put(`/portal/menu/${id}`,data).then(res => res.data)
}
function createMenu(data) {
    return API.post(`/portal/menu`,data).then(res => res.data)
}

function roleDeleteApi(id) {
    return API.delete(`/portal/role/${id}`).then(res => res.data)
}
function roleCreateApi(data) {
    return API.post('/portal/role',data).then(res => res.data)
}
export {
    roleCreateApi,
    roleDeleteApi,
    createMenu,
    editMenuApi,
    detailMenuApi,
    loginApi,
    permissionsApi,
    getRoleAuth,
    updatePasswordApi,
    setRoleApi,
    roleListApi,
    getRoleIdsApi,
    passwordResetApi,
    userCreateApi,
    getUserRoleApi,
    userDetailApi,
    userEditApi,
    userListApi,
    userDeleteApi,
    roleDetailApi,
    queryMenuList,
    roleEditApi,
    getMenuList,
    deleteMenuApi
}
