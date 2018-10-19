import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
// @ts-ignore
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';
import {Route} from 'vue-router';
import Api from '@/api/Api'; // Progress 进度条 样式

Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
    require.ensure([], (require) => {
        require('./mock');
    });
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach((to: Route, from: Route) => {
    NProgress.done();
});
Api.find('/product', {
    limit: 10,
    offset: 0,
    page: 1,
});
