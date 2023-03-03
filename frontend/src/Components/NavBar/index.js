import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar fixed-top">
      <span className="navbar-icon-span">
        <img className="navbar-icon" src="./favicon.ico" alt="favicon"></img>
      </span>
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/characters">
          Characters
        </Link>
        <Link className="navbar-brand" to="/weapons">
          Weapons
        </Link>
        <Link className="navbar-brand" to="/calendar">
          Calendar
        </Link>
        <Link className="navbar-brand" to="#">
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
