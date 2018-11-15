/**
 *  author : bo.peng
 *  createTime 2018-11-10 15:13
 *  description :
 */
import {Layout} from '@/views/Layout';

export default {
    name: '商品',
    path: '/product',
    component: Layout,
    children: [
        {
            name: '商品列表',
            path: 'productList',
            component: () => import(/* webpackChunkName: "ProductList" */'@/views/product/ProductList.vue'),
        },
        {
            name: '品牌列表',
            path: 'brand',
            component: () => import(/* webpackChunkName: "BrandList" */'@/views/product/brand/BrandList.tsx'),
        },
        {
            name: '分类管理列表',
            path: 'category',
            component: () => import(/* webpackChunkName: "CategoryList" */'@/views/product/category/CategoryList.vue'),
        },
        {
            name: '属性模板列表',
            path: 'productType',
            component: () => import(
                /* webpackChunkName: "TypeList"  */
                '@/views/product/productType/TypeList'),
        },
    ],
};