/**
 *  author : bo.peng
 *  createTime 2018-10-29 14:07
 *  description :
 */
const Util = {
  type( obj ){
	return Object.prototype.toString.call(obj);
  },
  deepClone : (obj)=>{
	let proto = Object.getPrototypeOf(obj);
	return Object.assign({},Object.create(proto),obj);
  },
  contrast:(obj , obj1)=>{ //对比
	if(!obj1) return true; //没有值，说明不需要对比
	return JSON.stringify(obj) === JSON.stringify(obj1);
  },
  pwdmd5( val ){
    if(val){
	  let md5 = require('md5');
	  return md5(val);
	}
  }
}
export default Util;