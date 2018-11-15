/**
 *  author : bo.peng
 *  createTime 2018-10-22 14:06
 *  description :
 */
import Vue from 'vue';
import Vuex from 'vuex';
import currentInfo from '@/store/modules/user/currentInfo';
import asideMenu from '@/store/modules/global/Menu';
import actions from '@/store/actions';
import getters from '@/store/getters';
import {CurrentDto} from '@/dto/user/CurrentDto';
import {Menu} from '@/domain/Menu';

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
    currentMenu: Menu;
}

export type CheckoutStatus = 0 | -1 | 1;