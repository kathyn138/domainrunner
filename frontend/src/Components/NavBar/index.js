import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
      <nav className="navbar fixed-top">
      <span className="navbar-icon-span"><img className="navbar-icon" src="./favicon.ico" alt="favicon"></img></span>
        <div className="container navbar-container">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <a className="navbar-brand" href="/characters">
            Characters
          </a>
          <a className="navbar-brand" href="/weapons">
            Weapons
          </a>
          <a className="navbar-brand" href="/calendar">
            Calendar
          </a>
          <a className="navbar-brand" href="#">
            Cart
          </a>
        </div>
      </nav>
  );
}

export default NavBar;
