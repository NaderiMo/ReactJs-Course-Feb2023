import { useCallback, useMemo, useState } from "react"
import Todos from "./Todos";
import UseMemoAndUseCallback from "./UseMemoAndUseCallback";


const expensiveCalculation = (num) => {
    console.log("Calulating ...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1
    }
    return num
}

function TodoContainer() {

    const [count, setCount] = useState(0)

    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    }
    const addTodoInParent = useCallback(() => {
        setTodos((t) => [...t, "New Todo"])
    }, [todos])

    const calculation = useMemo(() => expensiveCalculation(count), [count])

    return (<>
        <Todos todos={todos} addTodo={addTodoInParent} />
        <hr />
        <div>
            <button onClick={increment}>+</button>
            Count: {count}
        </div>
        <UseMemoAndUseCallback />
        {calculation}
    </>)
}
export default TodoContainer