import React from "react";
import useMyHook from "./hook";

const CustomHook = () => {
  const [value, setValue] = useMyHook();
  return (
    <div>
      <h1>My Value: {value}</h1>
      <button>Click</button>
    </div>
  );
};

export default CustomHook;
