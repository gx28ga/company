/**
 *@author bo.peng
 *@createTime 06 2018/9/6
 *@description
 */
import RestResponse from "../RestResponse";
const Mock =  require('mockjs');
import login from "../../contants/urls/login/login";
import CurrentUser from "../../domain/CurrentUser";
Mock.mock(login.login,"post",RestResponse.success(
	new CurrentUser(
		"3487982134789234123",
		"mock",
		"http:/wwww"
	))
);