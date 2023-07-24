import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `chats ${count}`;
  });

  return (
    <>
      <div className="container">
        <p className="text">{count}</p>
        <div className="main-container">
          <div className="button2" onClick={() => setCount(count + 1)}>
            INCREMENT
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
