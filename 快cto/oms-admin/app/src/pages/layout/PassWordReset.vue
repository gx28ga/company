<template>
    <span class="impSkuDialog">
        <el-dialog title="重置密码" :visible.sync="show" size="tiny"
                   :close-on-click-modal="false" @open="handleOpen" >
            <el-form :model="form" label-position="top"  ref="ruleForm" :rules="rules">
                <el-form-item style="margin-bottom: 10px" required label="旧密码" label-width="120px" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 10px" required label="新密码"  label-width="120px" prop="newPassword">
                    <el-input type="password" v-model="form.newPassword" ></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 10px" required label="再次输入" label-width="120px" prop="newPassword2">
                    <el-input type="password" v-model="form.newPassword2"  ></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="show = false">取 消</el-button>
                <el-button type="primary" @click="gotoReset('ruleForm')">确 定</el-button>
            </div>

        </el-dialog>
    </span>
</template>
<script>

    import {updatePasswordApi } from '../../api/api'
    import { user as UserLogic, common } from '../../logic';
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
        props:{
//            userId: {
//                default:''
//            },
            dialogVisible : {
                default:false
            },
        },
        data(){
            var password = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.form.password !== '') {
                        if (!(/^[\w]{1,12}$/.test(value))){
                            return callback(new Error('请输入旧密码'));
                        }
                    }
                    callback();
                }
            };
            var newPassword1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.form.newPassword !== '') {
                        if (!(/^[\w]{6,12}$/.test(value))){
                            return callback(new Error('请输入6-12位字母数字下划线'));
                        }
                    }
                    callback();
                }
            };
            var newPassword2 = (rule, value, callback) => {

                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }

            };
            return {
                show:this.dialogVisible,
                form: {
                    password:'',
                    newPassword:'',
                    newPassword2:''
                },
                dataId:'',
                rules: {
                    password: [
                        { validator: password, trigger: 'blur' }
                    ],
                    newPassword: [
                        { validator: newPassword1, trigger: 'blur' }
                    ],
                    newPassword2: [
                        { validator: newPassword2, trigger: 'blur' }
                    ],



                }
            }
        },
        computed:{

        },
        mounted(){

        },
        watch:{
            'userId':function (newValue,oldValue) {
                this.form.userId = newValue
            },
            'dialogVisible':function (newValue,oldValue) {
                this.show = newValue
            },
            'show':function (newValue,oldValue) {
                this.$emit("on-result-change",newValue);
            }

        },


        filters:{

        },


        methods: {
            handleOpen(){
                var vm = this
                this.form.password ='',
                this.form.newPassword='',
                this.form.newPassword2=''
            },
            gotoReset(formName){
                var vm = this;
                const alert = vm.$createElement;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var _form = _.clone(vm.form)
                       delete _form['newPassword2']
                        updatePasswordApi(_form).then(function (res) {
                            vm.$message({
                                type:'success',
                                message:'修改成功'
                            })
                            vm.show = false

                        }).catch(function (err) {
                            vm.$notify({
                                title: '失败',
                                message: alert('p', err),
                                type: 'error'
                            });
                            vm.show= false
                        })
                    } else {

                        return false;
            }
            });
            }



        }
    }

</script>
<style lang="less">
    .margin-bottom {
        margin-bottom: 20px;
    }
    .dialog{
        width: 100%;
        min-height:250px;
        overflow-y:auto;
        max-height:300px;
    }
    .impSkuDialog{
        .el-dialog{
            width:350px;
            padding:0 25px;
        }
    }

</style>
