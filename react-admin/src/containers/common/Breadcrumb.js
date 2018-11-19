/**
 *  author : bo.peng
 *  createTime 2018-11-16 17:41
 *  description : 面包屑
 */
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import {routes} from "../../router/router";
import Util from "../../utils/Util";

const getName = (path) => {
	let arr = [],
		paths = path.split('/');

	function getPath(router) {
		router.forEach((route, i) => {
			if (new RegExp(paths[0] + '$').test(route.path.replace(/\/:\w+$/, ''))) {
				paths.shift();
				arr.push(route);
				if (route.children) {
					getPath(route.children);
				}
			}
		})
	}

	getPath(routes);
	return arr;
};
const leftConfig = ( element ) => {
	if(Util.isObject(element) && Object.getOwnPropertyDescriptor('title')){
		return element.title;
	}
	return element;
};
export default (props) => {
	const names = getName(props.pathname);
	const length = names.length - 1;
	return (<div style={{
			paddingLeft: '15px',
			height: '40px',
			lineHeight: '40px',
			overflow: 'hidden',
			...props.style}} className={props.className}>
			<div style={{float: 'right'}}>
				<Breadcrumb style={{height: 45, lineHeight: '45px', padding: '0 15px'}} separator=">">
					{
						names.map((item, i) =>
							<Breadcrumb.Item key={i}>
								{
									i !== length ?
										<Link to={item.path}>
											{item.name}
										</Link> :
										<span>{item.name}</span>
								}

							</Breadcrumb.Item>)
					}
				</Breadcrumb>
			</div>
			{leftConfig(props.left)}
		</div>
	)
}