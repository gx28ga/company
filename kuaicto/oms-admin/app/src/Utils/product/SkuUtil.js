/**
 *  author : bo.peng
 *  createTime 2018-10-17 14:45
 *  description :
 */
import SkuDto from "../../dto/product/SkuDto";

export default {
  add( arr ){
    let newArr = arr.map(obj=>{
      if(obj instanceof SkuDto){
        return obj;
	  }else{
		return new SkuDto(obj);
	  }
	});
    return this.sort(newArr,this.getKey(newArr));
  },
  getKey( arr ){//去重获取key
	let result = [];
	arr.forEach(obj=>{
	  result.push(obj.contrastValue);
	});
	return Array.from(new Set(result));
  },
  sort(arr,keys){
    let newArr = [];
    keys.forEach(key=>{
      arr.forEach((obj,i)=>{
        if(key==obj.contrastValue){
          if(!obj.index){
            obj.index = i;
		  }
          newArr.push(obj);
		}
	  })
	});
    return newArr;
  },
  toDto( arr ){
    return arr.map(obj=>{
      return new SkuDto(obj);
	})
  }
};