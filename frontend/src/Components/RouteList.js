import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import EntityList from './EntityList';
import CalendarContainer from './CalendarContainer';
import CartContainer from './CartContainer';

function RouteList() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/characters"
        element={<EntityList entityCategory="characters" />}
      />
      <Route
        exact
        path="/weapons"
        element={<EntityList entityCategory="weapons" />}
      />
      <Route exact path="/calendar" element={<CalendarContainer />} />
      <Route exact path="/cart" element={<CartContainer />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RouteList;
