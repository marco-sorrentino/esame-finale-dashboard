import { Col, Row } from "react-bootstrap";
import { Chart } from "./Chart";
import { Forecast } from "./Forecast";
import { WeatherSearch } from "./WeatherSearch";

export const WeatherHome = () => {
  return (
    <>
      <div>
        <WeatherSearch />
      </div>
      <div>
        <Row>
          <Col xs={12} md={4}>
            <Forecast />
          </Col>
          <Col>{/*  <Chart /> */}</Col>
        </Row>
      </div>
    </>
  );
};
