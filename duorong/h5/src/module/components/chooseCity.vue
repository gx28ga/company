/**
* 选择城市
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
    .chooseCity{
        width:100%;
        .title{
            display:flex;
            background:#f8f8f8;
            .cancel,.ok{
                color:#1a6bcf;
            }
        }
        h2{
            flex:1;
        }
        .content{
        }
        .select{
            display:block;
            width:100%;
            height:33px;
            margin-bottom:5px;
            text-align:center;
            text-align-last: center;
        }
    }
</style>
<template>
	<article class="chooseCity" v-if="provinces">
        <div class="title img-size" data-height="100" data-lineHeight="100" data-paddingLeft="20" data-paddingRight="20">
            <div class="cancel" @click="cancel">取消</div>
            <h2 class="img-size" data-fontSize="32">城市选择</h2>
            <div class="ok" @click="ok">确定</div>
        </div>
        <div class="content img-size" data-padding="20">
            <select class="select" v-model="province">
                <option value="-1">请选择省份</option>
                <option v-for="item in provinces" v-bind:key="item.id"
                         v-bind:value="item">
                    {{isCode?item.province:item.name}}
                </option>
            </select>
            <select class="select" v-model="city">
                <option value="-1">请选择城市</option>
                <option v-for="item in citys" v-bind:key="item.id"
                        v-bind:value="item">
                    {{isCode?item.city:item.name}}
                </option>
            </select>
            <select class="select" v-if="!isCode" v-model="county">
                <option value="-1">请选择区域</option>
                <option v-for="item in countys" v-bind:key="item.id"
                        v-bind:value="item">
                    {{item}}
                </option>
            </select>
        </div>
    </article>
</template>

<script>
	export default {
	    props:{
            member : Object,
            user : Object,
            isCode : {
                default : false,
                type : Boolean
            }
        },
	    data(){
	        return{
                provinces:[],
                province:-1, //省
                citys:[],
                city:-1, //城市
                countys:[],
                county : -1,//县城
            }
        },
		mounted(){
		    this.$nextTick(()=>{
                this.setImgSize();
            });
		    if(!this.isCode){
                this.provinces = require("../../../static/province");
            }else{
                this.provinces = require("../../../static/citys");
            }
        },
        watch:{
            province(obj){
                this.citys = this.isCode?obj.citys : obj.city;
                this.city = -1;
            },
            city(obj){
                this.countys = obj.area;
                this.county = -1;
            }
        },
        methods:{
		    ok(){
		        if(this.province===-1 || this.city===-1 || (this.county===-1 && !this.isCode)){
                    this.$pop({
                        title : "错误",
                        close : true,//是否显示关闭按钮
                        content : "请选择所有选择项",
                        icon : "icon2",//icon1 确定 2取消 3提示
                    });
                }else{
                    this.$emit("$choose",{
                        province : this.province,
                        city : this.city,
                        county : this.county
                    });
                }
		        this.$parent.close();
            },
            cancel(){
                this.province = -1;
                this.city = -1;
                this.county = -1;
                this.$parent.close();
            }
        }
	}
</script>
