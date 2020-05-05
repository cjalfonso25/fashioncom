import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  //   const user = getCurrentUser();
  const user = "";

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} user={user} />;
      }}
    />
  );
};

export default PublicRoute;
