import React from "react";

export default function Weekdays() {
  return (
    <div>
      <div className="days-card">
        <div className="title">sunday</div>
        <div className="days-weather-icon"></div>
        <div className="max-min">
          <span className="max-temp">20</span> |
          <span className="min-temp">18</span>
        </div>
      </div>
    </div>
  );
}
