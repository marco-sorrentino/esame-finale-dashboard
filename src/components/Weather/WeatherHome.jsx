import { Col, Row } from "react-bootstrap";
import { Chart } from "./Chart";
import { Forecast } from "./Forecast";
import { General } from "./General";
import { Humidity } from "./Humidity";
import { Pressure } from "./Pressure";
import { SunsetSunrise } from "./SunsetSunrise";
import { Temperatures } from "./Temperatures";
import { WeatherSearch } from "./WeatherSearch";
import { Wind } from "./Wind";

export const WeatherHome = () => {
  return (
    <div>
      <Row>
        <Col>
          <WeatherSearch />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <General />
        </Col>
        <Col>
          <Humidity />
        </Col>
        <Col>
          <Wind />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Temperatures />
        </Col>
        <Col>
          <Pressure />
        </Col>
        <Col>
          <SunsetSunrise />
        </Col>
      </Row>
      <Row>
        <Forecast />
      </Row>
      <Row>
        <Col>
          <Chart />
        </Col>
      </Row>
    </div>
  );
};
