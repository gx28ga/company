/**
 *  author : bo.peng
 *  createTime 2018-11-08 16:27
 *  description :
 */
import React from 'react';
import {RouteChildren} from "../../router";
const Product=({ parent, children })=> {
	return <RouteChildren parent={parent} children={children}/>;
};
export default Product;