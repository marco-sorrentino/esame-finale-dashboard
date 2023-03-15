import "./expanseTrackerHome.scss";
import { Col, Row } from "react-bootstrap";
import { Budget } from "./Budget";

export const ExpanseTrackerHome = () => {
  return (
    <div className="prova">
      <Row>
        <Col>
          <Budget />
        </Col>
      </Row>
    </div>
  );
};
