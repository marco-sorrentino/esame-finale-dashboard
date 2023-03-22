import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Temperatures = () => {
  const weatherCity = useSelector((state) => state.dashboard.weather);
  let averageTemp =
    (weatherCity?.main?.temp / weatherCity?.main?.temp_max) * 100;

  return (
    <div className="bgAllDiv p-3 weatherCard d-flex flex-column justify-content-between">
      <p className="weatherTitle">Temperature</p>
      <div className="d-flex align-items-center">
        <p className="fw-bold fs-4">{weatherCity?.main?.temp_max.toFixed()}°</p>
        <p className="ms-2">Max</p>
        <ProgressBar
          className="barWidth ms-3"
          variant="warning"
          now={averageTemp.toFixed()}
        />
      </div>
      <div className="d-flex align-items-center">
        <p className="fw-bold fs-4">{weatherCity?.main?.temp_min.toFixed()}°</p>
        <p className="ms-2">Min</p>
      </div>
      <p className="">Feels like {weatherCity?.main?.feels_like.toFixed()}°</p>
    </div>
  );
};
