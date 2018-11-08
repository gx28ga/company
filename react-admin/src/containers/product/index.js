/**
 *  author : bo.peng
 *  createTime 2018-11-08 16:27
 *  description :
 */
import React from 'react';
import {RouteChildren} from "../../router";
function Action(parent){
	return (<div>{parent.name}</div>);
}
const Product=({ parent, children })=> {
	return (
		<div>
			123214
			{
				Action(parent)
			}
			<RouteChildren parent={parent} children={children}/>
		</div>
	);
};
export default Product;