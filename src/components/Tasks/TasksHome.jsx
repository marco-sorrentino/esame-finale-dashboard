import "./tasksHome.scss";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TasksHome = () => {
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
          <div className="bgAllDiv">
            {todoList &&
              todoList.map((el) => {
                return <p className="mt-3">{el}</p>;
              })}
          </div>
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
