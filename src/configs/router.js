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
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import CheckUseState from "../component/hooks/UseState";
import Timer from "../component/hooks/Timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        
<Header />
        <Container>
          <Outlet />
        </Container>
<Footer />
      
        
      </>
    ),
    children: [
      {
        path: "/login2",
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
  {
    path: "/state",
    element: <CheckUseState />,
  },
  {
    path: "/Timer",
    element: <Timer />,
  }
]);

export default router;
