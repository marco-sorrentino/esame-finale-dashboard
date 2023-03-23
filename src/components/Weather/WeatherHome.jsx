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
        <Col xs={6} md={4}>
          <General />
        </Col>
        <Col xs={6} md={4}>
          <Humidity />
        </Col>
        <Col xs={12} md={4} className="mt-3 mt-md-0">
          <Wind />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6} md={4}>
          <Temperatures />
        </Col>
        <Col xs={6} md={4}>
          <Pressure />
        </Col>
        <Col xs={12} md={4} className="mt-3 mt-md-0">
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
