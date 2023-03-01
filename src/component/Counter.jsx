import {useState} from "react";



function Counter({}){
    const [count,setCount]= useState(0);
    const handleClickCount = () => {
setCount(count+1)
    }
    return (<div>
        <button onClick={()=>handleClickCount()}>{count}</button>
        </div>)
}

export default Counter;