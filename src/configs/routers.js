import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CardList from "../components/CardList";
import Clock from "../components/Clock";
import Counter from "../components/hooks/Counter";
// import Counter from "../components/Counter";
import Timer from "../components/hooks/Timer";
import CheckUseState from "../components/hooks/UseState";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Login from "../components/Login";

const router = createBrowserRouter([
    // { path: "/", element: (<div>Hello</div>)},
    { path: "/", element: (
    <>
    <Header/>

    <Outlet/>

    <Footer/>
    </>
    )
    , children:[
        { path: "/login", element: (<Login />)},
        { path: "/signup", element: (<div><h1>SignUp</h1></div>)}
    ]},
    

    // { path: "/Counter", element: (<Counter />)},
    { path: "/CardList", element: (<CardList />)},
    { path: "/Clock", element: (<Clock />)},
    { path: "/check", element: (<CheckUseState />)},
    { path: "/timer", element: (<Timer />)},
    { path: "/counter", element: (<Counter />)}
  ])

  export default router;