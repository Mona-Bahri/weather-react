import React, { useState } from "react";
import axios from "axios";

export default function Cityforcast(props) {
  let [data, setData] = useState({});

  function FetchData(respond) {
    console.log(respond.data);
    setData({
      temp: respond.data.main.temp,
      windSpeed: respond.data.wind.speed,
      description: respond.data.weather[0].description,
      humidity: respond.data.main.humidity,
    });
  }
  const apiKey = "2d0271702a5c12ccb610ae9f48878fd2";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(FetchData);
  return (
    <div className="container weatherForcast">
      <div className="city-name" id="cityName">
        Tehran
      </div>
      <div className="weather-icon">
        <img src="" alt="Weather icon" />
      </div>
      <div className="de-wrapper">
        <div id="temperature">
          {Math.round(data.temp)}°<span>C</span>
        </div>
        <div id="weather-description">{data.description}</div>
      </div>
      <div className="description-wrapper mt-5 ">
        <div id="humidity ">
          {" "}
          <span>humidity:</span> {data.humidity}%
        </div>
        <div id="wind-speed">
          <span>Wind:</span> {Math.round(data.windSpeed)} km/h
        </div>
      </div>
    </div>
  );
}
