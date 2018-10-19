<template>

    <Page>
       <el-row slot="header" :span="24">
            <el-col :span="20">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="4" class="text-right">
      
            </el-col>
        </el-row>

        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
            <el-tab-pane label="平台菜单"
                         name="PLATFORM">  
                <MenuTab :types="'PLATFORM'" v-model='activeName'></MenuTab>
            </el-tab-pane>
            <el-tab-pane label="项目菜单"
                         name="PARTION">
                <MenuTab :types="'PARTION'" v-model='activeName'></MenuTab>
            </el-tab-pane>
        </el-tabs>

    </Page>

</template>
<script>
    import {getMenuList,deleteMenuApi} from '../../api/api'
    import Page from '../../components/common/Page';
    // import MenuDialog from '../../components/menu/MenuDialog.vue';
    import MenuTab from '../../components/menu/MenuTab.vue';
    import {mixin} from '../../mixins/seach';
    const method =
    {
        getList:getList,
        handleCurrentChange:handleCurrentChange,
        gotoRemove:gotoRemove,
        search:search,
        reset:reset,
        renderContent:renderContent,
        append:append,
        remove:remove,
        reload:reload,
        handleClick:handleClick

    }
    function handleClick(){

    }
    function reload(data) {
        this.show= false
        this.getList()
    }
    function append(store, data,type) {
        this.store = store;
        this.dataList = data;
        this.type = type
        this.show = true;
//        store.append({ id: id++, label: 'testtest', children: [] }, data);
    }
  function  remove(store, data) {
      var vm = this;
      this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
          deleteMenuApi(data.menuId).then(function (data) {
          const alert = vm.$createElement;
          vm.$notify({
              title: '成功',
              message: alert('p', '删除成功'),
              type: 'success'
          });
          vm.getList()

      }).catch(err => {
          this.$message.error(err.message);
    })
  }).catch(() => {
          this.$message({
          type: 'info',
          message: '已取消'
      });
  });
//         store.remove(data);
    }
    function renderContent(h, { node, data, store }) {
        return (
                <span>
                    <span>
                        <span>{node.label}</span>
                    </span>
                    <span style="float: right; margin-right: 20px">
                        <el-button size="mini" on-click={ () => this.append(store, data,'edit') }>编辑</el-button>
                        <el-button size="mini" on-click={ () => this.append(store, data,'next') }>添加下级</el-button>
                        <el-button size="mini" on-click={ () => this.append(store, data,'same') }>添加同级</el-button>
                        <el-button size="mini" on-click={ () => this.remove(store, data) }>删除</el-button>
                    </span>
                </span>);
    }

    function reset() {
        var obj = { tableParams: this.tableParams, queryParams: this.queryParams, type: 'reset' }
        this.$store.dispatch('searchOrReset', obj);
        let { tableParams, queryParams, _params } = this.$store.state.search
        this.tableParams = tableParams;
        this.queryParams = queryParams;
        this.getList(_params);
    }
    function search() {
        var obj = { tableParams: this.tableParams, queryParams: this.queryParams, type: 'search' }
        this.$store.dispatch('searchOrReset', obj);
        let { tableParams, queryParams, _params } = this.$store.state.search
        this.getList(_params);
    }

    function gotoRemove(id) {
        var vm = this;
        this.$confirm('是否删除该角色?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {


            roleDeleteApi(id).then(function (data) {
            // console.log(data);
            vm.$message({
                type:'success',
                message:'删除成功'
            })
            vm.getList()
        }).catch(err => {
            this.$message.error(err.message);
    })
    }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消'
        });
    });
    }

    function getList(params) {
        var vm = this;
        // console.log(params)
        getMenuList(params).then(function (res) {
            // console.log(res)
            vm.list = res;
        })
    }
    function handleCurrentChange (val) { //页码改变的时候
        this.tableParams.page = val;
        let _params = _.merge(this.tableParams, this.queryParams);
        _.forEach(_params, (v, k) => {
            if (!v) {
            delete _params[k];
        }
    });
        this.getList(_params);
    };

    export default {
        // mixins:[mixin],
        methods:method,
    //    mounted:function () {
    //        this.getList(this.tableParams);
    //    },
        computed: {
            purchaseEndDateOptionsEnd: function () {
                var self = this;
                return {
                    disabledDate(time) {
                        if (self.queryParams.startTime) {
                            return time.getTime() < new Date(self.queryParams.startTime).getTime();
                        }
                    }
                }
            },
            purchaseEndDateOptionsStart: function () {
                var self = this;
                return {
                    disabledDate(time) {
                        if (self.queryParams.endTime) {
                            return time.getTime() > new Date(self.queryParams.endTime).getTime();
                        }
                    }
                }
            },
        },
        data(){
            return{
                activeName:'PLATFORM',
                type:'',
                show:false,
                store:'',
                dataList:'',
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                list:[],
                queryParams:{
                    companyId:'' ,
                    companyName:'',
                    areaName:'',
                    enableStatus:''
                },
//                tableParams:{
//                    limit:10,
//                    page:1,
//                },
                currentPage:1,
                total:0,


            }
        },
        components:{
            Page,
            // MenuDialog,
            MenuTab

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

</script>
<style>
    .el-table .cell{
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
</style>
