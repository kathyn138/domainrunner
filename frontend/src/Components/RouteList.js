import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import EntityContainer from './EntityContainer';
import TaskListContainer from './TaskListContainer';

function RouteList() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/characters" element={<EntityContainer />} />
      <Route exact path="/weapons" element={<EntityContainer />} />
      <Route exact path="/tasklist" element={<TaskListContainer />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RouteList;
