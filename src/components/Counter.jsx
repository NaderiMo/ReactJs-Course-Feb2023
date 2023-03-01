const { useState } = require("react");

function Counter(){
    const [count,setCount]=useState;
    const handleClickCount=() => {
       const newCount= count+1;
       setCount(newCount);
    }
    return(
        <div>
            <button onclick={() => handleClickCount()}>{count}</button>
        </div>
    )
}
export default Counter;