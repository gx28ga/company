/**
 *  author : bo.peng
 *  createTime 2018-10-17 14:47
 *  description :
 */
class Specitem{
  constructor(data){
    this.attrItemId = data.attrItemId;
    this.attrName = data.attrName;
    this.attrValue = data.attrValue;
  }
}
export default class SkuDto{
  constructor(data){
    if(!data._isSkuDto){
	  this.price = data.price?data.price/100:'';
	  this.floorPrice = data.floorPrice?data.floorPrice/100:'';
	  this.tagPrice = data.tagPrice?data.tagPrice/100:'';
	}else{
	  this.price = data.price;
	  this.floorPrice = data.floorPrice;
	  this.tagPrice = data.tagPrice;
	}
    this._isSkuDto = true;
    this.specId = data.specId;
	this.specNo = data.specNo;
	this.enabled = data.enabled;	
	this.name = data.name;
	this.coverImage = data.coverImage;
	this.shelves = data.shelves;
	this.minUnit = data.minUnit;
	this.weight = data.weight;
	this.weightUnit = data.weightUnit;
	this.volumeLength = data.volumeLength;
	this.volumeLengthUnit = data.volumeLengthUnit;
	this.volumeWidth = data.volumeWidth;
	this.volumeWidthUnit = data.volumeWidthUnit;
	this.volumeHeight = data.volumeHeight;
	this.volumeHeightUnit = data.volumeHeightUnit;
	this.specItems = data.specItems.map(obj=>{
	  return new Specitem(obj);
	});
    //用于对比
	try{
	  this.contrastValue = this.specItems[0].attrValue;
	}catch (e) {
	  console.log(this.specItems);
	}

  }
  /*get price(){
    return this._price?this._price/100:'';
  }
  get floorPrice(){
	return this._floorPrice?this._floorPrice/100:'';
  }
  get tagPrice(){
	return this._tagPrice?this._tagPrice/100:'';
  }*/
}