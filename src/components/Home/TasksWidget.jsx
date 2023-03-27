import "./homeWidget.scss";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

export const TasksWidget = (props) => {
  const todoList = useSelector((state) => state.dashboard.todo);
  const execution = useSelector((state) => state.dashboard.execution);
  const done = useSelector((state) => state.dashboard.done);
  console.log("LOOL", execution.length);

  return (
    <div className="bgAllDiv widgetCard p-3">
      <div className="d-flex mb-3 justify-content-between">
        <div className="d-flex align-items-center">
          <div
            style={{ width: "20px", height: "20px", borderRadius: "3px" }}
            className="bg-primary me-2"
          ></div>
          <p>To do</p>
        </div>

        <div className="d-flex align-items-center">
          <div
            style={{ width: "20px", height: "20px", borderRadius: "3px" }}
            className="bg-warning me-2"
          ></div>
          <p>Execution</p>
        </div>

        <div className="d-flex align-items-center">
          <div
            style={{ width: "20px", height: "20px", borderRadius: "3px" }}
            className="bg-success me-2"
          ></div>
          <p>Done</p>
        </div>
      </div>
      <ProgressBar
        className=" barProgress"
        now={todoList.length * 10}
        label={`${todoList.length}`}
      />
      <ProgressBar
        className="mt-2  barProgress"
        variant="warning"
        now={execution.length * 10}
        label={`${execution.length}`}
      />
      <ProgressBar
        className="mt-2  barProgress"
        variant="success"
        now={done.length * 10}
        label={`${done.length}`}
      />
    </div>
  );
};
