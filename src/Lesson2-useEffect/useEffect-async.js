import React, { useEffect, useState } from "react";

const Lesson2 = () => {
  const [data, setData] = useState();
  const [searchUser, setSearchUser] = useState();
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setSearchUser(value);
          setValue("");
        }}
      >
        Go!
      </button>
    </div>
  );
};

export default Lesson2;
