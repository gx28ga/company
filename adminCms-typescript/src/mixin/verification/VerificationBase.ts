/**
 *@author bo.peng
 *@createTime 05 2018/9/5
 *@description 基类
 */
export default interface VerificationBase{
    /**
     * 英文验证
     * @param min
     * @param max
     * @param value
     */
    english( value:string , min : number , max : number ):void;

	/**
	 * 中文验证
	 * @param min
	 * @param max
	 * @param value
	 */
	chinese( value:string , min:number,max:number ):void;

	/**
	 * 必需数字
	 * @param min
	 * @param max
	 * @param value
	 */
	number( value:string , min:number,max:number ):void;

	/**
	 * 包含数字和字母
	 * @param min
	 * @param max
	 * @param value
	 */
	numAndLetter( value:string , min:number , max:number ):void;

	/**
	 * 路经
	 * @param value
	 */
	path(value:string):void;

	/**
	 * url地址
	 * @param value
	 */
	http(value:string):void;

	/**
	 * 是否为空
	 * @param value
	 */
	empty(value:string):void;
}