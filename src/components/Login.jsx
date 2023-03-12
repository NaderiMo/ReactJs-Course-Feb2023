import axios from "axios";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import req from "../configs/requests";

function Login()

{
   const[isLoading,setIsLoading]=useState(false)

    const[loginState,setLoginState] = useState({
        username :"" ,
        password : ""
    })

    const[errorState,setErrorState] = useState({
        username :"" ,
        password : ""
    })

    const defaultErrorState = {
        username :null ,
        password : null
    }
        
    const onChangeUsername = (event) =>{
        setLoginState ({...loginState,username: event.target.value})
    }

    const onChangePassword = (event) =>{
        setLoginState ({...loginState,password: event.target.value})
    }

    const submit = () => {
        if (!loginState.username) {   
            setErrorState({ username :"invalid username" ,password :"" })
            return;
        }
        if (!loginState.password) {
        setErrorState({ username :"" , password :"invalid password"})
            return;
        }
        //  setErrorState(defaultErrorState)

        setErrorState({
            username : "" ,
            password : ""

        })

        // axios.defaults.baseURL="https://6404753c3bdc59fa8f39554b.mockapi.io";
        // axios.defaults.timeout=1;
        setIsLoading(true)

        req.post("/users",loginState)
        .then((res)=> {setIsLoading(false);})
        .catch((error) => {setIsLoading(false);})



    }




    return(<>
        <Form.Label htmlFor = "inputPassword5">Password</Form.Label>
        <Form.Control
        type="text"
        id="userName"
        onChange={(event) => onChangeUsername(event)}
           />

       <Form.Control
        type="password"
        id="password"
        onChange={(event) => onChangePassword(event)}
           />

         {errorState.username  && <p className = "text-danger"> {errorState.username} </p>} 
         {errorState.password  && <p className = "text-danger"> {errorState.password} </p>}

       { isLoading 
       ? <Spinner animation="border" />
       : <Button onClick={()=> submit()}>Login</Button>
        }
    {/* //    <Button onClick={()=> submit()}>Login</Button><hr /> */}
       
       
       {loginState.username}<hr />
        {loginState.password}
    </>)
}
export default Login;