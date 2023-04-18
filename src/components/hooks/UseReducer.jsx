import { useContext } from "react";
import { useEffect, useReducer } from "react"
import UserContext from "../../context/UserContext";
export default function UseReducerComponent(){
    const user=useContext(useContext)

const initialTodos=[
    {id:"1",title:"TODO 1",complete:true},
    {id:"2",title:"TODO 2",complete:false}
]
const reducer=(state,action)=>{
switch(action.type){
    case "complete":
        return state.map((todo)=>{
            if(todo.id===action.id){
                return {...todo,complete:!todo.complete};
            }
            else{return todo;}
        });
        // let newState=state
        // state.map(todo=>{
        //     if(action.id===todo.id) newState[index].complete=! newState[index].complete
        // })
        // console.log(newState)
        // return newState
        
        case "delete":
            break;

            default:
            return state
}
}
const [todo,dispatch]=useReducer(reducer,initialTodos)
useEffect(()=>{console.log(todo)},todo)
const handleClick=(id)=>{
dispatch({type:"complete",id})
}
return(<>
{user.firstName}
{setTodos.map(todo=>(
    <>
    <button key={todo.title} onClick={()=>handleClick(todo.id)}>{todo.title}</button>
<hr>
{todo.complete && <><windows className="tik"></windows></>}</hr>
</>
))}
</>)
}