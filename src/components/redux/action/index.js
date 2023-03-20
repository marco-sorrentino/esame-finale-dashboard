export const SAVE_TODO = "SAVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EXECUTION_LIST = "EXECUTION_LIST";
export const REMOVE_EXECUTION = "REMOVE_EXECUTION";
export const DONE_LIST = "DONE_LIST";
export const REMOVE_DONE = "REMOVE_DONE";
export const GET_BUDGET = "GET_BUDGET";
export const REMOVE_BUDGET = "REMOVE_BUDGET";
export const GET_HEADING_NEWS = "GET_HEADING_NEWS";
export const GET_BUSINESS_NEWS = "GET_BUSINESS_NEWS";

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

export const removeBudgetAction = (props) => {
  return {
    type: REMOVE_BUDGET,
    payload: props.obj,
  };
};

// Fetch x heading news

export const getHeadingNewsAction = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=3724d36173164eed9500c3821dbaf22d"
      );
      if (res.ok) {
        let data = await res.json();
        let headingNews = data.articles;
        dispatch({
          type: GET_HEADING_NEWS,
          payload: headingNews,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Fetch x business news

export const getBusinessNewsAction = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3724d36173164eed9500c3821dbaf22d"
      );
      if (res.ok) {
        let data = await res.json();
        let businessNews = data.articles;
        dispatch({
          type: GET_BUSINESS_NEWS,
          payload: businessNews,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
