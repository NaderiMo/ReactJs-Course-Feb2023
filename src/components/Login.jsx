
import axios from 'axios';
import { useState } from 'react';
import { Button ,Form} from 'react-bootstrap';
function Login(){
    const [Loginstate,setLoginstate]=useState({
        userName: "",
        passWord: ""
    })

    const [errorstate,setErrorstate]=useState({
        userName: "",
        passWord: ""
    })

    const onchangeUserName=(event) => {
        setLoginstate({...Loginstate,userName:event.target.value})

    }
    const onchangePassWord=(event) => {
        setLoginstate({...Loginstate,passWord:event.target.value})
    }

    const submit=() => {
      
        if(!Loginstate.userName){
            setErrorstate({userName:"InvalidUserName" , passWord:""});
            return;
        }
        if(!Loginstate.passWord){
            setErrorstate({userName:"" , passWord:"InvalidPassWord"});
            return;
        }
        setErrorstate({userName:"",passWord:""})

        axios.post("https://6404753c3bdc59fa8f39554b.mockapi.io/users",Loginstate).
        then((res) => {debugger;}).catch((error)=>{debugger;})
    }

    return(
        <>
       
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName"  onChange={(event)=> onchangeUserName(event)}/>
        {errorstate.userName && <p className='text-danger'>{errorstate.userName}</p>}
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=> onchangePassWord(event)}/>
        {errorstate.passWord && <p className='text-warningn'>{errorstate.passWord}</p>}
        <Button onClick={()=> submit()}>Login</Button>
        </>
    )
}
export default Login;