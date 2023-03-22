import { useEffect, useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWeatherAction, getWeatherHourAction } from "../redux/action";
import "./weather.scss";
import React from "react";
import cities from "./city.json";

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

  return (
    <>
      {/*  <div onClick={() => setCity("new york")}>new york</div> */}
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
        <Row className="mobileCities">
          {cities.map((el, i) => {
            return (
              <Col key={i}>
                <div
                  onClick={() => setCity(el.name)}
                  className="bgAllDiv cities"
                >
                  <img className="imgCity" src={el?.img} alt="" />
                  <div>
                    <p className="text-center py-1 fw-bold">{el.name}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="mt-3">
        <p className="titleTasks">
          Today's Highlights in{" "}
          <span className="cityName">{weatherCity?.name}</span>
        </p>
      </div>
    </>
  );
};
