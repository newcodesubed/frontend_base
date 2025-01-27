import { useEffect, useState } from "react";

export function useLocalStorageState(initalState, key) {
  const [value, setValue] = useState(function () {
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) : initalState;
  });
  //im using this as th e key value pair so when i keeo "watched"=> of what is it storing we are  seting the value by setItem in local
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
