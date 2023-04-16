import React, { useContext, useReducer } from "react";
import UserContext from "../../context/UserContext";

export default function UserReducerComponent() {
  const user = useContext(UserContext);

  const initialTodos = [
    { id: "1", title: "Todo 1", complete: false },
    { id: "2", title: "Todo 2", complete: false },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "complete":
        return state.map((todo, index) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      case "delete":
        break;
      default:
        break;
    }
  };

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleOnclick = (id) => {
    dispatch({ type: "complete", id });
  };

  return (
    <>
      {todos.map((todo) => (
        <>
          {user.firstName}
          <button key={todo.id} onClick={() => handleOnclick(todo.id)}>
            {todo.title}
          </button>
          {todo.complete && <>✔</>}
          <hr />
        </>
      ))}
    </>
  );
}
