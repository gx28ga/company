import React, { Component } from 'react';
/*import { Provider } from 'react-redux';*/
import {BrowserRouter} from 'react-router-dom';
import config from "../config/config.js";
import Root from "./router";
class App extends Component {
  render() {
    return (
		<BrowserRouter basename={config.assetsPublicPath}>
			<Root/>
		</BrowserRouter>
    );
  }
}

export default App;
