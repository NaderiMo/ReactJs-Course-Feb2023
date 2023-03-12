
import { createBrowserRouter, Outlet } from "react-router-dom"
import Login from "../components/Login"
import CardList from '../components/CardList';
import Clock from '../components/Clock';
import Counter from '../components/Counter';
import { Container, Navbar, NavDropdown, Nav, Col ,Row} from "react-bootstrap";
const router = createBrowserRouter([
    {
        path: "/", element: (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container >
                    <Outlet />
                </Container>
                <Container >
                    <Row>
                        <Col>Col 1</Col>
                        <Col>Col 2</Col>
                        <Col>Col 3</Col>
                        <Col>Col 4</Col>
                    </Row>
                </Container>
            </>
        ),
        children: [
            { path: "/login", element: (<Login />) },
            { path: "/signup", element: (<div><h1>SignUp</h1></div>) }
        ]
    },
    { path: "/CardList", element: (<CardList />) },
    { path: "/Clock", element: (<Clock />) },
    { path: "/Counter", element: (<Counter />) },
])

export default router