import { Col, Row } from "react-bootstrap";
import { General } from "../Weather/General";
import { BalanceWidget } from "./BalanceWidget";
import { TasksWidget } from "./TasksWidget";
import { ReadWidget } from "./ReadWidget";
import { WeekWidget } from "./WeekWidget";
import { MapWidget } from "./MapWidget";

export const HomePage = () => {
  return (
    <div>
      <Row className="mt-2">
        <Col xs={12} md={4}>
          <p className="titleTasks mb-2">Weather today</p>
          <General />
          <p className="titleTasks my-2">Expense</p>
          <BalanceWidget />
        </Col>

        <Col xs={12} md={4}>
          <p className="titleTasks mt-2 mt-md-0 mb-2">Tasks</p>
          <TasksWidget />
          <p className="titleTasks my-2">Calendar</p>
          <WeekWidget />
        </Col>

        <Col xs={12} md={4}>
          <p className="titleTasks mt-2 mt-md-0 mb-2">Map</p>
          <MapWidget />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p className="titleTasks mt-3 mt-md-0  mb-3">Saved readings</p>
          <ReadWidget />
        </Col>
      </Row>
    </div>
  );
};
