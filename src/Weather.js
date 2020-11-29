import React from "react";
import "./Weather.css";

import Currentdate from "./Currentdate.js";
import Forecastday1 from "./Forecastday1.js";
import Forecastday2 from "./Forecastday2.js";
import Forecastday3 from "./Forecastday3.js";
import Forecastday4 from "./Forecastday4.js";
import Forecastday5 from "./Forecastday5.js";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="city-form">
              <input type="text" id="city-name" placeholder="Enter your city" />
            </form>
            <h3 id="h3-city">LONDON,UK</h3>
            <p id="current-date">Sunday 20 September</p>
            <br />

            <Currentdate />
            <Forecastday1 />
            <Forecastday2 />
            <Forecastday3 />
            <Forecastday4 />
            <Forecastday5 />
          </div>

          <small>
            {" "}
            <a
              href="https://github.com/MaryRapa/react_app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Mary Rapa
          </small>
        </div>
      </div>
    </div>
  );
}
