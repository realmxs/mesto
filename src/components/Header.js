import React from 'react';
import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Mesto Russia" lang="en" />
    </header>
  );
}

export default Header
