/**
 *@author bo.peng
 *@createTime 04 2018/9/4
 *@description 常用dom操作
 */
let query:Function = function(selector:string,context:any){
	// @ts-ignore
    return new query.fn.init(selector,context);
};
// @ts-ignore
query.fn = query.prototype = {
	version : "1.0.0",
	init( selector:string , context:any ){
		var match;
		if(!selector) return this;
		if ( selector[ 0 ] === "<" &&
			selector[ selector.length - 1 ] === ">" &&
			selector.length >= 3 ) {
			match = [ null, selector, null ];
		} else {
			match = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/.exec( selector );
		}
	}
};
// @ts-ignore
window.$ = query;