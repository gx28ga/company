<template>
    <Page>
        <el-row slot="header"
                :span="24">
            <el-col :span="16">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>角色管理</el-breadcrumb-item>
                    <el-breadcrumb-item>权限设置</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <!--<tree :data="data" :defaultExpandAll="defaultExpandAll"  :cbChanged="changed"></tree>-->
        <!--<div class="result">-->
        <!--Selected: {{ checked }}-->
        <!--</div>-->
            <el-tabs v-model="activeName" @tab-click="handleClick">

                <el-tab-pane label="平台角色" name="PLATFORM">
                  <RoleCreateTab :scope="scope"></RoleCreateTab>
                </el-tab-pane>

                <el-tab-pane label="项目角色" name="PARTION">
                  <RoleCreateTab :scope="scope"></RoleCreateTab>
                </el-tab-pane>

            </el-tabs>
    </Page>
</template>
<script>
import Page from "../../components/common/Page"; 
import RoleCreateTab from "../../components/role/RoleCreateTab.vue";

export default {
  props:['type'],
  methods: {
    handleClick(item){
      this.scope = item.name
    }
  },
  mounted: function() {
  },
  computed: {},
  data() {
    return {
      scope:'PLATFORM',
      activeName:'PLATFORM',
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
    Page,
    RoleCreateTab
  },
  filters: {
  }
};
</script>
<style>
.el-table .cell {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
