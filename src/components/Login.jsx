import axios from "axios";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

function Login({ }) {
    const [isLoading ,setIsLoading]=useState(false)
        const [loginState,setLoginState]=useState({
        username:"",
        password:""
    })
    const [errorState,setErrorState]=useState({
        username:"",
        password:""
    })
    const onChangeUsername=(event =>{
        setLoginState({...loginState,username:event.target.value})
    })
    const onChangePassword=(event =>{
        setLoginState({...loginState,password:event.target.value})
    })

    const submit =()=>{
        if(!loginState.username)
        {setErrorState({username: "invalid username",password:""})
        // console.log('loginState',loginState);
        return;}
       // setErrorState(defaultErrorState) 
      
    if(!loginState.password)
    {setErrorState({username: "",password:"invalid password"})
    // console.log('loginState',loginState);
    return;}
    if(isLoading) return;

   // setErrorState(defaultErrorState) 

    //axios.get("api endpoint",data).then((res)=>{}).catch((error)=>{})
    axios.defaults.baseURL="https://6404753c3bdc59fa8f39554b.mockapi.io";
    axios.defaults.timeout=1;
   setIsLoading(true)

   const config={
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }

   }
   axios.post("https://6404753c3bdc59fa8f39554b.mockapi.io/users",loginState)
   .then((res)=>
//    {debugger;})
   setIsLoading(false))
   .catch((err)=>
//    {debugger;})
setIsLoading(false))
} 
    return (<>
        <Form.Label htmlFor="inputpasswords">Password</Form.Label>
        <Form.Control
            type="text"
            id="userName"
            onChange={(event)=> onChangeUsername(event)}
        />
        {errorState.username && <p className={"text-danger"}>{errorState.username}</p>}
        <Form.Control
            type="password"
            id="password"
            onChange={(event)=> onChangePassword(event)}
        />
        <Spinner></Spinner>
        <Button onClick={()=>submit()}>Login</Button>
        <hr/>
        
        {loginState.errorState}
    </>)

}
export default Login;