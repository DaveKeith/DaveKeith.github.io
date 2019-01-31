import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router basename="https://davekeith.github.io/">
    <App />
  </Router>,
  document.getElementById("root")
);
