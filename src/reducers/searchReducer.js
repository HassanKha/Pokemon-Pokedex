const intialState = [];
const searchedReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SEARCH_FOR_POKEMON":
      return [...action.payload];
    case "UPDATE_SEARCH":
      return [...action.payload];
    default:
      return state;
  }
};

export default searchedReducer;
