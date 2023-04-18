import { useEffect } from "react";
import { useState } from "react";

function Counter({}) {
    const [count,setCount]=useState(0)
    const [calculateion,setCalculation]=useState(0);

    useEffect(()=>{
        setCalculation(()=>count*2);
    },[count]);
    
    // const handleClickCount=()=>{
    //     const newCount=count+1
    //     setCount(newCount)
    // }

    return(
        <>
        <p>Count : {count}</p>
        <button onClick={()=> setCount((c)=>c+1)}>+</button>
        <p>Calculation : {calculateion} </p>
        </>
    );
    // <div>
    //    <button onClick={()=>handleClickCount(count+1)}>{count}</button>
      
    // </div>)
    
}
export default Counter;