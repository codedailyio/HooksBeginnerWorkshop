import React, { useEffect, useState } from "react";

const Lesson2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
};

export default Lesson2;
