import React from "react";
import { styled } from "styled-components";
import { Button } from "../Button/Button";

const DicePlay = ({ setShowRules, setScore, currentDice, roleDice }) => {
  const resetScore = () => {
    setScore(0);
  };
  return (
    <DiceContainer>
      <div className="dice_img" onClick={roleDice}>
        <img
          width="200px"
          height="200px"
          src={`./images/dice_img/dice_${currentDice}.png`}
          alt="dice_img"
        />
      </div>
      <p>Click on Dice to roll</p>
      <div className="btn-family">
        <Button onClick={resetScore} text="Reset Score" isOutline={true} />
        <Button
          onClick={() => setShowRules((prev) => !prev)}
          text="Show Rules"
        />
      </div>
    </DiceContainer>
  );
};

export default DicePlay;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  .dice_img {
    cursor: pointer;
  }

  .btn-family {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 24px;
  }
`;
