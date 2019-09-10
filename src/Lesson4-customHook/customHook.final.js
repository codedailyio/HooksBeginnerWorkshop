import React from "react";
import useMyHook from "./hook.final";

const CustomHook = () => {
  const [value, setValue] = useMyHook("count", 0);
  return (
    <div>
      <h1>My Value: {value}</h1>

      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default CustomHook;
