/**
 *  author : bo.peng
 *  createTime 2018-10-22 14:10
 *  description :
 */
import {Commit} from 'vuex';
import {CurrentDto} from '@/dto/user/CurrentDto';
import Api from '@/api/Api';
import {Types} from "@/store/modules/global/Types.ts";
import AsideMenuApi from '@/api/urls/global/AsideMenu';
import AsideMenuDto from '@/dto/global/AsideMenuDto';
import AsideMenu from '@/domain/global/AsideMenu';
import { State } from './index';

export default {
    getCurrentMenu(context: { commit: Commit; state: State }) {
        Api.create(AsideMenuApi.allMenu).then((data: any) => {
            const asideMenus: AsideMenuDto[] = [];
            data.data.forEach( (obj: any) => {
                let menu: AsideMenu;
                const list: AsideMenu[] = [];
                let asideMenu: AsideMenuDto;
                menu = new AsideMenu(obj.name, obj.path);
                if (obj.list) {
                    obj.list.forEach((object: any) => {
                        list.push(new AsideMenu(object.name, object.path));
                    });
                }
                asideMenu = new AsideMenuDto(menu, list);
                asideMenus.push(asideMenu);
            });
            context.commit(Types.SET_LEFT_ASIDE_MENU, asideMenus);
        });
    },
};
