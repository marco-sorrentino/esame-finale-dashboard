import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Humidity = () => {
  const weatherCity = useSelector((state) => state.dashboard.weather);
  return (
    <div className="bgAllDiv p-3 weatherCard d-flex flex-column justify-content-between">
      <p className="weatherTitle">Humidity</p>
      <div>
        <p className="fw-bold fs-4">{weatherCity?.main.humidity} %</p>
        {weatherCity?.main.humidity < 50 ? (
          <ProgressBar variant="primary" now={weatherCity?.main.humidity} />
        ) : (
          <ProgressBar variant="danger" now={weatherCity?.main.humidity} />
        )}
      </div>
      {weatherCity?.main.humidity < 50 ? <p>Low</p> : <p>High</p>}
    </div>
  );
};
