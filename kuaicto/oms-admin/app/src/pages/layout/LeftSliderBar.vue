<template>
    <el-aside class="left-sidebar" style="width:200px">
        <el-menu id="data-menu" :default-active="routerPath"
                 :default-openeds='defaults' mode="vertical"
                 class="el-menu-vertical-demo"
                 text-color="#C0CCDA"
                 unique-opened>
            <!--background-color="#26344b" active-text-color="#32adff"-->
            <!--<MenuList  :list="list"></MenuList>-->
            <template v-for="(items,index) in list">
                <el-submenu v-if='items.children'
                            :index="getMenuId(items.menuId)"
                            :key='index' style="margin-bottom:1px;">
                    <template slot="title">
                        {{items.name}}
                    </template>
                    <el-menu-item-group v-for="(data, index) in items.children" :key="index">
                        <el-menu-item :index="getMenuId(data.menuId)" :key='data.menuId'
                                      v-if='!urlPermission(data.url)'>
                            
                            <router-link :to="data.url" tag="span">
                                {{data.name}}
                            </router-link>
                        </el-menu-item>
                        <el-menu-item v-else :index="getMenuId(data.menuId)" :key='data.menuId'>
                            <span @click='openUrl(data.url)'>
                            {{data.name}}
                          </span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item v-if='!items.children' :index="getMenuId(items.menuId)" :key='items.menuId'>
                    <i class="el-icon-menu"></i>
                    <router-link v-if='!urlPermission(items.url)' :to="items.url" tag="span">
                        {{items.name}}
                    </router-link>
                    <span v-if='urlPermission(items.url)' @click='openUrl(items.url)'>{{items.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-aside>
</template>
<script type="text/ecmascript-6">

import { user as UserLogic, common } from "../../logic";
export default {
    computed: {
        active() {
            return "/menu/list";
        }
    },
    data() {
        return {
            selfList: [],
            parentData: [],
            selfData: [],
            defaults: [],
            isActive: false,
            datas: [],
            defaultProps: {
                children: "children",
                label: "name"
            },
            list: [],
           
            routerPath: this.$route.path
            // routerPath: ''
        };
    },
    watch: {
        $route: {
            handler(val) {
                this.getPath();
                // this.defaults = [''];
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        getUrlHash(url) {
            var i = url.indexOf("#");
            if (i > 0) {
                return url.substring(i + 1);
            }
            return url;
        },
        matchRouterPath(routerPath, url) {
            if (routerPath == url) {
                return true;
            }

            var arr = location.href.split('#');
            var absPath = arr[0] + "#" + routerPath;

            if (absPath == url) {
                return true;
            }
            return false;
        },
        getParentData(data, parentId) {
            var vm = this;
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    if (parentId == data[i].menuId) {
                        vm.parentData.push(data[i]);
                        vm.getParentData(vm.selfList, data[i].parentId);
                    }
                    if (data[i].hasOwnProperty("children")) {
                        vm.getParentData(data[i].children, parentId);
                    }
                }
            }
        },
        getSelfData(data, url) {
            var vm = this;
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    if (this.matchRouterPath(url, data[i].url)) {
                        vm.selfData.push(data[i]);
                        break;
                    }
                    if (data[i].hasOwnProperty("children")) {
                        vm.getSelfData(data[i].children, url);
                    }
                }
            }
        },
        getMenuId(id) {
            return String(id);
        },
        openUrl(data) {
            window.location.href = data;
        },
        urlPermission(data) {
            if (data && (data.indexOf("http") != -1 || data.indexOf("https") != -1)) {
                return true;
            }
        },
        getPath() {
            this.selfData = [];
            this.getSelfData( UserLogic.getProfile().menus,this.$route.path)
            if(this.selfData.length>0){
                // this.defaults.push(String(this.selfData[0].menuId));
                this.routerPath = String(this.selfData[0].menuId) 

            }

        },
        handleNodeClick(data) {
            if (data.url) {
                window.location.href = "#" + data.url;
            }
        }
    },
    mounted() {
        var vm = this;
        this.$nextTick(res => {
            this.selfList = UserLogic.getProfile().menus;
            this.getSelfData(UserLogic.getProfile().menus, this.$route.path)
            if (this.selfData.length > 0) {
                this.defaults.push(String(this.selfData[0].parentId));
                this.getParentData(this.selfList, this.selfData[0].parentId)
                vm.list = this.parentData[this.parentData.length - 1].children
            }
        });
        // this.list = UserLogic.getProfile().menus[0].children;
        // this.list = [UserLogic.getProfile().menus[0]];
         window.$AppMain.$on("reload", function(data) {
           if (data == common.getCommon().userId) {
             permissionsApi().then(function(res) {
               UserLogic.setProfile(res);
               vm.list = UserLogic.getProfile().menus;
             });
           }
         });
         window.$AppMain.$on("menuChange", function(res) {
             if(res.hasOwnProperty('children')){
                   vm.list = res.children;
                     vm.getPath();

             }


        //    //  this.$router.push({path:res.url})
         });
    },
    components: {

    }
};
</script>
<style lang="less">

.left-sidebar {
    background: #324058;
    .el-menu-vertical-demo {
        background: #324058;
        .el-menu-item{
            &.is-active,&:hover{
                background:rgba(255,255,255,.1) !important;
                color:#fff;
            }
        }
    }
}

.el-aside .el-submenu .el-menu .el-menu-item-group .el-menu-item-group__title {
    padding: 0 !important;
}

.el-aside .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
}

.el-menu {
    border-right: none !important;
}


//  ul.el-menu>li.el-menu-item-group>ul>li.el-menu-item{
//   padding: 0 !important;
// }
// ul.el-menu>li.el-menu-item-group>ul>li.el-menu-item>span{
//   display: inline-block;
//   width:160px;
//   padding-left: 20px
// }
</style>