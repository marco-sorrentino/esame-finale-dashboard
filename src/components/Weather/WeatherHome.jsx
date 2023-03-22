import { Col, Row } from "react-bootstrap";
import { Chart } from "./Chart";
import { Forecast } from "./Forecast";
import { General } from "./General";
import { Humidity } from "./Humidity";
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
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Forecast />
      </Row>
    </div>
  );
};
