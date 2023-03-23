import "./expanseTrackerHome.scss";
import { Col, Row } from "react-bootstrap";
import { Budget } from "./Budget";
import { ChartCake } from "./ChartCake";
import { Calculator } from "./Calculator";
import { ChartTracker } from "./ChartTracker";

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
        <Col xs={12} md={8}>
          <ChartTracker />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
};
