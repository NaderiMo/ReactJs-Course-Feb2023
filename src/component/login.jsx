import {useState} from "react";
import {Button, Form, FormLabel } from 'react-bootstrap';

function Login() {
    return (<>
    <FormLabel htmlFor="inputPassword5"></FormLabel>
    <Form.Control
    type="text"
    id="userName"
    />
    <Form.Control
    type="password"
    id="password"
    />
    <Button>Login</Button>
    </>)
    }
    export default Login;
