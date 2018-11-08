/**
 *  author : bo.peng
 *  createTime 2018-10-26 11:44
 *  description :
 */
import React from 'react';
import {HashRouter, Route ,Redirect,Switch} from "react-router-dom";
import {routes} from "./router";
export const RouteChildren = ({parent,children})=> {
	const chidrenRoute= (children.map((route, i) => {
			return (
				<Route
					key={i}
					path={route.path}
					search={route.search}
					render={props => {
						return (
							<route.component parent={route} {...props}
							                 children={route.children}/>
						)
					}}
				/>
			)
		})
	);
	if(!parent || !parent.redirect){
		return chidrenRoute;
	}
	return (
		<Switch>
			{chidrenRoute}
			<Redirect to={parent.redirect}/>
		</Switch>
	)
};
export const Root=()=>(
	<HashRouter>
		<RouteChildren children={routes}/>
	</HashRouter>
);
