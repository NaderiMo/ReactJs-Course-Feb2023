
import { Button ,Form} from 'react-bootstrap';
function Login(){

    return(
        <>
        
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />

        <Button>Login</Button>
        </>
    )
}
export default Login;