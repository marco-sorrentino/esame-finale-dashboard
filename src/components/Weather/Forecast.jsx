import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Forecast = () => {
  const hour = useSelector((state) => state.dashboard.moreWeather);
  console.log(hour);

  return (
    <>
      <div className="mt-3">
        <p className="titleTasks">Week's Highlights</p>
      </div>
      <div className="mt-3 d-flex">
        <Row className="mobileCities">
          {hour.list
            .filter((_, i) => i % 4 === 0)
            .map((el) => {
              return (
                <Col>
                  <div className="bgAllDiv p-3  d-flex flex-column align-items-center justify-content-center">
                    <p className="fw-bold">{el.dt_txt.slice(6, -8)}</p>
                    <p className="hour">{el.dt_txt.slice(11, -3)}</p>
                    <img
                      style={{ width: "6em" }}
                      src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                      alt=""
                    />
                    <div className="d-flex justify-content-between">
                      <p className="">{el.main.temp_max.toFixed()}°</p>
                    </div>
                  </div>
                </Col>
              );
            })
            .slice(0, -3)}
        </Row>
      </div>
    </>
  );
};
