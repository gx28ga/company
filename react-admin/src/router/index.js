/**
 *  author : bo.peng
 *  createTime 2018-10-26 11:44
 *  description :
 */
import React from 'react';
import {Route,BrowserRouter} from "react-router-dom";
import routes from "./router";

export const RouteChildren = (props)=> props.routes.map((route, i) => (
	<Route key={i}
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.children} />
		)}
	/>
));
export function Root(user) {
	return (
		<BrowserRouter>
			<RouteChildren routes={routes}/>
		</BrowserRouter>
	);
}