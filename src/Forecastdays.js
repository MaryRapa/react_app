import React, { useState } from "react";
import axios from "axios";

import Forecastday from "./Forecastday.js";

export default function Forecastdays(props) {
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    setForecastData({
      ready: true,
      loadedLon: response.data.lon,
      loadedLat: response.data.lat,
      loadedUrl: response.config.url,
      dayOne: getForecastData(response.data.daily[1]),
      dayTwo: getForecastData(response.data.daily[2]),
      dayThree: getForecastData(response.data.daily[3]),
      dayFour: getForecastData(response.data.daily[4]),
      dayFive: getForecastData(response.data.daily[5]),
    });
  }

  if (
    forecastData.ready &&
    props.lon === forecastData.loadedLon &&
    props.lat === forecastData.loadedLat &&
    forecastData.loadedUrl.includes(props.unit)
  ) {
    return (
      <div>
        <Forecastday {...forecastData.dayOne} />
        <Forecastday {...forecastData.dayTwo} />
        <Forecastday {...forecastData.dayThree} />
        <Forecastday {...forecastData.dayFour} />
        <Forecastday {...forecastData.dayFive} />
      </div>
    );
  } else {
    const apiKey = "3154b3b9fa1b9603160b9d7cdb5a315c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${props.unit}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

function getForecastData(response) {
  return {
    date: response.dt,
    icon: response.weather[0].icon,
    desc: response.weather[0].description,
    maxTemp: Math.round(response.temp.max),
    minTemp: Math.round(response.temp.min),
  };
}
