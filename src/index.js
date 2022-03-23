import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
//import antdesign cdn
import 'antd/dist/antd.css';

ReactDOM.render(
<BrowserRouter>
  <App/>
</BrowserRouter>
,document.getElementById('root'))