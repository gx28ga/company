import Vue from 'vue';
import { formatDate, currency } from './date-format'
import $config from "$config";

Vue.filter('dateFilter', (val, fmt = 'yyyy-MM-dd') => {
    // 时间
    if (!val) return '-';
    let time = new Date(val);
    return formatDate(time, fmt)
});
Vue.filter('datetimeFilter', (val, fmt = 'yyyy-MM-dd hh:mm:ss') => {
    // 时间
    if (!val) return '-';
    let time = new Date(val);
    return formatDate(time, fmt)
});

Vue.filter('currency', (val, currencys, decimals) => {
    //小数点
    return currency(val, currencys, decimals);
});
Vue.filter('imageUrl', val => {
    //图片
    if (! val) {
      return val;
    }
    if (/(http[s]?:\/\/[\w\.]+\/)/.test(val)) {
      return val;
    }
    return $config.imageUrl[$config.env] + '/' +val;
  })
Vue.filter('hidden', (val) => {
    //显示状态
    return {
        'ENABLE':'显示',
        'DISABLE':'隐藏'
    }[val]
});
Vue.filter('enable', (val) => {
    //显示状态
    return {
        'true':'启用',
        'false':'禁用'
    }[val]
});
Vue.filter('shelves', (val) => {
    //上架状态
    return {
        'ON_SHELVES':'上架',
        'OFF_SHELVES':'下架',
        'UN_SHELVES':'新商品从未上架'
    }[val]
});


Vue.prototype.$dateFilter = Vue.filter('dateFilter');
Vue.prototype.$datetimeFilter = Vue.filter('datetimeFilter');
Vue.prototype.$currency = Vue.filter('currency');
Vue.prototype.$imageUrl = Vue.filter('imageUrl');
Vue.prototype.$hidden = Vue.filter('hidden');
Vue.prototype.$shelves = Vue.filter('shelves');
Vue.prototype.$enable = Vue.filter('enable');
