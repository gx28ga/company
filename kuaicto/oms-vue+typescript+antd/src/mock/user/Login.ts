/**
 *  author : bo.peng
 *  createTime 2018-10-23 14:54
 *  description :
 */
import RestResponse from "../RestResponse";
import {USERAPI} from '@/api/urls/user/UserApi';
import {BASIC} from '@/mock/Basic';
const Mock =  require('mockjs');
const user: object = {
    token: 'token',
    userId: 345345,
    userName: 'userName',
    userStatus: 'userStatus',
    userType: 'userType',
    createTime: 'createTime',
    lastUpdate: 'lastUpdate',
};
Mock.mock(BASIC.baseUrl + USERAPI.LOGIN, "post", RestResponse.success(user));