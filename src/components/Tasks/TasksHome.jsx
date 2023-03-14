import "./tasksHome.scss";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleTask } from "./SingleTask";
import { ProgressTasks } from "./ProgressTasks";

export const TasksHome = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const todoList = useSelector((state) => state.todo);
  const execution = useSelector((state) => state.execution);
  const done = useSelector((state) => state.done);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    input === ""
      ? setShow(true)
      : setShow(false) ||
        dispatch({
          type: "SAVE_TODO",
          payload: input,
        });

    setInput("");
  };

  return (
    <div className="divTasksHome">
      <Row className="mt-3 d-flex align-items-center">
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              placeholder="Write here"
              id="writeTasks"
              name="todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form>
          <div>
            {show ? (
              <p className="text-danger fw-bold mt-2">
                You have to type somethig
              </p>
            ) : (
              <></>
            )}
          </div>
        </Col>
        <Col>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col col-12 col-md-4">
          <div className="d-flex align-items-center">
            <p className="titleTasks">To do</p>
            <p className="summaryList text-primary">{todoList.length}</p>
          </div>
          {todoList &&
            todoList.map((el, i) => {
              return <SingleTask text={el} key={i} />;
            })}
        </Col>
        <Col className="col col-12 col-md-4 mt-3 mt-md-0">
          <div className="d-flex align-items-center">
            <p className="titleTasks">Execution</p>
            <p className="summaryList text-warning">{execution.length}</p>
          </div>
          {execution &&
            execution.map((el, i) => {
              return <SingleTask key={i} text={el} />;
            })}
        </Col>
        <Col className="col col-12 col-md-4 mt-3 mt-md-0">
          <div className="d-flex align-items-center">
            <p className="titleTasks">Done</p>
            <p className="summaryList text-success">{done.length}</p>
          </div>
          {done &&
            done.map((el, i) => {
              return <SingleTask key={i} text={el} />;
            })}
        </Col>
      </Row>
      <Row className="mt-3 ">
        {todoList.length === 0 &&
        execution.length === 0 &&
        done.length === 0 ? (
          <></>
        ) : (
          <ProgressTasks
            numberTodo={todoList.length * 10}
            numberExecution={execution.length * 10}
            numberDone={done.length * 10}
          />
        )}
      </Row>
    </div>
  );
};
