export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.table(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      return { state };
    default:
      return state;
  }
};

export default reducer;
