import React, { useCallback, useMemo, useState } from "react";
import Todo from "./Todo";

export default function TodoContainer() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new Todo"]);
  }, [todos]);

  const expenciveCal = (num) => {
    console.log("calculating ....");
    for (let index = 0; index < 10000000; index++) {
      num += 1;
    }
    return num;
  };

  //   const result = expenciveCal(0);
  const result = useMemo(() => expenciveCal(0), [count]);

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        <button onClick={increment}>+</button>
        count: {count}
      </div>
      {result}
    </>
  );
}
