import "./tasksHome.scss";
import { Container, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

export const ProgressTasks = (props) => {
  return (
    <Container>
      <Col>
        <ProgressBar
          className="bgAllDiv barProgress"
          now={props.numberTodo}
          label={`${props.numberTodo}%`}
          visuallyHidden
        />
        <ProgressBar
          className="mt-3 bgAllDiv barProgress"
          variant="warning"
          now={props.numberExecution}
          label={`${props.numberExecution}%`}
          visuallyHidden
        />
        <ProgressBar
          className="mt-3 bgAllDiv barProgress"
          variant="success"
          now={props.numberDone}
          label={`${props.numberDone}`}
          visuallyHidden
        />
      </Col>
    </Container>
  );
};
