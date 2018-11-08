/**
 *  author : bo.peng
 *  createTime 2018-10-31 19:29
 *  description :
 */
import lazyLoad from "./LazyLoad";

const routesConfig = [
	{
		path: "/",
		name: "首页",
		component: lazyLoad(() => import(/* webpackChunkName: "Container" */ '../containers/Container')),
		redirect:"/order/saleOrderList",
		children:[
			{
				path: "order",
				name: "销售",
				component: lazyLoad(() => import(/* webpackChunkName: "order" */ '../containers/order')),
				redirect:"/order/saleOrderList",
				children: [
					{
						name: "销售订单",
						path: "saleOrderList",
						component: lazyLoad(() => import(/* webpackChunkName: "saleOrderList" */ '../containers/order/saleOrderList'))
					},
					{
						name: "订单详情",
						path: "saleOrderDetail/:id",
						component: lazyLoad(() => import(/* webpackChunkName: "saleOrderDetail" */ '../containers/order/saleOrderDetail'))
					},
				]
			},
			{
				path: "product",
				name: "商品",
				component: lazyLoad(() => import(/* webpackChunkName: "product" */ '../containers/product')),
				redirect:"/product/productList",
				children: [
					{
						name: "商品列表",
						path: "productList",
						component: lazyLoad(() => import(/* webpackChunkName: "productList" */ '../containers/product/productList'))
					},
				]
			},
		]
	},
];
let routeLink= {};
let setPath= (list)=> {
	let updatePath=(item,path)=>{
		if(item.path!=='/'){
			let paths= item.path.replace("/",'').split('/');
			let getPath= (obj, paths)=> {
				if(paths.length){
					let key= paths[0];
					if(!obj[key]){
						obj[key]= {
							name: item.name,
							path: item.path.replace(/\/:\w+$/,'')
						};
					}
					getPath(obj[key],paths.slice(1))
				}
			};
			getPath(routeLink,paths);
			getPath= null;
		}
		if(item.children){
			item.children.forEach(child=> {
				child.path = path+"/"+child.path;
				updatePath(child,child.path);
			})
		}
	};
	list.forEach(item=>{
		let path= (item.path === "/"?"":item.path);
		updatePath(item,path);
	});
	updatePath= null;
	return list;
};
const routes = setPath(routesConfig);
setPath= null;
export {
	routes,
	routeLink
};
