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
        className="d-flex buttonDrop flex-row-reverse"
        id="dropdown-basic-button"
        title={<SlOptions className="iconOptionTodo" />}
      >
        <Dropdown.Item
          className="d-flex align-items-center fw-bold"
          onClick={() => {
            dispatch(removeTodoAction(props));
            dispatch(removeExecutionAction(props));
            dispatch(removeDoneAction(props));
          }}
        >
          <AiFillDelete className="me-2 myTextRed" /> Remove
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex align-items-center fw-bold"
          onClick={() => {
            dispatch(removeTodoAction(props));
            dispatch(executionListAction(props));
          }}
        >
          <AiOutlineLoading3Quarters className="me-2 myTextYellow " /> Execution
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex align-items-center fw-bold"
          onClick={() => {
            dispatch(doneListAction(props));
            dispatch(removeExecutionAction(props));
            dispatch(removeTodoAction(props));
          }}
        >
          <MdOutlineDone className="me-2 myTextGreen" /> Done
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
