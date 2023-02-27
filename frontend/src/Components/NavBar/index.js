import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
      <nav className="navbar fixed-top bg-body-tertiary">
      <span className="navbar-icon-span"><img className="navbar-icon" src="./favicon.ico" alt="favicon"></img></span>
        <div className="container navbar-container">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <a className="navbar-brand" href="#">
            Characters
          </a>
          <a className="navbar-brand" href="#">
            Weapons
          </a>
          <a className="navbar-brand" href="#">
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
