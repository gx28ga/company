/**
 *  author : bo.peng
 *  createTime 2018-10-22 14:06
 *  description :
 */
import Vue from 'vue';
import Vuex, { Commit, Dispatch} from 'vuex';
import currentInfo from '@/store/modules/user/currentInfo';
import asideMenu from '@/store/modules/global/AsideMenu';
import actions from '@/store/actions';
import getters from '@/store/getters';
import {CurrentDto} from '@/dto/user/CurrentDto';
import AsideMenuDto from '@/dto/global/AsideMenuDto';
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        currentInfo,
        asideMenu,
    },
});
export interface State {
    current: CurrentDto;
    currentMenu: AsideMenuDto;
}

export type CheckoutStatus = 0 | -1 | 1;