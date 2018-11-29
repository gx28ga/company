/**
 *  author : bo.peng
 *  createTime 2018-11-23 12:43
 *  description :
 */
import Vue from 'vue';
import Vuex from 'vuex';
import menu from "./menu";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {},
    mutations: {
    },
    actions: {
    },
    modules: {
        // 栏目菜单
        menu,
    },
});
