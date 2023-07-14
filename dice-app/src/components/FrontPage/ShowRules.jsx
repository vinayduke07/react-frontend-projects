import React from "react";
import styled from "styled-components";

const ShowRules = () => {
  return (
    <RulesContainer>
      <h3>How to play dice game</h3>
      <div className="rules">
        <p className="rules-list">Select any number</p>
        <p className="rules-list">Click on dice image</p>
        <p className="rules-list">
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p className="rules-list">
          if you get wrong guess then 2 point will be dedcuted
        </p>
      </div>
    </RulesContainer>
  );
};

export default ShowRules;

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  background-color: #fbf1f1;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  .rules-list {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }
  h3 {
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    font-weight: 900;
  }
`;
