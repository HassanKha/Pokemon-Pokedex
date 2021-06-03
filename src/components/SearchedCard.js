import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNewPokemon } from "../actions/pokedexAction";
import { updateSearchAfterAdd } from "../actions/SearchAction";
import Cut from "../cute.png";
const SearchedCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const searchedPockemons = useSelector((state) => state.Searched);
  const addToMYProkedexHandler = () => {
    if (searchedPockemons.length > 0) {
      const addedPokemon = searchedPockemons.filter((currpoke) => {
        return currpoke.id === pokemon.id;
      });
      dispatch(addNewPokemon(addedPokemon[0]));
      const updatedSearchPokemons = searchedPockemons.filter((currpoke) => {
        return currpoke.id !== pokemon.id;
      });

      dispatch(updateSearchAfterAdd(updatedSearchPokemons));
    }
  };

  const CalculateHP = (HP) => {
    if (Number(HP) > 100) {
      return "100";
    } else {
      return "0";
    }
  };
  const CalculateStrengthLevel = (STR) => {
    if (STR === undefined) {
      return "0";
    }

    STR = STR.length;
    if (STR === 1) {
      return "50";
    } else if (STR === 2) {
      return "100";
    } else if (STR === undefined) {
      return "0";
    } else {
      return "0";
    }
  };

  const CalculateWeakness = (weak) => {
    if (weak === undefined) {
      return "0";
    }
    weak = weak.length;

    if (weak === 1) {
      return "100";
    } else {
      return "0";
    }
  };
  const filterattackdamage = (damage) => {
    if (isNaN(damage[damage.length - 1])) {
      return Number(damage.substring(0, damage.length - 1));
    } else {
      return Number(damage);
    }
  };
  const Calculatedamage = (attacks) => {
    if (attacks === undefined) {
      return 0;
    }
    var count = 0;
    for (var i = 0; i < attacks.length; i++) {
      const damage = filterattackdamage(attacks[i].damage);
      count += damage;
    }
    return count;
  };

  const CalculateHappeness = (HP, attacks, weak) => {
    let Happeness =
      (Number(CalculateHP(HP) / 10) +
        Calculatedamage(attacks) / 10 +
        10 -
        CalculateWeakness(weak) / 100) /
      5;

    return Math.floor(Happeness);
  };

  const HappenessLogos = [];

  for (
    let i = 0;
    i < CalculateHappeness(pokemon.hp, pokemon.attacks, pokemon.weaknesses);
    i += 1
  ) {
    HappenessLogos.push(<img src={Cut} alt="cut" />);
  }

  return (
    <Container>
      <button className="addButt" onClick={addToMYProkedexHandler}>
        Add
      </button>
      <Img>
        <img src={pokemon.imageUrl} alt="pokemonimg" />
      </Img>
      <Details>
        <h3>{pokemon.name}</h3>
        <Pockemondetails>
          <Ability>
            <h4>HP</h4>
            <h4>STR</h4>
            <h4>weak</h4>
          </Ability>
          <Values>
            <Hp percentage={CalculateHP(pokemon.hp)}>
              <div></div>
            </Hp>
            <Str percentage={CalculateStrengthLevel(pokemon.attacks)}>
              <div></div>
            </Str>
            <Weak percentage={CalculateWeakness(pokemon.weaknesses)}>
              <div></div>
            </Weak>
          </Values>
        </Pockemondetails>
        <Happinesslevel>{HappenessLogos}</Happinesslevel>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  border: 0.1rem solid #e6e6e6;
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;
  background-color: #f3f4f7;
  margin-right: 2.5rem;
  margin-top: 1rem;
  .addButt {
    border: none;
    background-color: transparent;
    padding: 2rem;
    color: #ec5656;
    font-family: "Atma", cursive;
    font-weight: 800;
    font-size: 2rem;
    position: absolute;
    top: -5%;
    right: -2%;
    display: none;
    cursor: pointer;
  }
  &:hover {
    box-shadow: 3px 3px 3px #c7c6c6;
    .addButt {
      display: inline;
    }
  }
`;
const Img = styled.div`
  width: 50%;
  overflow: hidden;
  width: 9rem;
  height: 14rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Pockemondetails = styled.div`
  display: flex;
  align-items: center;
`;
const Details = styled.div`
  width: 50%;
  padding: 0.5rem 0.8rem;
  h3 {
    font-weight: 100;
    color: black;
    font-size: 1.8rem;
  }
`;
const Ability = styled.div`
  h4 {
    padding: 0.4rem 0rem;
    font-weight: 800;
  }
`;
const Values = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 5rem;
`;
const Hp = styled.div`
  width: 22rem;
  height: 1.8rem;
  border-radius: 3rem;
  background-color: #e4e4e4;
  div {
    background-color: #f3701a;
    border-radius: 3rem;
    width: ${(props) => props.percentage + "%"};
    height: 100%;
  }
`;
const Str = styled.div`
  width: 22rem;
  height: 1.8rem;
  border-radius: 3rem;
  background-color: #e4e4e4;
  div {
    background-color: #f3701a;
    border-radius: 3rem;
    width: ${(props) => props.percentage + "%"};
    height: 100%;
  }
`;
const Weak = styled.div`
  width: 22rem;
  height: 1.8rem;
  border-radius: 3rem;
  background-color: #e4e4e4;

  div {
    background-color: #f3701a;
    border-radius: 3rem;
    width: ${(props) => props.percentage + "%"};
    height: 100%;
  }
`;
const Happinesslevel = styled.div`
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-left: 0.4rem;
  margin-top: 0.5rem;
  img {
    margin: 0.1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SearchedCard;
