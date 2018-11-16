/**
 *  author : bo.peng
 *  createTime 2018-10-26 11:44
 *  description :
 */
import React from 'react';
import {HashRouter, Route ,Redirect,Switch} from "react-router-dom";
import {routes} from "./router";
const chidrenRoute= (children)=>{
	if(children){
		return children.map((route, i) => {
			let config = Object.assign({},route,{
				component : null,
				children : null,
			});
			delete config.component;
			delete config.children;
			return (
				<Route
					key={i}
					{...config}
					render={props => {
						return (
							<route.component parent={route} {...props}
							                 children={route.children}/>
						)
					}}
				/>
			)
		});
	}
	return (<div>暂无数据...</div>)
};
export const RouteChildren = ({parent,children})=> {
	return (
		<Switch>
			{chidrenRoute(children)}
			{parent && parent.redirect && <Redirect to={parent.redirect}/>}
		</Switch>
	)
};
export const Root=()=>(
	<HashRouter>
		<RouteChildren children={routes}/>
	</HashRouter>
);
