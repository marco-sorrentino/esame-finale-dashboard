import { useState } from "react";
import { Badge, Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GET_BUDGET } from "../redux/action";
import "./expanseTrackerHome.scss";

export const Budget = () => {
  const [tracker, setTracker] = useState("" || Number);
  const dispatch = useDispatch();
  const seeBudgetList = useSelector((state) => state.dashboard.planner);

  /*   const handleSubmit = (e) => {
    e.prevent.default();
    dispatch({
      type: "GET_COST",
      payload: tracker,
    });
  }; */

  return (
    <>
      <div className="bgAllDiv mt-3">
        <Row className="">
          <Col xs={12} md={4} className=" justify-content-center py-2">
            <p className="titleExpanse  ps-3 ">Balance</p>
            <p className="ps-3  py-2">0 €</p>
            <Form className="px-3" /* onSubmit={handleSubmit} */>
              <Form.Control
                placeholder="Write here"
                className="inputBudget"
                name="tracker"
                onChange={(e) => {
                  setTracker((list) => ({ ...list, text: e.target.value }));
                }}
                /* value={input}
              onChange={(e) => setInput(e.target.value)} */
              />

              <Form.Control
                type="number"
                placeholder="0 €"
                className="inputBudget mt-2"
                name="cost"
                onChange={(e) => {
                  setTracker((list) => ({
                    ...list,
                    cost: parseInt(e.target.value),
                  }));
                }}
              />
              <Button
                className="mt-2 ctaBudget"
                onClick={() =>
                  dispatch({
                    type: GET_BUDGET,
                    payload: tracker,
                  })
                }
              >
                Submit
              </Button>
            </Form>
          </Col>

          <Col xs={12} md={4} className="py-2">
            <p className="titleExpanse ps-2">Come in</p>
            {seeBudgetList &&
              seeBudgetList.map((el, i) => {
                return el.cost > 0 ? (
                  <ListGroup
                    key={i}
                    className="border-none py-1 px-2 hoverListGroup"
                  >
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start border-0 p-0 "
                    >
                      <p>{el.text}</p>
                      <Badge bg="success" pill>
                        {el.cost}
                      </Badge>
                    </ListGroup.Item>
                  </ListGroup>
                ) : (
                  <></>
                );
              })}
          </Col>
          <Col xs={12} md={4} className="py-2">
            <p className="titleExpanse ps-2">Outputs</p>
            {seeBudgetList &&
              seeBudgetList.map((el, i) => {
                return el.cost < 0 ? (
                  <ListGroup key={i} className="border-none py-1 px-2">
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start border-0 p-0"
                    >
                      <p>{el.text}</p>
                      <Badge bg="danger" pill>
                        {el.cost.toString().substring(1)}
                      </Badge>
                    </ListGroup.Item>
                  </ListGroup>
                ) : (
                  <></>
                );
              })}
          </Col>
        </Row>
      </div>
    </>
  );
};
