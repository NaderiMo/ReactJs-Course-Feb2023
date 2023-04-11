import { useEffect, useRef } from "react";
import { memo } from "react";

export default memo(function Todos({ todos, addTodo }) {

    console.log("child render");
    const renderTimes = useRef(0)

    useEffect(() => {
        renderTimes.current = renderTimes.current + 1
    })

    return (

        <>
            <h2>My Todos</h2>
            Render Times of child: {renderTimes.current}
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
})
