import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavBar from './NavBar';
import RouteList from './RouteList';
import { getEntitiesFromAPI } from '../Actions/entities';
import { populateCart } from '../Actions/cart';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Theme/GlobalStyles';
import { useTheme } from '../Theme/useTheme';

function App() {
  const dispatch = useDispatch();
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    dispatch(getEntitiesFromAPI());
  }, [dispatch]);

  // check if cart already in localStorage
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      let cart = localStorage.getItem('cart');
      dispatch(populateCart(JSON.parse(cart)));
    }
  }, [dispatch]);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <NavBar />
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-center d-flex align-items-center">
          <RouteList />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
