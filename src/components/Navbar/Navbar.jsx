import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const Navbar = () => {
  const { cart, showCart, setShowCart } = useContext(ProductContext);

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <Link to="/projects/fashioncom" className="navbar-brand">
            FashionCom
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/projects/fashioncom" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects/fashioncom/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects/fashioncom/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn  btn-link"
                  onClick={() => setShowCart(!showCart)}
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge badge-danger">{cart.length}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
