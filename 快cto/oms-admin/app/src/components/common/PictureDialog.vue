<template>
    <span class="impSkuDialog">

        <el-button  @click="dialogVisible = true" size="mini"  type="success">预览</el-button>
        <el-dialog title="图片预览" v-model="dialogVisible" size="small" :close-on-click-modal="false" @open="handleOpen" >
            <el-card :body-style="{ padding: '0px' }">
                <img :src="src" class="image">
                <div style="padding: 14px;">
                   <el-row :span="24">
                       <el-col :span="24">
                           <span class="pull-left">{{list.title}}</span>
                       </el-col>
                       <el-col :span="24">
                           <span class="pull-left">{{list.subtitle}}</span>
                       </el-col>
                       <el-col :span="24">
                           <time class="time pull-left">{{list.place}}</time>
                       </el-col>
                       <el-col :span="24">
                           <time class="time pull-left">{{list.timeInfo}}</time>
                       </el-col>

                   </el-row>



                        <!--<el-button type="text" class="button">操作按钮</el-button>-->
                </div>
            </el-card>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
            </div>

        </el-dialog>
    </span>
</template>
<script>

    import $config from '$config'
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
        props:['list'],
        data(){
            return {
                dialogVisible: false,
                form: {
                    "status": "REFUSE",
                    "remark": ""
                },
                dataId:'',
                rules: {



                }
            }
        },
        computed:{
            src(){
                return $config.imageUrl+'/api/image/download'+this.list.imageUrl
            }
        },
        mounted(){
            // console.log(this.userId)

        },
        watch:{

        },


        filters:{

        },


        methods: {
            handleOpen(){
                var vm = this
            },
            gotoReset(formName){
                var vm = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var _form = _.clone(vm.form)
                        enterpriseSellerAuthEditApi(this.$route.params.id,_form).then(function (res) {
                            if (res.data.code == 200){
                                vm.$message({
                                    type:'success',
                                    message:'已拒绝'
                                })
                                vm.$router.go(-1)
                                vm.dialogVisible = false
                            }
                        }).catch(function (err) {
                            vm.$message({
                                type:'error',
                                message:'已拒绝'
                            })
                            vm.dialogVisible = false
                        })
                    } else {

                        return false;
            }
            });
            }



        }
    }

</script>
<style scoped>
    .margin-bottom {
        margin-bottom: 20px;
    }
    .dialog{
        width: 100%;
        min-height:250px;
        overflow-y:auto;
        max-height:300px;
    }
     .time {
         font-size: 13px;
         color: #999;
     }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .el-table__body tr > td img{
        width: 100% !important;
        height: auto !important;
    }
</style>
