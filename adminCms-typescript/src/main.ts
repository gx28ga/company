import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/index';
import './plugins/element.js'
import "@/style/main.css";
import "@/components/index.js";
import "@/utils/query";
import '@/global/plug/index.js';
if(process.env.NODE_ENV==="development"){
	require("./mock");
}
// @ts-ignore
import Pop from "@/components/pop/Pop.js";
Vue.config.productionTip = false;
Vue.use(Pop);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

