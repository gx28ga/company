/**
*  author : bo.peng
*  createTime 2018-11-09 17:56
*  description : login
*/
<template>
    <article class="login">
        <div class="container">
            <header>
                logo
            </header>
            <article>
                <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
                    <template v-if="form">
                        <a-form-item
                                :validateStatus="userNameError() ? 'error' : ''"
                                :help="userNameError() || ''"
                                fieldDecoratorId="userName"
                                :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your username!' }]}"
                        >
                            <a-input placeholder='Username'>
                                <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
                        <a-form-item
                                :validateStatus="passwordError() ? 'error' : ''"
                                :help="passwordError() || ''"
                                fieldDecoratorId="password"
                                :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Password!' }]}"
                        >
                            <a-input type='password' placeholder='Password'>
                                <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-button
                                    type='primary'
                                    htmlType='submit'
                                    :disabled="hasErrors(form.getFieldsError())"
                            >
                                登录
                            </a-button>
                        </a-form-item>
                    </template>
                </a-form>
            </article>
        </div>
    </article>
</template>
<script lang="ts">
    import Login from "@/controller/login";

    export default Login;
</script>

<style scoped lang="less">
    .login {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        background:url("../../imags/bg.jpg");
        background-size: cover;
        .container {
            width: 400px;
            padding: 15px;
            background: #fff;
            border: 2px solid #ddd;
        }
    }
</style>