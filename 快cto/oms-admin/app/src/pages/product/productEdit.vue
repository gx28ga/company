<template>
  <page>
    <el-row slot="header" :span="24">
      <el-col :span="14">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
          <el-breadcrumb-item><span  @click="$router.go(-1)">商品列表</span></el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$route.params.id?'编辑商品':'新增商品'}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col class="header-btn-group" :span="10">
        <el-button @click="$router.go(-1)" size="small">返回</el-button>
        <el-button @click="save" type="primary" size="small">保存</el-button>
      </el-col>
    </el-row>
    <el-tabs v-model="activeName">
      <!--============================= 基本信息 =====================================-->
      <el-tab-pane label="基本信息" name="basic">
        <el-form class="edit-form" :model="model" :rules="rules" ref="ruleForm"
                 labelPosition="right" labelWidth="150px" size="small">
          <el-form-item label="基础类目">
            <selects :options="categoryClass"
              ref="category"
              :data="model.categoryIdPath"
              :props="{label:'name',id:'categoryId',value:'categoryId'}"
              @selectChange="categorySelect">
            </selects>
          </el-form-item>
          <el-form-item label="商品类型">
            <el-select filterable v-model="model.attrTemplateId" @change="skuTestChange"  placeholder="请选择" >
              <el-option v-for="item in attrsClass" :key="item.templateName" :label="item.templateName" :value="item.attrTemplateId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品编号">
            <el-input style="width:60%" v-model="model.productNo"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input style="width:60%" v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input style="width:60%" type="textarea" v-model="model.briefName" :rows="2"></el-input>
          </el-form-item>
          <el-form-item label="品牌">
            <el-select filterable v-model="model.brandId" @change="brandChange" placeholder="请选择" >
              <el-option v-for="item in brandsClass" :key="item.name" :label="item.name" :value="item.brandId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标签">
            <el-input v-model="labelText" style="width:20%"></el-input>
            <el-button @click="addLabel" type="primary" size="small" style="margin-left:10px">添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-tag
              v-for="(tag,index) in tags"
              :key="index"
              @close="tagDelete(index)"
              size="small"
              closable>
              {{tag}}
            </el-tag>
          </el-form-item>
          <el-form-item label="缩略图">
            <Upload :limit="1" v-model="images.coverImage">
              <i class="el-icon-plus"></i>
            </Upload>
          </el-form-item>
          <el-form-item label="详情页头图">
            <template slot-scope="scope">
              <Upload
                v-model="images.swiper"
                :multiple="true"
                @onSuccess="pictureSuccessSwiper"
                :limit="5"
              >
                <i class="el-icon-plus"></i>
              </Upload>
              <div v-for='(item,index) in images.swiper' :key='index' style="float:left;width:157px;margin-top:-8px">
                <el-button round size="mini" @click="swiperLeft(index)" style="margin-left:10px"><i class="el-icon-arrow-left"></i></el-button>
                <el-button round size="mini" @click="swiperRight(index)" style="margin-left:10px"><i class="el-icon-arrow-right"></i></el-button>
              </div>
            </template>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!--============================= SKU信息 =====================================-->
      <el-tab-pane label="SKU信息" name="sku">
        <el-row>
          <el-col :span="23" style="margin-left:10px;">
            <el-table :data="model.specs" border>
              <el-table-column label="规格" align="center">
                <el-table-column align="center"
                                 v-for="(item,index) in skuTest.attrItems"
                                 :label="item.label" :key="index">
                  <template slot-scope="scope">
                    <span v-for="data in scope.row.specItems">
                      <span v-show="data.attrItemId == item.attrItemId">{{data.attrValue}}</span>
                    </span>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="SKU编号"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.specNo" size="mini"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="缩略图" width="120"  align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.coverImage" class="icon"/>
                </template>
              </el-table-column>
              <el-table-column label="建议售价"  align="center">
                <template slot-scope="scope">
                  <!--<el-input v-model="price[scope.$index].price" size="mini"></el-input>-->
                  <el-input v-model="scope.row.price" size="mini"></el-input>
                  <!-- scope.row.price -->
                </template>
              </el-table-column>
              <el-table-column label="最低售价"  align="center">
                <template slot-scope="scope">
                    <!--<el-input v-model="price[scope.$index].floorPrice" size="mini"></el-input>-->
                     <el-input v-model="scope.row.floorPrice" size="mini"></el-input>
                    <!-- scope.row.floorPrice -->
                </template>
              </el-table-column>
              <el-table-column label="吊牌价"  align="center">
                <template slot-scope="scope">
                    <!--<el-input v-model="price[scope.$index].tagPrice" size="mini"></el-input>-->
                     <el-input v-model="scope.row.tagPrice" size="mini"></el-input>
                    <!-- scope.row.tagPrice -->
                </template>
              </el-table-column>
              
              <el-table-column label="是否启用"  align="center">
                <template slot-scope="scope">
                  <el-switch
                    v-model="scope.row.enabled"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </el-switch>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="120px">
                <template slot-scope="scope">
                  <div class="opreator-cell">
                    <el-button type="text" size="mini" @click="changeSku(scope.row,scope.$index)">编辑</el-button>
                    <el-button  type="text" size="mini" @click="deleteSku(scope.$index)">移除</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <el-button @click="addSku" type="primary" size="mini">新增SKU</el-button>
          </el-col>
        </el-row>
        <!-- 编辑SKU -->
        <el-dialog title="编辑SKU" :close-on-click-modal="false" :show-close="false" :visible.sync="dialogSku" width="800px">
          <el-form class="dialog-form" labelPosition="right" labelWidth="120px" size="small">
            <el-form-item label="缩略图">
              <Upload :limit="1" v-model="skuCoverImage">
                <i class="el-icon-plus"></i>
              </Upload>
            </el-form-item>
            <el-form-item label="SKU编号">
              <el-input style="width:200px" v-model="skuModle.specNo"></el-input>
              <el-checkbox v-model="skunumChecked">自动生成</el-checkbox>
            </el-form-item>
            <el-form-item :label="items.label" v-for="(items,index) in skuTest.attrItems" :key="index">
              <el-select v-model="specItems[index].attrValue"  placeholder="请选择" v-if="items.customizable">
                <el-option v-for="item in items.attrOptions" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
              <el-select filterable allow-create v-model="specItems[index].attrValue"  placeholder="请选择" v-else>
                <el-option v-for="item in items.attrOptions" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            
            <!-- <el-form-item label="最小包装单位">
              <el-select filterable v-model="skuModle.minUnit"  placeholder="请选择" >
                <el-option v-for="item in brandsClass" :key="item.value" :label="item.name" :value="item.brandId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="重量">
              <el-input style="width:130px" v-model="skuModle.weight"></el-input>
              <el-select filterable v-model="skuModle.weightUnit" style="width:90px;">
                <el-option v-for="item in brandsClass" :key="item.value" :label="item.name" :value="item.brandId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="体积" class="clear-form">
              <el-form :inline="true" labelPosition="right" labelWidth="20px" size="mini" style="margin-left:-20px;">
                <el-form-item label="长">
                  <el-input style="width:60px" v-model="skuModle.volumeLength"></el-input>
                  <el-select filterable v-model="skuModle.volumeLengthUnit" style="width:90px;">
                    <el-option v-for="item in brandsClass" :key="item.value" :label="item.name" :value="item.brandId">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="宽">
                  <el-input style="width:60px" v-model="skuModle.volumeWidth"></el-input>
                  <el-select filterable v-model="skuModle.volumeWidthUnit" style="width:90px;">
                    <el-option v-for="item in brandsClass" :key="item.value" :label="item.name" :value="item.brandId">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="高">
                  <el-input style="width:60px" v-model="skuModle.volumeHeight"></el-input>
                  <el-select filterable v-model="skuModle.volumeHeightUnit" style="width:90px;">
                    <el-option v-for="item in brandsClass" :key="item.value" :label="item.name" :value="item.brandId">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-form-item> -->
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogSku = false" size="small">取 消</el-button>
            <el-button type="primary" @click="saveSku" size="small">确 定</el-button>
          </span>
        </el-dialog>  
      </el-tab-pane>
      <!--============================= 显示属性 =====================================-->
      <el-tab-pane label="显示属性" name="showAttr">
        <el-row class="show-attr" v-for="(items,index1) in skuTest.attrGroups" :key="index1">
          <el-col class="show-attr-title" :span="1" :offset="2">
            <p>{{items.groupName}}</p>
          </el-col>
          <el-col :span="14">
            <el-form class="edit-form" labelPosition="right" labelWidth="150px" size="small">
              <el-form-item :label="item.label" v-for="(item,index2) in items.attrItems" :key="index2">
                <el-input style="width:60%" v-if="item.valueType == 'TEXT'" v-model="attrGroups[index1].attrs[index2].attrValue"></el-input>
                <el-radio-group v-if="item.valueType == 'SINGLE'" v-model="attrGroups[index1].attrs[index2].attrValue">
                  <el-radio :label="data" v-for="data in item.attrOptions" :key="data"></el-radio>
                </el-radio-group>
                <el-checkbox-group v-if="item.valueType == 'MULTI'" v-model="attrGroups[index1].attrs[index2].attrValue">
                  <el-checkbox :label="data" v-for="data in item.attrOptions" :key="data"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
             
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <!--============================= 详细描述(PC) =====================================-->
      <el-tab-pane label="详细描述(PC)" name="detailPC">
        <el-row v-for="(item,index) in model.descriptions" :key="index" style="margin-bottom:0">
          <quill-editor v-if="item.type=='RICH_TEXT'" v-model="item.description"></quill-editor>
        </el-row>
      </el-tab-pane>
      <!--============================= 详细描述(手机) =====================================-->
      <el-tab-pane label="详细描述(手机)" name="detailPH">
        <el-row v-for="(item,index) in model.descriptions" :key="index" style="margin-bottom:0">
          <contentBlockEditor v-if="item.type=='MEDIA'" :models.sync='item.contents' style="width:900px;"></contentBlockEditor>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </page>
