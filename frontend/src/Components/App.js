import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavBar from './NavBar';
import RouteList from './RouteList';
import { getEntitiesFromAPI } from '../Actions/entities';

function App() {
  //TODO: save cart to session somewhere
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntitiesFromAPI());
  }, [dispatch]);

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
