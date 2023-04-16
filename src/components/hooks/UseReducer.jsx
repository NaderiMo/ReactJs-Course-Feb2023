import { useContext } from "react";
import { useReducer, useState } from "react";
import UserContext from "../../context/UserContext";

export default function UseReducerComponent() {

    const user = useContext(UserContext);

    const initialTodos = [
        { id: "1", title: "todo 1", complete: true },
        { id: "2", title: "todo 2", complete: false }
    ]

    const reducer = (state, action) => {
        switch (action.type) {
            case "complete":
                return state.map((todo) => {
                    if (action.id === todo.id) {
                        return { ...todo, complete: !todo.complete }
                    } else {
                        return todo;
                    }
                })

            case "delete":

                break;

            default:
                return state;
        }
    }

    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleClick = (id) => {
        dispatch({ type: "complete", id })
        // dispatch({type:"complete", id:id})
    }
    return <>
        {user.firstName}
        <hr/>
        {
            todos.map(todo => (
                <>
                    <button key={todo.id} onClick={() => handleClick(todo.id)}>{todo.title}</button>
                    {todo.complete && <>✅</>}
                    <hr />
                </>
            ))
        }
    </>;
}