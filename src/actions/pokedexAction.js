export const addNewPokemon = (newPokemon) => (dispatch) => {
  dispatch({ type: "ADD_NEW_POKEDEX", payload: newPokemon });
};

export const FetchMyPokedex = () => async (dispatch) => {
  dispatch({
    type: "FETCH_MYPOKEDEX",
  });
};

export const RemoveFromMyPokedex = (item) => async (dispatch) => {
  dispatch({
    type: "REMOVE_POKEDEX",
    payload: {
      pokemonItem: item,
    },
  });
};
