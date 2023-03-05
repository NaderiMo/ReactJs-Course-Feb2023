import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Login(){
  const [loginState, setLoginState] = useState({
    username: null,
    password: null
  });
  const defaultError = {
    username: "",
    password: ""
  }
  const [errorState, setErrorState] = useState(defaultError)
  const onChangeUsername = (event) => {
    setLoginState({...loginState, username: event.target.value})
  }
  const onChangePassword = (event) => {
    setLoginState({...loginState, password: event.target.value})
  }
  const submit = () => {
    if(!loginState.username) {
      setErrorState({username:"Invalid Username!", password:""})
      return;
    }
    if(!loginState.password) {
      setErrorState({username:"", password:"Invalid Password!"})
      return;
    }
    setErrorState(defaultError);

    axios.post("https://6404753c3bdc59fa8f39554b.mockapi.io/users", loginState)
      .then((res) => {debugger;})
      .catch((err) => {debugger;})
  }
    return(<>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control type="text" id="username" onChange={(event) => onChangeUsername(event)}/>
        {errorState.username && <p className="text-danger">{errorState.username}</p>}
        <Form.Control type="password" id="password" onChange={(event) => onChangePassword(event)}/>
        {errorState.password && <p className="text-danger">{errorState.password}</p>}
        
      <Button onClick={() => submit()}>Login</Button>
      <hr />
      {loginState.username}
      <hr />
      {loginState.password}
    
    </>
    )
}
export default Login;