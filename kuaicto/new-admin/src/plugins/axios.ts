import Vue, { PluginObject } from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const privateAxios = axios.create(config);

privateAxios.interceptors.request.use(
  (cfg) => {
    // Do something before request is sent
    return cfg;
  },
  (err) => {
    // Do something with request error
    return Promise.reject(err);
  },
);

// Add a response interceptor
privateAxios.interceptors.response.use(
  (res) => {
    // Do something with response data
    return res;
  },
  (err) => {
    // Do something with response error
    return Promise.reject(err);
  },
);

const Plugin: PluginObject<any> = {
  install: (Vue) => {
    Vue.$axios = privateAxios;
  },
};
Plugin.install = (Vue) => {
  Vue.$axios = privateAxios;
  window.axios = privateAxios;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return privateAxios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
