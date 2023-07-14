import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import DicePlay from "./DicePlay";
import ShowRules from "./ShowRules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState(" ");
  const [showRules, setShowRules] = useState(false);

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = randomNumberGenerator(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top-container">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <DicePlay
        currentDice={currentDice}
        roleDice={roleDice}
        setScore={setScore}
        setShowRules={setShowRules}
      />
      {showRules && <ShowRules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 50px;

  .top-container {
    display: flex;
    justify-content: space-around;
    align-items: end;
    gap: 570px;
  }
`;
