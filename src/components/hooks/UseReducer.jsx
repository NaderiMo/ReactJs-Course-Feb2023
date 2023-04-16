import { useContext, useEffect } from "react";
import { useReducer } from "react"
import { useState } from "react"
import UserContext from "../../context/UserContext";
export default function UseReducerComponent() {

  const user = useContext(UserContext)

  const initialTodos = [
    { id: "1", title: "TODO 1", complete: true },
    { id: "2", title: "TODO 2", complete: false }
  ]

  const reducer = (state, action) => {

    switch (action.type) {
      case "complete":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      case "delete":
      default:
        return state
    }
  }


  const [todos, dispatch] = useReducer(reducer, initialTodos)
  useEffect(() => { console.log(todos) }, todos)

  const handleClick = (id) => {
    dispatch({ type: "complete", id })
  }

  return (<>
    {user.firstName}
    {todos.map(todo => (
      <>
        <button key={todo.id} onClick={() => handleClick(todo.id)}>{todo.title}</button>
        {todo.complete && <>✅</>}
        <hr />
      </>
    ))}
  </>)
}