/**
 *  author : bo.peng
 *  createTime 2018-10-23 16:38
 *  description :
 */
import RestResponse from "../RestResponse";
const Mock =  require('mockjs');
import AsideMenuApi from '@/api/urls/global/AsideMenu';
import {Basic} from '@/mock/Basic';
import UserApi from '@/api/urls/user/UserApi';
import AsideMenuDto from '@/dto/global/AsideMenuDto';
import AsideMenu from '@/domain/global/AsideMenu';
const data = [
    {
        name: "会员信息管理",
        path : "user",
        list : [
            {
                name : "商家列表",
                path : "businessList",
            },
            {
                name : "门店列表",
                path : "shopsList",
            },
            {
                name : "代理商列表",
                path : "agentList",
            },
        ],
    },
    {
        name: "商品信息",
        path : "shoppingInfo",
        list : [
            {
                name : "商品管理",
                path : "shopping",
            },
            {
                name : "分类管理",
                path : "mendian",
            },
            {
                name : "属性管理",
                path : "mendian",
            },
            {
                name : "品牌管理",
                path : "mendian",
            },
        ],
    },
    {
        name: "订单管理",
        path : "user",
        list : [
            {
                name : "订单",
                path : "shopping",
            },
            {
                name : "发货单",
                path : "mendian",
            },
            {
                name : "退货单",
                path : "mendian",
            },
            {
                name : "退款仲裁",
                path : "mendian",
            },
            {
                name : "评论屏蔽仲裁",
                path : "mendian",
            },
        ],
    },
];
Mock.mock(Basic.baseUrl + AsideMenuApi.allMenu, "post", RestResponse.success(data));