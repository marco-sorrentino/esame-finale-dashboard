import { Col, Row } from "react-bootstrap";
import { General } from "../Weather/General";
import { ChartCake } from "../ExpanseTracker/ChartCake";
import { BalanceWidget } from "./BalanceWidget";
import { TasksWidget } from "./TasksWidget";
import { ReadWidget } from "./ReadWidget";
import { WeekWidget } from "./WeekWidget";
import { CalendarWidget } from "./CalendarWidget";

export const HomePage = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col xs={12} md={4}>
          <p className="titleTasks mb-3">Weather today</p>
          <General />
          <p className="titleTasks my-3">Expense</p>
          <BalanceWidget />
        </Col>

        <Col xs={12} md={4}>
          <p className="titleTasks mt-3 mt-md-0 mb-3">Tasks</p>
          <TasksWidget />
          <p className="titleTasks my-3">Calendar</p>
          <WeekWidget />
        </Col>

        <Col xs={12} md={4}>
          <p className="titleTasks mt-3 mt-md-0  mb-3">Saved readings</p>
          <ReadWidget />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col></Col>
      </Row>
    </div>
  );
};
