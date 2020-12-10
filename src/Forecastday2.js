import React from "react";
import "./App.css";
import sunandcloud from "./images/sunandcloud.jpg";

export default function Forecastday2() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 id="card-two-title" className="card-title">
          Tue
        </h4>
        <img
          id="card-two-img"
          src={sunandcloud}
          className="card-img-top"
          alt="Sunny with clouds"
        />
        <p id="card-two-txt" className="card-text">
          <strong>18° </strong> <br />
          14°
        </p>
      </div>
    </div>
  );
}
