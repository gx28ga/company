import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import './style/main.scss';
// @ts-ignore
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';
import {Route} from 'vue-router';
import Api from '@/api/Api';
import {Environment} from '@/enum/Environment'; // Progress 进度条 样式
// 公共属性
import './Utils/global/global';

Vue.config.productionTip = false;
if (process.env.NODE_ENV === Environment.dev) {
    require.ensure([], (require) => {
        require('./mock');
    });
}
window.router = router;
window.Main = new Vue({
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
/*Api.find('/role', {
    limit: 10,
    offset: 0,
    page: 1,
}).then((data) => {
    console.log(data);
});*/
