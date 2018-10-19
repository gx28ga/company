<template>
    <span class="impSkuDialog">

        <el-button style="margin-left:10px" @click="dialogVisible = true"
                   type="success">重置密码</el-button>
        <el-dialog :title="title"
                  :visible.sync="dialogVisible"
                   size="tiny"
                   :show-close="false"
                   @open="handleOpen"
                   @close='close'>
            <el-form :model="form"
                     label-position="left"
                     ref="ruleForm"
                     :rules="rules">

                <el-form-item style="margin-bottom: 20px"
                              required
                              label="新密码"
                              label-width="120px"
                              prop="password">
                    <el-input type="password"
                              v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 20px"
                              required
                              label="再次输入"
                              label-width="120px"
                              prop="pass">
                    <el-input type="password"
                              v-model="form.pass"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="gotoReset('ruleForm')">确 定</el-button>
            </div>

        </el-dialog>
    </span>
</template>
<script>
import {
    passwordResetApi
} from "../../api/api";

export default {
  name: "CardDialog",
  props: ["userId", "name"],
  data() {
    var newPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password !== "") {
          if (!/^[\w]{6,12}$/.test(value)) {
            return callback(new Error("请输入6-12位字母数字下划线"));
          }
        }
        callback();
      }
    };
    var pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
      form: {
        pass: "",
        password: ""
      },
      dataId: "",
      rules: {
        password: [{ validator: newPassword, trigger: "blur" }],
        pass: [{ validator: pass, trigger: "blur" }]
      }
    };
  },
  computed: {
    title() {
      return "重置" + "密码";
    }
  },
  mounted() {},
  watch: {},

  filters: {
    type
  },

  methods: {
    handleOpen() {
      var vm = this;
     
    },
    close(){
       this.$refs['ruleForm'].resetFields();
    },
    gotoReset(formName) {
      var vm = this;
      const alert = vm.$createElement;
      this.$refs[formName].validate(valid => {
        if (valid) {
          var _form = _.clone(vm.form);
          delete _form["pass"];
            passwordResetApi(this.$route.params.id, _form)
            .then(function(res) {
                vm.$message({
                    type:'success',
                    message:'重置成功'
                })

              vm.dialogVisible = false;
            })
            // .catch(function(err) {
            //   vm.$message({
            //     message: err.response.data.errors[0].message,
            //     type: "error"
            //   });
            //   vm.dialogVisible = false;
            // });
        } else {
          return false;
        }
      });
    }
  }
};
function type(data) {
  let res = "";
  switch (data) {
    case "LIFE": {
      res = "晒生活";
      break;
    }
    case "OPINION": {
      res = "育儿经";
      break;
    }
    case "SECONDHAND_GOODS_CHANGE": {
      res = "闲置物品置换";
      break;
    }
    case "LEBAO": {
      res = "乐宝专区";
      break;
    }
  }
  return res;
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
</style>
