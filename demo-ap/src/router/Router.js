/**
 *  author : bo.peng
 *  createTime 2018-10-25 13:39
 *  description :
 */
import React from "react";
import { BrowserRouter as Router, Switch , Route, Link } from "react-router-dom";

const App = () => (
	<Router>
	  <div>
		<Header />
		<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/topics" component={Topics} />
		</Switch>
	  </div>
	</Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = ({ match }) => (
	<div>
	  <h2>Topics</h2>

	  <ul>
		<li>
		  <Link to={`${match.url}/components`}>Components</Link>
		</li>
		<li>
		  <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
		</li>
	  </ul>

	  <Route path={`${match.path}/:id`} component={Topic} />
	  <Route
		  exact
		  path={match.path}
		  render={() => <h3>Please select a topic.</h3>}
	  />
	</div>
);
const Header = () => (
	<ul>
	  <li>
		<Link to="/">Home</Link>
	  </li>
	  <li>
		<Link to="/about">About</Link>
	  </li>
	  <li>
		<Link to="/topics">Topics</Link>
	  </li>
	</ul>
);

export default App;