import React, { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <p className="text">{count}</p>
        <div className="main-container">
          <div className="button2" onClick={() => setCount(count + 1)}>
            INCREMENT
          </div>
          <div
            className="button2"
            onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
          >
            DECREMENT
          </div>
        </div>
      </div>
    </>
  );
};

export default UseState;
