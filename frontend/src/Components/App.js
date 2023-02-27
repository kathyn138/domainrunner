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
        <div className="row h-100 justify-content-center d-flex align-items-center">
          <Home />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
