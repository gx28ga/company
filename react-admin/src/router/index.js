/**
 *  author : bo.peng
 *  createTime 2018-10-26 11:44
 *  description :
 */
import React from 'react';
import { Route, Link  } from "react-router-dom";
import {Container} from "../containers/Container";
/*const Home = () => <div>/</div>;

const About = () => <h2>About</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Message = () => <h2>Message</h2>;*/

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
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
		  <li>
			<Link to="/tacos/bus/1">bas1</Link>
		  </li>
		</ul>
		<ViewRouter routes={routes}/>
	  </div>
  );
}
export function ViewRouter( {routes} ){
  return (
	  <>
		{routes.map((route, i) => (
			<RouteWithSubRoutes key={i} {...route} />
		))}
	  </>
  );
}

function Bus({ routes }) {
  return (
  	<>
	  <h3>Bus</h3>

	  <ViewRouter routes={routes}/>
	</>
	);
}

function Bus1() {
  return <h3>Bus1111</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

////////////////////////////////////////////////////////////
// then our route config
export const routes = [
  {
	path: "/sandwiches",
	component: Sandwiches
  },
  {
	path: "/tacos",
	component: Tacos,
	routes: [
	  {
		path: "/tacos/bus",
		component: Bus,
		routes: [
		  {
			path: "/tacos/bus/1",
			component: Bus1
		  },
		  {
			path: "/tacos/bus/2",
			component: Bus1
		  },
		]
	  },
	  {
		path: "/tacos/cart",
		component: Cart
	  }
	]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
	  <Route
		  path={route.path}
		  render={props => {
		    return (<route.component {...props} routes={route.routes} />)
		  }}
	  />
  );
}

/*const AuthButton = withRouter(
	({ history }) =>
		fakeAuth.isAuthenticated ? (
			<p>
			  Welcome!{" "}
			  <button
				  onClick={() => {
					fakeAuth.signout(() => history.push("/"));
				  }}
			  >
				Sign out
			  </button>
			</p>
		) : (
			<p>You are not logged in.</p>
		)
);*/

function Root( user ) {
  if(user.isLogin){
	return <div>请登录</div>
  }
  return (
		<>
		  {/*<ul>
			<li>
			  <Link to="/tacos">Tacos</Link>
			</li>
			<li>
			  <Link to="/sandwiches">Sandwiches</Link>
			</li>
		  </ul>*/}
		  <Container/>
		  <ViewRouter routes={routes}/>
		</>
  );
}
export default Root;