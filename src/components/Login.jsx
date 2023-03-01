import { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function Login() {

    return (<>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
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