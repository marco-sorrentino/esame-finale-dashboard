import { Col, Row } from "react-bootstrap";
import { General } from "../Weather/General";
import { ChartTracker } from "../ExpanseTracker/ChartTracker";
import { BalanceWidget } from "./BalanceWidget";
import { TasksWidget } from "./TasksWidget";
import { ReadWidget } from "./ReadWidget";

export const HomePage = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col xs={12} md={4}>
          <p className="titleTasks mb-3">Weather today</p>
          <General />
        </Col>

        <Col xs={12} md={4}>
          <p className="titleTasks mb-3">Tasks</p>
          <TasksWidget />
        </Col>

        <Col xs={12} md={4}>
          <ReadWidget />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col></Col>
      </Row>
    </div>
  );
};
