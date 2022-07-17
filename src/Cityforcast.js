import React from "react";

export default function Cityforcast() {
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
          19°<span>C</span>
        </div>
        <div id="weather-description">clear sky</div>
      </div>
      <div className="description-wrapper mt-5 ">
        <div id="humidity ">
          {" "}
          <span>humidity:</span> 50%
        </div>
        <div id="wind-speed">
          <span>Wind:</span> 4 km/h
        </div>
      </div>
    </div>
  );
}
