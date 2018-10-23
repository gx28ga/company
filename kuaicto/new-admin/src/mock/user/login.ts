/**
 *  author : bo.peng
 *  createTime 2018-10-23 14:54
 *  description :
 */
import RestResponse from "../RestResponse";
import UserApi from '@/api/urls/user/UserApi';
import User from '@/domain/user/User';
import {Basic} from '@/mock/Basic';
const Mock =  require('mockjs');
const user: User = {
    token: 'token',
    userId: 345345,
    userName: 'userName',
    userStatus: 'userStatus',
    userType: 'userType',
    createTime: 'createTime',
    lastUpdate: 'lastUpdate',
};
Mock.mock(Basic.baseUrl + UserApi.Login, "post", RestResponse.success(user));