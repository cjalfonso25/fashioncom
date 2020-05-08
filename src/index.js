import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
