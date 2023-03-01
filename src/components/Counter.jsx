import { useState } from "react";

function Counter({ cardNo, type }) {
    const [count, setCount] = useState(0)
    
    const handleClick =()=>{
        const contplus = count +1;
        setCount(contplus)
    }

    return (
        <div>
            <button onClick={()=>handleClick(count+1)}>{count}</button>
            
            <hr />
        </div >)
}

export default Counter;