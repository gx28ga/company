/**
 *@author bo.peng
 *@createTime 05 2018/9/5
 *@description 提示
 */
export default class TabInfo{
	/**
	 * 空
	 */
	private _empty: string;
	/**
	 * 未输入提示
	 */
	private _tips:string;
	/**
	 * 错误提示
	 */
	private _error:string;

	constructor(empty:string,tips:string,error:string){
		this._empty = empty;
		this._tips = tips;
		this._error = error;
	}

	set empty(value: string){
		this._empty = value;
	}
	get empty(){
		return this._empty;
	}

	set tips(value: string){
		this._tips = value;
	}
	get tips(){
		return this._tips;
	}
	set error(value: string){
		this._error = value;
	}
	get error(){
		return this._error;
	}
}