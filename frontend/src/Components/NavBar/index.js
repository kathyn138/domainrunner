import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
      <nav class="navbar fixed-top bg-body-tertiary">
      <span className="navbar-icon-span"><img className="navbar-icon" src="./favicon.ico" alt="favicon"></img></span>
        <div class="container navbar-container">
          <a class="navbar-brand" href="#">
            Home
          </a>
          <a class="navbar-brand" href="#">
            Characters
          </a>
          <a class="navbar-brand" href="#">
            Weapons
          </a>
          <a class="navbar-brand" href="#">
            Calendar
          </a>
          <a class="navbar-brand" href="#">
            Cart
          </a>
        </div>
      </nav>
  );
}

export default NavBar;
