import React from 'react';

function NavBar() {
  return (
    <div className="container">
      <nav class="navbar fixed-top bg-body-tertiary">
        <div class="container">
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
    </div>
  );
}

export default NavBar;
