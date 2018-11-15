/**
 *  author : bo.peng
 *  createTime 2018-11-10 10:57
 *  description : 栏目
 */
import {CheckoutStatus} from '../store/index';
export interface Menu {
    menus: [];
    asideMenu: any;
    status: CheckoutStatus;
}