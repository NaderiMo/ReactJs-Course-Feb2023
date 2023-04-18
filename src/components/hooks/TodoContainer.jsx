import { useCallback } from "react";

function TodoContainer(){
    cosnt [count,setCount]=useState(0);
    cosnt [todo,setTodos]=useState(["todo1","todo2"]);
    
    const increment=()=> {
        setCount((c)=>c+1);

    }
    const addTodoInParent  =useCallback(()=>{
     setTodos((t)=> [...t,"New Todo"])
    } ,{todos})

    return(<>
    <Todos todos={todos} addTodo={addTodoInParent}/>
    <hr/>
    <div>
        <button onClick={increment}>+
        </button>
        Count:{count}
    </div>
    </>)
}
export default TodoContainer