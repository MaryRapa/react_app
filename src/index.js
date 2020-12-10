import React from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <Weather />
  </React.StrictMode>,
  rootElement
);