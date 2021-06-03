import React  from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { RemoveFromMyPokedex } from "./../actions/pokedexAction";
import Cut from "../cute.png";
const Card = ({ poke }) => {
  const dispatch = useDispatch();
  const RemovePokemon = () => {
    dispatch(RemoveFromMyPokedex(poke));
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
    i < CalculateHappeness(poke.hp, poke.attacks, poke.weaknesses);
    i += 1
  ) {
    HappenessLogos.push(<img src={Cut} alt="cut" />);
  }

  return (
    <Container>
      <FontAwesomeIcon
        className="Close"
        onClick={RemovePokemon}
        icon={faTimes}
      />
      <Img>
        <img src={poke.imageUrl} alt="pokemonimg" />
      </Img>
      <Details>
        <h3>{poke.name}</h3>
        <Pockemondetails>
          <Ability>
            <h4>HP</h4>
            <h4>STR</h4>
            <h4>weak</h4>
          </Ability>
          <Values>
            <Hp percentage={CalculateHP(poke.hp)}>
              <div></div>
            </Hp>
            <Str percentage={CalculateStrengthLevel(poke.attacks)}>
              <div></div>
            </Str>
            <Weak percentage={CalculateWeakness(poke.weaknesses)}>
              <div></div>
            </Weak>
          </Values>
        </Pockemondetails>
        <Happinesslevel>
          <Happinesslevel>{HappenessLogos}</Happinesslevel>
        </Happinesslevel>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;
  background-color: #f3f4f7;
  margin-right: 1rem;
  margin-top: 1rem;
  box-shadow: 2.5px 2.5px 2.5px #d5d6dc;
  position: relative;
  overflow: hidden;
  &:hover {
    z-index: 1;
    box-shadow: 3px 3px 3px #aeaeae;
    .Close {
      display: inline;
    }
  }
  .Close {
    position: absolute;
    top: 1%;
    left: 95%;
    font-size: 1.5rem;
    color: #ec5656;
    display: none;
    cursor: pointer;

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
    // font-family:
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
  padding: 0rem 0.9rem;
  
`;
const Hp = styled.div`
  width: 10rem;
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
  width: 10rem;
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
  width: 10rem;
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
  justify-content: space-between;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  img {
    margin: 0.1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`;
export default Card;
