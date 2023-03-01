import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login2() {

    return (<div>
        <Form.Label >Username</Form.Label>
        <Form.Control type="text"/>
        <Form.Label >Password</Form.Label>
        <Form.Control type="password"/>
        <Button>Login</Button>

    </div>)
}
export default Login2;