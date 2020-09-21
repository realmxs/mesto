import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ loggedIn, userEmail, isSigninFormOpen, logout }) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Mesto Russia" lang="en" />
      {loggedIn ?
        <div className="header__nav">
          <p className="header__nav_email">{userEmail}</p>
          <Link className="header__nav_button" to="/signin" onClick={logout}>Выйти</Link>
        </div> :
        <div className="header__nav">
          <Link className="header__nav_button" to={isSigninFormOpen ? "/signup" : "/signin"}>
            {isSigninFormOpen ? "Регистрация" : "Войти"}
          </Link>
        </div>
      }
    </header>
  )
}

export default Header;
