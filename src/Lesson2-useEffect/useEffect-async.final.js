import React, { useEffect, useState } from "react";

const Lesson2 = () => {
  const [data, setData] = useState();
  const [searchUser, setSearchUser] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const loadData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${searchUser}`,
          { signal }
        );

        const json = await response.json();
        setData(json);
      } catch (error) {
        setData(undefined);
      }
    };

    if (searchUser) {
      loadData();
    } else {
      setData(undefined);
    }

    return () => {
      controller && controller.abort();
    };
  }, [searchUser]);
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
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.avatar_url} />
        </div>
      )}
    </div>
  );
};

export default Lesson2;
