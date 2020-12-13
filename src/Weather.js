import React, { useState } from "react";
import axios from "axios";
import SetDate from "./SetDate.js";
import "./Weather.css";

import Currentdate from "./Currentdate.js";
import Forecastdays from "./Forecastdays.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      name: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.main,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="city-form">
          <input type="text" id="city-name" placeholder="Enter your city" />
        </form>
        <h3 id="h3-city">{weatherData.name}</h3>
        <SetDate date={weatherData.date} />
        <Currentdate weatherData={weatherData} />
        <Forecastdays lat={weatherData.lat} lon={weatherData.lon} />
      </div>
    );
  } else {
    const apiKey = "3154b3b9fa1b9603160b9d7cdb5a315c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
