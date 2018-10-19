<template>
    <span class="impSkuDialog">
        <!--<el-button  @click="dialogVisible = true"  type="primary">创建</el-button>-->
        <el-dialog :title="title" :visible.sync="dialogVisible" size="small" :close-on-click-modal="false" @open="handleOpen" >
            <el-form :model="ruleForm" label-position="left"  ref="ruleForm" :rules="rules">
                <el-form-item prop="name" label="菜单名称" >
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item prop="url" label="访问地址" >
                    <el-input  v-model="ruleForm.url"></el-input>
                </el-form-item>
                  <el-form-item prop="code" label="Code" >
                    <el-input  v-model="ruleForm.code"></el-input>
                </el-form-item>
                <el-form-item prop="menuType" label="类型">
                    <el-select v-model="ruleForm.menuType" placeholder="请选择">
                        <el-option label="按钮" value="POINT"></el-option>
                        <el-option label="菜单" value="MENU"></el-option>
                          <el-option label="API" value="API"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="remark" label="备注">
                    <el-input :autosize="{ minRows: 5, maxRows: 10}"  type="textarea" v-model="ruleForm.remark"></el-input>
                </el-form-item>
                <!--<el-form-item prop="status" label="是否启用">-->
                    <!--<el-radio-group v-model="ruleForm.status">-->
                        <!--<el-radio label="ACTIVATE">启用</el-radio>-->
                        <!--<el-radio :label="6">禁用</el-radio>-->
                    <!--</el-radio-group>-->
                <!--</el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible =false">取 消</el-button>
                <el-button type="primary" @click="gotoReset('ruleForm')">确 定</el-button>
            </div>

        </el-dialog>
    </span>
</template>
<script>

    import { enterpriseSellerAuthEditApi,createMenu,editMenuApi,detailMenuApi} from '../../api/api'

    function hasValue(data,rule) { // data:数据较全的父类 rule:数据较少的子类
        $.each(rule,function (k,v) {
            $.each(data,function (key,value) {
                if (typeof (rule[key])=='undefined'){
                    delete data[key];
                }
            })
        })
        return data
    }
    export default{
        name:'CardDialog',
       
        props:['shows','dataList','store','type','types'],
        watch:{
            dialogVisible:function (newValue) {
                if (newValue == false){
                    this.$emit('reload',false)
                }
            },
            shows:function (newValue) {
                this.dialogVisible = newValue

            },
            dataList:function (newValue) {
                // console.log('-----',newValue,'-----')
            },
            store:function (newValue) {

            }
        },
        data(){
            return {
                dialogVisible: false,
                ruleForm: {
                    scope:'',
                    code:'',
                    url:'',
//                    status:'',
                    remark:'',
                    name:'',
//                    menuId:'',
                    menuType:'',
                    parentId:''
                },
                dataId:'',
                rules: {



                }
            }
        },
        computed:{
            gotoShow(){
                return this.shows
            },
             title(){
                  return this.type == 'edit'?'编辑菜单':'创建菜单'
            }
        },
        mounted(){
            // console.log(this.userId)

        },



        filters:{

        },


        methods: {
            handleOpen(){
                var vm = this
                _.forEach(this.ruleForm,function (v,k) {
                    vm.ruleForm[k] = ''
                })

                if (this.type == 'edit'){
                    detailMenuApi(this.dataList.menuId).then(function (res) {
                        // console.log(res)
                        vm.ruleForm = hasValue(res,vm.ruleForm)
//                        vm.ruleForm.menuType =   vm.ruleForm.menuType
                    })
                }
            },
            gotoReset(formName){
                var vm = this;
                var _form = _.clone(this.ruleForm)
                if(this.type =='same'||this.type == 'next'){
                    _form.scope = this.types
                    _form.parentId = this.type == 'same'? this.dataList.parentId:this.dataList.menuId
                    createMenu(_form).then(function (res) {
                        vm.$message({
                            type:'success',
                            message:'新增成功'
                        })
                        vm.$emit('reload',false)

                    }).catch(function (err) {
                        vm.$message({
                            type:'error',
                            message:'已拒绝'
                        })

                    })
                }else {
                    _form.parentId = this.dataList.parentId;
                    editMenuApi(this.dataList.menuId,_form).then(function (res) {
                    vm.$message({
                        type: 'success',
                        message: '修改成功'
                    })
                    vm.$emit('reload', false)
                    }).catch(function (err) {
                        vm.$message({
                            type: 'error',
                            message: '修改失败'
                        })
                    })
                }
                vm.dialogVisible = false
            }



        }
    }

</script>
<style>
    .margin-bottom {
        margin-bottom: 20px;
    }
    .dialog{
        width: 100%;
        min-height:250px;
        overflow-y:auto;
        max-height:300px;
    }
</style>
