import { Dropdown, ListGroup } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeBudgetAction } from "../redux/action";

export const SingleItemBudget = (props) => {
  const dispatch = useDispatch();
  return (
    <ListGroup
      key={props.index}
      className="border-none py-1 px-3 px-md-2 hoverListGroup"
    >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start border-0 p-0 "
      >
        <p>{props.text}</p>

        {props?.cost > 0 ? (
          <Dropdown>
            <Dropdown.Toggle
              className="px-2 py-0 fw-bold rounded-pill"
              variant="success"
              id="dropdown-basic"
              style={{ fontSize: "12px" }}
            >
              {props?.cost}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  dispatch(removeBudgetAction(props));
                }}
                className="d-flex align-items-center"
              >
                <AiFillDelete className="text-danger me-1" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Dropdown>
            <Dropdown.Toggle
              className="px-2 py-0 fw-bold rounded-pill"
              variant="danger"
              id="dropdown-basic"
              style={{ fontSize: "12px" }}
            >
              {props?.cost}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  dispatch(removeBudgetAction(props));
                }}
                className="d-flex align-items-center"
              >
                <AiFillDelete className="text-danger me-1" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </ListGroup.Item>
    </ListGroup>
  );
};
