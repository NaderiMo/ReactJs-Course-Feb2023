import {useState} from "react"; 
function Counter(){
    const[count, setCount] = useState(0)

    const handleClickCount = () =>{
        setCount(count++)
        console.log("count",count);
    }
    return (<div>
        <button onClick={(e) => handleClickCount(e)}>{count}</button>
    </div>)
}
export default Counter;