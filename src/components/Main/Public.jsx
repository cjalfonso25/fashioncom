import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import About from "../About/About";
import Checkout from "../Checkout/Checkout";
import Product from "../Product/Product";
import OrderSuccess from "../Checkout/Success/OrderSuccess";

const Public = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Switch>
        <Route
          path="/projects/fashioncom/order-successful"
          component={OrderSuccess}
        />
        <Route path="/projects/fashioncom/products/:id" component={Product} />
        <Route path="/projects/fashioncom/checkout" component={Checkout} />
        <Route path="/projects/fashioncom/about" component={About} />
        <Route path="/projects/fashioncom/login" component={Login} />
        <Route path="/projects/fashioncom/home" component={Home} />
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

export default Public;
