import "./tasksHome.scss";
import { SlOptions } from "react-icons/sl";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const SingleTask = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between align-items-center bgAllDiv mt-2 ps-3  py-2">
      <p className="">{props.text}</p>
      <DropdownButton
        className="d-flex flex-row-reverse"
        id="dropdown-basic-button"
        title={<SlOptions className="iconOptionTodo" />}
      >
        <Dropdown.Item
          href="#/action-1"
          className="d-flex align-items-center"
          onClick={() =>
            dispatch({
              type: "REMOVE_TODO",
              payload: props.text,
            })
          }
        >
          <AiFillDelete className="me-2 text-danger" /> Remove
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
