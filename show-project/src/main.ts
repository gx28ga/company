import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// @ts-ignore
/*import Antd from 'ant-design-vue';*/
/*import 'ant-design-vue/dist/antd.css';*/
import './style/app.less';
Vue.config.productionTip = false;
/*Vue.use(Antd);*/
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
