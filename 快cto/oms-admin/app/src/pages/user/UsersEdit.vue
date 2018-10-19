<template>
    <Page>
        <el-row slot="header" :span="24">
            <el-col :span="16">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>平台用户编辑</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-form  :rules="rules" :model="userEdit" ref="userEdit" labelPosition="right" labelWidth="120px">
            <el-form-item label="用户名" prop="userName" style="width:40%">
                <el-input  placeholder="请输入用户名" v-model="userEdit.userName" ></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="nickname" style="width:40%">
                <el-input  placeholder="请输入姓名" v-model="userEdit.nickname" ></el-input>
            </el-form-item>
            <!--<el-form-item label="登录密码" prop="password" style="width:40%">-->
                <!--<el-input  placeholder="请输入登录密码" v-model="userEdit.password"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="重复输入密码" prop="againPassword" style="width:40%">-->
                <!--<el-input  placeholder="请再次输入登录密码" v-model="userEdit.againPassword"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="关联角色" style="width:40%">-->
                <!--<el-checkbox-group v-model="dataList">-->
                    <!--<el-checkbox v-for="role in roleList" :label="role.roleId" :key="role.roleId">{{role.name}}{{role.roleId}}</el-checkbox>-->
                <!--</el-checkbox-group>-->

            <!--</el-form-item>-->

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
                       <el-button style="width:100px"
                               @click="$router.go(-1)">取消</el-button>
                    <UserResetPass></UserResetPass>
                </div>
            </el-form-item>
        </el-form>


    </Page>
</template>
<script>
    import Page from '../../components/common/Page';
    import { getUserRoleApi, userDetailApi ,roleListApi,userEditApi}  from '../../api/api'
    import UserResetPass from "./UserResetPass.vue";
    export default{
        mounted(){
            this.getUserInfo()
        },
        methods:{
            getUserInfo(){
                var vm = this;
                roleListApi().then(function (res) {
                    vm.roleList = res.items;
                    getUserRoleApi(vm.$route.params.id).then(function(res){ 
                        var roleIds = [];
                        $.each(res.items, function (key, item) {
                            roleIds.push(item.roleId);
                        });
                        
                        userDetailApi(vm.$route.params.id).then(function (data) {
                            vm.userEdit = hasValue(data, vm.userEdit);
                            _.extend(vm.userEdit,{roleIds:roleIds});
                            vm.dataList = roleIds
//                            vm.userEdit.roleIds = roleIds;
    //                        debugger;
    //                        vm.userEdit.againPassword = vm.userEdit.password
                        })
                    
                    });

                    })


            },
            save(userEdit){
                var vm = this;
                this.$refs[userEdit].validate((valid) =>{
                    if (valid){
                        var  form =  _.clone(this.userEdit)
//                            form.roleIds= this.dataList
                        userEditApi(vm.$route.params.id,form).then(function (res) {

                            vm.$message({type:'success',message:'编辑成功'})
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
            Page,
            UserResetPass
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
                dataList:[],
                roleList:[],
                cities:['系统管理员', '订单管理员', '财务管理员'],
                userEdit:{

                    userName:"",
                    nickname:'',

                    tel:"",
                    email:"",
                    userStatus:"NORMAL",
                },
                rules:{
                    email:[
                        {required:true,validator:  email,tigger:"blur"}
                    ],
                    nickname:[{required:true,validator:validateUsername,tigger:"blur"}],
                    userName:[
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