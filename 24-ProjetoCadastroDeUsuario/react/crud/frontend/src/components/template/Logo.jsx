import './Logo.css';
import logo from '../../assets/imgs/logo.svg';
import React from 'react';

export default props =>
  <aside className='logo'>
    <img src={logo} alt="logo" />
  </aside>