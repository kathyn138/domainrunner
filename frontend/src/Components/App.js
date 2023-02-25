import React from 'react';
import './App.css';
import NavBar from './NavBar';
import RouteList from './RouteList';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <header className="App-header">
        hi
        <RouteList />
      </header>
    </div>
  );
}

export default App;
