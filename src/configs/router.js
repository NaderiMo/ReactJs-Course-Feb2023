import {
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Clock from "../component/Clock";
import Login from "../component/Login";
import CardList from "../component/CardList";
import Counter from "../component/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Outlet />
        </Container>

        <Container>
          <Row>
            <Col>col 1</Col>
            <Col>col 2</Col>
            <Col>col 3</Col>
            <Col>col 4</Col>
          </Row>
        </Container>
        
      </>
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: (
          <div>
            <h1>SignUp</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/CardList",
    element: <CardList />,
  },
  {
    path: "/Clock",
    element: <Clock />,
  },
  {
    path: "/Counter",
    element: <Counter />,
  },
]);

export default router;
