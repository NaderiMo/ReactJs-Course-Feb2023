import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        const newCounter = counter + 1;
        setCounter(newCounter);
    }
    
    return (
        <div>
            <h1></h1>
            <button onClick={() => clickHandler(counter)}> {counter}</button>
            <hr />
        </div>
    )
}
export default Counter;