require("normalize.css");
import Vue from 'vue';
require("../src/styles/base.less");
require("wangeditor/dist/css/wangEditor.less");

import VueRouter from 'vue-router';
import Vuex from 'vuex';
require('babel-polyfill');
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
Vue.use(VueRouter);
Vue.use(Vuex);

import './filter/index.js';// 时间过滤和小数点过滤和其他过滤
//引入自定义组件
import './components/upload/index'// 图片上传
import Page from './components/common/index.js'// 基本布局外框Page组件
Vue.use(Page)
import './components/form/index'// 
import Table from './components/table/index'// table表单数据展示 
Vue.use(Table);

import Tree from 'hsy-vue-tree'
Vue.use(Tree);


import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '../../theme/index.css'
Vue.use(ElementUI,{locale});
// import storage from './storage';

var jquery = require("jquery/dist/jquery.js");
var loadsh = require("lodash");

window.jQuery = window.jquery = window.$ = jquery;
window.lodash = window._ = loadsh;


window.hljs = { loaded: true }; //赋值代码高亮变量，避免wangeditor富文本控件多余加载

import { user as UserLogic, site as SiteLogic, common } from './logic';
import  menu from './directive/menu'
Vue.use(menu);

import routes from "./routes";
const router = new VueRouter({
    routes
});
// 富文本编辑器
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

const vm = {};
vm.getSelfData = function(data) {
    if (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[0].hasOwnProperty("children")) {
          vm.getSelfData(data[0].children);
        } else {
          if (data[0].hasOwnProperty("children")) {
            vm.getSelfData(data[0].children);
          }
          vm.url = data[0].url;
        }
      }
    }
  };
  function urlPermission(data) {
    if (
      (data && data.indexOf("http") != -1) ||
      (data && data.indexOf("https") != -1)
    ) {
      return true;
    }
    return false;
  };

  var names = ['权限管理','角色创建', '菜单管理', '菜单创建', '用户管理', '用户编辑', '用户创建', '卖场用户管理', '卖场用户编辑', '卖场用户创建', '角色编辑', '案例列表', '创建案例', '编辑案例', '其他菜单']

  //判断是否登录
  router.beforeEach((to, from, next) => {
    NProgress.start();
    $("#page-title").text(SiteLogic.pageTitle(to.meta.title));
    if (to.name === 'login') {
        next();
    } else {
        var profile  = UserLogic.getProfile()
        var loginUser = common.getCommon();
        
        if (!profile) {
            next({
                path: '/login',
                query: {
                    back: to.fullPath
                }
            });
        } else {
            vm.getSelfData(profile.menus);
            if (urlPermission(vm.url) && loginUser.userType == 'PARTION_MANAGER') {
                window.location.href = vm.url;
            } else if(loginUser.userType == 'MERCHANT_MANAGER'){
                window.location.href = '/merchant';
            }else{
                next();
            }
        }
    }
    next()
    });
    router.afterEach((to, from, next) => {
        NProgress.done(); // 结束Progress
    });


window.$AppMain = new Vue(
    {
        router,
        // store: storage
    }
).$mount("#app");