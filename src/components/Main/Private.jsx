import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";

const Private = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Switch>
        <Route path="/projects/fashioncom/dashboard" component={Profile} />
        <Route path="/projects/fashioncom/profile" component={Profile} />
        <Redirect
          from="/projects/fashioncom"
          exact
          to="/projects/fashioncom/home"
        />
      </Switch>
      <Footer />
    </>
  );
};

export default Private;
