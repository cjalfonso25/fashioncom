import React, { useState, useEffect, useMemo } from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PrivateDashboardRoute from "./components/Routes/PrivateDashboardRoute";
import Public from "./components/Main/Public";
import Private from "./components/Main/Private";
import PrivateDashboard from "./components/Main/PrivateDashboard";
import { ProductContext } from "./components/context/ProductContext";
import { getProducts } from "./services/fakeProducts";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState({
    all: true,
    men: false,
    women: false,
    accessories: false,
  });
  const [showCart, setShowCart] = useState(false);

  const providerValue = useMemo(
    () => ({
      products,
      setProducts,
      cart,
      setCart,
      showCart,
      setShowCart,
      filter,
      setFilter,
    }),
    [
      products,
      cart,
      setProducts,
      setCart,
      showCart,
      setShowCart,
      filter,
      setFilter,
    ]
  );

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <ProductContext.Provider value={providerValue}>
      <Switch>
        <PrivateDashboardRoute
          path="/projects/fashioncom/dashboard"
          component={PrivateDashboard}
        />
        <PrivateRoute path="/projects/fashioncom/profile" component={Private} />
        <PublicRoute path="/projects/fashioncom" component={Public} />
      </Switch>
    </ProductContext.Provider>
  );
}

export default App;
