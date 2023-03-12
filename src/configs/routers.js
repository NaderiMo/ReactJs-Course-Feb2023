import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CardList from "../components/CardList";
import Clock from "../components/Clock";
import Counter from "../components/Counter";
import Login from "../components/Login";

const router = createBrowserRouter([
    // { path: "/", element: (<div>Hello</div>)},
    { path: "/", element: (
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

    <Outlet/>

    <Container>
        <Row>
            <Col>col 1</Col>
            <Col>col 2</Col>
            <Col>col 3</Col>
            <Col>col 4</Col>
        </Row>
    </Container>
    </>
    )
    , children:[
        { path: "/login", element: (<Login />)},
        { path: "/signup", element: (<div><h1>SignUp</h1></div>)}
    ]},
    

    { path: "/Counter", element: (<Counter />)},
    { path: "/CardList", element: (<CardList />)},
    { path: "/Clock", element: (<Clock />)}
  ])

  export default router;