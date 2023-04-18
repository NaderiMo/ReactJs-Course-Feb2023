import { useEffect } from "react";
import { useRef } from "react";
import { memo } from "react";

function Todos({todos,addTodo}){
    console.log("child render");
    const renderTimes=useRef(0)
    useEffect(( ) =>{
        renderTimes.current=renderTimes.current+1;
    })
    return (
        <>
        <h2>MyTodos</h2>
        Render Times of child:{renderTimes.current}
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
        <buttonb onClick={addTodo}>Add Todo</buttonb>
        </>
    )
}
export default memo(Todos)