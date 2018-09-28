import Vue from "vue";
import Component from 'vue-class-component';
import Verification from "./Verification";
import TabInfo from "../../dto/TabInfo";
import Rule from "../../dto/Rule";

@Component
export default class UserTableVerification extends Vue{
	private verification:Verification = new Verification();
	userName(rule:Rule,info:TabInfo,min:number=6,max:number=20){
		let msg: string = !this.verification.empty(rule.value)?info.empty:
			!this.verification.numAndLetter(rule.value,min,max)?info.error:
				"true";
		msg==="true"?rule.callback():rule.callback(new Error(msg));
	}
	password(rule:Rule,info:TabInfo,min:number=6,max:number=20){
		let msg: string = !this.verification.empty(rule.value)?info.empty:
				!this.verification.numAndLetter(rule.value,min,max)?info.error:
					"true";
		msg==="true"?rule.callback():rule.callback(new Error(msg));
	}
	checkPass(rule:Rule,info:TabInfo,min:number=6,max:number=20){
		let msg: string = !this.verification.empty(rule.value)?info.empty:
			//@ts-ignore
			!(rule.value===rule.ruleForm.password)?info.error:
				"true";
		msg==="true"?rule.callback():rule.callback(new Error(msg));
	}
}
