import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT": {
      return {
        count: state.count - 1
      };
    }
    case "RESET": {
      return {
        count: 0
      };
    }
  }
};

const Lesson3 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch("RESET");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Lesson3;
