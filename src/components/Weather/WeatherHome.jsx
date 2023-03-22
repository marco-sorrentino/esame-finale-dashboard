import { Col, Row } from "react-bootstrap";
import { Chart } from "./Chart";
import { Forecast } from "./Forecast";
import { WeatherSearch } from "./WeatherSearch";

export const WeatherHome = () => {
  return (
    <div>
      <Row>
        <WeatherSearch />
      </Row>
      <Row>
        <Forecast />
      </Row>
    </div>
  );
};
