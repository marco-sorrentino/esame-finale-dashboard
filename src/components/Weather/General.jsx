import { useSelector } from "react-redux";

export const General = () => {
  const weatherCity = useSelector((state) => state.dashboard.weather);
  const today = new Date();
  const getDay = { weekday: "long" };
  const dayOfWeek = today.toLocaleDateString("en-US", getDay);

  const now = new Date();
  const location = { timeZone: "Europe/Rome" };
  const hourItaly = now.toLocaleTimeString("it-IT", location);
  return (
    <div className="bgAllDiv p-3 weatherCard d-flex flex-column justify-content-between">
      <p className="weatherTitle">General</p>
      <div className="d-flex align-items-center">
        <p className="conditionWeather mobileWeatherText">
          {weatherCity.weather[0].description.charAt(0).toUpperCase() +
            weatherCity.weather[0].description.slice(1)}
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png`}
          alt=""
          className="weatherImageMobile"
        />
        <p className="conditionWeather mobileWeatherText">
          {weatherCity?.main?.temp?.toFixed()} ° C
        </p>
      </div>
      <p>
        {dayOfWeek} , {hourItaly.slice(0, -3)}{" "}
      </p>
    </div>
  );
};
