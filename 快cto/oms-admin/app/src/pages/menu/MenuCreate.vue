<template>
    <Page>
        <el-row slot="header" :span="24">
            <el-col :span="16">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
                    <el-breadcrumb-item>菜单创建</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="上级菜单" required>
                <el-input v-model="ruleForm.lastMenu"></el-input>
            </el-form-item>
            <el-form-item prop="brandName" label="名称" >
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item prop="brandName" label="访问地址" >
                <el-input v-model="ruleForm.url"></el-input>
            </el-form-item>
            <el-form-item prop="brandNickName" label="类型">
                <el-select v-model="ruleForm.type" placeholder="请选择">
                    <el-option label="菜单" value="1"></el-option>
                    <el-option label="按钮" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="brandNickName" label="显示数序">
                <el-input type="number" v-model="ruleForm.sort"></el-input>
            </el-form-item>
            <el-form-item prop="remark" label="备注">
                <el-input :autosize="{ minRows: 5, maxRows: 10}"  type="textarea" v-model="ruleForm.remark"></el-input>
            </el-form-item>
            <el-form-item prop="show" label="是否启用">
                <el-radio-group v-model="ruleForm.show">
                    <el-radio :label="3">启用</el-radio>
                    <el-radio :label="6">禁用</el-radio>
                </el-radio-group>            </el-form-item>
            <!--<el-form-item prop="brand_name" label="品牌名称" >-->
            <!--<el-input v-model="ruleForm.brand_name"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="品牌名称1" >-->
            <!--<el-input v-model="brandAlias.brand_name1"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="品牌名称2" >-->
            <!--<el-input v-model="brandAlias.brand_name2"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="品牌名称3">-->
            <!--<el-input v-model="brandAlias.brand_name3"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="品牌名称4">-->
            <!--<el-input v-model="brandAlias.brand_name4"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="品牌名称5" >-->
            <!--<el-input v-model="brandAlias.brand_name5"></el-input>-->
            <!--</el-form-item>-->
        </el-form>
        <!--<span style="display: none">{{brandNameList}}</span>-->
        <div class="text-center">
            <el-button type="primary" @click="gotoCreate('ruleForm')">保存</el-button>
            <el-button @click="$router.go(-1)">返回</el-button>
        </div>
    </Page>
</template>
<script>
    import { getBrandDetailApi } from '../../api/api'
    import Page from '../../components/common/Page';
    import SudoUpload from '../../components/common/SudoUpload.vue';
    import Cookies from 'js-cookie';
    import { user as UserLogic, common } from '../../logic';
    const method =
    {
        uploadSuccess:uploadSuccess,
        uploadRemove:uploadRemove,
        gotoCreate:gotoCreate,
        brandNameChange:brandNameChange,
        getBrandDetial:getBrandDetial,



    }

    function getBrandDetial() {
        var id = this.$route.params.id;
        var vm = this
        getBrandDetailApi(id).then(function (res) {
            vm.ruleForm = hasValue(res.data.data,vm.ruleForm)
            vm.imgList = [];
            var imageUrl = UserLogic.getProfile().apiImageUrl
            var img =  imageUrl+'/'+vm.ruleForm.imgUrl
            vm.imgList.push({url:img});

        })
    }
    function  brandNameChange(data){
        console.log(data.replace(/\n/g,'|'))
    }
    function gotoCreate(formName) {
        var vm = this;
        if (!this.ruleForm.imgUrl){
            return this.$message({type:'error',message:'图片不能为空'})
        }
        this.$refs[formName].validate((valid) => {
            if (valid) {
//                this.ruleForm.brand_nick_name =  this.brandAliasStr
                brandEditApi(this.$route.params.id,this.ruleForm).then(function (res) {
                    vm.$message({type:'success',message:'编辑成功'})
                    vm.$router.go(-1)
                })
            } else {
                console.log('error submit!!');
        return false;
    }
    });
    }
    function uploadRemove(file, fileList) {
        this.ruleForm.imgUrl = ''
        this.imgList = []
    }
    function uploadSuccess(response, file, fileList) {
        this.ruleForm.imgUrl = file.response.data.data.file;
        this.imgList = fileList
    }
    export default {
        methods:method,
        mounted:function () {
            this.getBrandDetial();
        },
        computed: {

//            brandNameList(){
//                  var arr = []
//                    _.forEach(this.brandAlias,function (v) {
//                           if (v != ''){
//                              arr.push(v)
//                           }
//                   });
//                    this.brandAliasStr = arr.join(',');
//                    return this.brandAliasStr;
//              }
        },
        data(){
            return{
                imgList:[],
                length:1,
                brandAliasStr:'',
                brandAlias:{
                    brand_name1:"",
                    brand_name2:"",
                    brand_name3:"",
                    brand_name4:"",
                    brand_name5:""
                },
                ruleForm:{
                    brandName:'',
                    brandNickName:"",
                    imgUrl:"",
                    scope:''
                },
                rules:{
                    brand_name: [
                        { required: true, message: '请输品牌名称', trigger: 'blur' },
                    ],
                }
            }
        },
        components:{
            Page,
            SudoUpload
        },
        filters:{

        }
    }
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

</script>
<style>
    .el-table .cell{
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
</style>
