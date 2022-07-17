import React from "react";
import "./App.css";

export default function NavigationBar() {
  return (
    <div className="nav-bar">
      <form className="searchForm">
        <input
          id="searchBar"
          className="search"
          type="text"
          autoFocus="on"
          placeholder="Search for a city.."
        />
        <button type="submit" className="btn btn-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
