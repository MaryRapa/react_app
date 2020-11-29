import React from "react";
import "./Weather.css";
import rain from "./images/rain.jpg";

export default function Forecastday5() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 id="card-fiv-title" className="card-title">
          Fri
        </h4>
        <img
          id="card-fiv-img"
          src={rain}
          className="card-img-top"
          alt="Rainy"
        />
        <p id="card-fiv-txt" className="card-text">
          <strong>15° </strong> <br />
          11°
        </p>
      </div>
    </div>
  );
}
