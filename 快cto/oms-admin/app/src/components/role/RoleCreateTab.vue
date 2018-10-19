<template>
    <div class="add-edit-form">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-position="right"
                 label-width="100px">
            <el-form-item label="角色名称"
                          required>
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Code"
                          required>
                <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
            <el-form-item prop="remark"
                          label="备注">
                <el-input :autosize="{ minRows: 5, maxRows: 10}"
                          type="textarea"
                          v-model="ruleForm.remark"></el-input>
            </el-form-item>
            <el-form-item prop="brand_name"
                          label="权限分配">
                <el-tree :data="list"
                         :props="defaultProps"
                         :show-checkbox="true"
                         node-key="menuId"
                         @check-change="checkChange"
                         :default-checked-keys="checkList"
                         ref="tree">
                </el-tree>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="gotoCreate">保存</el-button>
                <el-button @click="$router.go(-1)">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { queryMenuList, roleCreateApi } from "../../api/api";
import RoleCreateTab from "../../components/role/RoleCreateTab.vue";
const method = {
  //        getList:getList,
  checkChange: checkChange,
  gotoCreate: gotoCreate,
  getCheckedKeys: getCheckedKeys,
  getDetail: getDetail,
  handleClick: handleClick
};
function handleClick() {}

function getDetail() {
  var vm = this;
  queryMenuList({scope: vm.scope, menuTypes: ['MENU', 'POINT']}).then(function(res) {
    vm.list = res;
  });
}

function getCheckedKeys() {}
function makeIdMap(data, map) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].hasOwnProperty("children") && data[i].children) {
      makeIdMap(data[i].children, map);
    }

    map["menu-" + data[i].menuId] = data[i].parentId;
  }
}

function fillParentMenuIds(data, id, menuIds) {
  var vm = this;
  if (!data) {
    return;
  }

  var map = {};
  makeIdMap(data, map);

  var k = id;
  for (;;) {
    menuIds.push(k);

    if (!map.hasOwnProperty("menu-" + k)) {
      break;
    }
    k = map["menu-" + k];
  }
}
function unique(array) {
  var n = [array[0]];

  for (var i = 1; i < array.length; i++) {
    if (array.indexOf(array[i]) == i) n.push(array[i]);
  }
  return n;
}

function gotoCreate() {
  var vm = this;
  var menuIds = [];
  _.forEach(this.$refs.tree.getCheckedNodes(), function(v) {
    fillParentMenuIds(vm.list, v.menuId, menuIds);
  });
  menuIds = unique(menuIds);
  var obj = {
    name: this.ruleForm.name,
    remark: this.ruleForm.remark,
    menuIds: menuIds,
    code: this.ruleForm.code,
    scope:this.scope
  };
  roleCreateApi(obj).then(function(res) {
    vm.$message({ type: "success", message: "保存成功" });
    vm.$router.go(-1);
  });
}

function checkChange(data, check, child) {
  //        _.forEach(data,function (v) {
  //
  //        })
  //        this.checkList = data
}

export default {
  props:['scope'],
  methods: method,
  mounted: function() {
    this.list = [{}, {}, {}];
    this.getDetail();
  },
  watch: {
    'scope': function (){
      this.getDetail();
    }
  },
  computed: {},
  data() {
    return {
      activeName: "first",
      rules: {},
      defaultExpandAll: false,
      data: [
        {
          label: "角色管理",
          children: [
            {
              label: "角色权限",
              children: [
                { label: "增加", children: [] },
                { label: "删除", children: [] },
                { label: "编辑", children: [] }
              ]
            }
          ]
        }
      ],
      ruleForm: {
        name: "",
        remark: "",
        menuIds: [],
        code: ""
      },
      checked: "",
      list: [],
      queryParams: {
        companyId: "",
        companyName: "",
        areaName: "",
        enableStatus: ""
      },
      tableParams: {
        limit: 10,
        page: 1
      },
      currentPage: 1,
      total: 0,
      defaultProps: {
        children: "children",
        label: "name"
      },
      checkList: []
    };
  },
  components: {
    RoleCreateTab
  },
  filters: {
    statu: function(data) {
      switch (data) {
        case "ENABLE":
          return "启用";
          break;
        case "DISABLE":
          return "禁用";
          break;
      }
    },
    showStatu: function(data) {
      switch (data) {
        case true:
          return "Enable";
          break;
        case false:
          return "Disable";
          break;
      }
    }
  }
};
</script>
<style>
.el-table .cell {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
