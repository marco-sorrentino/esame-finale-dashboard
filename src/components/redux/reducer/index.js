// Setto stato iniziale
const initialState = {
  todo: "",
};

// Creo funzione reducer che legge le azioni(dispatch)
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
