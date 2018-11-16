/**
 *  author : bo.peng
 *  createTime 2018-11-16 17:24
 *  description :
 */
import React from 'react';
import {RouteChildren} from "../router";
const Layout=({ parent, children })=> {
	return <RouteChildren parent={parent} children={children}/>
};
export default Layout;