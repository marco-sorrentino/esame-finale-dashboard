import { useSelector } from "react-redux";
import moment from "moment";
import { TbSunrise } from "react-icons/tb";
import { TbSunset2 } from "react-icons/tb";

export const SunsetSunrise = () => {
  const weatherCity = useSelector((state) => state.dashboard.weather);
  const sunrise = moment.unix(weatherCity?.sys?.sunrise).format("HH:mm");
  const sunset = moment.unix(weatherCity?.sys?.sunset).format("HH:mm");

  return (
    <div className="bgAllDiv p-3 weatherCard d-flex flex-column justify-content-between">
      <p className="weatherTitle">Sunset & Sunrise</p>
      <div className="d-flex align-items-center">
        <TbSunrise className="me-2 fs-3" />
        <p className="fw-bold fs-4">{sunrise}</p>
      </div>
      <div className="d-flex align-items-center">
        <TbSunset2 className="me-2 fs-3" />
        <p className="fw-bold fs-4">{sunset}</p>
      </div>
      <div className="d-flex align-items-center">
        <p>Summer is coming</p>
      </div>
    </div>
  );
};
