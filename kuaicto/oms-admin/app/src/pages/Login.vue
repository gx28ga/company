<template>
    <div class="login-container" style="position: relative">
        
        <el-form autoComplete="on" :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <div class="title">
                <div class="project-name">SUDAO</div>
                <div class="project-title">oms管理系统</div>
            </div>
            <el-form-item prop="userName">
                <el-input name="email" type="text" v-model="loginForm.userName" autoComplete="on" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input @keyup.enter.native="loadList('loginForm')" name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
            </el-form-item>
            <!-- <el-form-item id="verifyCode" prop="verifyCode">
            <span class="svg-container">验证码: </span>
            <el-input name="text" type="text" @keyup.enter.native="loadList('loginForm')" v-model="loginForm.verifyCode" autoComplete="on"
            placeholder="验证码"></el-input>
            </el-form-item>
            <div style="position: absolute;top: 252px;right: 40px">
            <img width="70px" style="vertical-align: middle" height="34px" :src="code" alt="">
            <el-button  @click="getPhoneCode">获取</el-button>
            </div> -->
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="loadList('loginForm')">
                    登录
                </el-button>
            </el-form-item>
            <!-- <el-form-item prop="remember" class="remember">
                <el-checkbox v-model="checked">记住我，下次自动登录</el-checkbox>
            </el-form-item> -->
        </el-form>

        <!-- <div class="date-panel">
            <div class="time">15:55</div>
            <div class="today">2018年6月28日   星期四    教师节<br>
            戊戌年五月十五</div>
        </div> -->
    </div>
</template>
<script>
import {
    loginApi,
    permissionsApi,
    getRoleAuth
} from "../api/api.js";
import { user as UserLogic, common } from "../logic";
import Cookies from "js-cookie";
export default {
    data() {
        return {
            url: "",
            code: "",
            loading: false,
            username: "",
            password: "",
            loginForm: {
                userName: "",
                password: ""
            },
            rules: {
                userName: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
                ],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
                verifyCode: [
                    { required: true, message: "请输入验证码", trigger: "blur" }
                ]
            }
        };
    },
    mounted() {
        this.loginForm.userName =
            UserLogic.getLoginUser() == null ? "" : UserLogic.getLoginUser().userName;
    },
    directives: {
        press: {
            bind(element, binding) {
                var vm = this;
                document.addEventListener(
                    "keyup",
                    function(e) {
                        if (e.keyCode == 13) {
                            window.enter.loadList("loginForm");
                        }
                        e.preventDefault();
                    },
                    false
                );
            }
        }
    },
    methods: {
        getPhoneCode() {
            var vm = this;
            //            this.code=UserLogic.getProfile().apiDomainUrl+'/verifyCode?rnd='+Math.random();
        },
        getProfile() {
            var vm = this;
            //            profileApi().then(function (res) {
            //
            //                UserLogic.setProfile(res.data.data)
            //                vm.code = res.data.data.apiDomainUrl+'/'+'verifyCode';
            //
            //            })
        },
        urlPermission(data) {
            if (
                (data && data.indexOf("http") != -1) ||
                (data && data.indexOf("https") != -1)
            ) {
                return true;
            }
            return false;
        },
        getSelfData(data) {
            var vm = this;
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[0].hasOwnProperty("children")) {
                        vm.getSelfData(data[0].children);
                    } else {
                        if (data[0].hasOwnProperty("children")) {
                            vm.getSelfData(data[0].children);
                        }
                        vm.url = data[0].url;
                    }
                }
            }
        },
        loadList(form) {
            this.loading = true;
            var vm = this;
            this.$refs[form].validate(valid => {
                if (valid) {
                    loginApi({
                            userName: this.loginForm.userName,
                            password: this.loginForm.password
                        }, {})
                        .then(function(data) {
                            vm.loading = false;
                            getRoleAuth().then(function(res) {
                                var obj = _.extend({}, res, vm.loginForm);
                                common.setCommon(obj);
                                permissionsApi().then(function(datas) {
                                    vm.$message({
                                        message: "登录成功",
                                        type: "success",
                                        duration: 1500
                                    });
                                    UserLogic.setProfile(datas);
                                    var backUrl = vm.$route.query.back;
                                    vm.getSelfData(datas.menus);
                                    if (obj.userType == "MERCHANT_MANAGER") {
                                        window.location.href = "/merchant";
                                    } else {
                                        if (vm.urlPermission(vm.url)) {
                                            window.location.href = vm.url;
                                        } else {
                                            // vm.$router.push({ path: vm.url });
                                            vm.$router.push({ path: 'product/productList' });
                                        }
                                    }
                                });
                            });
                        })
                        .catch(function(data) {
                            vm.loading = false;
                        });
                } else {
                    vm.loading = false;
                    return false;
                }
            });
        }
    }
};
</script>
<style lang="less">

.login-container {
    position: relative;
    width: 100%;
    height: 100%;
    height: 100vh;
    background:#2d3a4b url(http://kuaicto.com/sbc/loginbg/5.jpg) no-repeat center;
    background-size:cover;
    .el-form-item__content {
        display: flex;
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
        -webkit-text-fill-color: #8492a6 !important;
    }
    input::-webkit-input-placeholder {
        color: #cccccc;
        opacity: 1;
    }
    .title {
        margin:10px 0 20px 0;
    }
    .project-name {
        font-size: 36px;
        color: #333;
    }
    .project-title {
        font-size: 24px;
        color: #333;
        font-weight: lighter;
    }
    .tip {
        font-size: 12px;
        color: #bfcbd9;
        text-align: center;
        padding-top: 0px;
    }

    .login-form {
        position: absolute;
        top: 100px;
        right: 150px;
        width: 340px;
        background:#fff;
        border-radius:0;
        padding: 20px;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.05);
    }

    .date-panel {
        position: absolute;
        top: 100px;
        left: 150px;
        text-shadow: 3px 3px 2px rgba(0,0,0,0.2);
        color:rgba(255,255,255,0.9);
        .time {
            font-size:120px;
            font-family: "Arial";
            font-weight: lighter;
        }
        .today {
            font-size:18px;
        }
    }

    .el-form-item {
        margin-bottom: 20px;
        color: #333;
    }

    .forget-pwd {
        color: #fff;
    }
    #verifyCode {
        width: 53%;
    }
    .remember .el-form-item__content {
        line-height: 20px;
    }
}
</style>