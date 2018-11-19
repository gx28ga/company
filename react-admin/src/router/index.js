/**
 *  author : bo.peng
 *  createTime 2018-10-26 11:44
 *  description :
 */
import React from 'react';
import {HashRouter, Route ,Redirect,Switch} from "react-router-dom";
import {routes} from "./router";
const chidrenRoute= (props)=>{
	const {children} = props;
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
					render={childrenProps => {
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
export const RouteChildren = (props)=> {
	const {parent} = props;
	return (
		<Switch>
			{chidrenRoute(props)}
			{parent && parent.redirect && <Redirect to={parent.redirect}/>}
		</Switch>
	)
};
export const Root = () => (
	<HashRouter>
		<RouteChildren children={routes}/>
	</HashRouter>
);
