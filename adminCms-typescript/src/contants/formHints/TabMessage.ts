/**
 *@author bo.peng
 *@createTime 05 2018/9/5
 *@description: 表单错误提示
 */
import TabInfo from "../../dto/TabInfo";
export default class LoginInfo {
	static userName : TabInfo = new TabInfo("用户名不能为空","用户名为6-8位字母和数字组成","请输入正确的用户名");
	static password : TabInfo = new TabInfo("密码不能为空","密码为6-8位字母和数字组成","请输入正确的密码");
	static checkPass : TabInfo = new TabInfo("密码不能为空","请再次输入密码","两次密码不一致");
}