</template>

<script>
import contentBlockEditor from "../../components/common/contentBlockEditor.vue";
import { quillEditor } from 'vue-quill-editor'
import selects from "../../components/common/selects";
import {
  productApi,
  brandApi,
  attrTemplateApi,
  categoryApi
} from '../../api/goods-api.js'
import SkuUtil from "../../Utils/product/SkuUtil";
import SkuDto from "../../dto/product/SkuDto";
export default {
    created() {
      if(this.$route.params.id){
        this.getDetail(this.$route.params.id)
      }
      this.getBrands()
      this.getAttrs()
      this.getCategory()
    },

    methods:{
      //获取商品信息
      getDetail(id){
        let vm = this;
        productApi.get(id).then(res=>{
          vm.model = res;
          if(!vm.model.specs){
            vm.model.specs = []
          }
          //标签处理
          if(!vm.model.specs){
            vm.model.specs = []
          }
          if(vm.model.tags.length>0){
            vm.tags = res.tags.split(',')
          }
         
          //缩略图
          if(res.coverImage){
            vm.images.coverImage.push({url:res.coverImage})
          }
          res.productMedias.forEach(item => {
            vm.images.swiper.push({url:item.mediaUrl,mediaType:'STATIC_IMG' })
          })
          //规格价格
		  res.specs = SkuUtil.toDto(res.specs);
          //debugger;
          /*res.specs.forEach(item=>{
            vm.price.push({
              price:item.price?item.price/100:'',
              floorPrice:item.floorPrice?item.floorPrice/100:'',
              tagPrice:item.tagPrice?item.tagPrice/100:'',
            })
          })*/
          //显示属性
          if(!res.attrGroups){
            res.attrGroups = []
          }
          attrTemplateApi.get(res.attrTemplateId).then(function(data) {
            vm.skuTest = data;
            vm.attrGroups = []
            vm.skuTest.attrGroups.forEach((group,i)=>{
              vm.attrGroups.push({"attrGroupId": group.attrGroupId,'groupName':group.groupName,attrs:[]})
              group.attrItems.forEach((item)=>{
                if(item.valueType == 'MULTI'){
                  vm.attrGroups[i].attrs.push({'attrValue':[],'attrItemId':item.attrItemId,'attrName':item.label,'valueType':'MULTI'})
                }else{
                  vm.attrGroups[i].attrs.push({'attrValue':'','attrItemId':item.attrItemId,'attrName':item.label})
                }
              })
            })
            //显示属性回显
            vm.attrGroups.forEach((item1,i)=>{
                vm.model.attrGroups.forEach((item2,j)=>{
                  if(item1.attrGroupId == item2.attrGroupId){
                    vm.attrGroups[i].attrs.forEach((data1,x)=>{
                      vm.model.attrGroups[j].attrs.forEach((data2,y)=>{
                        if(data1.attrItemId == data2.attrItemId){
                          if(vm.attrGroups[i].attrs[x].valueType){
                            vm.attrGroups[i].attrs[x].attrValue = vm.model.attrGroups[j].attrs[y].attrValue.split(',')
                          }else{
                            vm.attrGroups[i].attrs[x].attrValue = vm.model.attrGroups[j].attrs[y].attrValue
                          }
                        }
                      })
                    })
                  }
                })
            })
            //规格数据处理
            vm.skuTest.attrItems.forEach(item=>{
              vm.specItems.push({"attrItemId": item.attrItemId,'attrName':item.label,'attrValue':''})
            })
          })
          //详细描述（手机）
          let media = true
          let rich = true
          vm.model.descriptions.forEach((item,i)=>{
            if(item.type=="MEDIA"){
              vm.model.descriptions[i].contents = JSON.parse(vm.model.descriptions[i].description)
              delete vm.model.descriptions[i].description
              media = false
            }
            if(item.type=="RICH_TEXT"){
              rich = false
            }
          })
          if(media){
            vm.model.descriptions.push({
              "type": "MEDIA",
              "contents": [{type:'TEXT',content:'',link:""}],
            })
          }
          if(rich){
            vm.model.descriptions.push({
              "type": "RICH_TEXT",
              "description": ""
            })
          }
 
        })
      },
      //品牌信息
      getBrands(){
        let vm = this;
        brandApi.find({limit:999}).then(function(res) {
          vm.brandsClass = res.items;
        })
      },
      //类型列表
      getAttrs(){
        let vm = this;
        attrTemplateApi.find({limit:999}).then(function(res) {
          vm.attrsClass = res.items;
        })
      },
      getCategory() {
        let vm = this;
        categoryApi.find({parentId:0,limit: 999}).then(res => {
          vm.categoryClass = res.items;
        });
      },
      categorySelect(data, callback) {
        categoryApi.find({parentId: data.id, limit: 99}).then(res => {
          callback(res.items, data)
        });
      },
      getAllCategory() {
        let select = this.$refs.category.selects ,
          len = select.length ,
          index = 0 ,
          names = "" , paths = "";
        let cate = {
          categoryId: 0,
          categoryName: 0,
          categoryIdPath: 0,
          categoryNamePath: 0
        };
        if(select.length>0&&select[len-1].id){
          cate.categoryId = select[len-1].id;
          cate.categoryName = select[len-1].label;
          for(;index<len;index++){
            names += ","+select[index].label;
            paths += ","+select[index].id;
          }
          names = names.replace(",","")
          paths = paths.replace(",","")
          cate.categoryIdPath = paths;
          cate.categoryNamePath = names;
          this.model.categoryId = cate.categoryId;
          this.model.categoryName = cate.categoryName;
          this.model.categoryIdPath = cate.categoryIdPath;
          this.model.categoryNamePath = cate.categoryNamePath;
        } else{
          this.$message.error("请选择类目")
        }
        
        
      },
      
      skuTestChange(id){
        let vm = this;
        vm.model.productType = (vm.attrsClass.find(item=> item.attrTemplateId == id)).templateName
        vm.model.specs.forEach(item=>{
          item.specItems = []
        })
        attrTemplateApi.get(id).then(function(res) {
          vm.skuTest = res;
          vm.specItems = []
          vm.skuTest.attrItems.forEach(item=>{
            vm.specItems.push({"attrItemId": item.attrItemId,'attrName':item.label,'attrValue':''})
          })
          vm.attrGroups = []
          vm.skuTest.attrGroups.forEach((group,i)=>{
            vm.attrGroups.push({"attrGroupId": group.attrGroupId,'groupName':group.groupName,attrs:[]})
            group.attrItems.forEach((item)=>{
              if(item.valueType == 'MULTI'){
                vm.attrGroups[i].attrs.push({'attrValue':[],'attrItemId':item.attrItemId,'attrName':item.label,'valueType':'MULTI'})
              }else{
                vm.attrGroups[i].attrs.push({'attrValue':'','attrItemId':item.attrItemId,'attrName':item.label})
              }
            })
          })
          //显示属性回显
          try{
            vm.attrGroups.forEach((item1,i)=>{
              vm.model.attrGroups.forEach((item2,j)=>{
                if(item1.attrGroupId == item2.attrGroupId){
                  vm.attrGroups[i].attrs.forEach((data1,x)=>{
                    vm.model.attrGroups[j].attrs.forEach((data2,y)=>{
                      if(data1.attrItemId == data2.attrItemId){
                        if(vm.attrGroups[i].attrs[x].valueType){
                          vm.attrGroups[i].attrs[x].attrValue = vm.model.attrGroups[j].attrs[y].attrValue.split(',')
                        }else{
                          vm.attrGroups[i].attrs[x].attrValue = vm.model.attrGroups[j].attrs[y].attrValue
                        }
                      }
                    })
                  })
                }
              })
          })
          }catch(err){}
        })

      },
      brandChange(id){
        this.model.brandName = (this.brandsClass.find(item=> item.brandId == id)).name;
        
      },
      // 基本信息
      addLabel(){
        var tagAdd = true
        this.tags.forEach(item=>{
            if(item == this.labelText){
                tagAdd = false
            }
        })
        if(this.labelText&&tagAdd){
        this.tags.push(this.labelText);
        }
        this.labelText = ''
      },
      tagDelete(index){
        this.tags.splice(index,1)
      },
      pictureSuccessSwiper(){
        this.images.swiper.splice(5);
      },
      swiperLeft(index){
        if (index === 0) {
          return
        }
        let item = this.images.swiper.slice(index-1,index+1).reverse()
        this.images.swiper.splice(index-1,2,item[0],item[1])
      },
      swiperRight(index){
        if (index===(this.images.swiper.length-1)){
          return
        }
        let item = this.images.swiper.slice(index,index+2).reverse()
        this.images.swiper.splice(index,2,item[0],item[1])
      },
      
      //SKU信息
      addSku(){
        this.skuCoverImage = []
        this.price.push({})
        this.dialogSku = true;
        this.skuModle = {}
        this.specItems = []
        this.skuTest.attrItems.forEach(item=>{
          this.specItems.push({"attrItemId": item.attrItemId,'attrName':item.label,'attrValue':''})
        })
      },
      changeSku(data,index){
        this.dialogSku = true;
        this.skuModle = JSON.parse(JSON.stringify(data));
        // this.skuModle = new SkuDto(this.skuModle,data._price,data._floorPrice,data._tagPrice);
        this.skuModle.index = index;
        this.skuCoverImage = [{url:data.coverImage}]
        if(this.skuModle.specItems&&this.skuModle.specItems.length!=0){
            this.specItems.forEach((item,i)=>{
              this.skuModle.specItems.forEach((data,j)=>{
                if(data.attrItemId == item.attrItemId){
                  this.specItems[i] = this.skuModle.specItems[j]
                }
              })
            })
        }
        if(this.skuModle.specItems&&this.skuModle.specItems.length==0){
          this.specItems = []
          this.skuTest.attrItems.forEach(item=>{
            this.specItems.push({"attrItemId": item.attrItemId,'attrName':item.label,'attrValue':''})
          })
        }
      },
      deleteSku(index){
        this.model.specs.splice(index,1)
        this.price.splice(index,1)
      },
          //本地保存sku信息
      saveSku(){
        let vm = this;
        let arr = this.model.specs;
        if(this.skuCoverImage.length>0){
          if(vm.skuCoverImage[0].response){
            this.skuModle.coverImage = Vue.options.filters.imageUrl(vm.skuCoverImage[0].response);
          }else{
            this.skuModle.coverImage = vm.skuCoverImage[0].url
          }
        }
        this.skuModle.enabled = true
        this.skuModle.specItems = this.specItems;
        if(this.skuModle.index||this.skuModle.index==0){
          // arr.splice(this.skuModle.index,1,new SkuDto(this.skuModle))
          arr.splice(this.skuModle.index,1,this.skuModle)
        }else{
          //this.model.specs.push(this.skuModle)
		      arr.push(this.skuModle)
        }
        let newSpecs = SkuUtil.add(arr);
        Vue.set(this.model,"specs",newSpecs);
		    this.dialogSku = false;
        this.skuCoverImage = []
      },

      //显示属性
      
      save(){
        this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          let vm = this;
          this.getAllCategory();
          
          //轮播图处理函数
          function buildImageUrl(uploaded) {
              if(uploaded.response){
                var url = Vue.options.filters.imageUrl(uploaded.response);
                return {
                  mediaUrl:url,
                  mediaType:'STATIC_IMG'
                }
              }else{
                return {
                  mediaUrl:uploaded.url,
                  mediaType:'STATIC_IMG'
                }
              } 
            }
            this.model.productMedias = []
            this.images.swiper.forEach(item => {
              this.model.productMedias.push(buildImageUrl(item));
            }); 
          //缩略图
          if(this.images.coverImage.length>0){
            if(vm.images.coverImage[0].response){
              vm.model.coverImage = Vue.options.filters.imageUrl(vm.images.coverImage[0].response)
            }else{
              vm.model.coverImage = vm.images.coverImage[0].url
            }
          } 
          //标签
          // console.log(vm.model)
          this.model.tags = this.tags.join(',');
          //SKU价格处理&检查规格是否填写完整
          let specInspect = true
          this.model.specs.forEach((item,index)=>{
            //价格
            /*vm.model.specs[index].price = vm.price[index].price*100;
            vm.model.specs[index].floorPrice = vm.price[index].floorPrice*100;
            vm.model.specs[index].tagPrice = vm.price[index].tagPrice*100;*/
            //规格
            if(item.specItems.length == 0){
              specInspect = false
            }
            item.specItems.forEach(data=>{
              if(data.attrValue == ''){
                specInspect = false
              }
            })
          })
          //检测分类是否选到底层
          if(vm.$refs.category.verification()){
            if(vm.model.specs.length != 0){
              
             if(specInspect){
            //显示属性
              this.attrGroups.forEach(item=>{
              item.attrs.forEach(data=>{
                if(data.attrValue instanceof Array){
                  data.attrValue = data.attrValue.join(',')
                }
              })
            })
            this.model.attrGroups = this.attrGroups;

            //保存
            if(this.$route.params.id){
              productApi.update(vm.$route.params.id,vm.model).then(res=>{
                vm.$message.success('保存成功')
                vm.$router.go(-1)
              })
            }else{
              productApi.create(vm.model).then(res=>{
                vm.$message.success('保存成功')
                vm.$router.go(-1)
              })
            }
            }else{this.$message.error("规格属性请填写完整")}
            }else{this.$message.error("请添加商品规格信息")}
            }else{vm.$message.error('请保证商品类别选择完整')}
            }else{this.$message.error('请将商品的基本信息填写完整')}
        })
      },
    },
    components: {
        contentBlockEditor,
        selects
    },
    data() {
        return {
          price:[],
          skuCoverImage:[],
          skuModle:{},
          attrGroups:[],
          tags:[],
          skuList:[],
          model:{
            'attrTemplateId':'',
            "productType": "",
            "brandId": '',
            "brandName": "",
            "categoryId": '',
            "categoryName": "",
            "productNo": "",
            "tags": "",
            "name": "",
            "productMedias": [],
            "specs": [],
            "descriptions": [{
              "type": "MEDIA",
              "contents": [{type:'TEXT',content:'',link:""}],
            }, {
              "type": "RICH_TEXT",
              "description": ""
            }]
          },
          brandsClass:[],
          attrsClass:[],
          brandId:'',
          activeName:'basic',
          fromList:{},
          skuTest:{
            "templateName": "",
            "attrItems": [],
            "attrGroups": []
          },
          labelText:'',
          labels:[],
          images:{
            coverImage:[],
            swiper:[]
          },
          specItems:[],
          dialogspecOptions:false,
          dialogSku:false,
          skuImage:[],
          skunumChecked:false,
          categoryClass:[],
          categoryModel:[],
          rules: {
            name: [
              { required: true, message: '请输入商品名称', trigger: 'blur' },
            ]
          }
        }
    }
};
</script>
<style lang="less">
    .clear-form{
        .el-form{
            padding-top:0;
        }
    }
.icon{
  max-width: 100px;
  max-height: 100px;
  display: block;
}
.image-type {
  width: 375px;
}

.imageStyle{
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.swiperTable tbody{
  display: flex;
}
.swiperTable tbody{
  display: flex;
}
.el-tag{
  margin-right:7px;
}
.sku-item{
  box-sizing: border-box;
  width:100%;
  color:#444;
  background:rgba(242, 242, 242, 1);
  font-size:14px;
  line-height: 35px;
  padding-left:20px;
  border-bottom:1px solid #D7D7D7;
}
.sku-radio{
  box-sizing: border-box;
  width:100%;
  margin:0 !important;
  height:30px;
  display:flex;
  align-items: center;
  justify-content: space-around;
  border-bottom:1px solid #D7D7D7;
  overflow: hidden;
}
.sku-radio span{
  box-sizing: border-box;
}
.show-attr{
  border-top:2px solid #dfe4ed;
  width:90%;
  margin:0 auto;
  font-size:13px;
  padding-top:20px;
  
}
.el-tab-pane{
  // width:80%;
  margin:0 auto;
  .ql-container{
    height:300px;
  }
}

</style>