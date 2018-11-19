/**
 *  author : bo.peng
 *  createTime 2018-10-31 19:29
 *  description :
 */
import order from "./order";
import product from "./product";
import example from "./example";
import Layout from "../containers/Layout";

const routesConfig = [
	{
		path: "/",
		name: "首页",
		component: Layout,
		redirect:"/order/saleOrderList",
		children:[
			//订单
			order,
			//产品
			product,
			//试列
			example,
		]
	}
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
