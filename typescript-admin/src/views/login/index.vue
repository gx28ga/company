/**
*  author : bo.peng
*  createTime 2018-10-22 16:58
*  description : 登录
*/
<template>
    <article class="login">
        <div class="container">
            <header>
                logo
            </header>
            <article>
                <el-form :model="ruleForm" status-icon ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="帐号" prop="userName">
                        <el-input type="password" v-model="ruleForm.userName" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </article>
        </div>
    </article>
</template>

<script lang="ts">
    import Login from '@/controller/login';
    export default Login;
</script>

<style scoped lang="scss">
    .login{
        display:flex;
        height:100%;
        justify-content: center;
        align-items: center;
        .container{
            width:400px;
            padding:15px;
            background:#fff;
            border:2px solid #ddd;
        }
    }
</style>