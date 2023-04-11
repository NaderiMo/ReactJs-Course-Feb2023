import React, { useEffect, useRef, useState } from "react";

export default function RenderLog() {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);

  const element = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      RenderCount : {count.current}
    </>
  );
}
