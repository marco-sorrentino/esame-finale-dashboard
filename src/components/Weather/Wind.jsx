import { useSelector } from "react-redux";
import { TbWind } from "react-icons/tb";

export const Wind = () => {
  const weatherCity = useSelector((state) => state.dashboard.weather);
  return (
    <div className="bgAllDiv p-3 weatherCard d-flex flex-column justify-content-between">
      <p className="weatherTitle">Wind</p>
      <div className="d-flex align-items-center">
        <p className="fw-bold fs-4">{weatherCity?.wind?.speed}</p>
        <p className="ms-2">Km/h</p>
      </div>
      <div className="d-flex align-items-center">
        <TbWind className="fs-4" />
        <p className="ms-2">{weatherCity?.wind?.deg}°</p>
      </div>
    </div>
  );
};
