import lazyLoad from "../LazyLoad";

/**
 *  author : bo.peng
 *  createTime 2018-11-06 16:28
 *  description :
 */
import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
const orderList= lazyLoad(() => import(/* webpackChunkName: "order" */ '../../containers/order/list'));

export const OrderRoute= ()=>(
	<Switch>
		<Route path="/order/list" component={orderList}/>
		<Redirect to="/order/list"/>
	</Switch>
);