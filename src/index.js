import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/bootstrap.min.css';
import "antd/dist/antd.css";
import './assets/css/app.css';
import "react-datepicker/dist/react-datepicker.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-summernote/dist/react-summernote.css'; // import styles
import "tempusdominus-bootstrap/src/sass/tempusdominus-bootstrap-build.scss"; 
import 'react-summernote/lang/summernote-ru-RU'; 
import './assets/css/fontawesome.min.css';
import './assets/css/lnr-icon.css';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
import './assets/js/app.js';
// import './assets/js/script.js';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

