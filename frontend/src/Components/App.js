import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import RouteList from './RouteList';

function App() {

  const dispatch = useDispatch();

  dispatch({ type: "GET_ENTITIES"});

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-center d-flex align-items-center">
          <RouteList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
