import React from "react";
import "./Currentdate.css";
import WeatherIcon from "./WeatherIcon.js";

export default function Currentdate(props) {
  return (
    <div className="row">
      <div className="col-3">
        <WeatherIcon code={props.weatherData.icon} />
      </div>
      <div className="col-3">
        <span className="temperature" id="temperature">
          {props.weatherData.temperature}°
        </span>
        <p className="description" id="description">
          {props.weatherData.description}
        </p>
      </div>
      <div className="col-6">
        <ul>
          <li id="wind">Wind: {props.weatherData.wind} kmh</li>
          <li id="humidity">Humidity: {props.weatherData.humidity} %</li>
        </ul>
      </div>
    </div>
  );
}
