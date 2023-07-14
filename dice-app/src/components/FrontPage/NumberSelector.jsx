import React, { useState } from "react";
import styles from "./NumberSelector.module.css";
import styled from "styled-components";
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const NumberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  const arrNumber = [1, 2, 3, 4, 5, 6];

  console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="errorMsg">{error}</p>
      <div className={`${styles.number_Box}`}>
        {arrNumber.map((value, i) => {
          return (
            <div className={`${styles.Box}`}>
              <Box
                key={i}
                isSelected={value === selectedNumber}
                onClick={() => NumberSelectorHandler(value)}
              >
                {value}
              </Box>
            </div>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  color: black;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    display: flex;
    justify-content: end;
  }

  .errorMsg {
    color: #ff0c0c;
    font-size: 24px;
    font-weight: 500;
  }
`;
