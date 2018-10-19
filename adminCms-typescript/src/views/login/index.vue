/**
*@author bo.peng
*@createTime 04 2018/9/4
*@description
*/
<template>
    <article class="login">
        <div class="container">
            <header>
                logo
            </header>
            <article>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import UserTableVerification from "../../mixin/verification/UserTableVerification";
import LoginInfo from "../../contants/formHints/TabMessage";
import Rule from "@/dto/Rule";
import login from "../../contants/urls/login/login";
import {Action} from "vuex-class";
@Component({
    mixins : [UserTableVerification]
})
export default class Login extends Vue{
	// @ts-ignore
	@Action("login") gologin;
	ruleForm:Object = {
		userName:"",
		password:"",
    }
	rules = {
		userName: [
			{
				validator:(rule:Object,value:string,callback:Function)=> {
					//@ts-ignore
					this.userName(new Rule(rule,value,callback,this.ruleForm),LoginInfo.userName);
                },
                trigger: 'blur'
			}
        ],
		password: [
			{
				validator: (rule:Object,value:string,callback:Function) =>{
					//@ts-ignore
					this.password(new Rule(rule,value,callback,this.ruleForm),LoginInfo.password)
                },
                trigger: 'blur'
			}
        ],
	}
	submitForm(formName:string){
		let self:object = this;
		//@ts-ignore
		this.$refs[formName].validate((valid) => {
			if (valid) {
				//@ts-ignore
				self.gologin({
					//@ts-ignore
					userName : self.ruleForm.userName,
					//@ts-ignore
					password : self.ruleForm.password
                })
			} else {
				console.log('error submit!!');
				return false;
			}
		});
	}
	resetForm(formName:string) {
		//@ts-ignore
		this.$refs[formName].resetFields();
	}
}
</script>

<style scoped>
    .login{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-items: center;
    }
    .container{
        width:400px;
        padding:20px;
        border:1px solid #ccc;
        background:#fff;
    }
</style>