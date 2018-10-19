<template>
    <page>
        <el-row slot="header" :span="24">
            <el-col :span="14">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span @click="$router.go(-1)">商品类型</span></el-breadcrumb-item>
                    <el-breadcrumb-item>{{$route.params.id?'编辑商品类型':'新增商品类型'}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col class="header-btn-group" :span="10">
                <el-button size="small" @click="$router.go(-1)">返回</el-button>
                <el-button type="primary" size="small" @click="save">保存</el-button>
            </el-col>
        </el-row>
        <el-form class="edit-form" labelPosition="right" :model="model" :rules="rule" ref="ruleName" labelWidth="150px" size="small">
          <el-form-item label="商品类型名称" prop="templateName">
            <el-input style="width:60%" v-model="model.templateName"></el-input>
          </el-form-item>
        </el-form>
        <!-- 规格属性 -->
        <el-row>
            <el-col style="text-align:right;color:#666;width:150px;padding-right:20px;">
                规格属性
            </el-col>
            <el-col :span="20">
                <el-table :data="model.attrItems" width="100%" border>
                    <el-table-column label="规格名" align="center">
                        <template slot-scope="scope">
                            {{scope.row.label}}
                        </template>
                    </el-table-column>
                    <el-table-column label="类型" align="center">
                        <template slot-scope="scope">
                            {{scope.row.customizable | customizable}}
                        </template>
                    </el-table-column>
                    <el-table-column label="备选值" align="center">
                        <template slot-scope="scope">
                            <span v-if="(scope.row.attrOptions instanceof Array)">
                                {{scope.row.attrOptions.join(',')}}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="排序" align="center">
                        <template slot-scope="scope">
                            {{scope.row.displayOrder}}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" >
                        <template slot-scope="scope">
                            <div class="opreator-cell">
                                <el-button round size="mini" @click="changeAttrItem(scope.row,scope.$index)">编辑</el-button>
                                <el-button round size="mini" @click="deleteAttrItem(scope.$index)">移除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button size="small" @click="addAttrItem">添加规格</el-button>
                <!-- 规格属性编辑 -->
                <el-dialog title="编辑规格" :visible.sync="dialogAttrItem" width="400px">
                    <el-form class="dialog-form" :model="attrItem" :rules="ruleItem" ref="ruleItem" labelPosition="right" labelWidth="100px" size="small">
                        <el-form-item label="规格名称" prop="label">
                            <el-input style="width:200px;" v-model="attrItem.label"></el-input>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-radio-group v-model="attrItem.customizable">
                                <el-radio :label="false">不可自定义</el-radio>
                                <el-radio :label="true">可自定义</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="备选值">
                            <el-input v-model="labelText" style="width:40%"></el-input>
                            <el-button @click="addLabel" type="primary" size="small" style="margin-left:10px">添加</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-tag
                            v-for="(tag,index) in attrItem.attrOptions"
                            :key="index"
                            @close="deleteLabel(index)"
                            size="small"
                            closable>
                            {{tag}}
                            </el-tag>
                        </el-form-item>
                        <el-form-item label="排序">
                            <el-input-number v-model="attrItem.displayOrder"></el-input-number>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogAttrItem = false" size="small">取 消</el-button>
                        <el-button type="primary" @click="editAttrItem" size="small">确 定</el-button>
                    </span>
                </el-dialog>
            </el-col>
        </el-row>
        <!-- 显示属性 -->
        <el-row >
            <el-col style="text-align:right;color:#666;width:150px;padding-right:20px;">显示属性</el-col>
            <el-col :span='20' style="border-top:1px solid #E6EBF5;border-bottom:1px solid #E6EBF5">
                <p v-if="model.attrGroups.length==0||!model.attrGroups" class="no-model">暂无数据</p>
                <div class="shows-attr" v-for="(item,index) in model.attrGroups" :key="index" style="margin-bottom:0;" :span="20">
                    <div class="shows-title">
                        <span class="shows-name">分组：{{item.groupName}}</span>
                        <span class="shows-edit">
                            <el-button round size="mini" @click="addAttrGroup(index)">添加属性</el-button>
                            <el-button round size="mini" @click="changeGroup(item,index)">编辑</el-button>
                            <el-button round size="mini" @click="deleteGroup(index)">移除</el-button>
                        </span>
                        <span class="shows-num">排序：{{item.displayOrder}}</span>
                    </div>
                    <el-table :data="item.attrItems" width="100%" border>
                        <el-table-column label="属性名" align="center">
                            <template slot-scope="scope">
                                {{scope.row.label}}
                            </template>
                        </el-table-column>
                        <el-table-column label="类型" align="center">
                            <template slot-scope="scope">
                                {{scope.row.valueType | valueType}}
                            </template>
                        </el-table-column>
                        <el-table-column label="备选值" align="center">
                            <template slot-scope="scope">
                                <span v-if="(scope.row.attrOptions instanceof Array)">
                                    {{scope.row.attrOptions.join(',')}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column label="排序" align="center">
                            <template slot-scope="scope">
                                {{scope.row.displayOrder}}
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" align="center" >
                            <template slot-scope="scope">
                                <div class="opreator-cell">
                                    <el-button round size="mini" @click="changeAttrGroups(scope.row,index,scope.$index)">编辑</el-button>
                                    <el-button round size="mini" @click="deleteAttrGroups(index,scope.$index)">移除</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
        <el-button size="small" @click="addGroup" style="margin-left:150px;">添加分组</el-button>
        <!-- 显示属性分组 -->
        <el-dialog title="编辑" :visible.sync="dialogGroups" width="400px">
            <el-form class="dialog-form" :model="attrGroup" :rules="ruleGroup" ref="ruleGroup" labelPosition="right" labelWidth="100px" size="small">
                <el-form-item label="分组名称" prop="groupName">
                    <el-input style="width:200px;" v-model="attrGroup.groupName"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input-number v-model="attrGroup.displayOrder"></el-input-number>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogGroups = false" size="small">取 消</el-button>
                <el-button type="primary" @click="editGroups" size="small">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 显示属性属性 -->
        <el-dialog title="编辑" :visible.sync="dialogAttrGroups" width="400px">
            <el-form class="dialog-form" :model="attrItem" :rules="ruleItem" ref="ruleItem" labelPosition="right" labelWidth="100px" size="small">
                <el-form-item label="属性名称" prop="label">
                    <el-input style="width:200px;" v-model="attrItem.label"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-radio-group v-model="attrItem.valueType">
                        <el-radio label="TEXT">文本</el-radio>
                        <el-radio label="SINGLE">单选</el-radio>
                        <el-radio label="MULTI">多选</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="备选值" v-if="attrItem.valueType=='SINGLE'||attrItem.valueType=='MULTI'">
                    <el-input v-model="labelText" style="width:40%"></el-input>
                    <el-button @click="addLabel" type="primary" size="small" style="margin-left:10px">添加</el-button>
                </el-form-item>
                <el-form-item  v-if="attrItem.valueType=='SINGLE'||attrItem.valueType=='MULTI'">
                    <el-tag
                    v-for="(tag,index) in attrItem.attrOptions"
                    :key="index"
                    @close="deleteLabel(index)"
                    size="small"
                    closable>
                    {{tag}}
                    </el-tag>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input-number v-model="attrItem.displayOrder"></el-input-number>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAttrGroups = false" size="small">取 消</el-button>
                <el-button type="primary" @click="editAttrGroups" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </page>  
</template> 
<script>
import {
  attrTemplateApi
} from '../../api/goods-api.js'
export default {
    created() {
            if(this.$route.params.id){
                this.getDetail(this.$route.params.id)
            }
    },
    
    methods:{
        getDetail(id){
            attrTemplateApi.get(id).then(res=>{
                this.model = res
                if(!this.model.attrItems){
                    this.model.attrItems = []
                }
                if(!this.model.attrGroups){
                    this.model.attrGroups = []
                }
            })
            
        },
        addLabel(){
            var tagAdd = true
            this.attrItem.attrOptions.forEach(item=>{
                if(item == this.labelText){
                    tagAdd = false
                }
            })
            if(this.labelText&&tagAdd){
            this.attrItem.attrOptions.push(this.labelText);
            }
            this.labelText = ''
        },
        deleteLabel(index){
            this.attrItem.attrOptions.splice(index,1)
        },
        //操作规格属性
        addAttrItem(){
            this.attrItem = {
                'attrOptions':[],
                'customizable':false,
                'displayOrder':1,
                'itemType':'SPEC',
            },
            this.dialogAttrItem = true;
        },
        changeAttrItem(data,index){
            this.dialogAttrItem = true;
            this.attrItem = JSON.parse(JSON.stringify(data));
            this.attrItem.index = index;
        },
        editAttrItem(){
            this.$refs['ruleItem'].validate((valid) => {
                if (valid) {
                    this.dialogAttrItem = false;
                    if(this.attrItem.index == 0||this.attrItem.index){
                        this.model.attrItems.splice(this.attrItem.index,1,this.attrItem)
                    }else{
                        this.model.attrItems.push(this.attrItem)
                    }
                }
            })
        },
        deleteAttrItem(index){
            this.model.attrItems.splice(index,1)
        },
        
        //显示属性分组操作
        addGroup(){
            this.dialogGroups = true;
            this.attrGroup = {
                'attrItems':[],
                'displayOrder':1,
            }
        },
        changeGroup(data,index){
            this.dialogGroups = true;
            this.attrGroup = JSON.parse(JSON.stringify(data));
            this.attrGroup.index = index;
        },
        editGroups(){
            this.$refs['ruleGroup'].validate((valid) => {
                if (valid) {
                    this.dialogGroups = false;
                    if(this.attrGroup.index == 0||this.attrGroup.index){
                        this.model.attrGroups.splice(this.attrGroup.index,1,this.attrGroup)
                    }else{
                        this.model.attrGroups.push(this.attrGroup)
                    }
                }
            })
        },
        deleteGroup(index){
            this.model.attrGroups.splice(index,1)
        },
        //显示属性属性操作
        addAttrGroup(index){
            this.attrItem = {
                'attrOptions':[],
                "valueType": "TEXT",
                'displayOrder':1,
                'index':index,
                'itemType':'DISPLAY',
            },
            this.dialogAttrGroups = true;
        },
        changeAttrGroups(data,index1,index2){
            this.dialogAttrGroups = true;
            this.attrItem = JSON.parse(JSON.stringify(data));
            this.attrItem.index1 = index1;
            this.attrItem.index2 = index2;
            if(!this.attrItem.attrOptions){
                this.attrItem.attrOptions = []
            }
        },
        editAttrGroups(){
            this.$refs['ruleItem'].validate((valid) => {
                if (valid) {
                    this.dialogAttrGroups = false;
                    if(this.attrItem.valueType=='TEXT'){
                        delete this.attrItem.attrOptions
                    }
                    if(this.attrItem.index2 == 0||this.attrItem.index2){
                        this.model.attrGroups[this.attrItem.index1].attrItems.splice(this.attrItem.index2,1,this.attrItem)
                    }else{
                        this.model.attrGroups[this.attrItem.index].attrItems.push(this.attrItem)
                    }
                }
            })
        },
        deleteAttrGroups(index1,index2){
            this.model.attrGroups[index1].attrItems.splice(index2,1)
        },
        //保存
        save(){
            this.$refs['ruleName'].validate((valid) => {
                if (valid) {
                    
                    if(this.$route.params.id){
                        attrTemplateApi.update(this.$route.params.id,this.model).then(res=>{
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.$router.go(-1)
                        })
                    }else{
                        attrTemplateApi.create(this.model).then(res=>{
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.$router.go(-1)
                        })
                    }
                    
                }
            })
        },
    },

    filters: {
        customizable: val=> {
            return {
                true:'可自定义',
                false:'不可自定义'
            }[val]
        },
        valueType: val=> {
            return {
                'TEXT':'文本',
                'SINGLE':'单选',
                'MULTI':'多选'
            }[val]
        },
    },
    watch:{
        dialogAttrItem(){
            if(this.dialogAttrItem==false){
                this.labelText = ''
            }
        },
        dialogAttrGroups(){
            if(this.dialogAttrGroups==false){
                this.labelText = ''
            }
        }
    },
    data(){
        return{
            dialogAttrItem:false,
            dialogAttrGroups:false,
            dialogGroups:false,
            labelText:'',
            model:{
                "templateName": "",
                "attrItems": [],
                "attrGroups": []
            },
            attrItem:{
                'attrOptions':[],
            },
            attrGroup:{
                'attrItems':[]
            },
            ruleItem:{
                 label: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
            },
            ruleGroup:{
                groupName: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
            },
            rule:{
                templateName: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
            },
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
        box-sizing: border-box;
        line-height: 30px;
        background:#F2F2F2;
        padding-left:20px;
        .shows-name{
            float:left;
            font-weight: bold;
        }
        .shows-num{
            float:right;
            margin-right:150px;
        }
        .shows-edit{
            float:right;
            margin-right:30px;
        }
    }
    .no-model{
        font-size:14px;
        margin:0 auto;
        width:100px;
        color:#666;
        height:60px;
        line-height:60px;
    }
</style>
