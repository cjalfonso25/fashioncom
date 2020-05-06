import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateDashboardRoute = ({ component: Component, ...rest }) => {
  const user = true;
  const isSeller = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        user && isSeller ? (
          <Component {...props} />
        ) : (
          <Redirect to="/projects/fashioncom/profile" />
        )
      }
    />
  );
};

export default PrivateDashboardRoute;
