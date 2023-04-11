import React, { memo, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default memo(function Todo({ todos, addTodo }) {
  console.log("child rendering");
  const renderCount = useRef(0);
  console.log(renderCount.current);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  console.log(renderCount.current);

  return (
    <>
      <h2>todos:</h2>
      <h1>render times: {renderCount.current}</h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <Button onClick={addTodo}>addTodo</Button>
    </>
  );
});
