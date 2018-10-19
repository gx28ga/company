<template>
    <span class="impSkuDialog text-left role-relation">
        <el-button @click="dialogVisible = true" size="mini" type="text">关联角色</el-button>
        <el-dialog title="关联角色:" :visible.sync="dialogVisible" size="small" :close-on-click-modal="false" @open="handleOpen">
            <el-form :model="form" label-position="left" ref="ruleForm" :rules="rules">
                <el-form-item style="margin-bottom: 10px" label="所有角色" label-width="120px">
                    <el-checkbox-group v-model="form.roleIds">
                        <el-checkbox v-for="role in roleList" :label="role.roleId" :key="role.roleId">{{role.name}}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="gotoReset('ruleForm')">确 定</el-button>
            </div>

        </el-dialog>
    </span>
</template>
<script>
    import {setRoleApi,roleListApi,getRoleIdsApi} from '../../api/api'
    function hasValue(data, rule) { // data:数据较全的父类 rule:数据较少的子类
        $.each(rule, function (k, v) {
            $.each(data, function (key, value) {
                if (typeof (rule[key]) == 'undefined') {
                    delete data[key];
                }
            })
        })
        return data
    }
    export default{
        name: 'CardDialog',
        props: ['id','name'],
        data(){
            return {
                roleList:[],
                dialogVisible: false,
                form: {
                    roleIds:[]
                },
                dataId: '',
                rules: {}
            }
        },
        computed: {},
        mounted(){
            // console.log(this.userId)

        },
        watch: {},


        filters: {},


        methods: {
            handleOpen(){
                var vm = this;
                this.form.roleIds = []
                this.getUserList()
            },
            getUserList(){
                var vm = this;
                roleListApi({scope:'PLATFORM'}).then(function (res) {
                    vm.roleList = res.items
                    getRoleIdsApi(vm.id).then(function(data){
                        vm.form.roleIds  = data
                    })
                })
            },
            gotoReset(formName){
                var vm = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var _form = _.clone(vm.form)
                        setRoleApi(this.id,_form.roleIds).then(function (res) {
                                vm.$message({
                                    type: 'success',
                                    message: '设置成功'
                                })
                            window.$AppMain.$emit('reload',vm.id)
                            vm.dialogVisible = false
                        }).catch(function (err) {
                            vm.dialogVisible = false

                        })
                    } else {

                        return false;
            }
            })
                ;
            }


        }
    }

</script>
<style>
    .margin-bottom {
        margin-bottom: 20px;
    }

    .dialog {
        width: 100%;
        min-height: 250px;
        overflow-y: auto;
        max-height: 300px;
    }
        .role-relation .el-checkbox{
        margin-left: 30px
    }
</style>
