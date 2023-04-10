import {useState,useEffect} from "react";

export default function Timer(){
const [count,setCount] = useState(0);
const [calculation,setCalculation] = useState(0);

/* useEffect(() => {
    setTimeout(() => {
        setCount((count) => count+1);
    },1000);
});
 */

useEffect(() => {
    setCalculation(() => count*2);
    },[count]);


return (
<>
<p> Count: {count}</p>
<button onClick={()=>setCount((c)=>c+1)}>+</button>
<p>Cal : {calculation}</p>
{/* <h1>hi {count} times</h1> */}
</>
)
}