/**
 *@author bo.peng
 *@createTime 05 2018/9/5
 *@description 常见验证
 */
import VerificationBase from "./VerificationBase";
export default class Verification implements VerificationBase{
	english(value:string,min:number=6,max:number=12){
		return new RegExp("^[a-z|A-Z]{"+min+","+max+"}$").test(value);
	}
	chinese(value:string,min:number=2,max:number=12){
		return new RegExp("^[\u4e00-\u9fa5]{"+min+","+max+"}$").test(value);
	}
	number(value:string,min:number=1,max:number=20){
		return new RegExp("^\d{"+min+","+max+"}$").test(value);
	}
	numAndLetter(value:string,min:number=20,max:number=20){
		if(value.length<min||value.length>max) return false;
		if(!(/^[a-z|A-Z]{1,}/.test(value))) return false;
		return (/\d+/).test(value);
		//return (new RegExp("[\\w|\\d]+").test(value));
	}
	path(value:string){
		let reg = /^([\/|\w|\-|\:])+/;
		if(reg.test(value)) return true;
		return false;
	}
	http(value:string){
		let reg = /^(http|https):\/\/[\w|\:|\d|\/]+$/;
		return value.search(reg)>=0;
	}
	empty(value:string){
		return value?value.length>0:false;
	}
}