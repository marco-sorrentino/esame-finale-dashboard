import "./tasksHome.scss";
import { SlOptions } from "react-icons/sl";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  doneListAction,
  executionListAction,
  removeDoneAction,
  removeExecutionAction,
  removeTodoAction,
} from "../redux/action";

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
          className="d-flex align-items-center fw-bold"
          onClick={() => {
            dispatch(removeTodoAction(props));
            dispatch(removeExecutionAction(props));
            dispatch(removeDoneAction(props));
          }}
        >
          <AiFillDelete className="me-2 text-danger" /> Remove
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex align-items-center fw-bold"
          onClick={() => {
            dispatch(executionListAction(props));
            dispatch(removeTodoAction(props));
          }}
        >
          <AiOutlineLoading3Quarters className="me-2 text-warning" /> Execution
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex align-items-center fw-bold"
          onClick={() => {
            dispatch(doneListAction(props));
            dispatch(removeExecutionAction(props));
          }}
        >
          <MdOutlineDone className="me-2 text-success" /> Done
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
