export const SearchPokemon_URL = (pokemon) => {
  return `http://localhost:3030/api/cards?limit=20&name=${pokemon}`;
};

export const FetchPokemons_URL = () => {
  return `http://localhost:3030/api/cards?limit=20`;
};
