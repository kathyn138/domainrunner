import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import EntityContainer from "./EntityContainer";
import TaskListContainer from "./TaskListContainer";

function RouteList() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/characters" render={() => <EntityContainer />} />
        <Route exact path="/weapons" render={() => <EntityContainer />} />
        <Route exact path="/tasklist" render={() => <TaskListContainer />} />
      </Routes>
      {/* <Navigate to="/" /> */}
    </React.Fragment>
  );
}

export default RouteList;
