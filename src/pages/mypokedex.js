import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Add from "./../components/Add";
import { useDispatch, useSelector } from "react-redux";
import { FetchMyPokedex } from "./../actions/pokedexAction";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import Search from "./../components/search";
const Mypokedex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMyPokedex());
  }, [dispatch]);

  const Pokemons = useSelector((state) => state.MyPokedex);
  const Location = useLocation();
  const pathId = Location.pathname.split("/")[1];

  return (
    <Container>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <Search key={pathId} pathId={"1"} />}
        </AnimatePresence>
        <Header>
          <h1>Mypokedex</h1>
        </Header>
        <Grid>
          {Pokemons &&
            Pokemons.map((poke) => poke && <Card poke={poke} key={poke.id} />)}
        </Grid>
        <Add pathId={"1"} />
      </AnimateSharedLayout>
    </Container>
  );
};

const Container = styled(motion.div)`
  overflow: hidden;
  z-index: 1;
`;
const Grid = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
`;

const Header = styled(motion.div)`
  position: fixed;
  width: 63%;
  min-height: 11%;
  top: 10.3%;
  left: 17.7%;
  background-color: white;
  text-align: center;
  overflow: hidden;
  font-size: 2rem;
  font-weight: 800;
  z-index: 1
`;

export default Mypokedex;
