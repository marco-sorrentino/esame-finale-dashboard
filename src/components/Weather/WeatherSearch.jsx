import { useEffect, useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWeatherAction, getWeatherHourAction } from "../redux/action";
import "./weather.scss";
import React from "react";

export const WeatherSearch = () => {
  const [city, setCity] = useState("Milan");
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const weatherCity = useSelector((state) => state.dashboard.weather);
  const hour = useSelector((state) => state.dashboard.moreWeather);
  console.log(hour);

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
      <div className="mt-3">
        <Row>
          <Col xs={12} md={4}>
            <div className="bgAllDiv p-3 weatherCard">
              <p className="titleExpanse">Find your city</p>
              <FormControl
                type="text"
                placeholder="Write here..."
                className="inputBudget mt-2"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={search}
              />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="bgAllDiv p-3 weatherCard">
              <div>
                <p className="mt- city">
                  {weatherCity?.name} , {weatherCity?.main?.temp?.toFixed()} ° C
                </p>
              </div>
              <div className=" d-flex align-items-center justify-content-between p-0">
                <div className="bg-inf square d-flex flex-column align-items-center justify-content-center">
                  <p className="m-0">Max</p>
                  <p className="leftText">
                    {weatherCity?.main?.temp_max.toFixed()} ° C
                  </p>
                </div>
                <div className="bg-inf square d-flex align-items-center justify-content-center mx-4">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
                <div className="bg-inf square d-flex flex-column align-items-center justify-content-center">
                  <p className="m-0">Min</p>
                  <p className="leftText">
                    {weatherCity?.main?.temp_min.toFixed()} ° C
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="bgAllDiv p-3 weatherCard">
              <p>umidità: {weatherCity?.main?.humidity}</p>
              <p>vento: {weatherCity?.wind?.speed}</p>
              <p>direzione: {weatherCity?.wind?.deg}°</p>
              <p>pressione: {weatherCity?.main?.pressure}</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
