<template>
    <el-form class="edit-form" :model="description" ref="messageForm" label-width="150px" size="small">
        <!-- <el-form-item label="发送对象">
            25人
        </el-form-item> -->
        <el-form-item label="类型" v-if="true">
            <el-select v-model="description.siteMessageType" placeholder="请选择">
              <el-option
                v-for="item in mesType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="标题">
            <el-input v-model="description.title" placeholder="请输入标题" style="width: 450px;"></el-input>
        </el-form-item>
        <el-form-item label="内容">
            <contentBlockEditor :models.sync='description.message'></contentBlockEditor>
        </el-form-item>
    </el-form>
</template>
<script>
import { postMessage } from "../../api/api.js";
import contentBlockEditor from '../../components/common/contentBlockEditor.vue'
export default {
    name: 'KSiteMessage',
    props: {
        description: {
            type: Object,
            default: function(){
              return {}
            }
        },
        mesType:{
            type: Array,
            default: function(){
              return []
            }
        }
    },
    data() {
        return {
            loading: false
        }
    },
    components: {
        contentBlockEditor
    },
    methods: {
        submitForm() {
            if (!this.description.title) {
                return this.$message({
                    message: "标题不能为空",
                    type: "error"
                });
            }
            if (!this.description.title) {
                return this.$message({
                    message: "标题不能为空",
                    type: "error"
                })
            }
            let _params = Object.assign({}, this.description.message);
            _.forEach(_params, (v, k) => { //去除空的参数
                if (!v) {
                    delete _params[k];
                }
            });
            postMessage(_params).then(res => {
                if (res) {
                    this.$message({ message: '发送成功', type: 'success' })
                    this.$router.go(-1)
                }
            }).catch((err) => {
                this.$message({ message: err.message, type: "error" });
            })
        },
        clearMes() {
            this.description = {
              title:'',
              siteMessageType:'',
              message:[{descriptionType:'txt',content:'',connect:""}],
              acceptUserId:'-99',
              acceptUserName:'张三'
            }
        }
    }
};
</script>