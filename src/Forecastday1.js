import React from "react";
import "./Weather.css";
import sunandcloud from "./images/sunandcloud.jpg";

export default function Forecastday1() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 id="card-one-title" className="card-title">
          Mon
        </h4>
        <img
          id="card-one-img"
          src={sunandcloud}
          className="card-img-top"
          alt="Sunny with clouds"
        />
        <p id="card-one-txt" className="card-text">
          <strong>16°</strong> <br />
          11°
        </p>
      </div>
    </div>
  );
}
