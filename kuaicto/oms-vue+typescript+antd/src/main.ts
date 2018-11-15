import Vue from 'vue';
import {App} from '@/App.tsx';
import {router} from '@/router/index.ts';
import store from './store/index';
import './Utils/global/global';
// @ts-ignore
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style/theme-file.less';
import './style/base.less';
import {Environment} from '@/enum/Environment';
import "./views/common";
import './plugin';
Vue.config.productionTip = false;
Vue.use(Antd);
// 公共属性
if (process.env.NODE_ENV === Environment.dev) {
    require.ensure([], (require) => {
        require('./mock');
    });
}
window.Main = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');