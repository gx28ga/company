/**
 *  author : bo.peng
 *  createTime 2018-10-26 11:44
 *  description :
 */
import React from 'react';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import lazyLoad from "./LazyLoad";

const Container= lazyLoad(() => import(/* webpackChunkName: "contrainer" */ '../containers/Container'));
const Order= lazyLoad(() => import(/* webpackChunkName: "Order" */ '../containers/order'));
/*
import routes from "./router";
export const RouteChildren = (props)=> (
	props.children.map((route, i) => (<Route
				key={i}
				path={route.path}
				render={props => (
					// pass the sub-routes down to keep nesting
					<route.component {...props} children={route.children} />
				)}
			/>)
	)
);*/
export const RouteChildren=()=>(
<Switch>
	<Route path="/order" component={Order}/>
	<Redirect to="/order"/>
</Switch>
);
export const Root=()=>(
	<BrowserRouter>
		<Container/>
	</BrowserRouter>
);
