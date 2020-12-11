import React, { useState } from "react";
import axios from "axios";
import SetDate from "./SetDate.js";
import "./App.css";

import Currentdate from "./Currentdate.js";
import Forecastday1 from "./Forecastday1.js";
import Forecastday2 from "./Forecastday2.js";
import Forecastday3 from "./Forecastday3.js";
import Forecastday4 from "./Forecastday4.js";
import Forecastday5 from "./Forecastday5.js";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      name: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.main,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="city-form">
                <input
                  type="text"
                  id="city-name"
                  placeholder="Enter your city"
                />
              </form>
              <h3 id="h3-city">{weatherData.name}</h3>
              <SetDate date={weatherData.date} />
              <br />

              <Currentdate weatherData={weatherData} />
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
  } else {
    const apiKey = "3154b3b9fa1b9603160b9d7cdb5a315c";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
