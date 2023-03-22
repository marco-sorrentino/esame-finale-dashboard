import { useSelector } from "react-redux";

export const Pressure = () => {
  const weatherCity = useSelector((state) => state.dashboard.weather);
  return (
    <div className="bgAllDiv p-3 weatherCard d-flex flex-column justify-content-between">
      <p className="weatherTitle">Pressure</p>
      <div className="d-flex align-items-center">
        <p className="fw-bold fs-4">{weatherCity?.main?.pressure}</p>
        <p className="ms-2">Hpa</p>
      </div>
      <div className="d-flex align-items-center">
        {weatherCity?.main?.pressure > 1013 ? (
          <p className="">It's a good day!</p>
        ) : (
          <p className="">Maybe cold be rain</p>
        )}
      </div>
    </div>
  );
};
