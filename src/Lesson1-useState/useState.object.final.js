import React, { useState } from "react";

const Lesson1 = () => {
  const [state, setCount] = useState({ clicks: 0, count: 0 });
  const { clicks, count } = state;

  return (
    <div>
      <h1>
        Count: {count} Total Clicks: {clicks}
      </h1>
      <button
        onClick={() => {
          setCount({
            count: count + 1,
            clicks: clicks + 1
          });
        }}
      >
        Clicky
      </button>
      <button
        onClick={() => {
          setCount({
            ...state,
            count: 0
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Lesson1;
