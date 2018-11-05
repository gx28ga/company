import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider  } from 'react-redux'
import Apps from './components/App';
import todoApp from './reducers'

let store = createStore(todoApp);
console.log(store.getState())

render(
	<Provider store={store}>
	  <Apps />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
