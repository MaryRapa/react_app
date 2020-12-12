import React from "react";
import "./App.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecastday(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{getDayOfWeek(props.date)}</h4>
        <WeatherIcon code={props.icon} />
        <p className="card-text">
          <strong>{props.maxTemp}°</strong> <br />
          {props.minTemp}°
        </p>
      </div>
    </div>
  );
}

function getDayOfWeek(unix_timestamp) {
  var date = new Date(unix_timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}
