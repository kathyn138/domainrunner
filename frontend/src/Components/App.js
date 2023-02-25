import React from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import RouteList from './RouteList';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid h-100">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
