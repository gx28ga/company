/**
 *  author : bo.peng
 *  createTime 2018-10-23 16:56
 *  description :
 */

import AsideMenuDto from '@/dto/global/AsideMenuDto';
import AsideMenu from '@/domain/global/AsideMenu';
import {Types} from "./Types";
import Vue from "vue";
import {CurrentDto} from '@/dto/user/CurrentDto';
import {CheckoutStatus} from '@/store';
const asideMenu = new AsideMenu("", "");
const asidmenuDtos: AsideMenuDto = new AsideMenuDto(asideMenu, []);
interface State {
    asidmenuDto: AsideMenuDto;
    status: CheckoutStatus;
}
const initState: State = {
    asidmenuDto: asidmenuDtos,
    status: -1,
};
export default {
    state: initState,
    getters: {
        currentMenu: (state: State) => {
            return state.asidmenuDto;
        },
    },
    mutations: {
        [Types.SET_LEFT_ASIDE_MENU](state: State , current: AsideMenuDto) {
            state.status = 0;
            state.asidmenuDto = current;
        },
    },
};