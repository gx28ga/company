import React, {Component} from 'react';
/*import { Provider } from 'react-redux';*/
import {Provider} from 'react-redux';
import store from './redux';
import Login from "./containers/user/Login";
import connect from "react-redux/es/connect/connect";
import {Root} from "./router";

const view = (user) => (
	<>
		{user.login?<Root/>:<Login/>}
	</>
);
const Jump = connect(state=>state.user)(view);

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<Jump/>
		</Provider>
    );
  }
}
export default App;
