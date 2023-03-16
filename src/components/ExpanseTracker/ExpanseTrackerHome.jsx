import "./expanseTrackerHome.scss";
import { Col, Row } from "react-bootstrap";
import { Budget } from "./Budget";
import { ChartCake } from "./ChartCake";
import { Calculator } from "./Calculator";

export const ExpanseTrackerHome = () => {
  return (
    <div className="prova">
      <Row>
        <Col>
          <Budget />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <ChartCake />
        </Col>
        <Col xs={12} md={4}>
          <Calculator />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
