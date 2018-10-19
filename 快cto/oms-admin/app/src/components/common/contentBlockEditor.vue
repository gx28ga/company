<template>
    <div class="content-edit" >
        <div v-for="(item,index) in models" :key="index">
          <el-row :span='24' v-if="item.type==='TEXT'">
            <el-col :span="16" >
                <div>
                    <el-input type="textarea" :autosize="{ minRows: 7, maxRows: 12}" placeholder="请输入内容" v-model="item.content">
                    </el-input>
                </div>
                <div style="margin-top:5px;">
                    <el-input type="text" v-model="item.link">
                        <el-button slot="prepend">跳转URL</el-button>
                    </el-input>
                </div>
            </el-col>
            <el-col :span="4" style="padding:5px 0 0 10px;">
                <el-button round size="mini" @click.native="_replaceMoudel('up',index)"><i class="el-icon-arrow-up"></i></el-button>
                <el-button round size="mini" @click.native="_replaceMoudel('down',index)"><i class="el-icon-arrow-down"></i></el-button>
                <el-dropdown>
                    <el-button round size="mini"><i class="el-icon-plus"></i></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="_addMoudel('text')">文本</el-dropdown-item>
                        <el-dropdown-item @click.native="_addMoudel('image')">图片</el-dropdown-item>
                        <!-- <el-dropdown-item @click.native="_addMoudel('auido')">音频-830</el-dropdown-item>
                        <el-dropdown-item @click.native="_addMoudel('video')">视频-830</el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button round size="mini" @click='_gotoRemove(index)' v-if="showRemoveBtn"><i class="el-icon-delete"></i></el-button>
            </el-col>
          </el-row>
          <el-row :span='24'  v-if='item.type==="IMAGE"'>
              <el-col :span="16">
                  <div>
                      <Upload :limit="1" 
                          v-model="Images[index]"
                          @onSuccess='_pictureSuccess'
                          @click.native='_imgClick(index)'
                        >
                          <i class="el-icon-plus"></i>
                      </Upload>
                  </div>
                  <div style="margin-top:5px;">
                      <el-input type="text" v-model="item.link">
                          <el-button slot="prepend">跳转URL</el-button>
                      </el-input>
                  </div>
              </el-col>
              <el-col :span="4" style="padding:5px 0 0 10px;">
                  <el-button round size="mini" @click.native="_replaceMoudel('up',index)"><i class="el-icon-arrow-up"></i></el-button>
                  <el-button round size="mini" @click.native="_replaceMoudel('down',index)"><i class="el-icon-arrow-down"></i></el-button>
                  <el-dropdown>
                      <el-button round size="mini"><i class="el-icon-plus"></i></el-button>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item @click.native="_addMoudel('text')">文本</el-dropdown-item>
                          <el-dropdown-item @click.native="_addMoudel('image')">图片</el-dropdown-item>
                          <!-- <el-dropdown-item @click.native="_addMoudel('auido')">音频-830</el-dropdown-item>
                          <el-dropdown-item @click.native="_addMoudel('video')">视频-830</el-dropdown-item> -->
                      </el-dropdown-menu>
                  </el-dropdown>
                  <el-button round size="mini" @click='_gotoRemove(index)' v-if="showRemoveBtn"><i class="el-icon-delete"></i></el-button>
              </el-col>
          </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props:{
      models:{
        type:Array,
        default:()=>{
            return [
                {type:'TEXT',content:'',link:""}
            ]
        }
        
      },
      baseImgUrl:{
        type:String,
        default:''
      }
    },
    data() {
        return{
          showRemoveBtn:false,
          imgIndex:1,
          Images:[],
          addPd:false,
        }
    },
    watch:{
      models:function(newValue, oldValue){
        if(newValue.length>1){
          this.showRemoveBtn = true  
        }else{
          this.showRemoveBtn = false 
        }
        _.forEach(newValue, (v, i) => {
          if(v.content===''){
            this.Images.push([])
          }else{
            if(this.addPd){
                  this.Images.push([{url:''}])
              }else{
                  this.Images.push([{url:v.content}])
              }
          }
        });
        // console.log(this.Images,this.Images[0])
      }
    },
    methods: {
        _gotoRemove(index) {// 移除模块
          this.models.splice(index, 1);
          // this.$emit('remove', this.index)
        },
        _addMoudel(type){ // 添加模块
        this.addPd=true
          if(type==='text'){
            this.models.push({type:'TEXT',content:'',link:""})
            this.Images.push([])
          }else if (type === 'image'){
            this.models.push({type:'IMAGE',content:'',link:""},)
            this.Images.push([])
          }else if (type ==='audio'){

          }else if (type === 'video'){
            
          }
        },
        _replaceMoudel(direction,index){// 切换模块位置
          if (direction==='up') {
            if (index === 0) {
              return
            }
            let item = this.models.slice(index-1,index+1).reverse()
            this.models.splice(index-1,2,item[0],item[1])

            let imgItem = this.Images.slice(index-1,index+1).reverse()
            this.Images.splice(index-1,2,imgItem[0],imgItem[1])
            } else if (direction==='down') {
              if (index===(this.models.length-1)){
                 return
              }
              let item = this.models.slice(index,index+2).reverse()
              this.models.splice(index,2,item[0],item[1])

              let imgItem = this.Images.slice(index,index+2).reverse()
              this.Images.splice(index,2,imgItem[0],imgItem[1])
          }
        },
        _imgClick(index){ //点击规格上传图片时候存储当前的索引值
          // console.log(index)
          this.imgIndex = index
        },
        _pictureSuccess(response,file, fileList){// 选中详情页头图(轮播)
          this.models[this.imgIndex].content= 'http://pb9tpwgos.bkt.clouddn.com/'+response
        },
    },
    computed: {
        dataModel: {
            get() {
                return this.models;
            },
            set(val) {
                this.$emit("update:models", val);
            }
        }
        //  isDisabled:{
        //    get() {
        //     return !this.model;
        //   },
        //   set(val) {
        //     this.$emit("update:model", val);
        //   }
        // },
    }
};
</script>
<style>
.content-edit .el-row {
    margin: 0 0 10px 0;
    padding-bottom:10px;
    border-bottom: 1px dotted #ddd;
}

.content-edit .el-upload--picture-card,
.content-edit .el-upload-list--picture-card .el-upload-list__item {
    width: 100%;
    height: auto;
    min-height: 146px;
}
</style>