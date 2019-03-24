import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';
import bars from '../../assets/bars.svg'

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
       <Link to="/" className="header--logo-link"> <img src={logo} alt="logo" className="header--logo" />
        <h1 className="header--logo--text">react anim kit</h1>
        </Link>
        <Link to="/" className="header--link">Frontpage</Link>
        <button className="menu--button" onClick={this.props.toggleSidebar}><img src={bars} alt="bars" className="menu--button--icon" /></button>
      </div>
    );
  }
}

export default Header;
