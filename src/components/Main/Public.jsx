import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import About from "../About/About";

const Public = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Switch>
        <Route path="/projects/fashioncom/about" component={About} />
        <Route path="/projects/fashioncom/login" component={Login} />
        <Route path="/projects/fashioncom/home" component={Home} />
        <Redirect from="/projects/fashioncom" to="/projects/fashioncom/home" />
      </Switch>
      <Footer />
    </>
  );
};

export default Public;
