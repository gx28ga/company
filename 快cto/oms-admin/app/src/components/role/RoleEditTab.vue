<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="角色名称" required>
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
               <el-form-item label="Code" required>
                <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
            <el-form-item prop="remark" label="备注">
                <el-input :autosize="{ minRows: 5, maxRows: 10}"  type="textarea" v-model="ruleForm.remark"></el-input>
            </el-form-item>
            <el-form-item prop="brand_name" label="权限分配" >
                <el-tree
                        :data="list"
                        :props="defaultProps"
                        :show-checkbox="true"
                        default-expand-all
                        node-key="menuId"
                        @check-change="checkChange"
                        :default-checked-keys="checkList"
                        ref="tree">
                </el-tree>
            </el-form-item>
        </el-form>


        <div class="text-center">
            <el-button type="primary" @click="gotoCreate">保存</el-button>
            <el-button @click="$router.go(-1)">返回</el-button>
        </div>


    </div>
</template>
<script>
    import {roleDetailApi,getMenuList,roleEditApi } from '../../api/api'
    const method =
    {
        checkChange:checkChange,
        gotoCreate:gotoCreate,
        getCheckedKeys:getCheckedKeys,
        getDetail:getDetail,
        getDataById:getDataById,
        unique:unique
    }
    function unique(array){
        var n = [array[0]];

        for(var i = 1; i < array.length; i++) {
            if (array.indexOf(array[i]) == i) n.push(array[i]);
        }
        return n;
    }
    
    function makeIdMap(data, map) {
        for(var i = 0; i< data.length;i++){
            if (data[i].hasOwnProperty('children') && data[i].children){
                makeIdMap(data[i].children, map);
            }

            map['menu-' + data[i].menuId] = data[i].parentId;
        }
    }

    function getDataById(data,id) {
        var vm =this;
        if (!data) {
            return;
        }

        var map = {};
        makeIdMap(data, map);

        var k = id;
        for (; ;) {
            vm.menuData.push(k);
            if (!map.hasOwnProperty('menu-' + k)) {
                break;
            }
            k = map['menu-' + k];;
        }
    }

    function getDetail() {
        var vm = this;
        queryMenuList({scope: vm.scope, menuTypes: ['MENU', 'POINT']}).then(function (res) {
            vm.$set(vm,'list',res)
            roleDetailApi(vm.$route.params.id).then(function (data) {
                vm.checkList=data.menuIds;
                vm.ruleForm = hasValue(data,vm.ruleForm);
                _.forEach(data.menuIds,function (v) {
                    vm.$refs.tree.setChecked(v,true)
                })


            })


        })

    }

    function getCheckedKeys() {

    }

    function gotoCreate() {
        var vm =this;
        var menuIds = [];
        _.forEach(this.$refs.tree.getCheckedNodes(), function (v) {
            menuIds.push(v.menuId)
        })
        _.forEach(menuIds,function (v) {
         vm.getDataById(vm.list,v)
        })
        var list = menuIds.concat(vm.menuData)
        var data = this.unique(list)
        var obj = {
            name:this.ruleForm.name,
            remark:this.ruleForm.remark,
            menuIds:data,
            code:this.ruleForm.code,
        }
        roleEditApi(vm.$route.params.id,obj).then(function (res) {
            vm.$message({type:'success',message:'保存成功'});
            vm.$router.go(-1);
        })
    }

    function checkChange(data,check,child) {
    }

    export default {
        methods:method,
        mounted:function () {
            this.list = [{},{},{}]
            this.getDetail();


        },
        computed: {

        },
        data(){
            return{
                menuData:[],
                rules:{},
                defaultExpandAll:false,
                data: [{
                    label: '角色管理',
                    children: [{
                        label: '角色权限',
                        children: [{ label: '增加',children:[]},{ label: '删除',children:[]},{label: '编辑',children:[]}]
                    }]
                }
                ],
                ruleForm:{
                    name:'',
                    remark:'',
                    menuIds:[],
                    code:'',
                },
                checked: '',
                list:[],
                queryParams:{
                    companyId:'' ,
                    companyName:'',
                    areaName:'',
                    enableStatus:''
                },
                tableParams:{
                    limit:10,
                    page:1,
                },
                currentPage:1,
                total:0,
                defaultProps:{
                    children: 'children',
                    label: 'name'
                },
                checkList:[],


            }
        },
        components:{
    
        },
        filters:{
            statu:function (data) {
                switch (data){
                    case 'ENABLE':
                        return '启用'
                        break;
                    case 'DISABLE':
                        return '禁用'
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
<style>
    .el-table .cell{
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
</style>
