import React, { useState } from "react";
import axios from "axios";
import SetDate from "./SetDate.js";
import "./Weather.css";

import Currentdate from "./Currentdate.js";
import Forecastdays from "./Forecastdays.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState(props.defaultUnit);

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

  function handleSubmit(event) {
    event.preventDefault();
    queryApi(unit);
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleUnitChange(event) {
    event.preventDefault();
    if (event.target.value !== unit) {
      setUnit(event.target.value);
      queryApi(event.target.value);
    }
  }

  function queryApi(targetUnit) {
    const apiKey = "3154b3b9fa1b9603160b9d7cdb5a315c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${targetUnit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="city-name"
            placeholder="Enter your city"
            onChange={handleCityChange}
          />
          <label>Units:</label>
          <select onChange={handleUnitChange}>
            <option value="metric">°C</option>
            <option value="standard">°K</option>
            <option value="imperial">°F</option>
          </select>
        </form>
        <h3 id="h3-city">{weatherData.name}</h3>
        <SetDate date={weatherData.date} />
        <Currentdate weatherData={weatherData} />
        <Forecastdays lat={weatherData.lat} lon={weatherData.lon} unit={unit} />
      </div>
    );
  } else {
    queryApi(unit);
    return "Loading...";
  }
}
