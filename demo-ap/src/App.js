import React, { Component } from 'react';
import './App.css';
import RouterApp from "./router/Router";
import store from "./store/index";

// 打印初始状态
console.log(store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
		<RouterApp/>
      </div>
    );
  }
}
export default App;
