/**
 *  author : bo.peng
 *  createTime 2018-11-29 16:28
 *  description :
 */
import {Types} from '@/store/menu/Types';

interface InitState {
    menu: any;
    children: any;
}

const State: InitState = {
    menu: [],
    children: [],
};
export default {
    state: State,
    mutations: {
        [Types.MENU](state: InitState, arr: any) {
            state.menu = arr;
        },
        // 添加子栏目
        [Types.SUB_MENU](state: InitState, arr: any) {
            state.children = arr;
        },
    },
    actions: {
        // 添加栏目
        [Types.MENU]({commit}: any, arr: any) {
            commit(Types.MENU, arr);
        },
    },
};