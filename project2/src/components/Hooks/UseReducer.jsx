import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div className="container">
        <p className="text">{state}</p>
        <div className="main-container">
          <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
            INCREMENT
          </div>
          <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
            DECREMENT
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
