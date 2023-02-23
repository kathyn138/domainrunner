import React from 'react';
import './App.css';
import RouteList from './RouteList';

function App() {
  return (
    <div className="container-fluid">
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
      <header className="App-header">
        hi
        <RouteList />
      </header>
    </div>
  );
}

export default App;
