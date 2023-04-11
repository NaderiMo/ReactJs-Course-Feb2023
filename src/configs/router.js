import { createBrowserRouter, Outlet } from "react-router-dom";
import CardList from "../components/CardList";
import Clock from "../components/Clock";
import Login1 from "../components/Login1";
import Counter from "../components/Counter";
import { Container, Navbar, NavDropdown, Nav, Col, Row } from "react-bootstrap";
import HookCounter from "../components/hooks/HookCounter";
import RenderLog from "../components/hooks/RenderLog";
import TodoContainer from "../components/hooks/TodoContainer";
import UseMemoCom from "../components/hooks/UseMemo";
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
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Outlet />
        </Container>
        <Container>
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
      { path: "/login", element: <Login1 /> },
      {
        path: "/signup",
        element: (
          <div>
            <h1>SignUp</h1>
          </div>
        ),
      },
    ],
  },
  { path: "/CardList", element: <CardList /> },
  { path: "/Clock", element: <Clock /> },
  { path: "/Counter", element: <Counter /> },
  { path: "/HookCounter", element: <HookCounter /> },
  { path: "/RenderLog", element: <RenderLog /> },
  { path: "/TodoContainer", element: <TodoContainer /> },
  { path: "/UseMemoCom", element: <UseMemoCom /> },
]);

export default router;
