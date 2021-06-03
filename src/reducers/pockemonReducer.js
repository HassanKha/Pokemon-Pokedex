const intialState =[]; 

const pockemonReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_NEW_POKEDEX":
      return [...state,action.payload];
    case "REMOVE_POKEDEX":
          var NewState = state.indexOf(action.payload.pokemonItem);
          state.splice(NewState, 1); 
        return [...state];
    default:
      return state ;
  }
};

export default pockemonReducer;