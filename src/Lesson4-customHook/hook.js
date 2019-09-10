import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {});

  const setValue = value => {};
  return [storedValue, setValue];
};

export default useLocalStorage;
