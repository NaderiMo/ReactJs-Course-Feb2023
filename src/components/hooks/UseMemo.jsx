import React, { useCallback, useMemo } from "react";

export default function UseMemoCom() {
  const getString = () => {
    return "this is a String";
  };

  const getMemo = useMemo(getString, []);
  const getCallBack = useCallback(getString, []);

  console.log("getMemo", getMemo);
  console.log("getCallBack", getCallBack);

  return (
    <>
      UseMemo
      <h1>{getMemo}</h1>
      <h1>{getCallBack}</h1>
    </>
  );
}
