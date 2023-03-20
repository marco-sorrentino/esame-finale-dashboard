import {
  DONE_LIST,
  EXECUTION_LIST,
  GET_BUDGET,
  GET_BUSINESS_NEWS,
  GET_HEADING_NEWS,
  REMOVE_BUDGET,
  REMOVE_DONE,
  REMOVE_EXECUTION,
  REMOVE_TODO,
} from "../action";

const initialState = {
  todo: "",
  execution: "",
  done: "",
  planner: [],
  headingNews: [],
  businessNews: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter((el) => el !== action.payload),
      };
    case EXECUTION_LIST:
      return {
        ...state,
        execution: [...state.execution, action.payload],
      };
    case REMOVE_EXECUTION:
      return {
        ...state,
        execution: state.execution.filter((el) => el !== action.payload),
      };
    case DONE_LIST:
      return {
        ...state,
        done: [...state.done, action.payload],
      };
    case REMOVE_DONE:
      return {
        ...state,
        done: state.done.filter((el) => el !== action.payload),
      };
    case GET_BUDGET:
      return {
        ...state,
        planner: [...state.planner, action.payload],
      };
    case REMOVE_BUDGET:
      return {
        ...state,
        planner: state.planner.filter((el) => el !== action.payload),
      };
    case GET_HEADING_NEWS:
      return {
        ...state,
        headingNews: action.payload,
      };
    case GET_BUSINESS_NEWS:
      return {
        ...state,
        businessNews: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
