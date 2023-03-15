export const SAVE_TODO = "SAVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EXECUTION_LIST = "EXECUTION_LIST";
export const REMOVE_EXECUTION = "REMOVE_EXECUTION";
export const DONE_LIST = "DONE_LIST";
export const REMOVE_DONE = "REMOVE_DONE";
export const GET_BUDGET = "GET_BUDGET";

//Funzione per salvare cià che digito in input in stato globale

//Funzione dispatch x rimuovere dalla lita to do

export const removeTodoAction = (props) => {
  return {
    type: "REMOVE_TODO",
    payload: props.text,
  };
};

//Funzione dispatch x aggiungere alla lista execution

export const executionListAction = (props) => {
  return {
    type: "EXECUTION_LIST",
    payload: props.text,
  };
};

//Funzione dispatch x rimuovere dalla lita execution

export const removeExecutionAction = (props) => {
  return {
    type: REMOVE_EXECUTION,
    payload: props.text,
  };
};

//Funzione dispatch x aggiungere alla lista done

export const doneListAction = (props) => {
  return {
    type: DONE_LIST,
    payload: props.text,
  };
};

//Funzione dispatch x rimuovere dalla lita remove

export const removeDoneAction = (props) => {
  return {
    type: REMOVE_DONE,
    payload: props.text,
  };
};
