import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Add = ({ pathId }) => {
  return (
    <div>
      <AddBar>
        <Link to="/Search">
          <AddCircle layoutId={pathId}>
            <h1>+</h1>
          </AddCircle>
        </Link>
      </AddBar>
    </div>
  );
};

const AddCircle = styled(motion.div)`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: red;
  position: absolute;
  bottom: 0%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: #ec5656;

  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    text-align: center;
    margin-top: 10%;
  }
`;
const AddBar = styled(motion.div)`
  width: 61rem;
  height: 9vh;
  position: fixed;
  top: 92%;
  left: 17.3%;
  background: #ec5656;
`;

export default Add;
