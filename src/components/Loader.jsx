import React from 'react';
import { Spin } from 'antd';
import './Loading.css';
const Loader = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default Loader;