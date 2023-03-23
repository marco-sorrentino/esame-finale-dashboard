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
        <p className="ms-2">
          {weatherCity?.wind?.deg < 22 ? (
            "N, Tramontana"
          ) : weatherCity?.wind?.deg > 22 && weatherCity?.wind?.deg < 67 ? (
            "NE, Greco"
          ) : weatherCity?.wind?.deg > 67 && weatherCity?.wind?.deg < 112 ? (
            "E, Levante"
          ) : weatherCity?.wind?.deg > 112 && weatherCity?.wind?.deg < 157 ? (
            "SE, Scirocco"
          ) : weatherCity?.wind?.deg > 157 && weatherCity?.wind?.deg < 202 ? (
            "S, Mezzogiorno"
          ) : weatherCity?.wind?.deg > 202 && weatherCity?.wind?.deg < 247 ? (
            "SO, Libeccio"
          ) : weatherCity?.wind?.deg > 247 && weatherCity?.wind?.deg < 292 ? (
            "O, Ponente"
          ) : weatherCity?.wind?.deg > 292 && weatherCity?.wind?.deg < 337 ? (
            "NO, Maestrale"
          ) : weatherCity?.wind?.deg > 337 && weatherCity?.wind?.deg < 360 ? (
            "N, Tramontana"
          ) : (
            <></>
          )}
          °
        </p>
      </div>
    </div>
  );
};
