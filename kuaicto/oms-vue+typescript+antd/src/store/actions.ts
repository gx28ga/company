/**
 *  author : bo.peng
 *  createTime 2018-10-22 14:10
 *  description :
 */
import {Commit} from 'vuex';
import {Api} from '@/api/Api';
import {Types} from '@/store/modules/global/Types.ts';
import {MENUAPI} from '@/api/urls/global/AsideMenu';
import {State} from './index';
import {Menu} from '@/domain/Menu';

export default {
    [Types.PERMISSION_MENU](context: { commit: Commit; state: State, getters: {currentMenu: Menu} }) {
        if (context.getters.currentMenu.status === -1) {
            Api.get(MENUAPI.CURRENT_MENU).then((data: any) => {
                context.commit(Types.PERMISSION_MENU, data.menus);
            });
        }
    },
};
