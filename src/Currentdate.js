import React from "react";
import "./Weather.css";
import plainsun from "./images/plainsun.jpg";

export default function Currentdate() {
  return (
    <div className="row">
      <div className="col-3">
        <img id="icon" src={plainsun} alt="Clear" />
      </div>
      <div className="col-3">
        <span className="temperature" id="temperature">
          24
        </span>
        <span className="units">
          <a href="/#" id="celsius-link" className="active">
            °C
          </a>{" "}
          |
          <a href="/#" id="fahrenheit-link">
            °F
          </a>
        </span>
        <p className="description" id="description">
          Sunny
        </p>
      </div>
      <div className="col-6">
        <ul>
          <li id="wind">Wind: 10 kmh</li>
          <li id="humidity">Humidity: 10%</li>
        </ul>
      </div>
    </div>
  );
}
