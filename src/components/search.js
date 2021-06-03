import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Searchicon from "../search.png";
import { searchPokemon } from "../actions/SearchAction";
import SearchedCard from "../components/SearchedCard";
const Search = ({ pathId }) => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const exit = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      history.push("/");
    }
  };
  useEffect(() => {
    dispatch(searchPokemon(searchInput));
  }, [dispatch, searchInput]);

  const searchedPockemons = useSelector((state) => state.Searched);

  return (
    <Board className="shadow" onClick={exit}>
      <SearchBoard layoutId={pathId}>
        <Input>
          <input
            type="text"
            placeholder="find pokemon"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          ></input>
          <img src={Searchicon} alt="searchicon"></img>
        </Input>
        <Grid>
          {searchedPockemons.length > 0
            ? searchedPockemons.map((pokemon) => (
                <SearchedCard pokemon={pokemon} key={pokemon.id} />
              ))
            : " "}
        </Grid>
      </SearchBoard>
    </Board>
  );
};
const Input = styled(motion.div)`
  width: 98%;
  margin-top: 1%;
  height: 10%;
  display: flex;
  justify-content: center;
  border: solid #d6d5d5 2px;
  input {
    width: 94%;
    height: 100%;
    border: none;
    font-size: 1.3rem;
    outline: none;
    letter-spacing: 0.2rem;
    font-weight: bold;
  }
  img {
    width: 6%;
    height: 90%;
  }
`;
const Board = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 20 !important;
  top: 0;
  left: 0;
`;
const SearchBoard = styled(motion.div)`
  width: 58%;
  height: 85vh;
  border-radius: 1rem;
  background: white;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  margin-bottom: 2%;
  margin-left: 20%;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
`;

const Grid = styled(motion.div)`
  width: 100%;
  padding: 1rem 1.5rem;
`;

export default Search;
