import React from "react";
import "./App.css";
import plainsun from "./images/plainsun.jpg";

export default function Forecastday3() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 id="card-thr-title" className="card-title">
          Wed
        </h4>
        <img
          id="card-thr-img"
          src={plainsun}
          className="card-img-top"
          alt="Clear"
        />
        <p id="card-thr-txt" className="card-text">
          <strong>20°</strong> <br />
          15°
        </p>
      </div>
    </div>
  );
}
