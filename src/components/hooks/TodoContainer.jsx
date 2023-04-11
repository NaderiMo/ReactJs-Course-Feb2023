import { useCallback, useMemo } from "react";
import { useState } from "react";
import Todos from "./Todos";
import UseMemoAndUseCallback from "./UseMemoAndUseCallback";

export default function TodoContainer() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const exponsiveCalculation = (num) => {
        console.log('calculating...');
        for (let i = 0; i < 10000000; i++) {
            num += 1;
        }
        return num;
    }

    // const calculation = exponsiveCalculation(count);
    const calculation = useMemo(() => exponsiveCalculation(count), [count])

    const increment = () => {
        setCount((c) => c + 1);
    }

    // const addTodoInParent = () => {
    //     setTodos((t) => [...t, "newTodo"])
    // }

    const addTodoInParent = useCallback(() => {
        setTodos((t) => [...t, "newTodo"])
    }, [todos])

    return (
        <>
            <Todos todos={todos} addTodo={addTodoInParent} />
            <hr />
            <div>
                count: {count}
                <button onClick={increment}> +</button>
                <h2>Expensive calculation</h2>

                {calculation}
            </div>

            {/* <UseMemoAndUseCallback /> */}
        </>
    );
}