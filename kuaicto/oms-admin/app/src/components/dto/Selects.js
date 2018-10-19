/**
 *  author : bo.peng
 *  createTime 2018-10-16 15:00
 *  description : 公共属性 selects
 */
export default class Selects{
	constructor(datas,props){
		this.datas = datas;
		this.init(props);
	}
	init(props){
		this.id = this.datas[props.id];
		this.label = this.datas[props.label];
		this.keys = "";
	}
	getKeys(){
		return this.keys.split(",");
	}
	get arrIndex(){ //获取当前所在的数组
		return parseInt(this.getKeys()[0]);
	}
}