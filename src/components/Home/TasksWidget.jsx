import "./homeWidget.scss";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const TasksWidget = (props) => {
  const todoList = useSelector((state) => state.dashboard.todo);
  const execution = useSelector((state) => state.dashboard.execution);
  const done = useSelector((state) => state.dashboard.done);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/tasks");
      }}
      className="bgAllDiv widgetCard p-3"
    >
      <div className="d-flex mb-3 justify-content-between">
        <div className="d-flex align-items-center">
          <div
            style={{ width: "20px", height: "20px", borderRadius: "3px" }}
            className="myBluBg me-2"
          ></div>
          <p>To do</p>
        </div>

        <div className="d-flex align-items-center">
          <div
            style={{ width: "20px", height: "20px", borderRadius: "3px" }}
            className="myYellowBg me-2"
          ></div>
          <p>Execution</p>
        </div>

        <div className="d-flex align-items-center">
          <div
            style={{ width: "20px", height: "20px", borderRadius: "3px" }}
            className="myGreenBg me-2"
          ></div>
          <p>Done</p>
        </div>
      </div>
      <ProgressBar
        className="barProgress fw-bold"
        now={todoList.length * 10}
        label={`${todoList.length}`}
      />
      <ProgressBar
        className="mt-2  barProgress fw-bold"
        id="pg2"
        now={execution.length * 10}
        label={`${execution.length}`}
      />
      <ProgressBar
        className="mt-2  barProgress fw-bold"
        id="pg6"
        now={done.length * 10}
        label={`${done.length}`}
      />
    </div>
  );
};
