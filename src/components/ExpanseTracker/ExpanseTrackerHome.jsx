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
      <Row className="mt-3 chartExpense">
        <Col xs={12} md={4}>
          <ChartCake />
        </Col>
        <Col xs={12} md={8} className="mt-3 mt-md-0">
          <ChartTracker />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
};
