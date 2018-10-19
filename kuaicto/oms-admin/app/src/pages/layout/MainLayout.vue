<template>
    <div class="main-layout">
        <header class="layout-header clearfix">
            <span class="left-menu-placeholder" align="left">
                <!-- 头部logo -->
                <div class="logo">SUDAO-OMS</div>
                    <!-- <img src="" alt="#" /> -->
            </span>
            <!-- <el-menu class="nav-top" background-color="#26344b" text-color="#fff" active-text-color="#32adff" :default-active="routePath" mode="horizontal"> -->
            <el-menu class="offset-left-menu nav-top"
                     text-color="#fff"
                     :default-active="routePath"
                     background-color="#008CEA"
                     mode="horizontal">
                <!-- <el-menu-item v-menu='{url:item.url}' @click='gotoChange(item)' v-for='item in getMenuList' :index="item.url"  style="margin-right:50px">
                      <span>{{item.name}}</span>
                  </el-menu-item> -->


                <template v-for='(item,index)  in getMenuList'>
                    <el-menu-item
                            @click='gotoChange(item)'
                            :key='index'
                            :index="changeMenuId(item.menuId)"
                            active-text-color="#fff"
                            style="margin-right:13px">
                        <span>{{item.name}}</span>
                    </el-menu-item>
                </template>
                <!-- <template v-for='(item,index)  in list'>
                    <el-menu-item @click='gotoChange(item)' :key='index' :index="changeMenuId(item.menuId)">
                        <span>{{item.name}}</span>
                    </el-menu-item>
                </template> -->
                <!-- <el-menu-item  @click='gotoChange(item)' index='2' style="margin-right:50px">
                      <span>test</span>
                  </el-menu-item> -->
                <el-submenu index="user" id='user' class="pull-right">
                    <template slot="title">
                        <span>&nbsp;{{getUserName}}</span>
                    </template>
                    <el-menu-item index="user.fix" @click='dialogFormVisible=true'>修改密码</el-menu-item>
                    <el-menu-item index="user.logout" @click="exit">退出登录</el-menu-item>
                </el-submenu>
            </el-menu>
        </header>
        <LeftSliderBar class="left-menu"></LeftSliderBar>
        <div class="layout-body">
            <PassWordReset :dialogVisible="dialogFormVisible"
                           @on-result-change="dialogFormVisibleChange"></PassWordReset>
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="less">
    .main-layout {
        padding-top: 50px;
    }

    .layout-header {
        background: #26344b;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        z-index: 1000;
        background:linear-gradient(#0099FF,#008CEA);
        .offset-left-menu{
            background:linear-gradient(#0099FF,#008CEA);
            .el-menu-item{
                background:linear-gradient(#0099FF,#008CEA);
                &:hover,&.is-active{
                    background: rgba(255,255,255,.2) !important;
                    color:#fff;
                }
            }
            .pull-right{
                .el-submenu__title{
                    background-color: rgba(255,255,255,.1) !important;
                    i{
                        color:#fff;
                    }
                }
                &.is-active{
                    .el-submenu__title{
                        color:#fff;
                        background-color: rgba(255,255,255,.1) !important;
                        i{
                            color:#fff;
                        }
                    }
                }
            }
        }
    }

    .left-menu-placeholder {
        float: left;
        img {
            margin-top: 10px;
            height: 40px;
            /*text-align: center;*/
            margin-left: 10px;
        }
    }

    .el-menu--horizontal {
        border: 0;
    }

    .pull-right {
        float: right !important;
    }

    .el-menu--horizontal .el-menu-item {
        height: 50px;
        line-height: 50px;
    }

    .el-menu--popup .el-menu-item {
        float: none;
        right: 0;
        width: 100%;
        height: 35px;
        line-height: 35px;
        font-size: 12px;
        &.is-active{
            background-color:rgb(0, 140, 234) !important;
            color:#fff;
            &:hover{
                background-color: rgba(0,112,187,1) !important;
            }
        }
    }

    .el-menu--horizontal .el-submenu .el-submenu__title {
        height: 50px;
        line-height: 50px;
    }

    .nav-top {
        height: 50px;
        .el-menu-item {
            padding-left: 15px;
            padding-right: 15px;
            height: 50px;
            line-height: 50px;
            a {
                display: inline-block;
                padding: 0 20px;
            }
        }
    }
</style>
<script>
  import {user as UserLogic, common} from "../../logic";
  import PassWordReset from "./PassWordReset.vue";
  import LeftSliderBar from "./LeftSliderBar.vue";

  export default {
	name: "menus",
	data: function () {
	  return {
		list: [/*{
                    name: '首页',
                    menuId: '/artical/list'
                },
                {
                    name: '业务',
                    menuId: '/feedback/lis'
                },
                {
                    name: '内容',
                    menuId: '/banner'
                },
                {
                    name: '营销',
                    menuId: '/message'
                },
                {
                    name: '权限',
                    menuId: '/comments/list'
                },
                {
                    name: '设置',
                    menuId: '/config'
                }*/
		],
		selfData: [],
		parentData: [],
		statu: 1,
		routePath: "",
		dialogFormVisible: false,
		formLabelWidth: "120px",
		form: {}
	  };
	},
	computed: {
	  getMenuList() {
		// console.log(UserLogic.getProfile())
		return UserLogic.getProfile().menus;
	  },
	  getUserId: function () {
	  },
	  getUserName: function () {
		if (common.getCommon() == null) {
		  return this.$router.push("/login");
		}
		return common.getCommon().userName;
	  }
	},
	watch: {
	  $route: "setActiveMenu"
	},

	mounted: function () {
	  //   this.$nextTick(res=>{
	  //     this.setActiveMenu()
	  // })

	},
	components: {
	  PassWordReset,
	  LeftSliderBar
	},
	methods: {
	  changeMenuId(id) {
		return String(id);
	  },
	  setActiveMenu() {
		// this.getSelfData(UserLogic.getProfile().menus, this.$route.path);
		// this.list = UserLogic.getProfile().menus;
		if (this.selfData.length > 0) {
		  this.getParentData(
			  UserLogic.getProfile().menus,
			  this.selfData[0].parentId
		  );
		}
		if (this.parentData.length > 0) {
		  this.routePath = String(this.parentData[this.parentData.length - 1]);
		}

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
	  getParentData(data, parentId) {
		var vm = this;
		if (data) {
		  for (var i = 0; i < data.length; i++) {
			if (parentId == data[i].menuId) {
			  vm.parentData.push(data[i].menuId);
			  vm.getParentData(vm.list, data[i].parentId);
			}
			if (data[i].hasOwnProperty("children")) {
			  vm.getParentData(data[i].children, parentId);
			}
		  }
		}
	  },
	  gotoChange(item) {
		window.$AppMain.$emit("menuChange", item);
	  },
	  dialogFormVisibleChange(value) {
		this.dialogFormVisible = value;
	  },
	  getPath() {
		let path = this.$route.path;
		// this.routePath =this.$route.path;
		if (/^\/system/.test(path)) {
		  this.routePath = "system";
		}
	  },
	  exit: function () {
		//退出
		let vm = this;
		window.localStorage.clear();
		vm.$router.push("/login");
	  }
	}
  };
</script>