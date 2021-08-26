import React from "react";
import axios from "axios";

export default function Weather(props) {
    return (
      <div className="Weather">
        <h1 className="city"> {props.city}</h1>
        <ul>
          <li id="date">Tuesday 10:00</li>
          <li id="description">Sunny</li>
        </ul>
        <div class="row">
          <div class="col-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
                class="float-left"
                id="icon"
              />
              <div class="float-left">
                <strong id="temperature">{props.temperature}</strong>
                <span class="units">
                  <a href="#" id="celsius-link">
                    {" "}
                    C{" "}
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit-link">
                    {" "}
                    F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{props.humidity} </span>%
              </li>
              <li>
                Wind: <span id="wind">{props.wind}</span>Km/H
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }