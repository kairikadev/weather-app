import React, {useState} from "react";
import axios from "axios";
import "./weather.css";


export default function Weather() {
  let [weather, setWeather]= useState({});
  let [city, setCity] = useState("");
  let [displayCity, setDisplayCity] = useState("");
  
  let[forecast,setForecast]= useState({});

  function showCity(event){
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1011e97bf969d1b569c2b62944075b5&units=metric`;
    axios.get(url).then(showValues);
  }

  function changeCity(event){
    setCity(event.target.value);
  }

  
  function showValues(response) {
    let forecast = {
      temperature: ` ${response.data.main.temp} `,
      description: `${response.data.weather[0].description}`,
      humidity: ` ${response.data.main.humidity}`,
      wind: ` ${response.data.wind.speed}`,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    };
    setForecast(forecast);
    setDisplayCity(city);
  };


    return (
      <div className="Weather">
        <div className ="container-sm">
      <form  className="" onSubmit={showCity}>
        <div className="row">
          <div className="col pt-2">
            <input
              type="search"
              placeholder="Enter the city..."
              className="form-control"
              onChange={changeCity}
            />
          </div>
          <div className="col">
            <input type="submit" value="search" className="btn btn-primary"  />
            
            <button className="btn btn-success m-2" >
                Current
            </button>
            
          </div>
        </div>
      </form>
    </div>
        <h1 className="city"> {displayCity}</h1>
        <ul>
          <li >Tuesday 10:00</li>
          <li >{forecast.description}</li>
        </ul>
        <div class="row">
          <div class="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={forecast.icon}
                alt={forecast.description}
                class="float-left"
               
              />
              <div class="float-left">
                <strong >{Math.round(forecast.temperature)}</strong>
                <span className="units">
                  <a href="#" >
                    {" "}
                    C{" "}
                  </a>{" "}
                  |
                  <a href="#" >
                    {" "}
                    F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span >{forecast.humidity} </span>%
              </li>
              <li>
                Wind: <span>{forecast.wind}</span>Km/H
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }