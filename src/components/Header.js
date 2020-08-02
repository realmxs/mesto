import React from 'react';
import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <a href="#">
        <img className="logo" src={logo} alt="Mesto Russia" lang="en" />
      </a>
    </header>
  );
}

export default Header
