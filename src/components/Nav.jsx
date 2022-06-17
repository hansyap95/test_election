import React from 'react'
import {Menu } from 'antd';
import { Link } from 'react-router-dom';
//import Logo from '../img/logo-official.webp';
import "./Nav.css";


const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='logo'></div>
      <div className='menu-item'>
        <Menu theme="dark" mode='horizontal' >
          <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/seats">议席列表</Link></Menu.Item>
        </Menu>
      </div>
      
    </div>
    

  )}

export default Nav