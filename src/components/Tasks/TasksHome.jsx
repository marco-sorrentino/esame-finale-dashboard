import "./tasksHome.scss";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleTask } from "./SingleTask";

export const TasksHome = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const todoList = useSelector((state) => state.todo);
  console.log(todoList);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SAVE_TODO",
      payload: input,
    });
    setInput("");
  };

  return (
    <div>
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
        </Col>
        <Col>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col col-12 col-md-4">
          <p className="titleTasks">To do</p>

          {todoList &&
            todoList.map((el, i) => {
              return <SingleTask text={el} key={i} />;
            })}
        </Col>
        <Col className="col col-12 col-md-4">
          <p className="titleTasks">Execution</p>
        </Col>
        <Col className="col col-12 col-md-4">
          <p className="titleTasks">Done</p>
        </Col>
      </Row>
    </div>
  );
};
