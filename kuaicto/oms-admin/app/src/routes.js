import MainLayout from "./pages/layout/MainLayout.vue"
import Main from "./pages/layout/Main.vue"
import Login from "./pages/Login";

export default [
  {
    path: "/",
    component: MainLayout,
    children: [
       {
        path: '/',
        name: 'portal-manager-web',
        component: Main,
        redirect: '/product/productList',
        children: [
            //权限管理
            {
                name: '用户管理',
                path: '/system/platform/user',
                component: resolve => require(['./pages/user/UsersList.vue'], resolve)
            },
            {
                name: '用户编辑',
                path: '/system/platform/user/edit/:id',
                component: resolve => require(['./pages/user/UsersEdit.vue'], resolve)
            },
            {
                name: '用户创建',
                path: '/system/platform/user/create',
                component: resolve => require(['./pages/user/UsersCreate.vue'], resolve)
            },

            {
                name: '角色管理',
                path: '/system/role/list',
                component: resolve => require(['./pages/role/RoleList.vue'], resolve)
            },
            {
                name: '角色创建',
                path: '/system/role/create',
                component: resolve => require(['./pages/role/RoleCreate.vue'], resolve)
            },
            {
                name: '角色编辑',
                path: '/system/role/edit/:id',
                component: resolve => require(['./pages/role/RoleEdit.vue'], resolve)
            },
            {
                name: '菜单管理',
                path: '/system/menu/list',
                component: resolve => require(['./pages/menu/MenuList.vue'], resolve)
            },
            {
                name: '菜单创建',
                path: '/system/menu/create',
                component: resolve => require(['./pages/menu/MenuCreate.vue'], resolve)
            },



            {
                name: '商品列表',
                path: '/product/productList',
                component: resolve => require(['./pages/product/productList.vue'], resolve),
                meta: {
                    title: '商品列表',
                }
            },
            {
                name: '商品新增',
                path: '/product/productEdit',
                component: resolve => require(['./pages/product/productEdit.vue'], resolve),
                meta: {
                    title: '商品新增',
                }
            },
            {
                name: '商品编辑',
                path: '/product/productEdit/:id',
                component: resolve => require(['./pages/product/productEdit.vue'], resolve),
                meta: {
                    title: '商品编辑',
                }
            },
            {
                name: '品牌列表',
                path: '/product/brand',
                component: resolve => require(['./pages/product/productBrand.vue'], resolve),
                meta: {
                    title: '品牌列表',
                }
            },
            {
                name: '分类列表',
                path: '/product/category',
                component: resolve => require(['./pages/product/productCategory.vue'], resolve),
                meta: {
                    title: '分类列表',
                }
            },
            {
                name: '商品类型',
                path: '/product/productType',
                component: resolve => require(['./pages/product/productType.vue'], resolve),
                meta: {
                    title: '商品类型',
                }
            },
            {
                name: '商品类型新增',
                path: '/product/productTypeEdit',
                component: resolve => require(['./pages/product/productTypeEdit.vue'], resolve),
                meta: {
                    title: '商品类型新增',
                }
            },
            {
                name: '商品类型编辑',
                path: '/product/productTypeEdit/:id',
                component: resolve => require(['./pages/product/productTypeEdit.vue'], resolve),
                meta: {
                    title: '商品类型编辑',
                }
            },{
                name: '商品参数配置',
                path: '/product/productParam',
                component: resolve => require(['./pages/product/productParam.vue'], resolve),
                meta: {
                    title: '商品参数配置',
                }
            },




          //商家
            {
                name: '品牌商',
                path: '/trader/traderBrand',
                component: resolve => require(['./pages/trader/traderBrand.vue'], resolve),
                meta: {
                    title: '品牌商',
                }
            },
            {
                name: '添加合伙人',
                path: '/trader/traderBrandAdd',
                component: resolve => require(['./pages/trader/traderBrandAdd.vue'], resolve),
                meta: {
                    title: '添加合伙人',
                }
            },
            {
                name: '合伙人详情',
                path: '/trader/traderBrandDetail/:id',
                component: resolve => require(['./pages/trader/traderBrandDetail.vue'], resolve),
                meta: {
                    title: '合伙人详情',
                }
            },


          //组织
            {
                name: '成员管理',
                path: '/organization/employee',
                component: resolve => require(['./pages/organization/employee.vue'], resolve),
                meta: {
                    title: '成员管理',
                }
            },

        //订单
        {
            name: '销售订单',
            path: '/order/saleOrderList',
            component: resolve => require(['./pages/order/saleOrderList.vue'], resolve),
            meta: {
                title: '销售订单',
            }
        },
        {
            name: '销售订单详情',
            path: '/order/saleOrderDetail/:id',
            component: resolve => require(['./pages/order/saleOrderDetail.vue'], resolve),
            meta: {
                title: '销售订单详情',
            }
        },
        ]
    }]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    // redirect: '/',
    meta: {
        title: '登录'
    }
  },
  {
    path: '*',
    redirect: '/login'
  }
]
