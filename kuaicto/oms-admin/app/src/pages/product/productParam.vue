<template>
    <page>
        <el-row slot="header" :span="24">
            <el-col :span="14">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item>参数配置</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col class="header-btn-group" :span="10">
                <el-button type="primary" size="small" @click="">保存</el-button>
            </el-col>
        </el-row>
        <el-form class="edit-form" labelPosition="right" labelWidth="150px" size="small">
          <el-form-item label="包装单位">
            <el-input v-model="labelText" style="width:20%"></el-input>
            <el-button @click="addLabel" type="primary" size="small" style="margin-left:10px">添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-tag
              v-for="(tag,index) in labels"
              :key="index"
              @close="tagDelete(index)"
              size="small"
              closable>
              {{tag}}
            </el-tag>
          </el-form-item>

          <el-form-item label="重量单位">
            <el-input v-model="labelText" style="width:20%"></el-input>
            <el-button @click="addLabel" type="primary" size="small" style="margin-left:10px">添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-tag
              v-for="(tag,index) in labels"
              :key="index"
              @close="tagDelete(index)"
              size="small"
              closable>
              {{tag}}
            </el-tag>
          </el-form-item>

          <el-form-item label="体积单位">
            <el-input v-model="labelText" style="width:20%"></el-input>
            <el-button @click="addLabel" type="primary" size="small" style="margin-left:10px">添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-tag
              v-for="(tag,index) in labels"
              :key="index"
              @close="tagDelete(index)"
              size="small"
              closable>
              {{tag}}
            </el-tag>
          </el-form-item>
        </el-form>
       
        
    </page>  
</template> 
<script>
import {
  
} from '../../api/goods-api.js'
export default {
    mounted() {
      
    },

    methods:{
        addLabel(){
            if(this.labelText){
            this.labels.push(this.labelText);
            }
            this.labelText = ''
        },
        tagDelete(index){
            this.labels.splice(index,1)
        },
    },
    data(){
        return{
            dialogSku:false,
            labelText:'',
            labels:[],
        }
    }
}
</script>

    
<style lang="less">
    .sku-name{
        width:150px;
        padding:0 20px 0 10px;
        text-align: right;
        color:#666;
        
    }
    .shows-title{
        width:100%;
        height:30px;
        line-height: 30px;
        background:#F2F2F2;
        padding-left:20px;
        .shows-name{
            float:left;
            font-weight: bold;
        }
        .shows-num{
            float:right;
            margin-right:100px;
        }
        .shows-edit{
            float:right;
            margin-right:100px;
        }
    }
</style>
