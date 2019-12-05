import React, { useState } from "react";

// this is the custom hook so takes parameters as args
export const useLocalStorage = (key, intialValue) => {
  //you can pass any data type into useState
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    console.log(item);
    return item ? JSON.parse(item) : intialValue;
  });
  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
