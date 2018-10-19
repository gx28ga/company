/**
 *@author bo.peng
 *@createTime 05 2018/9/5
 *@description 表单验证类
 */
export default class Rule{
	private _rule:object;
	private _value:string;
	private _callback:Function;
	/**
	 * ruleForm为 component
	 */
	private _ruleForm:Object;

	constructor(rule:object,value:string,callback:Function,ruleForm:Object){
		this._rule = rule;
		this._value = value;
		this._callback = callback;
		this._ruleForm = ruleForm;
	}

	set rule(value:object){
		this._rule = value;
	}
	get rule(){
		return this._rule;
	}
	set value(value:string){
		this._value = value;
	}
	get value(){
		return this._value;
	}
	set callback(fn:Function){
		this._callback = fn;
	}
	get callback(){
		return this._callback;
	}
	set ruleForm(value:Object){
		this._ruleForm = value;
	}
	get ruleForm(){
		return this._ruleForm;
	}
}