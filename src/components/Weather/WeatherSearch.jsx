import { useEffect, useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWeatherAction, getWeatherHourAction } from "../redux/action";
import "./weather.scss";
import React from "react";
import { Humidity } from "./Humidity";

export const WeatherSearch = () => {
  const [city, setCity] = useState("Milan");
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const weatherCity = useSelector((state) => state.dashboard.weather);
  const hour = useSelector((state) => state.dashboard.moreWeather);
  console.log(weatherCity);

  useEffect(() => {
    dispatch(getWeatherAction(city));
    dispatch(getWeatherHourAction(city));
  }, [city]);

  // Creo funzione per inpur bar
  const search = (e) => {
    // Gli dico di azionari al click del tasto Enter
    if (e.key === "Enter") {
      // Prendo il valore che digito nell'input e lo salvo nello stato
      setCity(e.target.value);
      // All'enter l'input si resetta
      setInputText("");
    }
  };

  const today = new Date();
  const getDay = { weekday: "long" };
  const dayOfWeek = today.toLocaleDateString("en-US", getDay);

  const now = new Date();
  const location = { timeZone: "Europe/Rome" };
  const hourItaly = now.toLocaleTimeString("it-IT", location);

  return (
    <>
      <div>
        <Row className="mt-3 d-flex align-items-center">
          <Col md={4}>
            <FormControl
              type="text"
              placeholder="Search for places"
              className="writeTasks"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={search}
            />
          </Col>
          <Col>
            <hr />
          </Col>
        </Row>
      </div>
      <div className="mt-3">
        <p className="titleTasks">
          Today's Highlights in{" "}
          <span className="cityName">{weatherCity?.name}</span>
        </p>
      </div>
      <div className="mt-3">
        <Row>
          <Col xs={12} md={4}>
            <div className="bgAllDiv p-3 weatherCard">
              <p className="weatherTitle">General</p>
              <div className="d-flex align-items-center">
                <p className="conditionWeather">
                  {weatherCity.weather[0].description.charAt(0).toUpperCase() +
                    weatherCity.weather[0].description.slice(1)}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png`}
                  alt=""
                />
                <p className="conditionWeather">
                  {weatherCity?.main?.temp?.toFixed()} ° C
                </p>
              </div>
              <p>
                {dayOfWeek} , {hourItaly.slice(0, -3)}{" "}
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            {/*             <div className="bgAllDiv p-3 weatherCard">
              <p>umidità: {weatherCity?.main?.humidity}</p>
              <p>vento: {weatherCity?.wind?.speed}</p>
              <p>direzione: {weatherCity?.wind?.deg}°</p>
              <p>pressione: {weatherCity?.main?.pressure}</p>
            </div> */}
            <Humidity />
          </Col>
        </Row>
      </div>
    </>
  );
};
