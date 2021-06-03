import { SearchPokemon_URL } from "../api";
import axios from "axios";

export const searchPokemon = (Pokemonname) => async (dispatch) => {
  const searchURL = SearchPokemon_URL(Pokemonname);

  const { data } = await axios.get(searchURL);

  dispatch({ type: "SEARCH_FOR_POKEMON", payload: data.cards });
};

export const updateSearchAfterAdd = (addedPokemon) => (dispatch) => {
  dispatch({ type: "UPDATE_SEARCH", payload: addedPokemon });
};
