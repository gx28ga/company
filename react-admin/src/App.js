import React, { Component } from 'react';
/*import { Provider } from 'react-redux';*/
import {BrowserRouter} from 'react-router-dom';
import { Provider  } from 'react-redux';
import config from "../config/config.js";
import Main from "./containers/Main";
import store from './redux';
class App extends Component {
  render() {
    return (
		<Provider store={store}>
		  <BrowserRouter basename={config.assetsPublicPath}>
			  <Main/>
		  </BrowserRouter>
		</Provider>
    );
  }
}

export default App;
