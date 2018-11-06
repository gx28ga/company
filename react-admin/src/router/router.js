import {Link} from "react-router-dom";
import React from "react";
import {RouteChildren} from "./index";
import Container from "../containers/Container";

/**
 *  author : bo.peng
 *  createTime 2018-10-31 19:29
 *  description :
 */

function Tacos({ children }) {
	return (
		<div>
			<h2>Tacos</h2>
			<ul>
				<li>
					<Link to="/tacos/bus">Bus</Link>
				</li>
				<li>
					<Link to="/tacos/cart">Cart</Link>
				</li>
			</ul>

			<RouteChildren children={children}/>
		</div>
	);
}

function Bus() {
	return <h3>Bus</h3>;
}

function Cart() {
	return <h3>Cart</h3>;
}
const routes = [
	{
		path: "/",
		name: "说明",
		component: Container,
		children:[
			{
				path: "/tacos",
				component: Tacos,
				children: [
					{
						path: "/tacos/bus",
						component: Bus
					},
					{
						path: "/tacos/cart",
						component: Cart
					}
				]
			}
		]
	},
];
export default routes;