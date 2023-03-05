import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function Login2() {

    const [loginState, setLoginState] = useState({
        username: "",
        password: ""
    })

    const [errorState, setErrorState] = useState({
        username: null,
        password: null
    })

    const onChangeUsername = (event) => {
        console.log({ ...loginState, username: event.target.value });

    }

    const onChangePassword = (event) => {
        console.log({...loginState, password: event.target.value });

    }

    const submit = () => {
        console.log('loginState', loginState);
      
        if (!loginState.username) {
            setErrorState({ username: "invalid username", password: "" })
            console.log('errState1', errorState);
            console.log('loginState', loginState);
            return;
        }
        if (!loginState.password) {
            setErrorState({ password: "invalid password", username: "" })
            console.log('errState2', errorState);
            return;
        }
        setErrorState({
            username: null,
            password: null
        })

        // axios.post(" https://6404753c3bdc59fa8f39554b.mockapi.io/users/1", loginState)
        // .then((res)=>{debugger})
        // .catch((err)=>{debugger});


    }

    return (<div>
        <Form.Label >Username</Form.Label>
        <Form.Control type="text" onChange={(event) => onChangeUsername(event)} />
        {errorState.username && <p className='text-danger'>{errorState.username} </p>}
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" onChange={(event) => onChangePassword(event)} />
        {errorState.password && <p className='text-danger'>{errorState.password} </p>}
        <Button onClick={() => submit()}>Login</Button>

    </div>)
}
export default Login2;