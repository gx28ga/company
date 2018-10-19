/**
*  author : bo.peng
*  createTime 2018-10-16 12:46
*  description : 联级选择匡
*/
<template>
    <div class="v-selects" v-if="children.length">
        <div class="v-select" v-for="(options,index) in children" :key="options.value">
            <el-select v-model="value[index]" @change="change" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.id"
                        :name="item.label"
                        :label="item.label"
                        :value="item.keys">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
  import Selects from "../dto/Selects";

  export default {
	name: "selects",
	data() {
	  return {
		children: [], //联级
		value: [],
		selects: [],//当前选择的数组
	  }
	},
	props: {
	  options: Object | Array,
      data : String,
	  props: {
		type: Object,
		default: {
		  label: 'label',
		  value: 'value',
		}
	  }
	},
	mounted() {
	},
	watch: {
	  data(){
	    this.addData(0);
      },
	  options() {
		this.render();
		this.addData(0);
	  },
	},
	methods: {
	  addData(index){//编辑内容时
	    if(this.children.length && this.data){
		  this.addDataChildren(index);
        }
      },
      addDataChildren( index ){
		let self = this ,
			ids = this.data.split(",") ,
            arr = this.children ,
            len = arr[index].length,
			i = 0;
		for (; i < len; i++) {
		  let obj = arr[index][i];
		  if (parseInt(obj.id) === parseInt(ids[index])) {
			self.value.splice(index, 1, obj.keys);
			//手动更新内容
			self.change(obj.keys);
		  }
		}
      },
	  change(keys) {
		let arr = keys.split(","),
			index = 0,
			len = this.children[arr[0]].length,
			obj;
		for (; index < len; index++) {
		  let child = this.children[arr[0]][index];
		  if (parseInt(child.id) === parseInt(arr[1])) {
			obj = child;
			break;
		  }
		}
		this.$emit("selectChange", obj, this.getChild);
	  },
	  render() {
		this.addChild(this.options);
	  },
	  addChild(_options) {
		let options = this.setItem(_options);
		let arr = this.children;
		let config = {
		  index: 0,
		  getKey(id) {//默认为类目id   0,1 0为第几个数组，1为数组下对像的当前ID
			return config.index + "," + id;
		  }
		};
		if (arr.length) {
		  config.index = arr.length;
		}
		options.map(data => {
		  data.keys = config.getKey(data.id);
		});
		arr.push(options);
		Vue.set(this, "children", arr);
	  },
	  setItem(options) { //字段转换
		if (!options) return;
		let self = this;
		return options.map(data => {
		  return new Selects(data, self.props);
		});
	  },
	  getChild(data, parent) {
		this.addSelects(parent);
		this.clearChildIndex(parent.arrIndex);
		if (!data.length) return;
		this.addChild(data);
		//如果有数据则填充
		this.addData(parent.arrIndex+1);
	  },
	  addSelects(obj) {//添加选择的选择匡
		let arr = this.selects;
		if (arr[obj.arrIndex]) {
		  arr[obj.arrIndex] = obj;
		} else {
		  arr.push(obj);
		}
	  },
	  clearChildIndex(index) { //清除选择
		index = parseInt(index);
		let arr = this.children,
			val = this.value,
			newArr = [], newVal = [],
			i = 0, j = 0;
		if (arr.length) {
		  while (i <= index) {
			newArr.push(arr[i]);
			i++;
		  }
		  Vue.set(this, "children", newArr);
		}
		if (val.length) {
		  while (j <= index) {
			newVal.push(val[j]);
			j++
		  }
		  Vue.set(this, "value", newVal);
		}
	  },
      verification(){
		return this.selects.length === this.children.length;
	  }
	}
  }
</script>

<style scoped>
    .v-selects {
        float: left;
    }

    .v-select {
        float: left;
        padding-right: 5px;
    }
</style>