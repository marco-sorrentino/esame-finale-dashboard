import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GET_BUDGET } from "../redux/action";
import "./expanseTrackerHome.scss";
import { SingleItemBudget } from "./SingleItemBudget";

export const Budget = (props) => {
  const [tracker, setTracker] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const seeBudgetList = useSelector((state) => state.dashboard.planner);
  let spesa = seeBudgetList.reduce((accum, obj) => accum + obj.cost, 0);

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "GET_COST",
      payload: tracker,
    });
  }; */

  const handleClick = () => {
    tracker === ""
      ? setShow(true)
      : dispatch({
          type: GET_BUDGET,
          payload: tracker,
        }) && setShow(false);
    setTracker("");
    document.getElementById("textInput").value = "";
    const inputCost = (document.getElementById("cost").value = "");
    /*     tracker.text === "" || tracker.cost !== "" ? (
      setShow(true)
    ) : tracker.cost === "" || tracker.text !== "" ? (
      setShow(true)
    ) : tracker.text === "" && tracker.cost === "" ? (
      <></>
    ) : (
      dispatch({
        type: GET_BUDGET,
        payload: tracker,
      }) && setShow(false)
    ); 
    setTracker("");
    document.getElementById("textInput").value = "";
    const inputCost = (document.getElementById("cost").value = "");*/
  };

  return (
    <>
      <div className="bgAllDiv mt-3">
        <Row className="">
          <Col xs={12} md={4} className=" justify-content-center py-2">
            <p className="titleExpanse  ps-3 ">Balance</p>
            {spesa === 0 ? (
              <p className="ps-3 myTextBlu fs-4 fw-bold py-3">{spesa} €</p>
            ) : spesa > 0 ? (
              <p className="ps-3 myTextGreen fs-4 fw-bold py-3">{spesa} €</p>
            ) : (
              <p className="ps-3 myTextRed fs-4 fw-bold py-3">{spesa} €</p>
            )}

            <Form className="px-3" /* onSubmit={handleSubmit} */>
              <Form.Control
                placeholder="Write here"
                className="inputBudget"
                name="tracker"
                id="textInput"
                onChange={(e) => {
                  setTracker((list) => ({ ...list, text: e.target.value }));
                }}
                /* value={input}
              onChange={(e) => setInput(e.target.value)} */
              />
              {show ? (
                <p className="text-danger fw-bold mt-2">
                  You have to type somethig
                </p>
              ) : (
                <></>
              )}

              <Form.Control
                type="number"
                placeholder="0 €"
                className="inputBudget mt-2"
                name="cost"
                id="cost"
                onChange={(e) => {
                  setTracker((list) => ({
                    ...list,
                    cost: parseInt(e.target.value),
                  }));
                }}
              />
              {show ? (
                <p className="myTextRed fw-bold mt-2">
                  You have to type somethig
                </p>
              ) : (
                <></>
              )}
              <Button className="mt-2 ctaBudget" onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </Col>

          <Col xs={12} md={4} className="py-2 comeinCol">
            <p className="titleExpanse ps-3 ps-md-2">Come in</p>
            {seeBudgetList &&
              seeBudgetList.map((el, i) => {
                return el?.cost > 0 ? (
                  <div key={i}>
                    <SingleItemBudget
                      text={
                        el?.text.charAt(0).toUpperCase() + el?.text.slice(1)
                      }
                      cost={el?.cost}
                      obj={el}
                    />
                  </div>
                ) : (
                  <></>
                );
              })}
          </Col>
          <Col xs={12} md={4} className="py-2 comeinCol">
            <p className="titleExpanse ps-3 ps-md-2">Outputs</p>
            {seeBudgetList &&
              seeBudgetList.map((el, i) => {
                return el?.cost < 0 ? (
                  <div key={i}>
                    <SingleItemBudget
                      text={
                        el?.text.charAt(0).toUpperCase() + el?.text.slice(1)
                      }
                      cost={el?.cost}
                      obj={el}
                    />
                  </div>
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
