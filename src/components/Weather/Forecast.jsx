import { useSelector } from "react-redux";

export const Forecast = () => {
  const hour = useSelector((state) => state.dashboard.moreWeather);

  return (
    <div className="bgAllDiv mt-3">
      {hour.list
        .filter((_, i) => i % 8 === 0)
        .map((el) => {
          return (
            <div className="d-flex justify-content-between p-3 align-items-center">
              <p>{el.dt_txt.slice(0, -6)}</p>
              <img
                style={{ width: "2.5em" }}
                src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                alt=""
              />
              <p className="mx-3">{el.main.temp_max.toFixed()}</p>
              <p>{el.main.temp_min.toFixed()}</p>
            </div>
          );
        })}
    </div>
  );
};
