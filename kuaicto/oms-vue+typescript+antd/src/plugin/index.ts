/**
 *  author : bo.peng
 *  createTime 2018-11-12 16:25
 *  description :
 */
import Vue from 'vue';

const MyPlugin: any = {};
MyPlugin.install = (Vue: any, options: any) => {
    /*// 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // 逻辑...
        }
        ...
    })

    // 3. 注入组件
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
        ...
    })*/

    // 4. 添加实例方法
    /*Vue.prototype.$modal = (methodOptions: any) => {
        // 逻辑...
    };*/
};
Vue.use(MyPlugin);