<template>
    <Page>
        <el-row slot="header" :span="24">
            <el-col :span="16">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>平台用户创建</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-form  :rules="rules" :model="userEdit" ref="userEdit" labelPosition="right" labelWidth="150px">
            <el-form-item label="用户名"
                          prop="userName"
                          style="width:40%">
                <el-input placeholder="请输入用户名"
                          v-model="userEdit.userName"></el-input>
            </el-form-item>
            <el-form-item label="姓名"
                          prop="nickname"
                          style="width:40%">
                <el-input placeholder="请输入姓名"
                          v-model="userEdit.nickname"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="password" style="width:40%">
                <el-input  type="password"  placeholder="请输入登录密码" v-model="userEdit.password"></el-input>
            </el-form-item>
            <el-form-item label="重复输入密码" prop="againPassword" style="width:40%">
                <el-input type="password"  placeholder="请再次输入登录密码" v-model="userEdit.againPassword"></el-input>
            </el-form-item>
            <el-form-item label="是否启用" prop="isOpen" style="width:40%">
                <el-radio-group v-model="userEdit.userStatus">
                    <el-radio label="NORMAL">启用</el-radio>
                    <el-radio label="FORBIDDEN">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系电话"  style="width:40%">
                <el-input  placeholder="请输入电话号码" v-model="userEdit.tel"></el-input>
            </el-form-item>
            <el-form-item label="邮箱"  style="width:40%">
                <el-input  placeholder="请输入邮箱" v-model="userEdit.email"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="text-left">
                    <el-button type="primary" style="width:100px" @click="save('userEdit')">保存</el-button>
                    <el-button style="width:100px" @click="$router.push({name:'用户管理',params:{}})">取消</el-button>
                </div>
            </el-form-item>
        </el-form>


    </Page>
</template>
<script>
    import Page from '../../components/common/Page';
    import { userCreateApi ,roleListApi}  from '../../api/api'
    export default{
        mounted(){
//            this.getUserList()
        },
        methods:{
            getUserList(){
                var vm = this;
                roleListApi().then(function (res) {
                    vm.roleList = res.data.data.items
                })
            },
            save(userEdit){
                var vm = this;
                this.$refs[userEdit].validate((valid) =>{
                    if (valid){
                        var  form =  _.clone(this.userEdit)
                        delete form['againPassword']
                        userCreateApi(form).then(function (res) {

                            vm.$message({type:'success',message:'创建成功'})
                            vm.$router.go(-1)
                        })
                    }else{
                        console.log('错误');
                        return false
                    }
                });
            }
        },
        components:{
            Page
        },
        data(){
            var validateUsername = (rule, value, callback) => {
                if (value === ""){
                    callback(new Error("请输入用户名"));
                }else{
                    callback();
                }
            };
            var validatePassword = (rule, value, callback) => {
                if (value === ""){
                    callback(new Error("请输入密码"));
                }else if (value.length < 6){
                    callback(new Error("密码长度不少于6位"));
                }else{
                    callback();
                }
            };
            var validateAgainPassword = (rule, value, callback) => {
                if (value === ""){
                    callback(new Error("请再次输入密码"));
                }else if (value.length < 6){
                    callback(new Error("密码长度不少于6位"));
                }else if (value != this.userEdit.password){
                    callback(new Error("两次输入密码不一致"));
                }else{
                    callback();
                }
            };
            var validatePhone = (rule, value, callback) => {
                if (!value) {
                    callback(new Error("请输入手机号码"));
                } else if (!/^1[34578]\d{9}$/.test(value)) {
                    callback(new Error("请输入正确的手机号码!"));
                } else {
                    callback();
                }
            };
            var email = (rule, value, callback) => {
                if (!value){
                    callback(new Error("请输入邮箱地址"));
                }else {
                    if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value)) {
                        callback(new Error("请输入正确的邮箱!"));
                    } else {
                        callback();
                    }
                    callback();
                }
                callback();
            };
            return{
                roleList:[],
                cities:['系统管理员', '订单管理员', '财务管理员'],
                userEdit:{
                    userName:"",
                    nickname:"",
                    password:"",
                    againPassword:"",
                    tel:"",
                    email:"",
                    userStatus:"NORMAL",
                    userType:'PLATFORM_MANAGER'
                },
                rules:{
                    email:[
                        {required:true,validator:  email,tigger:"blur"}
                    ],
//                    tel:[{required:true,validator:validatePhone,tigger:"blur"}],
                    userName:[
                        {required:true,message:"请输入姓名",tigger:"change"}
                    ],
                    nickname:[
                        {required:true,validator:validateUsername,tigger:"blur"}
                    ],
                    gender:[
                        {required:true,message:"请选择性别",tigger:"change"}
                    ],
                    password:[
                        {required:true,validator:validatePassword,tigger:"blur"}
                    ],
                    againPassword:[
                        {required:true,validator:validateAgainPassword,tigger:"blur"}
                    ],
                }
            }

        },
        filters:{
            gender:function (data) {
                switch (data){
                    case '男':
                        return 'MAN'
                        break;
                    case '女':
                        return 'WOMAN'
                        break;
                    case '保密':
                        return 'SECRET'
                        break;
                }
            },
            showStatu:function (data) {
                switch (data){
                    case true:
                        return 'Enable'
                        break;
                    case false:
                        return 'Disable'
                        break;
                }
            }

        }
    }
</script>