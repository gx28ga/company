/**
 *@author bo.peng
 *@createTime 06 2018/9/6
 *@description 登录用户
 */

export default class CurrentUser {

	userId : string;
	userName : string;
	userImgHead : string;

	constructor(userid:string,userName:string,userImgHead:string){
		this.userId = userid;
		this.userName = userName;
		this.userImgHead = userImgHead;
	}
	get isNotNull(){
		return this.userId.length>3;
	}
	/*public isNotNull():Boolean{
		return this.userId.length>3;
	}*/
}