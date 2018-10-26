/**
 *  author : bo.peng
 *  createTime 2018-10-23 16:20
 *  description :
 */
import AsideMenu from '@/domain/global/AsideMenu';

export default class AsideMenuDto extends AsideMenu {
    public list: AsideMenu[];
    constructor(menu: AsideMenu, list: AsideMenu[]) {
        super(menu.name, menu.path);
        this.list = list;
    }
}