import KFormItem from './KFormItem';
import Vue from 'vue'

KFormItem.install = function(Vue){
    Vue.component(KFormItem.name,KFormItem);
}

Vue.use(KFormItem);