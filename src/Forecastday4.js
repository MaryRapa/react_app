import React from "react";
import "./App.css";
import cloud from "./images/cloud.png";

export default function Forecastday4() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 id="card-fou-title" className="card-title">
          Thu
        </h4>
        <img
          id="card-fou-img"
          src={cloud}
          className="card-img-top"
          alt="Cloudy"
        />
        <p id="card-fou-txt" className="card-text">
          <strong> 16°</strong> <br />
          11°
        </p>
      </div>
    </div>
  );
}
