import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.less";
import './style/theme-file.less';
import './style/App.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'nprogress/nprogress.css';
import * as serviceWorker from './serviceWorker';
moment.locale('zh-cn');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
