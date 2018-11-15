/**
 *  author : bo.peng
 *  createTime 2018-10-23 16:56
 *  description :
 */

import {Types} from './Types';
import {Util} from '@/Utils/Util';
import {Menu} from '@/domain/Menu';
import {Commit} from 'vuex';
import {State} from '@/store';

const initState: any = {
    data: {
        status: -1,
        menus: [],
        asideMenu: [],
    } as Menu,
};
export default {
    state: initState,
    getters: {
        currentMenu: (state: any) => {
            if (state.data.status === -1) {
               state = Util.getLocal(Types.PERMISSION_MENU) as Menu || state;
            }
            return state.data;
        },
    },
    mutations: {
        [Types.PERMISSION_MENU](state: any , current: any) {
            state.data.status = 0;
            state.data.menus = current;
            state.data.asideMenu = current[0];
            Util.setLocal(Types.PERMISSION_MENU, state);
        },
    },
    actions: {
        [Types.LEFT_ASIDE_MENU]: ( { commit, state, getters}: any, leftMenu: any) => {
            state.data = getters.currentMenu;
            state.data.asideMenu = leftMenu;
        },
    },
};