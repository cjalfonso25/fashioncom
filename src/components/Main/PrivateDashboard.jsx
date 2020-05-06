import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Dashboard/Sidebar";

const PrivateDashboard = () => {
  return (
    <div class="dashboard-page">
      <Sidebar />
      <Switch>
        <Route
          path="/projects/fashioncom/dashboard/main"
          component={Dashboard}
        />
        <Redirect
          from="/projects/fashioncom/dashboard"
          exact
          to="/projects/fashioncom/dashboard/main"
        />
      </Switch>
    </div>
  );
};

export default PrivateDashboard;
